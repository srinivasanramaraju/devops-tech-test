# Prerequistes
1. Please make sure ansible is installed in your local machine.
1. Export your AWS_ACCESS_ID and AWS_SECRET_KEY as local env path variable
1. Please add the local host to the ansible inventory file


Please replace the EC2_PUBLIC_DNS_NAME and EC2_PRIVATE_IP placeholders in the `ngnix.conf` and `hello.js` files.

# Commands to Run

The below commands were exceuted in mac osX environment, with ansible inventory file located in `~/.ansible/hosts`. Please change it according to your installed directory.

`ansible-playbook -i ~/.ansible/hosts setup.yml`

The created key pair for ec2 is not been saved locally through ansible, So please add the keypair to your ssh agent after downloading.

Before executing this command, please change the EC2_PRIVATE_IP  and EC2_PUBLIC_DNS_NAME place holders in nginx.conf and hello.js

`ansible-playbook -i ~/.ansible/hosts install_ngnix.yml`


# Test

1. To check whether it is configured properly, open the public dns address using the browser.
1. To check the nodejs webapp do curl http://PRIVATE_IP:3000, it will display *hello world*.

# Security factors considered
1. created a security group for the ec2 instances
1. created key pair for ec2
1. made sure no aws keys or secret checked in


# Improvements
Due to time constraints, I didn't automate key pair saving and adding proper env variables for both PRIVATE_IP and PUBLIC_DNS_IP
