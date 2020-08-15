# Webpack

## Pourquoi webpack: manager ses assets

Webpack sert a "bundler" les assets, pour une meilleure gestion dans le projet de toutes les ressources et eviter les appels à des fichiers externes contenant des variables globales pouvant rentrer en conflit.<br>
Il peut gérer plusieurs types de fichiers et les convertir afin qu'ils soient compris par le navigateur<br>
Il est nécessaire d'avoir nodeJs d'installé et NPM

### Crétion d'un projet d'exemple
```
mkdir webpack-exemple && cd webpack-exemple && npm init -y && npm i webpack webpack-cli --save-dev

```

### Import de fonction

Webpack nous permet de découper nos et de les importer à la maniere de Node. Ici le fichier math.js, qui comporte de simples fonctions d'addition et de multiplication, elles seront appelées dans ``index.js``.
```js
//fichier math.js
export const add = (a, b) => a + b;
export const mult = (a, b) => a * b;

//fichier index.js
import { add } from "./math";

const res = add(1, 2);
console.log(res);
```
Pour que webpack puisse faire son travail, il faut créer un script de "build".<br>
Dans ``package.json`` :
le nom de la commande build permettra a webpack d'aller chercher directement la commande dans le dossier ``.bin`` de ``node_module``
```json
"scripts": {
    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
Dans le teminal :
```
npm run build
```
Il nous précisera que nous avons oublié de lui annoncer si nous sommes en mode developpement ou production.