const express = require('express');
const app = express();
const port = 6003;
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.get('/', (req, res) => {
    res.send("Hello, world!");
});

require("./app/routes/routes.js")(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
