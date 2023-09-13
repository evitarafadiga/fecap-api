const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(router);
app.use(cors({
    origin: "http://localhost:3000",
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
}));

module.exports = app;
