# Backend Setup
- make project-backend folder
- cd project backend and run npm init --yes
- npm install axios mongodb express cors dotenv firebase-admin
- make server.js, Dockerfile files and add start script
- make services folder with admin server, mongo service, and token service
- make base for all services and server
- add endpoints to server.js to test
- create dockerfile, build, then deploy container from image

- add redis service
- add test point for redis

# Frontend Setup
- create react app with typescript template
- make dockerfile build and run container

# Complete Setup
- create docker-compose file to include all projects and mount volume for db
