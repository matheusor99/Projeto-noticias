module.exports = (app) => {

    app.get('/noticias', (req, res) => {
        /**
         * como tive um problema no meu computador referente a criar um banco de dados mysql
         * por isso criei um json para representar um banco de dados
         */
        var connection = app.config.dbConnection();
        var noticias = require('../../projeto_noticias_DB/noticias.json');

        connection.query('select * from noticias', (error, result) => {
            /** caso você tenha uma conexão com o banco de dados remova a linha abaixo  */
            result = noticias
            res.render("noticias/noticias", {noticias: result});
        });
    });
}