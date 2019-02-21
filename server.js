const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/:page', (req,res) => {
   res.render(`${req.path.replace("/","")}.html`);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});