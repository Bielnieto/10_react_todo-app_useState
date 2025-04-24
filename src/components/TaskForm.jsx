import { useState } from "react";
import styles from "./TaskForm.module.css";

export const TaskForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      uuid: crypto.randomUUID(),
    });
    setFormData({
      title: "",
      description: "",
      status: "pending",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles["task-form"]}>
      <div className={styles["form-group"]}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className={styles["form-input"]}
        />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className={styles["form-input"]}
        />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className={styles["form-input"]}
        >
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <button type="submit" className={styles["submit-button"]}>
        Add Task
      </button>
    </form>
  );
};

