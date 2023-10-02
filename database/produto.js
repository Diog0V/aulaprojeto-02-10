const Sequelize= require("sequelize");
const connection= require("./database");

const Produto = connection
.define('produto', {
    titulo:{
        type: Sequelize.STRING,
        allowNulll:false
    },
    descricao:{
        type:Sequelize.TEXT,
        allowNulll:false
    }
});
Produto.sync({force:false});
module.exports = Produto;