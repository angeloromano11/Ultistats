require('dotenv').config();
const express = require('express');
const app = express();

//mdw
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(require('./routes/index'));

app.listen(process.env.PORT || 4000);
console.log(`server up on port ${process.env.PORT}`);

//front
app.use(express.static('public'));
