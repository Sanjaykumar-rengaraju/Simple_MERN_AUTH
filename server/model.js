const mongoose = require("mongoose")

const User = new mongoose.Schema({
    name : {type : String,require : true},
    email: { type: String , unique : true , require :true },
    password:{type :String , require : true}
})

const model = mongoose.model("Users",User)

module.exports = model