//import the SEQUELize constructor form the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our database, pass in MySQL info for user/pass
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW, 
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
});

// console.log(sequelize);

module.export = sequelize;