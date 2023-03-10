![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## :bank: Projeto XBank

O XBank é um protótipo que simula transações bancárias e foi construído em TypeScript puro.

Neste projeto, é possível criar uma ou mais contas, realizar saques, depósitos e transferências entre contas, além de consultar saldos e solicitar encerramentos.



### :wrench: Executando o projeto

Para executar o projeto, você precisa ter o [NodeJS](https://nodejs.org/en/) instalado. [Neste link](https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos), você acessará um tutorial de como instalar o Node no Windows, Linux e macOS.

Após a instalação e configuração do Node e seu gerenciador de pacotes (provavelmente o NPM), alguns comandos precisam ser dados ao terminal para que o projeto em TypeScript possa ser lido e executado:

```bash
$ npm install typescript
$ npx tsc --init
$ npm install ts-node-dev
```

:balloon: Primeira linha: instalamos o TypeScript;

:balloon: Segunda linha: iniciamos e configuramos o TypeScript no projeto;

:balloon: Terceira linha: instalamos a dependência que nos permite executar o script ts;

Agora, sendo `index.ts` o nome do nosso arquivo principal, podemos executar nosso projeto simplesmente digitando o seguinte comando:

````bash
$ npx ts-node-dev index.ts
````

