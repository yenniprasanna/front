import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { apiService } from '../utils/api';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const categories = [
    { value: 'general', label: 'General Feedback', icon: '💬' },
    { value: 'nutrition', label: 'Nutrition Content', icon: '🥗' },
    { value: 'menstrual', label: 'Menstrual Care', icon: '🌸' },
    { value: 'pregnancy', label: 'Pregnancy Support', icon: '🤱' },
    { value: 'mental', label: 'Mental Wellness', icon: '🧘‍♀️' },
    { value: 'lifestyle', label: 'Lifestyle Management', icon: '✨' },
    { value: 'technical', label: 'Technical Issues', icon: '🔧' },
    { value: 'suggestion', label: 'Feature Suggestion', icon: '💡' }
  ];

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation (optional but must be valid if provided)
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await apiService.submitFeedback({
        name: formData.name.trim(),
        email: formData.email.trim() || null,
        category: formData.category,
        message: formData.message.trim()
      });

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your feedback! We appreciate your input and will review it carefully.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        category: 'general',
        message: ''
      });
      setErrors({});

    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Sorry, there was an error submitting your feedback. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="feedback-page">
      <Container className="py-5">
        <Row>
          <Col lg={12} className="text-center mb-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="page-title">
                <span className="page-icon">💬</span>
                Share Your Feedback
              </h1>
              <p className="page-description">
                Help us improve Colloki by sharing your thoughts, suggestions, and experiences
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="feedback-card">
                <Card.Body className="p-4">
                  {submitStatus && (
                    <Alert 
                      variant={submitStatus.type === 'success' ? 'success' : 'danger'}
                      className="mb-4"
                    >
                      <div className="d-flex align-items-center">
                        <span className="me-2">
                          {submitStatus.type === 'success' ? '✅' : '❌'}
                        </span>
                        {submitStatus.message}
                      </div>
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            <span className="me-1">👤</span>
                            Name <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            isInvalid={!!errors.name}
                            placeholder="Enter your name"
                            disabled={isSubmitting}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.name}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            <span className="me-1">📧</span>
                            Email <span className="text-muted">(optional)</span>
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            isInvalid={!!errors.email}
                            placeholder="Enter your email"
                            disabled={isSubmitting}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                          <Form.Text className="text-muted">
                            We'll only use this to follow up if needed
                          </Form.Text>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>
                        <span className="me-1">📂</span>
                        Category
                      </Form.Label>
                      <Form.Select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                      >
                        {categories.map(category => (
                          <option key={category.value} value={category.value}>
                            {category.icon} {category.label}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>
                        <span className="me-1">💭</span>
                        Your Message <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        isInvalid={!!errors.message}
                        placeholder="Share your thoughts, suggestions, or report any issues..."
                        disabled={isSubmitting}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message}
                      </Form.Control.Feedback>
                      <Form.Text className="text-muted">
                        {formData.message.length}/1000 characters
                      </Form.Text>
                    </Form.Group>

                    <div className="text-center">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isSubmitting}
                        className="px-5"
                      >
                        {isSubmitting ? (
                          <>
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                              className="me-2"
                            />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <span className="me-2">📤</span>
                            Submit Feedback
                          </>
                        )}
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col lg={4}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="mt-4 mt-lg-0">
                <Card.Header>
                  <h5 className="mb-0">
                    <span className="me-2">💡</span>
                    Feedback Guidelines
                  </h5>
                </Card.Header>
                <Card.Body>
                  <h6>We'd love to hear about:</h6>
                  <ul className="small">
                    <li>✨ Features you'd like to see</li>
                    <li>🐛 Any bugs or technical issues</li>
                    <li>📝 Content suggestions or corrections</li>
                    <li>🎨 Design or usability improvements</li>
                    <li>💭 Your overall experience</li>
                  </ul>

                  <h6 className="mt-3">Tips for helpful feedback:</h6>
                  <ul className="small mb-0">
                    <li>Be specific about issues</li>
                    <li>Include steps to reproduce problems</li>
                    <li>Mention your device/browser if relevant</li>
                    <li>Share what you love too!</li>
                  </ul>
                </Card.Body>
              </Card>

              <Card className="mt-4">
                <Card.Header>
                  <h6 className="mb-0">🤝 Other Ways to Connect</h6>
                </Card.Header>
                <Card.Body>
                  <p className="small mb-2">
                    <strong>Community:</strong> Join our wellness community discussions
                  </p>
                  <p className="small mb-2">
                    <strong>Newsletter:</strong> Get weekly wellness tips
                  </p>
                  <p className="small mb-0">
                    <strong>Social Media:</strong> Follow us for daily inspiration
                  </p>
                </Card.Body>
              </Card>

              <Card className="mt-4 bg-light">
                <Card.Body className="text-center">
                  <h6>🙏 Thank You!</h6>
                  <p className="small mb-0">
                    Your feedback helps us create a better wellness experience 
                    for all women. Every suggestion matters!
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Feedback;