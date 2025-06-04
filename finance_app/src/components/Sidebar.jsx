import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";

const Sidebar = () => {
  return (
    <div style={{ width: "200px", padding: "10px", background: "#f4f4f4" }}>
      <List>
        <ListItem button component={Link} to="/chat">
          <ListItemText primary="Chat" />
        </ListItem>
        <ListItem button component={Link} to="/personal-expense">
          <ListItemText primary="Personal Expense" />
        </ListItem>
        <ListItem button component={Link} to="/friend-transactions">
          <ListItemText primary="Friend Transactions" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
