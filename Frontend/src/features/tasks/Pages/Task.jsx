import React, { useState, useContext, useEffect } from "react";
import useTasks from "../hooks/useTask";
import AddTask from "../UI/AddTask";
import "../style/task.scss";
import { AuthContext } from "../../auth/auth.context.js";
import { getTasks } from "../services/task.api";
import Button from "../../../UI/Button";
import Status from "../UI/Status.jsx";


const Task = () => {
  const [showForm, setShowForm] = useState(false);
  const [modalMode, setModalMode] = useState("create");
  const [selectedTask, setSelectedTask] = useState(null);
  const { tasksList, setTasksList, handleDeleteTask } = useTasks();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.id) return;

    async function fetchTasks() {
      try {
        const tasks = await getTasks(user.id);
        setTasksList(tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }

    fetchTasks();
  }, [user, setTasksList]);

  const handleDelete = async (taskId) => {
    try {
      await handleDeleteTask(taskId);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const toggleCreateModal = () => {
    if (showForm) {
      setShowForm(false);
      return;
    }

    setSelectedTask(null);
    setModalMode("create");
    setShowForm(true);
  };

  const openEditModal = (task) => {
    setSelectedTask(task);
    setModalMode("edit");
    setShowForm(true);
  };

  const openViewModal = (task) => {
    setSelectedTask(task);
    setModalMode("view");
    setShowForm(true);
  };

  return (
    <section className="page-section">
      <div className="page-heading">
        <div>
          <h1>Tasks</h1>
          <p className="page-description">
            Your task list is waiting. Add new items and keep track of progress.
          </p>
        </div>

        <Button variant="primary" onClick={toggleCreateModal}>
          {showForm ? "Close" : "Add Task"}
        </Button>
      </div>

      {showForm && (
        <AddTask
          mode={modalMode}
          taskData={selectedTask}
          setShowForm={setShowForm}
          showForm={showForm}
        />
      )}

      {tasksList.length === 0 ? (
        <div className="section-card">
          <p>
            No tasks available yet. Click the button above to create your first
            task.
          </p>
        </div>
      ) : (
        <div className="task-list">
          {tasksList.map((task) => (
            <article className="task-card" key={task._id}>
              <h3>{task.task}</h3>
              <p>{task.description}</p>
              <p>Status: <Status status={task.status} /></p>

              <p>Priority: {task.priority}</p>
              <div className="task-actions">
                <Button variant="ghost" onClick={() => openViewModal(task)}>
                  View
                </Button>
                <Button variant="ghost" onClick={() => openEditModal(task)}>
                  Edit
                </Button>
                <Button variant="ghost" onClick={() => handleDelete(task._id)}>
                  Delete
                </Button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Task;
