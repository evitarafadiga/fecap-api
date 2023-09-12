const express = require('express');

const app = express();

app.get('/', (req, res) => res.status(200).send('Oi'));


app.listen(3333, () => console.log('running on port 3333'));


