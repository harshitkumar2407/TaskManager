import React from "react";

const Contact = () => {
  return (
    <section className="page-section page-card">
      <div className="page-heading">
        <div>
          <h1>Contact</h1>
          <p className="page-description">
            Need help or want to share feedback? Reach out and we’ll get back to
            you soon.
          </p>
        </div>
      </div>

      <div className="section-card">
        <p>Email: support@taskmanager.example</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Productivity Lane, Workflow City</p>
      </div>
    </section>
  );
};

export default Contact;
