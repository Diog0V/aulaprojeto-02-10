const express = require("express");
const router = express.Router();
const produto = require("/produto");

router.get("/produto" , (req,res)=>{
    res.render("produto");
});

router.post("/salvarproduto", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Produto.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    });
});

router.get("/produto", (req, res) => {
    Produto.findAll({ raw: true }).then(produtos => {
        console.log(produtos);
    });
    res.render("produto/index");
});
router.listen(8080, () => {
    console.log("ta rodando")
});
module.exports=router;