resource "aws_instance" "finverse_server" {

  ami           = "ami-091138d0f0d41ff90"

  instance_type = var.instance_type

  key_name      = var.key_name

  tags = {

    Name = "FinVerse-Terraform-Server"
  }
}