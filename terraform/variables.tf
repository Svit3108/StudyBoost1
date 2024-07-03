variable "aws_region" {
  description = "The aws region to deploy resources"
  default     = "eu-central-1"
  type        = string
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t2.micro"
}



variable "backend_ami" {
  description = "AMI ID for Backend EC2 instance"
  type        = string
  default = "ami-04f1b917806393faa"
}
