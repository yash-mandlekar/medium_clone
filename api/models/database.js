const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

exports.databaseconnection = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL||"mongodb+srv://pvalmadir:pvalmadir@cluster0.kr3psg1.mongodb.net/?retryWrites=true&w=majority");
        console.log("database connected!");
    } catch (error) {
        console.log(error.message);
    }
};
