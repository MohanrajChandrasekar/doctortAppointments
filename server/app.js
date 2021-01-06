const app = require('express')();
const morgan = require('morgan');
const helmet = require('helmet');
const chalk = require('chalk');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(helmet());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods', "*");
    next();
});

require('dotenv').config();
require('./config/db.mongoose');
require('./config/routes')(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(chalk.green(`Server listening on port: ${PORT}`));
});
