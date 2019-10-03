const express = require('express');
const cors = require('cors');
const db = require('./models');
const router = require('./routes');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// // allow CORS
// const corsOptions = {
//     origin: '*',
//     optionsSuccessStatus: 200
// };

// connect mysql
dotenv.config();
const app = express();
db.sequelize.sync()
    .then(() => {
        console.log('connect to mysql', db);
    });
// app.use(cors(corsOptions));
app.use(cors({
    origin: true,
    credentials: true,
}));

// parse JSON and url-encoded query
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/', router);

app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});

module.exports = app;
