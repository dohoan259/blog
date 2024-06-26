const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { log } = require('console');
const app = express();
const port = 3000;

const route = require('./routes/index.route.js');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// template engine
app.engine(
        'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
); // define name
app.set('view engine', 'hbs'); // use for system
app.set('views', path.join(__dirname, 'resources', 'views'));

// route
route(      app);

app.listen(port, () =>
    console.log(`Example listening on at http://localhost:${port}`),
);
