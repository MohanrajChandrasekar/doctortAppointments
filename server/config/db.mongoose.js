const mongoose = require('mongoose');
const dbUrl = process.env.dbURL;
const chalk = require('chalk');

mongoose.connect(dbUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true 
});

mongoose.connection.on('connected', () => {
    console.log(chalk.green(`Mongoose Connected!`));
});

mongoose.connection.on('error', (error) => {
    console.log(chalk.red.bold('Error: ') + error.message );
});

mongoose.connection.on('disconnected', () => {
    console.log(chalk.yellow('Mongoose disconnected!'));
});

process.on('SIGINT', async() => {
    await mongoose.connection.close();
    process.exit(0);
});