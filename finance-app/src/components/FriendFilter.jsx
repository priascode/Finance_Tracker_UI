// components/FriendFilter.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const transactionTypes = ['You have to Pay', 'You Paid', 'You have to receive', 'You received'];

function FriendFilter({ filters, setFilters, handleTypeChange, onClose }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '80px',
        right: '30px',
        width: '300px',
        background: 'white',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        padding: '20px',
        zIndex: 10,
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="mb-0">Filter</h6>
        <Button variant="light" size="sm" onClick={onClose}>
          ✖
        </Button>
      </div>

      <Form.Group className="mb-3">
        <Form.Label>From Date</Form.Label>
        <Form.Control
          type="date"
          value={filters.fromDate}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, fromDate: e.target.value }))
          }
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>To Date</Form.Label>
        <Form.Control
          type="date"
          value={filters.toDate}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, toDate: e.target.value }))
          }
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Transaction Type</Form.Label>
        {transactionTypes.map((type) => (
          <Form.Check
            key={type}
            type="checkbox"
            label={type}
            checked={filters.transactionTypes.includes(type)}
            onChange={() => handleTypeChange(type)}
          />
        ))}
      </Form.Group>

      <div className="d-flex justify-content-end">
        <Button variant="primary" onClick={onClose}>
          Apply
        </Button>
      </div>
    </div>
  );
}

export default FriendFilter;
