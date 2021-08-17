const express = require('express');

const app = express();

app.get('/year/:age/', (req, res) => {

    res.set({ 'Content-Type': 'text/plain; charset=utf-8' });

    //  let name = req.params.name;
    let age = req.params.age;
    let msg = `you wereborn in ${2021-age} `;

    res.send(msg);
});

app.listen(3000, () => console.log('Application started on port 3000'));