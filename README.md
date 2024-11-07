
# SERRATEC PUB

Projeto final da disciplina **Desenvolvimento Web** (React) do programa de Residência Full Stack do Serratec 2024.2. O objetivo é criar o desenvolvimento web de um ecommerce fictício integrando com a API.

## Descrição
O **Serratec Pub** simula o ambiente de compras online para um pub. O projeto foi desenvolvido utilizando as tecnologias **React**, **Context API**, **CSS Modules** e **styled-components**, garantindo um design eficiente e uma experiência de usuário adequada. O layout é **responsivo**, permitindo que a aplicação se adapte a diferentes dispositivos e tamanhos de tela. A **página de Sobre** utiliza **styled-components** para proporcionar um visual flexível e moderno. A integração com a API em Java garante que a aplicação tenha comunicação eficiente com o backend, utilizando **pgAdmin** para gerenciar o banco de dados.

## Tecnologias Utilizadas ⚙️
- **React**: Biblioteca para construção da interface de usuário.
- **React Router**: Para navegação entre as páginas.
- **Context API**: Para o gerenciamento do estado global, especialmente no controle do carrinho de compras.
- **CSS Modules**: Para estilização dos componentes, garantindo o encapsulamento e a modularidade.
- **styled-components**: Para a estilização de componentes, como a página "Sobre", garantindo flexibilidade visual.
- **Axios**: Para realizar requisições HTTP à API backend.
- **Node.js**: Para rodar a aplicação no ambiente de desenvolvimento React.
- **Eclipse**: Para o desenvolvimento e execução da API backend em Java.
- **pgAdmin**: Para gerenciar o banco de dados PostgreSQL.

## Páginas 🖥️
- **Home**: Exibe informações sobre o estabelecimento (Serratec Pub) e apresenta uma visão geral do que o pub oferece.
- **Sobre**: Apresenta informações sobre os desenvolvedores do projeto, incluindo fotos e uma breve descrição das habilidades de cada um.
- **Produtos**: Lista os produtos (bebidas, alimentos) com informações como imagem, descrição, preço e opções de compra.
- **Contato**: Contém um formulário para os usuários entrarem em contato com o estabelecimento, além de informações como endereço e telefone.
- **Carrinho**: Exibe os produtos que foram adicionados ao carrinho, com a possibilidade de visualizar a quantidade e o valor total da compra, além da opção de finalizar o pedido.
- **Login**: Permite o acesso de usuários cadastrados através de autenticação com e-mail e senha. Validações incluem a verificação de um e-mail válido, senha não vazia, e a opção de log-out.
- **Cadastro**: Formulário de cadastro para novos usuários, com validações para CPF (11 dígitos), e-mail válido, e confirmação de senha.
- **Termos de Uso**: Página com os termos e condições de uso do site.

## Estrutura do Projeto 📂

### **/src/components**
Componentes reutilizáveis e comuns em todo o site. As pastas incluem:
- **botao**: Botões de interação com o usuário.
- **card**: Carrinho com exibição de produtos.
- **context**: Arquivo que gerencia o estado global utilizando Context API.
- **footer**: Rodapé da aplicação.
- **header**: Cabeçalho da aplicação.
- **input**: Campos de input personalizados.
- **layout**: Estrutura básica de layout para as páginas.

### **/src/pages**
Contém as páginas individuais da aplicação. As pastas incluem:
- **cadastro**: Página de cadastro de novos usuários.
- **cliente**: Página de visualização do cliente (usuário logado).
- **contato**: Página com o formulário de contato e informações do estabelecimento.
- **home**: Página inicial com landing page do estabelecimento.
- **login**: Página de login de usuários cadastrados.
- **not found**: Página de erro 404 quando o usuário tenta acessar uma rota inexistente.
- **produto**: Página dos produtos disponíveis no ecomm.
- **sobre**: Página com informações sobre os desenvolvedores do projeto.
- **termos de uso**: Página com os termos de uso do site.

### **/src/routes**
Este arquivo contém a definição das rotas da aplicação, utilizando **React Router**. Ele conecta os endpoints (páginas) com as URLs correspondentes, facilitando a navegação entre as páginas da aplicação.

### **/src/utils**
Contém funções de validação que são utilizadas para garantir que os dados fornecidos pelo usuário sejam válidos, como validação de e-mail, CPF (11 dígitos), e confirmação de senha.

## Como Rodar Localmente 🚀

1. Clone este repositório:
   ```bash
   git clone https://github.com/thiagobranconf/Front-SerratecPub.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd serratecpub-react
   ```

3. Instale as dependências necessárias:
   ```bash
   npm install
   npm install react-router-dom
   npm install axios
   npm install cors
   npm install styled-components
   ```

4. Garanta que a **API em Java** esteja rodando no Eclipse e o banco de dados esteja configurado no **pgAdmin**.

5. Execute o projeto:
   ```bash
   npm run dev
   ```

6. Acesse a aplicação em [http://localhost:8080](http://localhost:3000) (ou o número da porta do banco de dados da sua máquina).

## Autores ✨
- [Gustavo Santos](https://github.com/Gustavo-c-s)
- [Isabella Oliveira](https://github.com/isb-op)
- [Lucas Gomes](https://github.com/lucauxs)
- [Murilo Bongard](https://github.com/murilobongard)
- [Renata Rodrigues](http://github.com/itsrerodrigs)
- [Thiago Branco](https://github.com/thiagobranconf/)

Este projeto é fruto do trabalho colaborativo e visa melhorar a experiência de compra online, utilizando práticas modernas de desenvolvimento web e design responsivo.
