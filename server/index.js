const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const model = require("./model.js");

const app = express();

app.use(cors());
app.use(express.json());

try {
  mongoose.connect("mongodb+srv://root:root@auth.sqijfkt.mongodb.net/");
} catch (err) {
  console.error(`MongoDB connection error: ${err}`);
}

app.post("/signup", async (req, res) => {
  try {
    const userData = new model(req.body);
    await userData.save();
    res.status(200).send("Successfully signed up!");
  } catch (err) {
    res.status(500).send(err.message || "Internal Server Error");
  }
});

app.post("/login", async (req, res) => {
    try {
      const userData = req.body;
      const user = await model.findOne({ email: userData.email });
  
      if (!user) {
        return res.status(404).send("User not found");
      }
  
      if (user.password === userData.password) {
        res.status(200).send("Logged in successfully!");
      } else {
        res.status(403).send("Wrong password");
      }
    } catch (err) {
      res.status(500).send(err.message || "Internal Server Error");
    }
  });

app.get("/success",(req,res)=>{
  res.send("You're Logged in successfully!");
})
  

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
