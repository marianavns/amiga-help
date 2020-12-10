[![Deploy on heroku](https://img.shields.io/badge/deploy-heroku.com-blueviolet)](http://amiga-help.herokuapp.com/)  ![GitHub deployments](https://img.shields.io/github/deployments/marianavns/amiga-help/amigahelp)

# Amiga, Help!

Projeto desenvolvido com o apoio:

<img src="/images/logo-reprograma.jpg" alt="logo da instituição reprograma" width="40%"/>
A API *Amiga, Help!* tem a proposta de unir mulheres da área de tecnologia para aquela *ajudinha básica e rápida* que todas nós precisamos às vezes!  Está tendo problemas no desenvolvimento de algo, não consegue mais ver onde pode ser o erro e precisa de uma mana para trocar ideia e para encontrar uma solução juntas?  🕵🏽‍♀️🕵🏼‍♀️

</br>

Encontre uma *anja* que conhece a linguagem que você está usando e seja abençoada mandando aquele já clássico: **"Amiga, help!"**

- Para ler a proposta completa, clique [aqui](#Proposta-Completa-do-Projeto).

## Sumário

1. [Principais Funções da API](#Principais-Funções-da-API)
2. [Instruções de uso](#Instruções-de-uso)
3. [Tecnologias](#Tecnologias)
4. [Features e rotas](#Features-e-rotas)
   - [Manipulando os registros de anjas](#Manipulando-os-registros-de-anjas)
   - [Manipulando os registros de abençoadas](#Manipulando-os-registros-de-abençoadas)
5. [Proposta Completa do Projeto](#Proposta-Completa-do-Projeto)
6. [Aprendizados](#Aprendizados)
7. [Agradecimentos](#Agradecimentos)



## Principais Funções da API

- [x] Adicionar o cadastro de uma pessoa disposta a ajudar ("*anja*");
- [x] Adicionar o cadastro de uma pessoa que precisa de ajuda (*"abençoada"*);
- [x] Encontrar *anjas* de acordo com a linguagem;
- [x] Encontrar pessoas que precisam de ajuda pela linguagem;
- [x] Encontrar *anjas* que trabalham com Linux;
- [x] Editar e deletar registros de *anjas* e *abençoadas*.

## Instruções de uso

|                Como você quer usar esta API?                 |
| :----------------------------------------------------------: |
| <br /><img src="/images/papaleguas.gif" alt="Personagem Papaleguas correndo para a direita." width=20%> <br /><br /> **"Só quero ver a API funcionando..."**. <br />Abra o aplicativo [POSTMAN](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop/related?hl=pt-BR) e use o endereço https://amigahelp.herokuapp.com/ como URL para testar as rotas que estão [[aqui](#Features-e-rotas)].<br /> |
| <br /><img src="/images/tyra-typing.gif" alt="Mulher digitando na frente de um computador." width=20% vertical-align=center>**<br /><br />"Quero ver como o código foi feito, criar meu próprio banco de dados, explorar e alterar!"**<br />- Tenha instalados os programas [Node.js](https://nodejs.org/en/download/) e [MongoDB](https://www.mongodb.com/try/download/community), além de um editor de códigos; <br />- Clone o projeto: `git clone https://github.com/marianavns/amiga-help`<br />- Dentro da pasta do projeto, digite `npm install` no cmd;<br />- Renomeie o arquivo `.env.exemple` para `.env` e insira as variáveis de ambiente pedidas.<br /> |

## Tecnologias

### Para construção da API

- **Node.js**, versão 12.18.3;
- Gerenciador de pacotes node **npm**, versão 6.14.6;
- As dependências node:
  - **Express** versão 4.17.1;
  - **Mongoose** versão 5.10.17;
  - **Dotenv-safe** 8.2.0;

- Banco de dados NoSQL **MongoDB**;
- Editor de códigos VSCode.

### Para uso da API

- **Postman**: para teste das funcionalidades (rotas) da API;

- **Heroku.com**: *deploy* da aplicação na web;
- **MongoDB Atlas**: hospedagem do banco de dados na nuvem.

## Features e rotas

### Manipulando os registros de *anjas*

| Feature                                                      | Método | Rota              |
| ------------------------------------------------------------ | ------ | ----------------- |
| Adiciona uma anja                                            | POST   | /anjas            |
| Visualiza todos os registros cadastrados                     | GET    | /anjas            |
| Pesquisa a anja pela linguagem                               | GET    | /anjas/linux      |
| Visualiza as anjas que usam linux (para maiores informações, clique aqui) | GET    | /anjas/?languages |
| Adiciona ou atualiza atributos de uma anja                   | PATCH  | /anja/:username   |
| Exclui registro de uma anja pelo número do id no banco de dados | DELETE | /anja/:_id        |

### Manipulando os registros de *abençoadas*

| Descrição                                    | Método | Rota            |
| -------------------------------------------- | ------ | --------------- |
| Adicionar uma nova ideia                     | POST   | /ideias         |
| Visualizar todas as ideias apresentadas      | GET    | /ideias         |
| Visualiza as ideias e bairros de onde vieram | GET    | /ideias/bairros |
| Atualiza uma ideia pelo e-mail cadastrado    | PATCH  | /ideias         |

## Proposta Completa do Projeto

## Aprendizados

## Agradecimentos

