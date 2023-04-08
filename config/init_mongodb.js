const mongoose = require("mongoose");
const mongoUrl = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017'
const dbName = process.env.DB_NAME || 'school-diary'

mongoose
  .connect(process.env.MONGO_URI, {
    dbName:dbName,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`mongodb connected `);
  })
  .catch((error) => {
    console.log(`Error:${error.message}`);
  });



  mongoose.connection.on("connected", () => {
    console.log(`Mongoose connected to ${dbName}`);
  });
  
  mongoose.connection.on("error", (err) => {
    console.log(err.message);
  });
  
  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose connection is disconnected");
  });
  
  process.on("SIGINT", async () => {
    await mongoose.connection.close();
    process.exit(0);
  });