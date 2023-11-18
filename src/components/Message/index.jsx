import React from "react";
import "./Message.css";
const Message = ({ id, isPeer, body }) => {
  return (
    <div
      key={id}
      className={`message ${isPeer ? "left-message" : "right-message"}`}
    >
      <p>{body}</p>
    </div>
  );
};

export default Message;
