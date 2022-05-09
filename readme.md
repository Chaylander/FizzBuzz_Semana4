# FizzBuzz

## Practica 1 semana 4-5 LaunchX Backend Node Mission

### 1. Dependencias.

#### Node - Proyecto

Proyecto en Node v16.14.2

Creación del proyecto con el comando  (generando el archivo package.json):

- npm init

#### Git - Gestión de Versiones

El proyecto cuenta con gestión de versiones con Git. Creando un repositorio local y un reposotorio Remoto en GitHub.

Cada cambio en el proyecto se puede revisar en los [commits](https://github.com/Chaylander/FizzBuzz/commits/master).

Nota: En el proyecto tenemos .gitignore para no versionar el folder node_models.

#### Jest - Pruebas Unitarias

El proyecto tiene instalado Jest para la realización de pruebas unitarias.

Para su instalacion y configuración, se corrieron los siguientes comandos:

- npm install --save-dev jest

Configuración en package.json para agregar el script para correr jest:

- "test": "node ./node_modules/jest/bin/jest.js"

Para ejecutar todas las pruebas unitarias:

- npm test

#### Express - API

El proyeto tiene istalado express para crear la API solicitada.

Comando para instalar express en el proyecto:

- npm install express --save

Se agregó al package.json la siguiente linea, en scripts

`"server": "node ./libs/server.js"`

Para correr el server con npm, de la siguiente manera

* npm run serve

#### Linter

Permite revisar el cógigo para darle estilo mediante reglas ya establecidas previamente.

Comando para su instalación:

- npm install eslint --save-dev

Comando para la configuracion, general el archivo .eslintrc.js en el proyecto.

- npm init @eslint/config

Agregar reglas en [.eslintrc.js](https://github.com/Chaylander/FizzBuzz/blob/master/.eslintrc.js) y scripts de linter en package.json.

 Reglas de linter:

```
   "rules": {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"]
    }
```

 Scripts de linter en package.json

```
 "linter": "node ./node_modules/eslint/bin/eslint.js .",
 "linter-fix": "node ./node_modules/eslint/bin/eslint.js . --fix" 
```

#### Telegram bot

Necesitas una cuenta de Telegram, el bot fue creado con Bot Father: [https://telegram.me/BotFather](https://telegram.me/BotFather)

comando para instalar la dependencia bot telegram

`npm install node-telegram-bot-api --save`

Para correr el bot, se agrego a scripts de package.json, para correrlo:

* npm run bot

Script en package.json:

`"bot": "node ./lib/bot.js"`

#### GitHub Actions - Automatización de Pruebas

Dentro del proyecto se crea el archivo test.yml en la ubicación .github/workflows para automatizar las pruebas unitarias en GitHub Actions cuando se realiza un push al repositorio remoto. En la parte de las actions nos notificará en caso de que alguna prueba no haya pasado. Funciona con la versión actual de jest por lo que no es necesario utilizar una anterior.

[test.yml](https://github.com/Chaylander/FizzBuzz/blob/master/.github/workflows/test.yml)

#### Funcionamiento en Telegram
![Captura de pantalla 2022-05-08 211707](https://user-images.githubusercontent.com/66389606/167329785-35b6e1f1-5bed-4d79-90ff-56973cdf6cc0.png)
