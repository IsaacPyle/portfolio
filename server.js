const express = require('express');
const app = express();
 
// Set EJS as templating engine
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
    res.render('pages/index');
});

app.get('/chess-project', (req, res) => {
    res.render('pages/project-pages/chess-project');
});

const server = app.listen(8080, function () {
    console.log('listening to port 8080')
});