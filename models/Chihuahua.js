const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chihuahuaSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true, default: "https://via.placeholder.com/200x200" },
    createdDate: { type: Date, default: Date.now }
});
  
const Chihuahua = mongoose.model("Chihuahua", chihuahuaSchema);
  
module.exports = Chihuahua;