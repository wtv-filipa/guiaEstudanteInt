const express = require("express");
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const fetch = require("node-fetch");
const cookiesMiddleware = require("universal-cookie-express");

const app = express();

const accessTokenSecret =
  "IfLufdLinMxBrXfX3laC8sSi2pYaJpcpAGLsJZk3iWGkCpB8_Q7aON8a";
const clientID = "IfLufdLinMxBrXfX3laC8sSi2pYa";
const clientSecret = "JpcpAGLsJZk3iWGkCpB8_Q7aON8a";
const buff = Buffer.from(clientID + ":" + clientSecret);
const base64data = buff.toString("base64");

// Skip defined routes JWT verify on middleware
var unless = function (path, middleware) {
  return function (req, res, next) {
    let hasSkipRoute = path.map((obj) => {
      return req.path.includes(obj) && req.method === "GET";
    });
    if (req.path === '/v1/testemunhos/user'){
      return middleware(req, res, next);
    }
    if (hasSkipRoute.includes(true) ) {
      return next();
    }else {
      return middleware(req, res, next);
    }
  };
};

// Validate JWT (from cookie) + Get User Info
const authenticateJWT = (req, res, next) => {
  const authHeader = req.universalCookies.get("_utkn");
  const bearerToken = req.universalCookies.get("_utkFrb");

  if (authHeader) {
    jwt.verify(authHeader, accessTokenSecret, (err, auth) => {
      if (err) {
        return res.sendStatus(403);
      }
      return fetch("http://wso2-gw.ua.pt/userinfo?schema=openid", {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
        .then((response) => response.json())
        .then((user) => {
          req.auth = auth; // access_token
          req.UA_IUPI = user.UA_IUPI;
          req.userName = user.name;
          req.userEmail = user.email;
          req.bearerToken = bearerToken;
          next();
        });
    });
  } else {
    res.sendStatus(401);
  }
};

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(
    swaggerJsdoc({
      definition: {
        openapi: "3.0.0",
        info: {
          title: "API do Guia do Estudante Internacional",
          version: "0.1.0",
          description:
            "Esta é a API que funciona como base de dados para a aplicação do Guia do Estudante Internacional (GEI). Aqui é possível verificar quais são os pedidos que se podem fazer através da base de dados do GEI, assim através de um simples /Get é possível obter todos os testemunhos publicados pelos utilizadores, os testemunhos pessoais de cada indivíduo e ainda a To Do List personalizada de cada um. Além disso, apesar do login ser realizado através do email institucional, é necessário que o utilizador se registe para complementar algumas das suas informação, o que torna possível a obtenção dos dados de todos os utilizadores que fizeram login até ao momento. Adicionalmente, é possível acrescentar novos testemunhos e eliminá-los, e ainda mudar os valores pré-definidos da To Do List, sendo que estas duas funções apenas são possíveis quando o utilizador tem o login. Por fim, realça-se que esta documentação descrever com detalhe todas as operações possíveis, dentro dos documentos disponíveis na base de dados, e que informações é que estas podem retornar.",
        },
        servers: [
          {
            url: "http://localhost:3001/v1",
          },
        ],
      },
      apis: [
        "api/controllers/profiles.js",
        "api/controllers/profile.js",
        "api/controllers/testemunhos.js",
        "api/controllers/testemunho.js",
        "api/controllers/authentication.js",
        "api/controllers/toDoLists.js",
        "api/controllers/toDoList.js",
      ],
    })
  )
);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookiesMiddleware());
app.use(unless(["/be/login/", "/v1/testemunhos"], authenticateJWT));

app.use(
  "/v1/profiles",
  require("./controllers/profiles"),
  require("./controllers/profile")
);
app.use(
  "/v1/testemunhos",
  require("./controllers/testemunhos"),
  require("./controllers/testemunho")
);
app.use(
  "/v1/todolist",
  require("./controllers/toDoLists"),
  require("./controllers/toDoList")
);
app.use("/be", require("./controllers/authentication"));

app.get("/be/login/:code", (req, res) => {
  let code = req.params.code;

  fetch(
    `https://wso2-gw.ua.pt/token?grant_type=authorization_code&code=${code}&schema=openid&redirect_uri=http://localhost:3000/&client_id=IfLufdLinMxBrXfX3laC8sSi2pYa`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${base64data}`,
        "Content-type": "application/x-www-form-urlencoded",
        accept: "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((token) => {
      const info = jwt.sign(
        {
          token: token.access_token,
        },
        accessTokenSecret
      );
      return fetch("http://wso2-gw.ua.pt/userinfo?schema=openid", {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
        },
      })
        .then((res) => res.json())
        .then((user) => {
          res.send({
            info,
            user: {
              email: user.email,
              name: user.name,
            },
            token: token.access_token,
          });
        });
    });
});

app.listen(3001, () => console.log("Servidor a funcionar!"));
