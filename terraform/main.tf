provider "aws" {
  region  = "eu-central-1"
  profile = "default"
}

# Create VPC
resource "aws_vpc" "studyboost_vpc" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "StudyBoostVPC"
  }
}

# Create Public Subnet
resource "aws_subnet" "public_subnet" {
  vpc_id            = aws_vpc.studyboost_vpc.id
  cidr_block        = "10.0.1.0/24"
  map_public_ip_on_launch = true

  tags = {
    Name = "StudyBoostPublicSubnet"
  }
}

# Create Internet Gateway
resource "aws_internet_gateway" "studyboost_igw" {
  vpc_id = aws_vpc.studyboost_vpc.id

  tags = {
    Name = "StudyBoostInternetGateway"
  }
}

# Create Route Table
resource "aws_route_table" "public_route_table" {
  vpc_id = aws_vpc.studyboost_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.studyboost_igw.id
  }

  tags = {
    Name = "StudyBoostPublicRouteTable"
  }
}

# Associate Route Table with Subnet
resource "aws_route_table_association" "public_route_table_association" {
  subnet_id      = aws_subnet.public_subnet.id
  route_table_id = aws_route_table.public_route_table.id
}

# S3 Bucket for storing static assets
resource "aws_s3_bucket" "studyboost_bucket" {
  bucket = "studyboost-bucket"
  tags = {
    Name        = "StudyBoostBucket"
    Environment = "Dev"
  }
}

# Security Group for EC2 instances
resource "aws_security_group" "studyboost_sg" {
  vpc_id = aws_vpc.studyboost_vpc.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name        = "StudyBoostSG"
    Environment = "Dev"
  }
}

# EC2 Instance for Backend
resource "aws_instance" "backend" {
  ami                   = var.backend_ami
  instance_type         = var.instance_type
  subnet_id             = aws_subnet.public_subnet.id
  vpc_security_group_ids = [aws_security_group.studyboost_sg.id]

  tags = {
    Name        = "BackendInstance"
    Environment = "Dev"
  }
}
