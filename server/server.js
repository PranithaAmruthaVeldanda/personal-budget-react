//Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;


app.use(cors());

const budget = require('./myBudget.json');
console.log(budget);



app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log("Example apI served listening at http://localhost:5000");
});