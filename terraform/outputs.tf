output "s3_bucket_name" {
  value = aws_s3_bucket.studyboost_bucket.bucket
}

output "backend_public_ip" {
  value = aws_instance.backend.public_ip
}
