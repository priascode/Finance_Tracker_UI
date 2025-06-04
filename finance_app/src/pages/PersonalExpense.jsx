import React, { useState } from "react";
import { TextField, Button, List, ListItem, ListItemText } from "@mui/material";

const PersonalExpense = () => {
  const [expenses, setExpenses] = useState([]);
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (item.trim() !== "" && amount.trim() !== "") {
      setExpenses([...expenses, { item, amount }]);
      setItem("");
      setAmount("");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Personal Expense Tracker</h2>
      <List>
        {expenses.map((expense, index) => (
          <ListItem key={index}>
            <ListItemText primary={expense.item + " - ₹" + expense.amount} />
          </ListItem>
        ))}
      </List>
      <TextField
        fullWidth
        variant="outlined"
        label="Expense Item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Amount (₹)"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ marginTop: "10px" }}
      />
      <Button variant="contained" color="primary" onClick={addExpense} style={{ marginTop: "10px" }}>
        Add Expense
      </Button>
    </div>
  );
};

export default PersonalExpense;