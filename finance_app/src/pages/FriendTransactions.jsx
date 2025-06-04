import React, { useState } from "react";
import SearchBar from "../components/Searchbar";
import Filters from "../components/Filters";

const FriendTransactions = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Friend Transactions</h2>
      <SearchBar onSelect={setSelectedFriend} />
      {selectedFriend && (
        <div>
          <h3>Selected: {selectedFriend.name}</h3>
          <Filters />
        </div>
      )}
    </div>
  );
};

export default FriendTransactions;
