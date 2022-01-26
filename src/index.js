const express = require('express');
const app = express();

//mdw
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(require('./routes/index'));

app.listen(3000);
console.log(`server up on port 3000`);

//front
app.use(express.static('public'));
