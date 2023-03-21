const { Sequelize } = require('sequelize');

// process.env.MYSQLPASSWORD
const sequelize = new Sequelize('chatapp','root','', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10000,
        acquire: 30000,
        min: 0,
        idle: 10000
    }
})


sequelize.authenticate();
// try {
//     sequelize.authenticate();
// }catch(e){
//     console.log("Unable to authenticate");
//     console.log(e);
// }

exports.sequelize = sequelize;