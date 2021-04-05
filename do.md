first of all: 

```
sudo apt update
sudo apt upgrade
```

second of all: 

```
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
```

```
sudo ufw status verbose
```
```
sudo ufw enable
```



https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04

https://www.digitalocean.com/community/tutorials/how-to-harden-openssh-on-ubuntu-18-04-de

https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-20-04-de

`sudo nano /etc/nginx/sites-available/default`

## pm2
ADVANCED, PRODUCTION PROCESS MANAGER FOR NODE.JS: 

https://pm2.keymetrics.io/

`pm2 start server.js`

`pm2 status`

`pm2 startup`
