import React, { useState, useEffect } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { apiService } from '../utils/api';

const DailyTip = ({ category = null }) => {
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTip = async () => {
    setLoading(true);
    setError(null);
    try {
      const tipData = await apiService.getTip(category);
      setTip(tipData);
    } catch (err) {
      setError(err.message || 'Failed to fetch tip. Please try again.');
      console.error('Error fetching tip:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTip();
  }, [category]);

  return (
    <Card className="daily-tip-card">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="tip-title">
            <span className="tip-icon">💡</span>
            Daily Wellness Tip
          </h5>
          <Button 
            variant="outline-primary" 
            size="sm" 
            onClick={fetchTip}
            disabled={loading}
            className="refresh-btn"
          >
            {loading ? <Spinner size="sm" /> : '🔄'}
          </Button>
        </div>
        
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-3"
            >
              <Spinner animation="border" variant="primary" />
            </motion.div>
          ) : error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="alert alert-warning"
            >
              {error}
            </motion.div>
          ) : tip ? (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="tip-content">
                <span className="tip-category-icon">{tip.icon}</span>
                <p className="tip-text">{tip.tip}</p>
                <small className="tip-category">
                  Category: <span className="category-badge">{tip.category}</span>
                </small>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Card.Body>
    </Card>
  );
};

export default DailyTip;