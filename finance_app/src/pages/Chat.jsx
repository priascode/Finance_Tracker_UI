import React, { useState } from "react";
import { TextField, Button, List, ListItem, ListItemText } from "@mui/material";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Chat</h2>
      <List>
        {messages.map((msg, index) => (
          <ListItem key={index}>
            <ListItemText primary={msg.sender + ": " + msg.text} />
          </ListItem>
        ))}
      </List>
      <TextField
        fullWidth
        variant="outlined"
        label="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={sendMessage} style={{ marginTop: "10px" }}>
        Send
      </Button>
    </div>
  );
};

export default Chat;