1. Crie uma pasta para o projeto
Abra o terminal (ou prompt de comando) e execute:

mkdir backend
cd backend

2. depois  Inicialize o projeto com:

npm init

Responda às perguntas como:

name: backend
version: 0.0.1
description: Projeto de backend com Node.js
entry point: index.js
test command: (pressione Enter)
git repository: (pressione Enter)
author: dwp
license: MIT

3. Vamos fazer uma pequena alteração no objeto scripts:

{
  // ...
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  // ...
}

4. iniciar o servidor:

node index.js
ou
npm start

5. Instalar o Express:

npm install express

6. Vamos instalar o nodemon definindo-o como uma dependência de desenvolvimento (development dependency) com o comando:
(o nodemon é usado para atualizar a aplicação e não precisarmos reinicializá-la toda vez que fizermos alguma alteração)

npm install --save-dev nodemon

7. Podemos iniciar nossa aplicação com o nodemon assim:

node_modules/.bin/nodemon index.js

8. O comando é longo e bastante desagradável, portanto, vamos definir um script npm dedicado para ele no arquivo package.json:

{
  // ..
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  // ..
}

9. Agora só precisamos digitar:

npm run dev

