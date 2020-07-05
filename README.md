
<h1>Tecnologias</h1>

Typescript -> Super set para javascript trabalhar com tipagem

Express js -> Micro frame work para nodejs

Bycrypt -> Encripitar a senha do usuario

Jwt -> Jsonwebtoken para realizar a autenticação do usuário

TypeOmr -> Orm para consultar o banco de dados

Yup -> Checagem dos inputs do usuario

Cors -> Para cross site origin.

Date-fns -> Todas as datas serão salvas no formato UTC para não ter problemas de timezone.
não importa a geolocalização do usuario os dados serão estáveis.Só serão mostrados com timezone GMT -3:00 no frontend.

ReactJs -> FrameWork frontend para criar Spa (single page aplication) e complexas interfaces de usuario.

React-Redux -> Gerenciador de stados global syncrono para Javascript.

Redux-Thunk -> Feito para trabalhar com assincronismo unto com redux.

Styled-componentes -> Css in Js é feito para trabalhar com web aplications sendo mais fácil criar interfaces complexas.

Axios -> Client Http.

**Backend rotas**

    post /users -> criar um usuário
    body (name, email, password)

    get / user -> listar todos os usuarios

    get / schedules -> listar usuarios e os historicos de pontos.
    query param (start_range, end_range)

    obs: start_range e end_range são distancias entre as datas inicio / fim
    ambos são obrigatoriamente no formato UTC

    post / sessions -> iniciar uma sessão para se autenticar

    ***Somente as rotas a cima são publicas todas as outras o usuário ter que está autenticado.***

    post / schedules -> bater o ponto primeira vez do dia
    body(date! , entry?, lunch?, lunch_end?, exit?)

    put / schedules -> bater outros pontos do dia como almoço, saida do trabalhado etc.
    body(date! , entry?, lunch?, lunch_end?, exit?)


clone o repositório do backend em https://github.com/danyelhenrique/backend
```cd backend```
```npm install```
```npm run dev```

clone o repositório do frontend em https://github.com/danyelhenrique/frontend
````cd frontend````
````npm install````
````npm start````

possiveis ateraçoes para melhorar o projeto :

[ ] websockets para realtime quando um usuario bater o ponto

[ ] buguer menu  para melhor visualiação no mobile

[ ] search usuario por nome

[ ] listar por filter ultimos 30 dias ou até um ano
