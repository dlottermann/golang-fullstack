## golang-fullstack
This project is designed be run all enviroments in Docker. 
There are two Dockerfiles in the root directory of Backend and Frontend. 
Also exist a docker-compose.yml on root directory of all projects -  this file especify all services and configs

## Install dependencies
First step that you need is get Docker and Docker-compose, links official's sites below

Install *docker*
-- https://docs.docker.com/engine/install/
Install *docker-compose*
-- https://docs.docker.com/compose/install/

> If you have problem with CORs, suggested chrome plugin below

Plugin (chrome)
***Allow CORS: Access-Control-Allow-Origin***
-- https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=pt-BR

## Clone project
After install all dependencies, next step is clone repository

-- Open your terminal and clone repository

    git clone https://github.com/dlottermann/golang-fullstack.git


-- Navigate to repository folder using terminal

     cd golang-fullstack

-- Rename file *"env.model" on frontend root directory to "env.local"*

-- Execute first command

    docker-compose build

Probally first time you run the command,  it will  take some time - will download the docker images

After finish download, run:

    docker-compose up

You can see the logs on the console,  all enviroments starting - that is most fast then previous command

If everything all OK the console prints something how this:

> frontend      |   Local:            http://localhost:3000

Open your browser and access: http://localhost:3000

API is avaliable on : http://localhost:9090

PHPMyAdmin is avaliable on : http://localhost:8080

Obs.:
PHPMyAdmin is commented on docker-composer.yml,  if you like enable uncomment and run :

    docker-compose up

## Next features
- Fix Cors
- Add Unit tests 