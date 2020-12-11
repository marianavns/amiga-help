   [![Deploy on heroku](https://img.shields.io/badge/deploy-heroku.com-blueviolet)](http://amiga-help.herokuapp.com/)  ![GitHub deployments](https://img.shields.io/github/deployments/marianavns/amiga-help/amigahelp) ![](https://img.shields.io/badge/construction-in%20progress-yellow)

# <h1 align="center">Amiga, Help!</h1>

<p align="center">Projeto desenvolvido com o apoio:</p>

<img src="./images/logo-reprograma.jpg" alt="logo da instituição reprograma" width="40%" />

- [amigahelp.herokuapp.com](https://amigahelp.herokuapp.com/)

A API *Amiga, Help!* tem a proposta de unir mulheres da área de tecnologia para aquela *ajudinha básica e rápida* que todas nós precisamos às vezes! Apareceu um problema no desenvolvimento de algo, não consegue mais ver onde pode ser o erro e precisa de uma mana para trocar ideia e encontrar uma solução juntas?  🕵🏽‍♀️🕵🏼‍♀️

Encontre uma *anja* que conhece a linguagem que você está usando e seja *abençoada* mandando aquele já clássico: **"Amiga, help!"**

- Para ler a proposta completa, clique [aqui](#Proposta-Completa-do-Projeto).

## Sumário

1. [Principais Features da API](#💡-Principais-Features-da-API)
2. [Instruções de uso](#💻-Instruções-de-uso)
3. [Tecnologias Utilizadas](#🛠️-Tecnologias-Utilizadas)
   - [Para construção da API](#Para-construção-da-API)
   - [Para uso da API](#Para-uso-da-API)
4. [Features e rotas](#✔️-Features-e-rotas)
   - [Manipulando os registros de anjas](#Manipulando-os-registros-de-anjas)
   - [Manipulando os registros de abençoadas](#Manipulando-os-registros-de-abençoadas)
5. [Proposta Completa do Projeto](#Proposta-Completa-do-Projeto)
6. [Aprendizados](#Aprendizados)
7. [Agradecimentos](#Agradecimentos)



## 💡 Principais Features da API

- [x] Adicionar o cadastro de uma pessoa disposta a ajudar ("*anja*");
- [x] Encontrar *anjas* que conhecem uma linguagem específica;
- [x] Encontrar *anjas* que podem ajudar trabalhando em Linux;
- [x] Adicionar o cadastro de uma pessoa que precisa de ajuda (*"abençoada"*);
- [x] Encontrar pessoas que precisam de ajuda pela linguagem;
- [x] Filtrar todas as perguntas de uma linguagem específica;
- [x] Editar e deletar registros de *anjas* e *abençoadas*.

## 💻 Instruções de uso

|                Como você quer usar esta API?                 |
| :----------------------------------------------------------: |
| <br /><img src="./images/papaleguas.gif" alt="Personagem Papaleguas correndo para a direita." width=20%> <br /><br /> **"Só quero ver a API funcionando..."**. <br />Abra o aplicativo [POSTMAN](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop/related?hl=pt-BR) e use o endereço https://amigahelp.herokuapp.com/ como URL para testar as features e rotas que estão [aqui](#Features-e-rotas).<br /> |
| <br /><img src="./images/tyra-typing.gif" alt="Mulher digitando na frente de um computador." width=20% vertical-align=center>**<br /><br />"Quero ver como o código foi feito, criar meu próprio banco de dados, explorar e alterar!"**<br />- Tenha instalados os programas [Node.js](https://nodejs.org/en/download/) e [MongoDB](https://www.mongodb.com/try/download/community), além de um editor de códigos; <br />- Clone o projeto: `git clone https://github.com/marianavns/amiga-help`<br />- Dentro da pasta do projeto, digite `npm install` no cmd para baixar as dependências do projeto;<br />- Renomeie o arquivo `.env.exemple` para `.env` e insira as variáveis de ambiente pedidas.<br /> |

## 🛠️ Tecnologias utilizadas

### Para construção da API

- **Node.js**, versão 12.18.3;
- Gerenciador de pacotes node **npm**, versão 6.14.6;
- As dependências node:
  - **Express** versão 4.17.1;
  - **Mongoose** versão 5.10.17;
  - **Dotenv-safe** 8.2.0;
- **Bcrypt** 5.0.0;
  
- Banco de dados NoSQL **MongoDB**;
- Editor de códigos **VSCode**.

### Para uso da API

- **Postman**: para teste das funcionalidades (rotas) da API;

- **Heroku.com**: *deploy* da aplicação na web;
- **MongoDB Atlas**: hospedagem do banco de dados na nuvem.

## ✔️ Features e rotas

### Manipulando os registros de *anjas*

| Feature                                                      | Método | Rota                        |
| ------------------------------------------------------------ | ------ | --------------------------- |
| Adicionar uma anja                                           | POST   | /anjas                      |
| Visualizar todos os registros cadastrados                    | GET    | /anjas                      |
| Pesquisar a anja pela linguagem                              | GET    | /anjas/linguagem/?languages |
| Pesquisar as informações de uma anja pelo username           | GET    | /anjas/username/?userName   |
| Visualizar as anjas que usam linux (para maiores informações, clique [aqui](O-motivo-da-pergunta-sobre-o-linux)) | GET    | /anja/linux                 |
| Editar o registro completo de uma anja, buscando pelo id     | PUT    | /anja/:_id                  |
| Editar atributos de uma anja, encontrando-a pelo username    | PATCH  | /anja/:userName             |
| Excluir registro de uma anja pelo número do id no banco de dados | DELETE | /anja/:_id                  |

### Manipulando os registros de *abençoadas*

| Feature                                                 | Método | Rota                                     |
| ------------------------------------------------------- | ------ | ---------------------------------------- |
| Adicionar uma pessoa que precisa de ajuda (*abençoada*) | POST   | /precisodeajuda                          |
| Visualizar todos registros de abençoadas                | GET    | /precisodeajuda                          |
| Visualizar todas as dúvidas de uma pessoa               | GET    | /precisodeajuda/minhasduvidas/:userName? |
| Visualizar pessoas que precisam de ajuda pela linguagem | GET    | /precisodeajuda/?needLanguage            |
| Buscar um registro pelo ID                              | GET    | precisodeajuda/id/:_id                   |
| Editar um registro completo pelo ID                     | PUT    | /precisodeajuda/:id                      |
| Editar atributos de um registro, buscando pelo id       | PATCH  | /precisodeajuda                          |
| Excluir registro único pelo id                          | DELETE | /precisodeajuda/:id                      |
| Excluir registro(s) pelo username                       | DELETE | /precisodeajuda/:username                |

## Proposta Completa do Projeto

Ao entrar na área de tecnologia, uma conclusão chega na primeira semana: todos precisam de alguma ajuda para desenvolver. Outra conclusão vem um pouco depois, mas também chega inevitavelmente: tentar resolver problemas diferentes, se possível de outras pessoas, ensina muito. Muito mesmo.

Mas como achar uma pessoa para pedir aquela ajuda rápida ou para dar aquela mãozinha? E mais: **como incluir as mulheres que ainda não têm uma rede de apoio a quem recorrer** quando o código dá erro, quando o deploy não funciona ou coisas desse tipo?  Afinal, em diversas situações, tudo o que se precisa é um *pair programming* de 15 minutos para economizar uma hora inteira quebrando a cabeça sozinha, não é verdade?

Para solucionar essas questões, veio a *Amiga, Help!*, que é uma frase já tradicional quando estamos precisando daquela ajuda pontual. O projeto nasceu nos últimos dias de um bootcamp excelente de 18 semanas do qual tive a felicidade de participar na instituição {[Reprograma](https://reprograma.com.br/)}. *Amigas, Help!* nasceu, sim, na última semana, mas estava sendo gerado desde o começo do curso, porque desde o primeiro dia ficou evidente que pedir ajuda e ajudar alguém em um problema faz com que a evolução seja mais rápida e saudável. 

**Esta API, então, traz soluções para fazer o encontro entre a mulher que precisa de um *help* e a mulher que está disposta a dar essa mãozinha. É possível encontrar uma mana pela linguagem que ela usa, verificar que horários ela está disponível, localizar dúvidas de acordo com uma linguagem específica e [muito mais](#Features-e-rotas)**.

> ⚡ E atenção! Não é obrigatório ser super eficiente e com anos de experiência numa linguagem para ajudar uma mana. É preciso, apenas, conhecer a linguagem e verificar na breve descrição da dúvida se você entende algo daquela questão. As vezes é só uma olhadinha no código, um bug insistente que já foi conferido mil vezes por outra pessoa, mas que está só precisando do seu olhar para encontrá-lo. Pode ter certeza que tem alguém esperando por você!  Let's code, baby! 

### O motivo da pergunta sobre o linux

Na experiência prática com o bootcamp, percebemos que pouquíssimas alunas usavam o Linux no seu dia-a-dia, o que causava uma diferença no passo a passo de instalação de alguns softwares e pacotes. 

Sendo assim, faz-se importante identificar se a pessoa que está disposta a ajudar tem contato com este sistema operacional. 

Não que seja um fator determinante em todas as situações, claramente, mas pode ser interessante para uma melhor experiência da dupla em resolução de problemas, compartilhamento de tela ou lista de procedimentos.

## Aprendizados

Além do conhecimento adquirido nas [tecnologias usadas](#Tecnologias-utilizadas) para o desenvolvimento do projeto, fica o aprendizado de gestão de tempo, dimensionamento do que é ou não relevante em termos de dados a resgatar e como fazer correlações valiosas e efetivas entre quem precisa de algo e quem pode suprir esta falta.

E, passando do escopo deste projeto específico, o aprendizado mais importante que ficou impresso, dentre tantos outros, é que **a vontade constante de aprender em uma mulher, associada a uma rede de apoio consistente e presente, é uma força imparável**.

## Agradecimentos

O projeto nasceu e criou vida com a parceria de todas as mulheres do bootcamp Reprograma, sejam as colegas de turma incríveis, sejam as representantes da instituição que nos conduziram nessas semanas extremamente ricas de aprendizado, trocas, dedicação intensa e amor. 

A todas, muitíssimo obrigada!  💜

