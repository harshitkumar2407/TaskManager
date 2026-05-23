import React, { useState, useEffect } from "react";
import useTasks from "../hooks/useTask";
import "../style/task.scss";
import FormInput, { Dropdown } from "../../auth/UI/FormInput";
import Button from "../../../UI/Button";

const AddTask = ({
  mode = "create",
  taskData = null,
  showForm,
  setShowForm,
}) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [priority, setPriority] = useState("Medium");
  const [error, setError] = useState("");

  const { handleAddTask, handleUpdateTask } = useTasks();
  const isView = mode === "view";
  const isEdit = mode === "edit";

  useEffect(() => {
    if (taskData && (isEdit || isView)) {
      setTask(taskData.task || "");
      setDescription(taskData.description || "");
      setStatus(taskData.status || "Pending");
      setPriority(
        taskData.priority
          ? taskData.priority[0].toUpperCase() + taskData.priority.slice(1)
          : "Medium",
      );
    } else {
      setTask("");
      setDescription("");
      setStatus("Pending");
      setPriority("Medium");
    }
  }, [taskData, isEdit, isView, showForm]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isView) {
      setShowForm(false);
      return;
    }

    try {
      if (isEdit && taskData?._id) {
        await handleUpdateTask(
          taskData._id,
          task,
          description,
          status,
          priority,
        );
      } else {
        await handleAddTask(task, description, status, priority);
      }
      setTask("");
      setDescription("");
      setStatus("Pending");
      setPriority("Medium");
      setError("");
      setShowForm(false);
    } catch (err) {
      setError(err.message || "Unable to save task");
      console.error("Error saving task:", err);
    }
  };

  const title = isView ? "Task Details" : isEdit ? "Edit Task" : "Add Task";

  return (
    <div className="add-task-container">
      <div className="content">
        <div className="header">
          <div>
            <h1>{title}</h1>
            <p className="page-description">
              {isView
                ? "Review task details below."
                : isEdit
                  ? "Update task details and save your changes."
                  : "Capture the next task and assign priority so you can focus faster."}
            </p>
          </div>
          <button className="close-btn" onClick={() => setShowForm(false)}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <FormInput
              label="Task"
              type="text"
              id="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              disabled={isView}
            />
          </div>

          <div className="form-row">
            <FormInput
              label="Description"
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={isView}
            />
          </div>

          <Dropdown
            label="Status"
            id="status"
            options={["Pending", "In Progress", "Completed"]}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            disabled={isView}
          />

          <Dropdown
            label="Priority"
            id="priority"
            options={["Low", "Medium", "High"]}
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            disabled={isView}
          />

          {error && <div className="alert">{error}</div>}

          {!isView && <Button type="submit">Save Task</Button>}
        </form>
      </div>
    </div>
  );
};

export default AddTask;
