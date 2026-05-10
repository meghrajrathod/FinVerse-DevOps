resource "aws_vpc" "finverse_vpc" {

  cidr_block = "10.0.0.0/16"

  tags = {

    Name = "FinVerse-VPC"
  }
}

resource "aws_subnet" "finverse_subnet" {

  vpc_id                  = aws_vpc.finverse_vpc.id

  cidr_block              = "10.0.1.0/24"

  map_public_ip_on_launch = true

  availability_zone       = "us-east-1a"

  tags = {

    Name = "FinVerse-Subnet"
  }
}

resource "aws_internet_gateway" "finverse_igw" {

  vpc_id = aws_vpc.finverse_vpc.id

  tags = {

    Name = "FinVerse-IGW"
  }
}

resource "aws_route_table" "finverse_rt" {

  vpc_id = aws_vpc.finverse_vpc.id

  route {

    cidr_block = "0.0.0.0/0"

    gateway_id = aws_internet_gateway.finverse_igw.id
  }

  tags = {

    Name = "FinVerse-RouteTable"
  }
}

resource "aws_route_table_association" "finverse_rta" {

  subnet_id      = aws_subnet.finverse_subnet.id

  route_table_id = aws_route_table.finverse_rt.id
}

resource "aws_security_group" "finverse_sg" {

  name = "finverse-sg"

  vpc_id = aws_vpc.finverse_vpc.id

  ingress {

    from_port   = 22

    to_port     = 22

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

    from_port   = 8080

    to_port     = 8080

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

    Name = "FinVerse-SG"
  }
}

resource "aws_instance" "finverse_server" {

  ami                    = "ami-0c02fb55956c7d316"

  instance_type          = var.instance_type

  key_name               = var.key_name

  subnet_id              = aws_subnet.finverse_subnet.id

  vpc_security_group_ids = [
    aws_security_group.finverse_sg.id
  ]

  tags = {

    Name = "FinVerse-Terraform-Server"
  }
}