import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container>
        <Row>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h5 className="footer-title">
                <span className="footer-icon">🌺</span>
                Colloki Femininity and Wellness
              </h5>
              <p className="footer-description">
                Empowering women through holistic wellness, self-care, and mindful living.
              </p>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h6 className="footer-subtitle">Quick Links</h6>
              <div className="footer-links">
                <span className="footer-link">🏠 Home</span>
                <span className="footer-link">🥗 Nutrition</span>
                <span className="footer-link">🌸 Menstrual Care</span>
                <span className="footer-link">🧘‍♀️ Mental Wellness</span>
              </div>
            </motion.div>
          </Col>
        </Row>
        <hr className="footer-divider" />
        <Row>
          <Col className="text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="footer-copyright"
            >
              © 2024 Colloki Wellness. Made with 💜 for women's wellbeing.
            </motion.p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;