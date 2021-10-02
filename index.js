const express = require('express');
const app = express();
const cors = require('cors');
const APIRouter = require('./routes/api.routes')




app.use(express.json());
app.use(cors());

app.use("/api/codebreaker", APIRouter);


module.exports = app