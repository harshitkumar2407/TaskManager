import React from "react";
import "./Status.scss";

const Status = ({ status }) => {
  const normalizedStatus = String(status || "").trim();

  switch (normalizedStatus) {
    case "Pending":
      return <div className="status pending">Pending</div>;
    case "In Progress":
      return <div className="status in-progress">In Progress</div>;
    case "Completed":
      return <div className="status completed">Completed</div>;
    default:
      return <div className="status">{normalizedStatus || "Unknown"}</div>;
  }
};

export default Status;
