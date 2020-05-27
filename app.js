const express = require('express');
const app = express();
 
const path = require('path');

app.use(express.static(path.join(__dirname, '')));
app.set('views', path.join(__dirname, ''));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get("/", function(req, res){
    //s
    res.render('index.html');//renderizar arquivo HTML.
})

app.get("/loja", function(req, res){

    res.render('loja.html');
})

app.get("/suporte", function(req, res){

    res.render('suporte.html');
})


app.listen(3000, function(){
    console.log("Servidor rodando na URL: http://localhost:3000 .")

})