# Deployment a Flask API
## Create Firewall Rule
1. Open Navigation Menu > VPC Networks > Firewall
2. Select Create Firewall Rule
3. Fill the form like this :
- Name : allow-http-8080
- Targets: Specified target tags
- Target tags: http-server-8080
- Source-ip: 0.0.0.0/0
- TCP: 8080
4. If you done, select Create button to create the firewall rule

## Create VM
1. Open Navigation Menu > Compute Engine  > VM Instances
2. Select Create Instance
3. Go to Machine Configuration, select series N1 and Machine type f1-micro
4. Open Advanced Options > Networking
5. Fill Network Tags form with name of firewall rule you create before
6. If you done, select Create button to create the VM

## Deploy a Flask API
1. Open your instances with SSH, select the SSH button
2. Run this command below :
- Update system
+ sudo apt update
+ sudo apt upgrade

- Install Python, PIP, and GIT
+ sudo apt install python3 python3-pip git

- Clone repo and install library
+ git clone https://github.com/GDSC-Unmul/cloud
+ cd 'cloud/Cloud #4'
+ pip install -r requirements.txt

- Running Flask (Production mode)
+ gunicorn -b 0.0.0.0:8080 'main:app'

3. If gunicorn is complete running, open the website with externap IP and port. You can check external IP in Compute Engine dashboard. You can write "http://{external_ip}:8080" in your browser.a
