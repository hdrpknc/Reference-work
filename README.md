

# Work of Reference
## SAPUI5
1. [Fiori in general](./fiori.md)
2. [UI5 tips in general](./ui5_development.md)
3. [Fiori extension](./extension.md)
4. [UI5 sample calls](./ui5-calls.md)
5. [UI5 lifecycle hooks](./lifecycle-hooks.md)
6. [UI5 with custom formatters](./custom-formatters.md)
7. [UI5 fragments](./split-view2frags.md)
8. [UI5 routing](./routing.md)
9. [UI5 manage project](./ui5manage.md)
10. [Cloud Connector](./cc.md)
11. [Fiori/UI5 design](./design.md)
12. [URL parameters](./url.md)
13. [Web IDE](./webide.md)
14. [Flexible Column Layout](./fcl.md)

## ABAP
1. [ABAP tips](./abap_tips.md)
2. [ML TAs](./ml.md)
3. [CDS](./cds.md)
4. [Consume SOAP](./consume_soap.md)
5. [WebUI & Webdynpro](./webdynpro.md)
6. [Notes](./notes.md)
7. [SEGW Sample Coding](./segw.md)
8. [CORS](./cors.md)

## Gist
[coding snippets](https://gist.github.com/hdrpknc)
## Web development
1. My tools: Visual Studio Code / Sublime
2. [Linting](./linting.md)
3. [Node / NPM](./npm.md)
4. [Ubuntu Server](./do.md)
## Windows
1. hosts file ```C:\Windows\System32\drivers\etc```
2. disable-web-security-chrome 
```
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --user-data-dir="C:/Chrome dev session2" --disable-web-security --allow-running-insecure-content
```
## Postgress 

postgresql-x64-16

Start: NET START postgresql-x64-9.2

Stop: net stop postgresql-x64-9.3

on linux: 

check: sudo systemctl status postgresql

sudo systemctl stop postgresql

sudo systemctl start postgresql.service
## GO

https://go.dev/wiki/SQLDrivers 

### Linux Mint
```
google-chrome --disable-web-security --user-data-dir="/tmp/chrome_tmp"
```
## Downtimes
### WEBIDE          

:anger:

| date | from | to |
|------|------|----|
| 22.08.2018    | 10:30    | 14:00  |

 https://cockpit.hanatrial.ondemand.com/cockpit#/home/trial  
 
 https://wiki.ubuntuusers.de/youtube-dl/


 ## How to set up own app hosting
 1. install any linux distro on maschine
 2. connect to local network
 3. enable ssh
 4. install git, docker (docker-compose), tmux, vim, cron
 5. enable firewall
 6. allow connections only 80 (http), 443(https), 22(ssh) 
 8. create ssh keys which will be added to github account
 9. create services directory/folder to store your repositories and clone your project from github
 10. your project contains a docker file which you git pull from github
 11. the docker file contains two stages. first stage is building and second stage is running. with this you only have one docker image. 
 12. then you build your docker image with 'docker build'
 13. then you run it via 'docker run'. when opening port you can test you website/app/service in your local network 
 14. for having it avaiable globally you need a reverse proxy. caddy is simpler then nginx. so use caddy.
 15. you need a docker container for caddy
 16. 
 17. 
 18. https://www.youtube.com/watch?v=jFrGhodqC08

how to setup NixOS
nano /etc/nixos/configuration.nix 
