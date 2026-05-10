const { Schema, model } = require("mongoose");


const TaskSchema = new Schema({
    task:{
        type:String,
        required:[true,"Task Name is require"],
        minlength:[3,"Task Name must be at least 3 characters"],
        maxlength:[50,"Task Name must be less than 50 characters"],
        trim:true
    },
    description:{
        type:String,
        default:"",
        maxlength:[500,"Description must be less than 500 characters"],
        trim:true
    },
    status:{
        type:String,
        enum:["Pending","In Progress","Completed"],
        
        default:"Pending"
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
        index:true
    },
    priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium"
}

},{timestamps:true,timeseries:true})

const UserModel = model("Task",TaskSchema)

module.exports = UserModel