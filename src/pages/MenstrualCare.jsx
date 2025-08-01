import React from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import TabNavigation from '../components/TabNavigation';
import DailyTip from '../components/DailyTip';

const MenstrualCare = () => {
  const tabs = [
    {
      eventKey: 'cycle-basics',
      title: 'Cycle Basics',
      icon: '📅',
      content: (
        <div>
          <h4>Understanding Your Menstrual Cycle</h4>
          <Row>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header className="bg-primary text-white">
                  <h6 className="mb-0">🌙 Menstrual Phase (Days 1-5)</h6>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <li>Shedding of uterine lining</li>
                    <li>Hormone levels are low</li>
                    <li>May experience cramps and fatigue</li>
                    <li>Focus on rest and gentle movement</li>
                  </ul>
                </Card.Body>
              </Card>
              
              <Card className="mb-3">
                <Card.Header className="bg-success text-white">
                  <h6 className="mb-0">🌱 Follicular Phase (Days 1-13)</h6>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <li>Estrogen levels rise</li>
                    <li>Energy levels increase</li>
                    <li>Good time for new projects</li>
                    <li>Skin may look clearer</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header className="bg-warning text-dark">
                  <h6 className="mb-0">🥚 Ovulation (Around Day 14)</h6>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <li>Peak fertility window</li>
                    <li>Highest energy levels</li>
                    <li>May experience mild pain</li>
                    <li>Increased libido</li>
                  </ul>
                </Card.Body>
              </Card>
              
              <Card className="mb-3">
                <Card.Header className="bg-info text-white">
                  <h6 className="mb-0">🌕 Luteal Phase (Days 15-28)</h6>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <li>Progesterone rises</li>
                    <li>May experience PMS symptoms</li>
                    <li>Focus on self-care</li>
                    <li>Prepare for next cycle</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Alert variant="info">
            <strong>💡 Remember:</strong> Every woman's cycle is unique. Normal cycles can range from 21-35 days.
          </Alert>
        </div>
      )
    },
    {
      eventKey: 'symptom-management',
      title: 'Symptom Management',
      icon: '🩹',
      content: (
        <div>
          <h4>Managing Common Menstrual Symptoms</h4>
          
          <Row>
            <Col lg={6}>
              <Card className="mb-4">
                <Card.Header>
                  <h5>😣 Cramp Relief</h5>
                </Card.Header>
                <Card.Body>
                  <h6>Natural Remedies:</h6>
                  <ul>
                    <li>🔥 Heat therapy (heating pad, warm bath)</li>
                    <li>🧘‍♀️ Gentle yoga and stretching</li>
                    <li>💆‍♀️ Abdominal massage</li>
                    <li>🍵 Herbal teas (chamomile, ginger)</li>
                    <li>🚶‍♀️ Light exercise</li>
                  </ul>
                  
                  <h6>When to Consider Medication:</h6>
                  <ul>
                    <li>Severe pain interfering with daily activities</li>
                    <li>Natural remedies aren't effective</li>
                    <li>Consult healthcare provider for options</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6}>
              <Card className="mb-4">
                <Card.Header>
                  <h5>😴 PMS Management</h5>
                </Card.Header>
                <Card.Body>
                  <h6>Emotional Symptoms:</h6>
                  <ul>
                    <li>🧘‍♀️ Practice mindfulness and meditation</li>
                    <li>📝 Keep a mood journal</li>
                    <li>💤 Prioritize quality sleep</li>
                    <li>🤗 Seek support from loved ones</li>
                  </ul>
                  
                  <h6>Physical Symptoms:</h6>
                  <ul>
                    <li>🥗 Reduce salt and sugar intake</li>
                    <li>💧 Stay well hydrated</li>
                    <li>🏃‍♀️ Regular exercise</li>
                    <li>🌿 Consider supplements (B6, magnesium)</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Alert variant="warning">
            <strong>⚠️ When to See a Doctor:</strong> Severe pain, irregular cycles, heavy bleeding, 
            or symptoms that significantly impact your quality of life.
          </Alert>
        </div>
      )
    },
    {
      eventKey: 'products-hygiene',
      title: 'Products & Hygiene',
      icon: '🧼',
      content: (
        <div>
          <h4>Menstrual Products & Hygiene</h4>
          
          <Row>
            <Col lg={8}>
              <Card className="mb-4">
                <Card.Header>
                  <h5>🩸 Product Comparison</h5>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={6}>
                      <h6>🔴 Disposable Options:</h6>
                      <div className="product-item mb-3">
                        <strong>Pads:</strong>
                        <ul>
                          <li>✅ Easy to use</li>
                          <li>✅ Good for heavy flow</li>
                          <li>❌ Can feel bulky</li>
                          <li>❌ Environmental impact</li>
                        </ul>
                      </div>
                      
                      <div className="product-item mb-3">
                        <strong>Tampons:</strong>
                        <ul>
                          <li>✅ Discreet and comfortable</li>
                          <li>✅ Good for active lifestyle</li>
                          <li>❌ Risk of TSS if misused</li>
                          <li>❌ Need regular changing</li>
                        </ul>
                      </div>
                    </Col>
                    
                    <Col md={6}>
                      <h6>🌱 Reusable Options:</h6>
                      <div className="product-item mb-3">
                        <strong>Menstrual Cup:</strong>
                        <ul>
                          <li>✅ Eco-friendly</li>
                          <li>✅ Cost-effective long-term</li>
                          <li>✅ 12-hour wear time</li>
                          <li>❌ Learning curve</li>
                        </ul>
                      </div>
                      
                      <div className="product-item mb-3">
                        <strong>Period Underwear:</strong>
                        <ul>
                          <li>✅ Comfortable and secure</li>
                          <li>✅ Good for light days</li>
                          <li>✅ No insertion required</li>
                          <li>❌ Higher upfront cost</li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              
              <Card>
                <Card.Header>
                  <h5>🧼 Hygiene Best Practices</h5>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={6}>
                      <h6>Daily Care:</h6>
                      <ul>
                        <li>🚿 Gentle cleansing with mild soap</li>
                        <li>💧 Rinse from front to back</li>
                        <li>🧻 Pat dry, don't rub</li>
                        <li>👙 Wear breathable cotton underwear</li>
                        <li>🔄 Change products regularly</li>
                      </ul>
                    </Col>
                    
                    <Col md={6}>
                      <h6>What to Avoid:</h6>
                      <ul>
                        <li>❌ Douching or harsh chemicals</li>
                        <li>❌ Scented products near vulva</li>
                        <li>❌ Tight, non-breathable clothing</li>
                        <li>❌ Leaving products in too long</li>
                        <li>❌ Using dirty hands</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4}>
              <Alert variant="success">
                <h6>💡 Pro Tips:</h6>
                <ul className="mb-0">
                  <li>Track your flow to choose the right products</li>
                  <li>Always carry backup supplies</li>
                  <li>Consider trying different brands</li>
                  <li>Listen to your body's needs</li>
                </ul>
              </Alert>
            </Col>
          </Row>
        </div>
      )
    },
    {
      eventKey: 'tracking-tips',
      title: 'Tracking Tips',
      icon: '📊',
      content: (
        <div>
          <h4>Cycle Tracking & Monitoring</h4>
          
          <Row>
            <Col lg={6}>
              <Card className="mb-4">
                <Card.Header>
                  <h5>📱 Digital Tracking</h5>
                </Card.Header>
                <Card.Body>
                  <h6>Popular Apps:</h6>
                  <ul>
                    <li>📱 Clue - Science-based tracking</li>
                    <li>📱 Flo - Comprehensive health insights</li>
                    <li>📱 Period Tracker - Simple and effective</li>
                    <li>📱 Ovia - Detailed symptom tracking</li>
                  </ul>
                  
                  <h6>Benefits:</h6>
                  <ul>
                    <li>✅ Automatic calculations</li>
                    <li>✅ Symptom correlations</li>
                    <li>✅ Predictions and reminders</li>
                    <li>✅ Data for healthcare visits</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6}>
              <Card className="mb-4">
                <Card.Header>
                  <h5>📝 Manual Tracking</h5>
                </Card.Header>
                <Card.Body>
                  <h6>What to Track:</h6>
                  <ul>
                    <li>📅 Start and end dates</li>
                    <li>🩸 Flow intensity (light/medium/heavy)</li>
                    <li>😣 Pain levels (1-10 scale)</li>
                    <li>😊 Mood changes</li>
                    <li>🍽️ Cravings or appetite changes</li>
                    <li>💤 Sleep quality</li>
                    <li>🏃‍♀️ Energy levels</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Card>
            <Card.Header>
              <h5>🎯 Why Track Your Cycle?</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={4}>
                  <div className="benefit-item text-center mb-3">
                    <div className="benefit-icon">🔮</div>
                    <h6>Predict Periods</h6>
                    <p>Know when to expect your next period and plan accordingly.</p>
                  </div>
                </Col>
                
                <Col md={4}>
                  <div className="benefit-item text-center mb-3">
                    <div className="benefit-icon">👩‍⚕️</div>
                    <h6>Health Insights</h6>
                    <p>Identify patterns and discuss concerns with healthcare providers.</p>
                  </div>
                </Col>
                
                <Col md={4}>
                  <div className="benefit-item text-center mb-3">
                    <div className="benefit-icon">💪</div>
                    <h6>Optimize Wellness</h6>
                    <p>Align activities and self-care with your natural rhythms.</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          
          <Alert variant="info" className="mt-4">
            <strong>💡 Getting Started:</strong> Track for at least 3 cycles to identify your personal patterns. 
            Don't worry if your cycle isn\'t "textbook" - every woman is different!
          </Alert>
        </div>
      )
    }
  ];

  return (
    <div className="menstrual-care-page">
      <Container className="py-5">
        <Row>
          <Col lg={12} className="text-center mb-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="page-title">
                <span className="page-icon">🌸</span>
                Menstrual Care & Support
              </h1>
              <p className="page-description">
                Comprehensive guidance for understanding and managing your menstrual health
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row>
          <Col lg={9}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TabNavigation tabs={tabs} defaultActiveKey="cycle-basics" />
            </motion.div>
          </Col>

          <Col lg={3}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="sticky-top" style={{ top: '100px' }}>
                <DailyTip category="menstrual" />
                
                <Card className="mt-4 bg-light">
                  <Card.Body className="text-center">
                    <h6>🩸 Did You Know?</h6>
                    <p className="mb-0">
                      The average woman will have about 400 periods in her lifetime, 
                      spending roughly 6-7 years of her life menstruating.
                    </p>
                  </Card.Body>
                </Card>

                <Card className="mt-4">
                  <Card.Header>
                    <h6 className="mb-0">🚨 Emergency Kit</h6>
                  </Card.Header>
                  <Card.Body>
                    <small>Always keep handy:</small>
                    <ul className="small mt-2 mb-0">
                      <li>Extra pads/tampons</li>
                      <li>Pain relief medication</li>
                      <li>Wet wipes</li>
                      <li>Spare underwear</li>
                      <li>Small heating pad</li>
                    </ul>
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

export default MenstrualCare;