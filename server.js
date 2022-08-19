// add cera
// https://devcenter.heroku.com/articles/getting-started-with-nodejs


// muita luta para colocar isso com o heroku 
// achei a solucao em https://elements.heroku.com/buildpacks/debitoor/heroku-buildpack-npmrc
// executei este comando: heroku buildpacks:set --index 1 https://github.com/debitoor/heroku-buildpack-npmrc.git
// desta forma fiz um bypass do npmrc pois estava falhando o login no npm
/**
 * 
remote: -----> Installing dependencies
remote:        Installing node modules
remote:        npm ERR! code E401
remote:        npm ERR! Incorrect or missing password.
remote:        npm ERR! If you were trying to login, change your password, create an
remote:        npm ERR! authentication token or enable two-factor authentication then
remote:        npm ERR! that means you likely typed your password in incorrectly.
remote:        npm ERR! Please try again, or recover your password at:
remote:        npm ERR!     https://www.npmjs.com/forgot
remote:        npm ERR! 
remote:        npm ERR! If you were doing some other operation then your saved credentials are
remote:        npm ERR! probably out of date. To correct this please try logging in again with:
remote:        npm ERR!     npm login
remote:        
remote:        npm ERR! A complete log of this run can be found in:
remote:        npm ERR!     /tmp/npmcache.sgUaa/_logs/2022-08-17T18_47_54_706Z-debug-0.log
remote: 
remote: -----> Build failed

 * 
 */
// observei tambem que nao existe nunca o arquivo de log em tmp/npmcache.  esta pasta sequer existe!

// uma outra forma seria configurar o npmrc mas eu nao consegui
// https://docs.microsoft.com/pt-br/azure/devops/artifacts/npm/npmrc?view=azure-devops&tabs=linux%2Cclassic
// https://stackoverflow.com/questions/50612549/setting-up-username-and-password-for-npm-registry-url


/**
 *  para que tudo rode bem o package.json deve ter  o parametro engine.node=16.x conforme ilustrado abaixo:
 *  Isto é importante observar pois o comando npm init nao insere este parametro.
 * 
 * {
  "name": "web-server",
  "version": "1.0.0",
  "engines": {
    "node": "16.x"
  },
  "description": "web server from node.js developer course at udemy",
  "main": "middleware.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/tamerico/web-server.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/tamerico/web-server/issues"
  },
  "homepage": "https://github.com/tamerico/web-server#readme",
  "dependencies": {
    "express": "^4.18.1"
  }
}
 * 
 * 
 */




/*  Comando para subir no heroku
git push heroku main
*/


// de inicio o heroku reclamou do erro H10 entao eu corrigi o arquivo Procfile
// outro erro: H14


// comandos heroku



/*
 heroku run bash
Running bash on ⬢ secret-headland-25726... up, run.6677 (Free)
~ $ 
~ $ cat Procfile
web: npm start~ $ exit
exit

*/


/**
 heroku ps
Free dyno hours quota remaining this month: 550h 0m (100%)
Free dyno usage for this app: 0h 0m (0%)
For more information on dyno sleeping and how to upgrade, see:
https://devcenter.heroku.com/articles/dyno-sleeping

=== web (Free): npm start (1)
web.1: crashed 2022/08/17 16:15:27 -0300 (~ 1m ago)

 * 
 */


/**
 
 * 
 heroku local web
 4:21:34 PM web.1 |  npm
4:21:34 PM web.1 |   WARN lifecycle The node binary used for scripts is /snap/bin/node but npm is using /snap/node/6331/bin/node itself. Use the `--scripts-prepend-node-path` option to include the path for the node binary npm was executed with.
4:21:34 PM web.1 |  > web-server@1.0.0 start /home/tamer/Documents/01 -projects/curso-udemy-javascript/web-server
4:21:34 PM web.1 |  > node server.js
4:21:35 PM web.1 |  /home/tamer/Documents/01 -projects/curso-udemy-javascript/web-server
4:21:35 PM web.1 |  running web at 5000

 * 
 */



/**
 * *  neste comentario esta o exemplo de um retorno esperado ao executar o comando : git push heroku main
 * 
 * 
 tamer@tamer-670Z5E:~/Documents/01 -projects/curso-udemy-javascript/web-server$ git push heroku main
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 302 bytes | 302.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote: 
remote: -----> Building on the Heroku-20 stack
remote: -----> Using buildpack: heroku/nodejs
remote: -----> Node.js app detected
remote:        
remote: -----> Creating runtime environment
remote:        
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NODE_VERBOSE=false
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:        
remote: -----> Installing binaries
remote:        engines.node (package.json):  16.x
remote:        engines.npm (package.json):   unspecified (use default)
remote:        
remote:        Resolving node version 16.x...
remote:        Downloading and installing node 16.17.0...
remote:        Using default npm version: 8.15.0
remote:        
remote: -----> Restoring cache
remote:        - npm cache
remote:        
remote: -----> Installing dependencies
remote:        Installing node modules
remote:        
remote:        added 57 packages, and audited 58 packages in 1s
remote:        
remote:        7 packages are looking for funding
remote:          run `npm fund` for details
remote:        
remote:        found 0 vulnerabilities
remote:        
remote: -----> Build
remote:        
remote: -----> Caching build
remote:        - npm cache
remote:        
remote: -----> Pruning devDependencies
remote:        
remote:        up to date, audited 58 packages in 1s
remote:        
remote:        7 packages are looking for funding
remote:          run `npm fund` for details
remote:        
remote:        found 0 vulnerabilities
remote:        
remote: -----> Build succeeded!
remote: -----> Discovering process types
remote:        Default types for buildpack -> web
remote: 
remote: -----> Compressing...
remote:        Done: 32.9M
remote: -----> Launching...
remote:        Released v5
remote:        https://shrouded-cove-92073.herokuapp.com/ deployed to Heroku
remote: 
remote: This app is using the Heroku-20 stack, however a newer stack is available.
remote: To upgrade to Heroku-22, see:
remote: https://devcenter.heroku.com/articles/upgrading-to-the-latest-stack
remote: 
remote: Verifying deploy... done.
To https://git.heroku.com/shrouded-cove-92073.git
   b4c3d72..0874266  main -> main

 * 
 * 
 */


var express = require ('express');
var app = express();
var cont = 1;
var contAbout = 1;

var PORT = process.env.PORT || 3000;  // || this is the or operator 

var middleware = require ("./middleware");





app.use(middleware.logger);

// app.get('/', function(rq, rs){

//     rs.send('teste / ok');
//     console.log('oi' + cont++);


// });



app.get('/about', middleware.requireAuthentication, function(rq, rs){

    rs.send('teste about ok');
    console.log('about' + contAbout++);


});

// expor um folder 
console.log(__dirname);  // verificar o diretorio que o server está rodando

// se nao existir uma metodo get para a pasta raiz (/) o express pega o arquivo index.html
app.use(express.static ( __dirname + '/public')   ); // modifica o diretorio para o express



// app.listen(3000);  // modo basico para executar o server

app.listen(PORT, function(){    // outro formado usando funcao anonima
        console.log('running web at %s', PORT);

    }
    );  