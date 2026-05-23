const { Schema, model } = require("mongoose");

const TaskSchema = new Schema(
  {
    task: {
      type: String,
      required: [true, "Task Name is require"],
      minlength: [1, "Task Name must be at least 1 characters"],
      maxlength: [50, "Task Name must be less than 50 characters"],
      trim: true,
    },
    description: {
      type: String,
      default: "",
      maxlength: [1000, "Description must be less than 1000 characters"],
      trim: true,
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],

      default: "Pending",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
      lowercase: true,
    },
  },
  { timestamps: true, timeseries: true },
);

const TaskModel = model("Task", TaskSchema);

module.exports = TaskModel;
