import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    Email:{type:String,required:true,unique:true},
    FirstName:{type:String,required:true},
    LastName:{type:String,required:true},
    Password:{type:String,required:true},
},
    {timestamps:true,versionKey:false}
)

const UsersModel= mongoose.model("users",userSchema)
export default UsersModel