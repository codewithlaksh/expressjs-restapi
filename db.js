const mongoose = require('mongoose')
require('dotenv').config();

const connectToMongo = function () {
    mongoose.connect(`${process.env.NODE_ENV === "development"?process.env.MONGO_DEV_URI:process.env.MONGO_PROD_URI}`, () => {
        console.log("Connected to mongodb successfully!");
    })
}

module.exports = connectToMongo;