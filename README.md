#  Mensagem secreta com cifra de César
Esta página transforma uma mensagem digitada em uma mensagem cifrada. O método de cifrar empregado foi Cifra de César. 

Esta aplicação é destinada para comunicação secreta entre usuários de qualquer natureza.

## 1. O que é Cifra de César?
A cifra de César é método simples de criptografia e é considerar um dos primeiros
tipos de criptografias conhecidas na história.

O nome de César é uma homenagem ao imperador romano Júlio César, que utilizava essa cifra para enviar ordens secretas aos seus generais no campo de batalha. 

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.


![Cifra de cesar](https://raw.githubusercontent.com/JessikaFujimura/SAP003-cipher/master/src/img/cifra%20de%20cesar.png)


## 2. Como se utiliza esta aplicação?

Nesta aplicação é possivel criar ou decifrar uma mensagem secreta.

Para criar uma mensagem secreta, é necessário inserir no campo **Mensagem** um texto compreensível e no campo **Chave de codificação** um numeral inteiro e clicando no botão **Codificar**. 
Esta aplicação codifica caracteres maiusculas e minusculas. Os caracteres especiais não serão cifrados.

Para decifrar uma mensagem secreta, o usuário deve inserir o texto codificado no campo **Mensagem** e a chave de codificação no campo identificado de mesmo nome e então clicar no botão **Decodificar**.  

A mensagem codificada ou decodificada aparecerá no campo abaixo.

## 3. Como funciona esta aplicação?

Esta aplicação é composta pelos seguintes arquivos:

* index.html
* index.js
* cipher.js
* style.css

No index.html é apresentado a estrutura desta aplicação. A estrutura contém **Head** e **Body**. O **Body** tem o layout composto por **Header** e **Main**. Dentro do **Main** há um **Form** que contém *input* e *buttons*.

O index.js é responsável pelo processamento dos dados de entrada (Mensagem e Chave de codificação). Para o processamento de dados de entrada foi utilizado eventos de DOM para obter dados dos input que estão no html e chamar a funções Encode e Decode que estão no arquivo cipher.js, eventos para atribuir funções aos botões da aplicação e funções para .   

No cipher.js se encontra as funções para Encode e Decode. Nessas funções foram utilizados controle de fluxo (**for**) e (**if**), uma array e uma variável do tipo let. 

No style.css se encontra as folhas de estilo da aplicação.

## 4. Considerações gerais

* Este projeto foi resolvido individualmente.
* O tempo utilizado para elaborar este projeto foi de 2 semanas.
