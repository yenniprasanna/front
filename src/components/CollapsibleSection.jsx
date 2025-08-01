import React, { useState } from 'react';
import { Card, Collapse } from 'react-bootstrap';
import { motion } from 'framer-motion';

const CollapsibleSection = ({ title, children, icon, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Card className="collapsible-card mb-3">
      <Card.Header 
        className="collapsible-header"
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer' }}
      >
        <motion.div
          className="d-flex justify-content-between align-items-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="d-flex align-items-center">
            <span className="section-icon me-2">{icon}</span>
            <h6 className="mb-0">{title}</h6>
          </div>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="collapse-arrow"
          >
            ▼
          </motion.span>
        </motion.div>
      </Card.Header>
      <Collapse in={open}>
        <Card.Body>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </Card.Body>
      </Collapse>
    </Card>
  );
};

export default CollapsibleSection;