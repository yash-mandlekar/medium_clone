const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

exports.databaseconnection = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("database connected!");
    } catch (error) {
        console.log(error.message);
    }
};
