// FriendTransactions.js
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import FriendFilter from '../components/FriendFilter';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import './FriendTransactions.css';
import { Button } from 'react-bootstrap';
import { FaSearch, FaFilter } from 'react-icons/fa';

const sampleFriends = [
  { id: 'a43542esfe4d54s6', name: 'Arun' },
  { id: 2, name: 'Divya' },
  { id: 3, name: 'Santhosh' },
];

const transactionData = [
  { friendId: 'a43542esfe4d54s6', item: 'coffee', amount: 40, type: 'You have to receive', date: '2/5/2025' },
  { friendId: 'a43542esfe4d54s6', item: 'Apple', amount: 60, type: 'You have to pay', date: '3/5/2025' },
  { friendId: 'a43542esfe4d54s6', item: 'coffee', amount: 20, type: 'You receivd', date: '11/5/2025' },
  { friendId: 'a43542esfe4d54s6', item: 'Apple', amount: 15, type: 'You Paid', date: '19/5/2025' },

];

function FriendTransactions() {
  const [search, setSearch] = useState('');
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showSubNodes, setShowSubNodes] = useState(false);

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

  const subTypes = ['You have to receive', 'You have to pay', 'You receivd', 'You Paid'];

  const getNodeData = (type) => {
    const transactions = transactionData.filter(t => t.friendId === selectedFriend?.id && t.type === type);
    return transactions.map(t => `${t.item} - ₹${t.amount}`).join('\n');
  };

const nodes = [];

if (selectedFriend) {
  nodes.push({
    id: 'friend',
    data: { label: selectedFriend.name },
    position: { x: 350, y: 50 },
    style: {
      background: '#007bff',
      color: '#fff',
      borderRadius: 8,
      padding: 10,
    },
  });

  if (showSubNodes) {
    nodes.push(
      {
        id: 'receive',
        type: 'custom',
        data: { label: `You have to receive\n${getNodeData('You have to receive')}` },
        position: { x: 10, y: 250 },
      },
      {
        id: 'pay',
        type: 'custom',
        data: { label: `You have to pay\n${getNodeData('You have to pay')}` },
        position: { x: 700, y: 250 },
      },
      {
        id: 'received',
        type: 'custom',
        data: { label: `You receivd\n${getNodeData('You receivd')}` },
        position: { x: 250, y: 250 },
      },
      {
        id: 'paid',
        type: 'custom',
        data: { label: `You Paid\n${getNodeData('You Paid')}` },
        position: { x: 520, y: 250 },
      }
    );
  }
}

const edges = showSubNodes
  ? [
      { id: 'e1', source: 'friend', target: 'receive', type: 'smoothstep' },
      { id: 'e2', source: 'friend', target: 'pay', type: 'smoothstep' },
      { id: 'e3', source: 'friend', target: 'received', type: 'smoothstep' },
      { id: 'e4', source: 'friend', target: 'paid', type: 'smoothstep' },
    ]
  : [];


  return (
    <div>
      {/* Catchy Animated Heading */}
      <div className="text-center mb-4">
        <h2 className="animated-text">Track Your Friend Expenses</h2>
      </div>

      {/* Search bar and Filter button in same row */}
      <div className="d-flex justify-content-center align-items-center gap-3 mb-1">
        <div className="search-container d-flex align-items-center rounded-pill px-3" style={{ backgroundColor: '#ffffff', width: '70%', maxWidth: '600px' }}>
          <FaSearch className="me-2 text-muted" />
          <Form.Control
            type="text"
            placeholder="Search your friend..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-0 bg-transparent"
            style={{ boxShadow: 'none' }}
          />
        </div>

        <Button variant="outline-primary" onClick={() => setShowFilters(prev => !prev)}>
          <FaFilter />
        </Button>
      </div>

      {/* Dropdown suggestions */}
      {search && filteredList.length > 0 && (
  <div className="suggestion-box">
    {filteredList.map(friend => (
      <div
        key={friend.id}
        className="suggestion-item"
        onClick={() => {
  setSelectedFriend(friend);
  setSearch('');
  setShowFilters(false);
  setShowSubNodes(false); // Hide sub-nodes initially
}}

      >
        {friend.name}
      </div>
    ))}
  </div>
)}

      {selectedFriend && (
        <div style={{ height: 400 }}>
          <ReactFlow
  nodes={nodes}
  edges={edges}
   defaultViewport={{ x: 0, y: 0, zoom: 1 }}
   panOnDrag={false}
  zoomOnScroll={false}
  zoomOnPinch={false}
  zoomOnDoubleClick={false}
  panOnScroll={false}
  nodesDraggable={false}
  elementsSelectable={false}
  nodeTypes
  draggable={false}
  style={{ height: '400px', borderRadius: '8px' }}
  onNodeClick={(event, node) => {
    if (node.id === 'friend') {
      setShowSubNodes(prev => !prev);
    }
  }}
  // fitView
/>


          {/* <ReactFlow nodes={nodes} edges={edges} fitView>
            {/* <Background /> */}
            {/* <Controls /> */}
          {/* </ReactFlow>  */}
        </div>
      )}

      {showFilters && (
        <FriendFilter
          filters={filters}
          setFilters={setFilters}
          handleTypeChange={handleTypeChange}
          onClose={() => setShowFilters(false)}
        />
      )}
    </div>
  );
}

export default FriendTransactions;
