const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '👚',
        size: 'Medium'
    })
});

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        return res.status(418).send({ message: "Logo is required" })
    }

    res.send({
        tshirt: `👕 with your logo ${logo} and id ${id}`
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});

