const express = require("express");
const app = express();
const port = process.env.PORT || 7000; 

app.use(express.json());

app.get('/home', (req, res)=>{
    res.send('hello world !');
})

app.post('/api/items', (req, res) => {
    const item = req.body;
    // do something with item 
    console.log(item);
    res.send(item);
});

app.listen(port, ()=>{
    console.log(`connection is set up at ${port}`);
})