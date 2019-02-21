const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get("/", (req,res) => {
   res.render("index.html");
});

app.get('/example/:page', (req,res) => {
   res.render(`${req.params.page}.html`);
});

app.get('/files', (req,res) => {
   fs.readdir("./views/", (err, files)=>{
       res.send(files);
   })
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});