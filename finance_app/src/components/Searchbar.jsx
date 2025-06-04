import React, { useState } from "react";
import { TextField, Chip } from "@mui/material";

const mockFriends = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
  { id: "3", name: "Charlie" },
];

const SearchBar = ({ onSelect }) => {
  const [search, setSearch] = useState("");
  const [filteredFriends, setFilteredFriends] = useState([]);

  const handleSearch = (value) => {
    setSearch(value);
    if (value) {
      setFilteredFriends(
        mockFriends.filter((friend) =>
          friend.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredFriends([]);
    }
  };

  return (
    <div>
      <TextField
        label="Search Friend"
        variant="outlined"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div>
        {filteredFriends.map((friend) => (
          <Chip
            key={friend.id}
            label={friend.name}
            onClick={() => onSelect(friend)}
            style={{ margin: "5px", cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
