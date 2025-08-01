import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DailyTip from '../components/DailyTip';

const Home = () => {
  const features = [
    {
      icon: '🥗',
      title: 'Nutrition Guidance',
      description: 'Discover healthy eating tips and meal planning strategies tailored for women.',
      link: '/nutrition',
      color: '#28a745'
    },
    {
      icon: '🌸',
      title: 'Menstrual Care',
      description: 'Comprehensive support for menstrual health and cycle management.',
      link: '/menstrual-care',
      color: '#e91e63'
    },
    {
      icon: '🤱',
      title: 'Pregnancy Support',
      description: 'Expert guidance through every stage of your pregnancy journey.',
      link: '/pregnancy-support',
      color: '#ff9800'
    },
    {
      icon: '🧘‍♀️',
      title: 'Mental Wellness',
      description: 'Tools and techniques for emotional balance and mental health.',
      link: '/mental-wellness',
      color: '#9c27b0'
    },
    {
      icon: '✨',
      title: 'Lifestyle Management',
      description: 'Create sustainable routines for a balanced and fulfilling life.',
      link: '/lifestyle',
      color: '#2196f3'
    },
    {
      icon: '💬',
      title: 'Share Feedback',
      description: 'Help us improve by sharing your thoughts and experiences.',
      link: '/feedback',
      color: '#ff5722'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="hero-title">
                  Welcome to <span className="brand-highlight">Colloki</span>
                  <br />
                  <span className="hero-subtitle">Femininity & Wellness</span>
                </h1>
                <p className="hero-description">
                  Your comprehensive companion for holistic women's health. 
                  Discover personalized wellness tips, expert guidance, and 
                  supportive resources for every stage of your journey.
                </p>
                <div className="hero-buttons">
                  <Button 
                    as={Link} 
                    to="/nutrition" 
                    variant="primary" 
                    size="lg" 
                    className="me-3 mb-2"
                  >
                    Start Your Journey 🌟
                  </Button>
                  <Button 
                    as={Link} 
                    to="/mental-wellness" 
                    variant="outline-primary" 
                    size="lg"
                    className="mb-2"
                  >
                    Explore Wellness 🧘‍♀️
                  </Button>
                </div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <DailyTip />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="section-title">Your Wellness Journey Starts Here</h2>
                <p className="section-description">
                  Explore our comprehensive wellness resources designed specifically for women
                </p>
              </motion.div>
            </Col>
          </Row>
          <Row>
            {features.map((feature, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="feature-card h-100">
                    <Card.Body className="text-center">
                      <div 
                        className="feature-icon"
                        style={{ color: feature.color }}
                      >
                        {feature.icon}
                      </div>
                      <h5 className="feature-title">{feature.title}</h5>
                      <p className="feature-description">{feature.description}</p>
                      <Button 
                        as={Link} 
                        to={feature.link}
                        variant="outline-primary"
                        className="feature-btn"
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="stats-title">Empowering Women's Wellness</h3>
                <Row className="mt-4">
                  <Col md={3} className="mb-3">
                    <div className="stat-item">
                      <div className="stat-number">100+</div>
                      <div className="stat-label">Wellness Tips</div>
                    </div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div className="stat-item">
                      <div className="stat-number">6</div>
                      <div className="stat-label">Health Categories</div>
                    </div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div className="stat-item">
                      <div className="stat-number">24/7</div>
                      <div className="stat-label">Available Support</div>
                    </div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div className="stat-item">
                      <div className="stat-number">💜</div>
                      <div className="stat-label">Made with Love</div>
                    </div>
                  </Col>
                </Row>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;