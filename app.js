const express = require("express");
require('./conn');
const router = require('./router');

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(router);

app.listen(port, ()=>{
    console.log(`connection is setup at ${port}`);
})