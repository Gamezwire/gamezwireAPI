const express = require('express');
const app = express();
const dbc = require("./dbc.js");
const port = 3000;

var articles;
const sql = `SELECT * FROM articles ORDER BY Date DESC`;
dbc.query(sql, (result) =>{
  articles = result;
})


app.get('/search', (req, res) => {
  var query = req.query.q;
  if (!query) {
    return res.status(400).send('Query parameter is missing');
  }

  const results = articles.filter(article => article.Title.toLowerCase().includes(query.toLowerCase()));
  res.json(results);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});