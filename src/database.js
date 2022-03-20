const mongoose = require('mongoose');
const {MONGO_CNN} = require('./config')

const dbConnection = async () => {
    try { 
        await mongoose.connect(MONGO_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } )
        console.log('Base de datos conectada');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos')   
    }
}

module.exports = {dbConnection}