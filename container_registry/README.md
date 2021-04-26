# Mini project created in typescript, dockerized and shipped to the Azure container registry  :relaxed:
## Technologies 
Typescript
Docker :whale:
Eslint
Azure Container registry 
Azure Container instances

### How to recreate
- Create new folder, go inside and do **npm init -y** 
- Install typescript with **npm i typescript --save-dev**
- Type **npx tsc --init** to create tsconfig.json
- Go to tsconfig and check the settings: 
"compilerOptions": {
"module": "commonjs",
"esModuleInterop": true,
"target": "es6",
"moduleResolution": "node",
"sourceMap": true,
"outDir": "dist",
"strict": true
}, **better check the documentation!**:wink:
- Add express with **npm i --save express** 
- Type **npm i -D @types/express**
- Install Eslint to make sure that your code is top: **npm install eslint --save-dev**
- Type **npx eslint --init** to configure the rules for eslint (you will add more later)
- Change script in package.json:
	"start": "tsc && node build/index.js",
	 "lint": "eslint src/*.ts --fix"
NB! Make sure that your path and filenames are correct
- Create .dockerignore and add node_modules to it
- Create Dockerfile
- Create express server
- Type **docker build . -t nameOfImage:tag** to create your image
- Go to Azure Portail and create new container registry if you don't have, or open the existing one. Go to Quick start and follow the steps:
- **docker login...**
- **docker tag...**
- **docker push...**
- Go to container instances, create new one, choose your image, give DNS name, open correct port (the same as in your index.ts) and create it. 
- Copy either DNS name or public IP
follow the steps from container registry, paste it to your browser, add colon and port number. 
Your container is uploaded and running! 
## Contribution :heart_eyes:
All ideas and feedbacks are warmly welcome! 
