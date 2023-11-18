import React from "react";
import "./ChatBox.css";
const ChatBox = ({ children }) => {
  return <div className="chat-box">{children}</div>;
};

export default ChatBox;
