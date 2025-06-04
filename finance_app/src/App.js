import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Chat from "./pages/Chat";
import PersonalExpense from "./pages/PersonalExpense";
import FriendTransactions from "./pages/FriendTransactions";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route path="/chat" element={<Chat />} />
          <Route path="/personal-expense" element={<PersonalExpense />} />
          <Route path="/friend-transactions" element={<FriendTransactions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
