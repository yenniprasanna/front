import React, { useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { motion } from 'framer-motion';

const TabNavigation = ({ tabs, defaultActiveKey }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey || tabs[0]?.eventKey);

  return (
    <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
      <Nav variant="pills" className="custom-tabs mb-4">
        {tabs.map((tab) => (
          <Nav.Item key={tab.eventKey}>
            <Nav.Link 
              eventKey={tab.eventKey}
              className="tab-link"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="tab-content"
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-title">{tab.title}</span>
              </motion.div>
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      
      <Tab.Content>
        {tabs.map((tab) => (
          <Tab.Pane key={tab.eventKey} eventKey={tab.eventKey}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {tab.content}
            </motion.div>
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Tab.Container>
  );
};

export default TabNavigation;