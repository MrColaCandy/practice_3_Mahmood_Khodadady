import React from "react";
import "./index.css";

import Message from "../Message";
const MessageList = ({ messages = [] }) => {
  return (
    <>
      <div className="scroll-view message">
        <div className="scroll">
          {messages.map((message) => {
            return (
              <Message
                id={message.id}
                body={message.body}
                isPeer={message.isPeer}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MessageList;
