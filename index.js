console.log(process.env.NODE_ENV);

require('dotenv').config();
const express = require('express');

const app = express();

app.set('view engine', 'ejs');


app.use(express.static('public'));

app.get('/',  (req, res)=> {
res.render('home', {name:'jerry'});
 });



 //**********所有路由的後面
 app.use((req, res) => {
    res.type('text/plain'); res.status(404); res.send('404 - 找不到網頁');
    });

const port = process.env.PORT || 3001;
app.listen(port, ()=> {
console.log(`server started: ${port} -`, new Date());
 });