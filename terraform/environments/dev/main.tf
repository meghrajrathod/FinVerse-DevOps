module "vpc" {
  source = "../../modules/vpc"

  vpc_cidr = "10.0.0.0/16"
  vpc_name = "finverse-dev-vpc"
}

module "public_subnet" {
  source = "../../modules/subnet"

  vpc_id            = module.vpc.vpc_id
  subnet_cidr       = "10.0.1.0/24"
  availability_zone = "us-east-1a"
  subnet_name       = "finverse-public-subnet"
}

module "public_subnet_2" {
  source = "../../modules/subnet"
  vpc_id            = module.vpc.vpc_id
  subnet_cidr       = "10.0.3.0/24"
  availability_zone = "us-east-1b"
  subnet_name = "finverse-public-subnet-2"
}

module "internet_gateway" {
  source = "../../modules/internet-gateway"

  vpc_id  = module.vpc.vpc_id
  igw_name = "finverse-igw"
}

module "public_route_table" {
  source = "../../modules/route-table"

  vpc_id           = module.vpc.vpc_id
  igw_id           = module.internet_gateway.igw_id
  subnet_id        = module.public_subnet.subnet_id
  route_table_name = "finverse-public-rt"
}

resource "aws_route_table_association" "public_subnet_2_association" {

  subnet_id      = module.public_subnet_2.subnet_id
  route_table_id = module.public_route_table.route_table_id
}

module "security_group" {
  source = "../../modules/security-group"

  vpc_id = module.vpc.vpc_id
  sg_name = "finverse-sg"
}

module "ec2" {
  source = "../../modules/ec2"

  ami_id            = "ami-0c02fb55956c7d316"
  instance_type = "t3.micro"
  subnet_id         = module.public_subnet.subnet_id
  security_group_id = module.security_group.security_group_id
  key_name          = "finverse-key"
  instance_name     = "finverse-server"
}