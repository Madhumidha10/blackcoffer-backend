const { MongoClient } = require("mongodb");
require("dotenv").config();
const connectionString = process.env.MONGO_URL;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
let dbConnection;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }
 
      dbConnection = db.db("bctest");
      console.log("Successfully connected to MongoDB.");
 
      return callback;
    });
  },
 
  getDb: function () {
    return dbConnection;
  },
};
// const mongoose = require("mongoose");
// require("dotenv").config();
// mongoose.set('strictQuery', false);
// // const connectDatabase = () => {
//     mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
  
//   module.exports = connectDatabase;
  
//   const mongoose = require("mongoose");

//   const connectDatabase = () => {
//     mongoose
//       .connect(process.env.DB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//       })
//       .then((data) => {
//         console.log(`Mongodb connected with server: ${data.connection.host}`);
//       });
//   };
  
//   module.exports = connectDatabase;
  