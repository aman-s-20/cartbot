const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      dbName: "CartChat",
    });

    console.log("MongoDB Connected...");
  } catch (error) {
    console.log("ERROR WHILE CONNECTING TO DB: " + error);
    process.exit(1);
  }
};

module.exports = connectDB;
