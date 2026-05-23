import React from "react";

const About = () => {
  return (
    <section className="page-section page-card">
      <div className="page-heading">
        <div>
          <h1>About Task Manager</h1>
          <p className="page-description">
            A lightweight task tracker designed to help you manage priorities,
            deadlines, and progress with confidence.
          </p>
        </div>
      </div>

      <div className="section-card">
        <p>
          Task Manager is built to keep your workflow simple and your focus
          sharp. Add tasks, monitor statuses, and delete completed items with a
          clean interface that feels effortless.
        </p>
        <p>
          Whether you're planning work for the day or managing a long-term
          project, this app gives you a structured way to stay on top of what
          matters most.
        </p>
      </div>
    </section>
  );
};

export default About;
