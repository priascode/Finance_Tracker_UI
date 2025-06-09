// pages/FriendTransactions.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';
import FriendFilter from '../components/FriendFilter';

const sampleFriends = [
  { id: 1, name: 'Arun' },
  { id: 2, name: 'Divya' },
  { id: 3, name: 'Santhosh' },
];

function FriendTransactions() {
  const [search, setSearch] = useState('');
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    fromDate: '',
    toDate: '',
    transactionTypes: [],
  });

  const filteredList = sampleFriends.filter(friend =>
    friend.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleTypeChange = (type) => {
    setFilters((prev) => {
      const exists = prev.transactionTypes.includes(type);
      return {
        ...prev,
        transactionTypes: exists
          ? prev.transactionTypes.filter(t => t !== type)
          : [...prev.transactionTypes, type],
      };
    });
  };

  return (
    <div style={{ position: 'relative' }}>
      <h4>Friend Transactions</h4>

      <Form.Group controlId="friendSearch" className="mb-3">
        <Form.Label>Search Friend</Form.Label>
        <Form.Control
          type="text"
          placeholder="Type to search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && filteredList.map(friend => (
          <div
            key={friend.id}
            onClick={() => {
              setSelectedFriend(friend);
              setSearch('');
              setShowFilters(false);
            }}
            style={{ cursor: 'pointer', padding: '5px 0' }}
          >
            {friend.name}
          </div>
        ))}
      </Form.Group>

      {selectedFriend && (
        <div className="d-flex flex-column align-items-center mb-3 position-relative">
          {/* Centered Friend Node */}
          <div
            className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center mb-3"
            style={{ width: '120px', height: '120px', fontSize: '1.3rem' }}
          >
            {selectedFriend.name}
          </div>

          {/* Floating Filter Button - top right corner */}
          <Button
            variant="outline-primary"
            onClick={() => setShowFilters(prev => !prev)}
            style={{ position: 'absolute', top: '10px', right: '10px' }}
          >
            <FaFilter />
          </Button>
        </div>
      )}

      {showFilters && (
        <FriendFilter
          filters={filters}
          setFilters={setFilters}
          handleTypeChange={handleTypeChange}
        />
      )}
    </div>
  );
}

export default FriendTransactions;
