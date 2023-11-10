import React from "react";
import "./index.css";
const Message = ({ id, isPeer, body }) => {
  return (
    <div className={`message ${isPeer ? "left-message" : "right-message"}`}>
      <p>{body}</p>
    </div>
  );
};

export default Message;
