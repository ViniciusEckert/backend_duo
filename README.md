# Cadastro-Duo

Este trabalho consiste em montar um CRUD para personagens de <nome da série, desenho, anime...>

#Integrantes 
- Anthony Patrick Prim Bittencourt
- Vinicius Eduardo Eckert

# Como rodar o projeto em sua máquina
Passo - 1: "npm i" no terminal
Passo - 2: Criar um .env com as chaves
Passo - 3: "npm run dev" no terminal

# Como testar as requisições 

Rota 1:
URL: http://localhost:8080/
Método: GET
Body: Não possui (retorna { success: true })
Personagens

Rota 2:
URL: http://localhost:8080/char/:id
Método: GET
Body: Não possui (parâmetro id na URL)

Rota 3:
URL: http://localhost:8080/char
Método: GET
Body: Não possui

Rota 4:
URL: http://localhost:8080/char
Método: POST
Body: Dados do personagem (ex: nome, descrição, etc.)

Rota 5:
URL: http://localhost:8080/char/:id
Método: PUT
Body: Dados atualizados do personagem

Rota 6:
URL: http://localhost:8080/char/:id
Método: DELETE
Body: Não possui
Desenhos

Rota 7:
URL: http://localhost:8080/desenho
Método: GET
Body: Não possui

Rota 8:
URL: http://localhost:8080/desenho
Método: POST
Body: Dados do desenho (ex: título, descrição, etc.)

Rota 9:
URL: http://localhost:8080/desenho/:id
Método: GET
Body: Não possui

Rota 10:
URL: http://localhost:8080/desenho/:id
Método: DELETE
Body: Não possui

Rota 11:
URL: http://localhost:8080/desenho/:id
Método: PUT
Body: Dados atualizados do desenho
Conexões de Personagens

Rota 12:
URL: http://localhost:8080/conectar/:id
Método: PUT
Body: Dados necessários para conectar (ex: id do outro personagem/desenho)

Rota 13:
URL: http://localhost:8080/desconectar/:id
Método: DELETE
Body: Dados necessários para desconectar
Usuários

Rota 14:
URL: http://localhost:8080/user
Método: GET
Body: Não possui

Rota 15:
URL: http://localhost:8080/user/login
Método: POST
Body: Credenciais do usuário (ex: email, senha)

Rota 16:
URL: http://localhost:8080/user
Método: POST
Body: Dados do usuário (ex: nome, email, senha)

Rota 17:
URL: http://localhost:8080/user/:id
Método: PUT
Body: Dados atualizados do usuário

Rota 18:
URL: http://localhost:8080/user/:id
Método: GET
Body: Não possui

Rota 19:
URL: http://localhost:8080/user/:id
Método: DELETE
Body: Não possui

