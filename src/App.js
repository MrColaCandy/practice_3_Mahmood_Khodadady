import React from "react";
import ChatBox from "./components/ChatBox";
import Actions from "./components/Actions";
import MessageList from "./components/MessageList";
import messages from "./data/messages.json";
const App = () => {
  return (
    <>
      <ChatBox>
        <MessageList messages={messages} />
        <Actions />
      </ChatBox>
    </>
  );
};

export default App;
