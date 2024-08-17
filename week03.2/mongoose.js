const mongoose = require("mongoose");

// Connect to the MongoDB database
mongoose.connect("mongodb+srv://ankiiisharma:n8K8sAANnxwDZ1I2@userappnew.6pundvn.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    
    // Define a Mongoose schema for users
    const userSchema = new mongoose.Schema({
      name: String,
      email: String,
      password: String
    });

    // Create a Mongoose model based on the schema
    const User = mongoose.model('User', userSchema);


     
    const user = new User({
      name: 'Ankit Sharma',
      email: 'ankit@gmail.com',
      password: '12345'
    });

    user.save()
      .then(() => {
        console.log("User saved successfully");
        mongoose.connection.close();
      })
      .catch(error => {
        console.error("Error saving user:", error);
        mongoose.connection.close();
      });
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });
