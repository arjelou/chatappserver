const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

app.use(cors({origin: [`http://localhost:3000`]}))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoutes)

app.listen(4000);

