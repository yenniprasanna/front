import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/nutrition', label: 'Nutrition', icon: '🥗' },
    { path: '/menstrual-care', label: 'Menstrual Care', icon: '🌸' },
    { path: '/pregnancy-support', label: 'Pregnancy', icon: '🤱' },
    { path: '/mental-wellness', label: 'Mental Wellness', icon: '🧘‍♀️' },
    { path: '/lifestyle', label: 'Lifestyle', icon: '✨' },
    { path: '/feedback', label: 'Feedback', icon: '💬' }
  ];

  return (
    <Navbar 
      expand="lg" 
      className="custom-navbar" 
      expanded={expanded}
      onToggle={setExpanded}
      fixed="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="brand-icon">🌺</span>
            <span className="brand-text">Colloki</span>
          </motion.div>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item) => (
              <Nav.Link
                key={item.path}
                as={Link}
                to={item.path}
                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setExpanded(false)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="nav-link-content"
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.label}</span>
                </motion.div>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;