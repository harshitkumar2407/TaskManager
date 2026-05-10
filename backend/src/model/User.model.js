const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "Name must be at least 3 characters"],
        maxlength: [50, "Name must be less than 50 characters"],
        // required:[true,"Name is required"]
        lowercase: [true, "Name must be in lowercase"],
        trim: true,
        // match: [/^[a-zA-Z\s]+$/, "Name can only contain letters"],
        index: true,
    },
    username: {
        type: String,
        minlength: [3, "Username must be at least 3 characters"],
        maxlength: [30, "Username must be less than 30 characters"],
        unique: true,
        sparse: true,
        lowercase: true,
        trim: true,
    },
    email: {
        type: String,
        minlength: [5, "Email must be at least 5 characters"],
        maxlength: [50, "Email must be less than 50 characters"],
        required: [true, "Email is required"],
        unique: [true, "Email is already exist"],
        lowercase: [true, "Email must be in lowercase"],
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email",
        ],
    },
    password: {
        type: String,
        minlength: [6, "Password must be at least 6 characters"],
        maxlength: [100, "Password must be less than 100 characters"],
        required: [true, "Please enter password"],
        trim: true,
        select: false,
    },
}, {
    timestamps: true
}, );

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;