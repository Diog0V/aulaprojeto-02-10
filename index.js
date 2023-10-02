// npm i body-parse
localhost: 8080
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const connection = require("./database/database");

const Produto = require("./database/produto");
const produtocontroller=require("./produtocontroller");

app.use("/", produtocontroller);

connection
    .authenticate()
    .then(() => {
        console.log("conexao feita com o db");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());


app.set("view engine", "ejs");

app.use(express.static("public"));
