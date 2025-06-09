// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col, Navbar, Offcanvas, Button } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Chat from './pages/Chat';
import PersonalExpense from './pages/PersonalExpense';
import FriendTransactions from './pages/FriendTransactions';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Router>
      {/* Mobile Top Navbar */}
      <Navbar bg="primary" variant="dark" expand={false} className="d-md-none">
        <Container fluid>
          <Button variant="light" onClick={() => setShowSidebar(true)}>
            ☰
          </Button>
          <Navbar.Brand className="ms-2">Finance App</Navbar.Brand>
        </Container>
      </Navbar>

      <Container fluid>
        <Row>
          {/* Sidebar for Desktop */}
          <Col md={3} lg={2} className="d-none d-md-block p-0">
            <Sidebar />
          </Col>

          {/* Offcanvas Sidebar for Mobile */}
          <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} className="bg-primary text-white">
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Sidebar onLinkClick={() => setShowSidebar(false)} />
            </Offcanvas.Body>
          </Offcanvas>

          {/* Main Content */}
          <Col xs={12} md={9} lg={10} className="p-4">
            <Routes>
              <Route path="/" element={<Chat />} />
              <Route path="/personal-expense" element={<PersonalExpense />} />
              <Route path="/friend-transactions" element={<FriendTransactions />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
