import React, { useState } from "react";
import { TextField, MenuItem, Select, Button } from "@mui/material";
import dayjs from "dayjs";

const transactionTypes = ["Expense", "Income", "Debt", "Settlement"];

const Filters = () => {
  const [fromDate, setFromDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [toDate, setToDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [selectedTypes, setSelectedTypes] = useState([]);

  const applyFilters = () => {
    console.log({ fromDate, toDate, selectedTypes });
  };

  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
      <TextField
        label="From Date"
        type="date"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="To Date"
        type="date"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      <Select
        multiple
        value={selectedTypes}
        onChange={(e) => setSelectedTypes(e.target.value)}
      >
        {transactionTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
      <Button variant="contained" color="primary" onClick={applyFilters}>
        Apply
      </Button>
    </div>
  );
};

export default Filters;
