const express = require('express');
const mongoose = require('mongoose');

const bodyParser =require('body-parser');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

mongoose.connect('', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=> console.log('MongoDB Connected')).catch(err=> console.log(err));

app.use(bodyParser.json());

app.get('/api/example',(req,res)=>{

    res.json({
        message: 'Hello from the server!' });
});

app.use(express.static(path.join(__dirname, 'client','public','src')));

app.get('*', (req, res) =>{

    res.sendFile(path.join(__dirname, 'client','public','src','index.html'));
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));