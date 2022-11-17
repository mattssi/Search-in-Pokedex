/* 1 - Invocamos express*/
const express = require('express');
const app =express();

/* 4 - Directorio public*/
app.use('/resources', express.static('poketools'));
app.use('/resources', express.static(__dirname + '/poketools'));

/* 5 - Motor de plantillas*/
app.set('view engine', 'ejs');





app.get('/',(req, res)=>{
    res.render('index');
    })

app.use((req, res, next)=>{
    res.status(404).send("¿A donde te queres meter? Que tengas un buen día :)");
});
    



app.listen(1212,()=>{
    console.log("Servidor iniciado");
});