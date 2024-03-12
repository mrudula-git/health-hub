const mongoose = require('mongoose');

const commentModel = new mongoose.Schema(
   { 
    name:String,
    email:String,
    mobile:String,
    message:String
});

export const People =mongoose.models.peoples || mongoose.model("peoples", commentModel);