const mongoose = require('mongoose');

exports.connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true, 
      useFindAndModify: false, 
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });

    console.log(`Database up and running on host ${conn.connection.host}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}