import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import CollapsibleSection from '../components/CollapsibleSection';
import DailyTip from '../components/DailyTip';

const Nutrition = () => {
  const nutritionTips = [
    {
      title: 'Iron-Rich Foods',
      icon: '🥬',
      content: (
        <div>
          <p>Essential for preventing anemia and maintaining energy levels:</p>
          <ListGroup variant="flush">
            <ListGroup.Item>🥩 Lean red meat and poultry</ListGroup.Item>
            <ListGroup.Item>🐟 Fish and seafood</ListGroup.Item>
            <ListGroup.Item>🥬 Dark leafy greens (spinach, kale)</ListGroup.Item>
            <ListGroup.Item>🫘 Legumes and beans</ListGroup.Item>
            <ListGroup.Item>🥜 Nuts and seeds</ListGroup.Item>
            <ListGroup.Item>🍫 Dark chocolate</ListGroup.Item>
          </ListGroup>
          <small className="text-muted">
            💡 Tip: Combine with vitamin C-rich foods to enhance absorption!
          </small>
        </div>
      )
    },
    {
      title: 'Calcium & Bone Health',
      icon: '🦴',
      content: (
        <div>
          <p>Support strong bones and prevent osteoporosis:</p>
          <ListGroup variant="flush">
            <ListGroup.Item>🥛 Dairy products (milk, yogurt, cheese)</ListGroup.Item>
            <ListGroup.Item>🥬 Collard greens and bok choy</ListGroup.Item>
            <ListGroup.Item>🐟 Canned salmon and sardines</ListGroup.Item>
            <ListGroup.Item>🥜 Almonds and tahini</ListGroup.Item>
            <ListGroup.Item>🥛 Fortified plant-based milks</ListGroup.Item>
          </ListGroup>
          <div className="mt-3 p-3 bg-light rounded">
            <strong>Daily Recommendation:</strong> 1,000-1,200mg for adult women
          </div>
        </div>
      )
    },
    {
      title: 'Hormonal Balance Foods',
      icon: '⚖️',
      content: (
        <div>
          <p>Foods that support healthy hormone production:</p>
          <ListGroup variant="flush">
            <ListGroup.Item>🥑 Avocados (healthy fats)</ListGroup.Item>
            <ListGroup.Item>🐟 Fatty fish (omega-3s)</ListGroup.Item>
            <ListGroup.Item>🥦 Cruciferous vegetables</ListGroup.Item>
            <ListGroup.Item>🫐 Berries (antioxidants)</ListGroup.Item>
            <ListGroup.Item>🌰 Nuts and seeds</ListGroup.Item>
            <ListGroup.Item>🍠 Sweet potatoes</ListGroup.Item>
          </ListGroup>
          <div className="alert alert-info mt-3">
            <strong>Note:</strong> Limit processed foods and excess sugar for optimal hormonal health.
          </div>
        </div>
      )
    },
    {
      title: 'Hydration & Skin Health',
      icon: '💧',
      content: (
        <div>
          <p>Stay hydrated for glowing skin and overall health:</p>
          <ListGroup variant="flush">
            <ListGroup.Item>💧 8-10 glasses of water daily</ListGroup.Item>
            <ListGroup.Item>🍵 Herbal teas (chamomile, green tea)</ListGroup.Item>
            <ListGroup.Item>🥒 Water-rich foods (cucumber, watermelon)</ListGroup.Item>
            <ListGroup.Item>🥥 Coconut water for electrolytes</ListGroup.Item>
            <ListGroup.Item>🍋 Lemon water for vitamin C</ListGroup.Item>
          </ListGroup>
          <div className="mt-3 p-3 bg-primary text-white rounded">
            <strong>Hydration Tip:</strong> Start your day with a glass of warm lemon water!
          </div>
        </div>
      )
    },
    {
      title: 'Energy-Boosting Snacks',
      icon: '⚡',
      content: (
        <div>
          <p>Healthy snacks to maintain steady energy levels:</p>
          <Row>
            <Col md={6}>
              <h6>🌅 Morning Snacks:</h6>
              <ul>
                <li>Greek yogurt with berries</li>
                <li>Overnight oats</li>
                <li>Smoothie bowls</li>
              </ul>
            </Col>
            <Col md={6}>
              <h6>🌆 Afternoon Snacks:</h6>
              <ul>
                <li>Apple with almond butter</li>
                <li>Hummus with veggies</li>
                <li>Trail mix</li>
              </ul>
            </Col>
          </Row>
          <div className="alert alert-success mt-3">
            <strong>Pro Tip:</strong> Combine protein with complex carbs for sustained energy!
          </div>
        </div>
      )
    }
  ];

  const mealPlanningTips = [
    '📝 Plan your meals weekly to ensure balanced nutrition',
    '🛒 Create a shopping list based on your meal plan',
    '🥘 Batch cook proteins and grains on weekends',
    '🥗 Prep vegetables and fruits for easy snacking',
    '🍱 Use portion control containers for balanced meals',
    '❄️ Freeze individual portions for busy days'
  ];

  return (
    <div className="nutrition-page">
      <Container className="py-5">
        <Row>
          <Col lg={12} className="text-center mb-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="page-title">
                <span className="page-icon">🥗</span>
                Nutrition Guidance
              </h1>
              <p className="page-description">
                Discover the power of nutrition for women's health and vitality
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row>
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="section-title mb-4">Essential Nutrition Topics</h3>
              {nutritionTips.map((tip, index) => (
                <CollapsibleSection
                  key={index}
                  title={tip.title}
                  icon={tip.icon}
                  defaultOpen={index === 0}
                >
                  {tip.content}
                </CollapsibleSection>
              ))}
            </motion.div>
          </Col>

          <Col lg={4}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="sticky-top" style={{ top: '100px' }}>
                <DailyTip category="nutrition" />
                
                <Card className="mt-4">
                  <Card.Header>
                    <h5 className="mb-0">
                      <span className="me-2">📋</span>
                      Meal Planning Tips
                    </h5>
                  </Card.Header>
                  <Card.Body>
                    <ListGroup variant="flush">
                      {mealPlanningTips.map((tip, index) => (
                        <ListGroup.Item key={index} className="border-0 px-0">
                          {tip}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>

                <Card className="mt-4 bg-light">
                  <Card.Body className="text-center">
                    <h6>💡 Quick Nutrition Fact</h6>
                    <p className="mb-0">
                      Women need 18mg of iron daily (ages 19-50) compared to 8mg for men, 
                      due to menstrual blood loss.
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Nutrition;