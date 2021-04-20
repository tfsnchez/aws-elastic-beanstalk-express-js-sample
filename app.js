const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('thats after the changes in aws environment '));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
