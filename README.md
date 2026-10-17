# Passeio App

O **Passeio App** é uma aplicação web desenvolvida em Angular para ajudar a organizar e guardar os seus lugares favoritos para passear. Este projeto foi criado com o objetivo de praticar e aprofundar os conhecimentos no desenvolvimento com Angular.

## Funcionalidades

- **Autenticação Google:** Login simples e seguro utilizando a sua conta Google[cite: 11].
- **Galeria de Lugares:** Uma tela onde você pode visualizar todos os locais que já cadastrou, apresentados em cards detalhados com foto, localização e avaliação (em estrelas)[cite: 12].
- **Gestão de Categorias:** Cadastre novas categorias de lugares para manter tudo organizado (ex: Praias, Shoppings, Restaurantes, Parques)[cite: 13].
- **Cadastro de Lugares:** Adicione novos locais à sua lista[cite: 14]. É possível associá-los a uma categoria existente, inserir a localização, atribuir uma avaliação e colocar o link para uma foto do espaço[cite: 14].
- **Logout:** Opção rápida para deslogar e voltar à página principal.

## Tecnologias Utilizadas

- **Angular:** Framework principal utilizado para construir a interface.
- **Tailwind CSS:** Utilizado para criar o design e a estilização da aplicação.
- **Postman / API Local:** Utilizado para a criação da API que armazena e gerencia os dados do projeto.
- **Google Auth:** Integração utilizada para o login de usuários.

## Como executar o projeto na sua máquina

Certifique-se de ter o Node.js e o Angular CLI instalados.

1. Clone este repositório:
   ```bash
   git clone [https://github.com/samuel-tb/passeio-app.git](https://github.com/samuel-tb/passeio-app.git)
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd passeio-app
   ```
3. Instale as dependências necessárias:
   ```bash
   npm install
   ```
4. Inicie o servidor da API (necessário para que os lugares e categorias funcionem):
   ```bash
   npm run server
   ```
5. Em um **novo terminal** (mantendo o do passo anterior aberto), inicie o servidor do Angular:
   ```bash
   ng serve
   ```
6. Abra o seu navegador e acesse `http://localhost:4200/`.
