import React from 'react';
import { Container, Row, Col, Card, Alert, ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';
import TabNavigation from '../components/TabNavigation';
import DailyTip from '../components/DailyTip';

const PregnancySupport = () => {
  const tabs = [
    {
      eventKey: 'first-trimester',
      title: 'First Trimester',
      icon: '🌱',
      content: (
        <div>
          <h4>First Trimester (Weeks 1-12)</h4>
          <ProgressBar now={33} label="33%" className="mb-4" />
          
          <Row>
            <Col lg={6}>
              <Card className="mb-4">
                <Card.Header className="bg-success text-white">
                  <h5 className="mb-0">👶 Baby Development</h5>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <li><strong>Week 4-6:</strong> Heart begins to beat</li>
                    <li><strong>Week 8:</strong> All major organs forming</li>
                    <li><strong>Week 10:</strong> Fingers and toes develop</li>
                    <li><strong>Week 12:</strong> About 2.5 inches long</li>
                  </ul>
                  <Alert variant="info">
                    <small>Your baby is now the size of a lime! 🍋</small>
                  </Alert>
                </Card.Body>
              </Card>
              
              <Card className="mb-4">
                <Card.Header>
                  <h5 className="mb-0">🤰 Common Symptoms</h5>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <li>🤢 Morning sickness (nausea/vomiting)</li>
                    <li>😴 Extreme fatigue</li>
                    <li>🍽️ Food aversions or cravings</li>
                    <li>😢 Mood swings</li>
                    <li>🚽 Frequent urination</li>
                    <li>🤱 Breast tenderness</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6}>
              <Card className="mb-4">
                <Card.Header>
                  <h5 className="mb-0">✅ Important To-Dos</h5>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <li>📞 Schedule first prenatal appointment</li>
                    <li>💊 Start prenatal vitamins with folic acid</li>
                    <li>🚭 Quit smoking and avoid alcohol</li>
                    <li>☕ Limit caffeine intake</li>
                    <li>🐟 Avoid high-mercury fish</li>
                    <li>💤 Get plenty of rest</li>
                    <li>📚 Research healthcare providers</li>
                  </ul>
                </Card.Body>
              </Card>
              
              <Card className="mb-4">
                <Card.Header>
                  <h5 className="mb-0">🍎 Nutrition Focus</h5>
                </Card.Header>
                <Card.Body>
                  <h6>Essential Nutrients:</h6>
                  <ul>
                    <li><strong>Folic Acid:</strong> 400-800 mcg daily</li>
                    <li><strong>Iron:</strong> 27 mg daily</li>
                    <li><strong>Calcium:</strong> 1,000 mg daily</li>
                    <li><strong>Protein:</strong> 75-100g daily</li>
                  </ul>
                  
                  <h6>Morning Sickness Relief:</h6>
                  <ul>
                    <li>🍘 Eat small, frequent meals</li>
                    <li>🫖 Ginger tea or candies</li>
                    <li>🍋 Lemon water</li>
                    <li>🍪 Keep crackers by bedside</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Alert variant="warning">
            <strong>⚠️ Call Your Doctor If:</strong> Severe vomiting, bleeding, severe cramping, 
            high fever, or persistent headaches.
          </Alert>
        </div>
      )
    },
    {
      eventKey: 'second-trimester',
      title: 'Second Trimester',
      icon: '🌸',
      content: (
        <div>
          <h4>Second Trimester (Weeks 13-27)</h4>
          <ProgressBar now={66} label="66%" className="mb-4" />
          
          <Row>
            <Col lg={6}>
              <Card className="mb-4">
                <Card.Header className="bg-primary text-white">
                  <h5 className="mb-0">👶 Baby Development</h5>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <li><strong>Week 16:</strong> Gender may be visible</li>
                    <li><strong>Week 18-20:</strong> Anatomy scan</li>
                    <li><strong>Week 20:</strong> Halfway point!</li>
                    <li><strong>Week 24:</strong> Hearing develops</li>
                    <li><strong>Week 27:</strong> Eyes can open</li>
                  </ul>
                  <Alert variant="info">
                    <small>Your baby is now the size of a cauliflower! 🥬</small>
                  </Alert>
                </Card.Body>
              </Card>
              
              <Card className="mb-4">
                <Card.Header>
                  <h5 className="mb-0">😊 Common Changes</h5>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <li>✨ "Pregnancy glow" from increased blood flow</li>
                    <li>🤰 Visible baby bump</li>
                    <li>👶 First baby movements (quickening)</li>
                    <li>⚡ Increased energy levels</li>
                    <li>🦷 Possible gum sensitivity</li>
                    <li>🌙 Better sleep (for most)</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6}>
              <Card className="mb-4">
                <Card.Header>
                  <h5 className="mb-0">📋 Important Appointments</h5>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <li>🩺 Monthly prenatal checkups</li>
                    <li>🔍 Anatomy scan (18-22 weeks)</li>
                    <li>🩸 Glucose screening (24-28 weeks)</li>
                    <li>💉 Tdap vaccine (27-36 weeks)</li>
                    <li>🧬 Genetic testing (if recommended)</li>
                  </ul>
                </Card.Body>
              </Card>
              
              <Card className="mb-4">
                <Card.Header>
                  <h5 className="mb-0">🏃‍♀️ Staying Active</h5>
                </Card.Header>
                <Card.Body>
                  <h6>Safe Exercises:</h6>
                  <ul>
                    <li>🚶‍♀️ Walking</li>
                    <li>🏊‍♀️ Swimming</li>
                    <li>🧘‍♀️ Prenatal yoga</li>
                    <li>🚴‍♀️ Stationary cycling</li>
                    <li>💪 Light strength training</li>
                  </ul>
                  
                  <h6>Avoid:</h6>
                  <ul>
                    <li>❌ Contact sports</li>
                    <li>❌ High-altitude activities</li>
                    <li>❌ Hot yoga/saunas</li>
                    <li>❌ Lying flat on back after 20 weeks</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Card>
            <Card.Header>
              <h5 className="mb-0">🛍️ Preparing for Baby</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h6>🏠 Nursery Planning:</h6>
                  <ul>
                    <li>Choose a theme or color scheme</li>
                    <li>Start shopping for furniture</li>
                    <li>Consider safety features</li>
                    <li>Plan storage solutions</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h6>📚 Education:</h6>
                  <ul>
                    <li>Sign up for childbirth classes</li>
                    <li>Research pediatricians</li>
                    <li>Learn about breastfeeding</li>
                    <li>Discuss birth plan preferences</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      )
    },
    {
      eventKey: 'third-trimester',
      title: 'Third Trimester',
      icon: '🌕',
      content: (
        <div>
          <h4>Third Trimester (Weeks 28-40)</h4>
          <ProgressBar now={100} label="Final Stretch!" className="mb-4" />
          
          <Row>
            <Col lg={6}>
              <Card className="mb-4">
                <Card.Header className="bg-warning text-dark">
                  <h5 className="mb-0">👶 Baby Development</h5>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <li><strong>Week 28:</strong> Eyes can blink</li>
                    <li><strong>Week 32:</strong> Bones hardening</li>
                    <li><strong>Week 36:</strong> Considered full-term soon</li>
                    <li><strong>Week 37-40:</strong> Ready for birth!</li>
                    <li><strong>Final weeks:</strong> Gaining weight rapidly</li>
                  </ul>
                  <Alert variant="success">
                    <small>Your baby is now the size of a watermelon! 🍉</small>
                  </Alert>
                </Card.Body>
              </Card>
              
              <Card className="mb-4">
                <Card.Header>
                  <h5 className="mb-0">😅 Common Discomforts</h5>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <li>😤 Shortness of breath</li>
                    <li>🦵 Swollen feet and ankles</li>
                    <li>😴 Difficulty sleeping</li>
                    <li>💔 Heartburn</li>
                    <li>🤰 Back pain</li>
                    <li>🚽 Frequent urination returns</li>
                    <li>⚡ Braxton Hicks contractions</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6}>
              <Card className="mb-4">
                <Card.Header>
                  <h5 className="mb-0">🏥 Birth Preparation</h5>
                </Card.Header>
                <Card.Body>
                  <h6>📝 Birth Plan Considerations:</h6>
                  <ul>
                    <li>Pain management preferences</li>
                    <li>Labor positions</li>
                    <li>Who you want present</li>
                    <li>Cord blood banking</li>
                    <li>Newborn procedures</li>
                  </ul>
                  
                  <h6>🎒 Hospital Bag Essentials:</h6>
                  <ul>
                    <li>Comfortable nightgowns</li>
                    <li>Nursing bras</li>
                    <li>Baby's going-home outfit</li>
                    <li>Phone charger</li>
                    <li>Snacks</li>
                    <li>Insurance cards</li>
                  </ul>
                </Card.Body>
              </Card>
              
              <Card className="mb-4">
                <Card.Header>
                  <h5 className="mb-0">📅 Final Appointments</h5>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <li>🩺 Weekly checkups (36+ weeks)</li>
                    <li>🧪 Group B Strep test (35-37 weeks)</li>
                    <li>📏 Growth monitoring</li>
                    <li>💓 Non-stress tests (if needed)</li>
                    <li>🏥 Hospital tour</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Alert variant="danger">
            <strong>🚨 Call Your Doctor Immediately If:</strong>
            <ul className="mb-0 mt-2">
              <li>Regular contractions before 37 weeks</li>
              <li>Sudden gush of fluid (water breaking)</li>
              <li>Severe headaches or vision changes</li>
              <li>Decreased fetal movement</li>
              <li>Severe abdominal pain</li>
              <li>Signs of preeclampsia</li>
            </ul>
          </Alert>
          
          <Card className="mt-4">
            <Card.Header>
              <h5 className="mb-0">🌟 Self-Care Tips</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h6>Physical Comfort:</h6>
                  <ul>
                    <li>🛁 Warm baths for relaxation</li>
                    <li>🤱 Pregnancy pillow for sleep</li>
                    <li>👟 Comfortable, supportive shoes</li>
                    <li>💆‍♀️ Prenatal massage</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h6>Mental Preparation:</h6>
                  <ul>
                    <li>🧘‍♀️ Practice relaxation techniques</li>
                    <li>📚 Read about newborn care</li>
                    <li>💬 Connect with other moms</li>
                    <li>📝 Journal your thoughts</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      )
    },
    {
      eventKey: 'postpartum',
      title: 'Postpartum Care',
      icon: '🤱',
      content: (
        <div>
          <h4>Postpartum Recovery & Care</h4>
          
          <Row>
            <Col lg={6}>
              <Card className="mb-4">
                <Card.Header className="bg-info text-white">
                  <h5 className="mb-0">🩹 Physical Recovery</h5>
                </Card.Header>
                <Card.Body>
                  <h6>First 6 Weeks:</h6>
                  <ul>
                    <li>🩸 Lochia (postpartum bleeding)</li>
                    <li>😣 Afterpains from uterine contractions</li>
                    <li>🤱 Breast engorgement</li>
                    <li>😴 Extreme fatigue</li>
                    <li>🚽 Possible constipation</li>
                    <li>💧 Night sweats</li>
                  </ul>
                  
                  <h6>Recovery Tips:</h6>
                  <ul>
                    <li>💤 Rest when baby sleeps</li>
                    <li>🧊 Ice packs for pain relief</li>
                    <li>🛁 Sitz baths for healing</li>
                    <li>💊 Take prescribed medications</li>
                    <li>🚶‍♀️ Gentle walks when cleared</li>
                  </ul>
                </Card.Body>
              </Card>
              
              <Card className="mb-4">
                <Card.Header>
                  <h5 className="mb-0">🤱 Breastfeeding Support</h5>
                </Card.Header>
                <Card.Body>
                  <h6>Getting Started:</h6>
                  <ul>
                    <li>🍼 Skin-to-skin contact</li>
                    <li>📞 Lactation consultant support</li>
                    <li>⏰ Feed on demand (8-12 times/day)</li>
                    <li>💧 Stay well hydrated</li>
                    <li>🥗 Maintain healthy diet</li>
                  </ul>
                  
                  <h6>Common Challenges:</h6>
                  <ul>
                    <li>😣 Sore nipples</li>
                    <li>🤱 Engorgement</li>
                    <li>🔒 Latching difficulties</li>
                    <li>📉 Supply concerns</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6}>
              <Card className="mb-4">
                <Card.Header>
                  <h5 className="mb-0">🧠 Mental Health</h5>
                </Card.Header>
                <Card.Body>
                  <h6>Baby Blues (Normal):</h6>
                  <ul>
                    <li>😢 Mood swings</li>
                    <li>😭 Crying spells</li>
                    <li>😰 Anxiety</li>
                    <li>😴 Sleep difficulties</li>
                    <li>⏰ Usually resolves in 2 weeks</li>
                  </ul>
                  
                  <Alert variant="warning">
                    <strong>⚠️ Postpartum Depression Signs:</strong>
                    <ul className="mb-0 mt-2">
                      <li>Severe mood swings</li>
                      <li>Difficulty bonding with baby</li>
                      <li>Thoughts of harming self/baby</li>
                      <li>Severe anxiety or panic attacks</li>
                      <li>Inability to care for baby</li>
                    </ul>
                    <small className="d-block mt-2">
                      <strong>Seek help immediately if experiencing these symptoms!</strong>
                    </small>
                  </Alert>
                </Card.Body>
              </Card>
              
              <Card className="mb-4">
                <Card.Header>
                  <h5 className="mb-0">👨‍👩‍👧‍👦 Support System</h5>
                </Card.Header>
                <Card.Body>
                  <h6>Accept Help With:</h6>
                  <ul>
                    <li>🍽️ Meal preparation</li>
                    <li>🧹 Household chores</li>
                    <li>🛒 Grocery shopping</li>
                    <li>👶 Baby care (so you can rest)</li>
                    <li>🚗 Transportation to appointments</li>
                  </ul>
                  
                  <h6>Build Your Village:</h6>
                  <ul>
                    <li>👥 Join new mom groups</li>
                    <li>💬 Connect with other parents</li>
                    <li>📞 Maintain friendships</li>
                    <li>👨‍⚕️ Regular healthcare checkups</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Card>
            <Card.Header>
              <h5 className="mb-0">📅 Postpartum Timeline</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={4}>
                  <h6>🗓️ First Week:</h6>
                  <ul>
                    <li>Focus on healing and bonding</li>
                    <li>Establish feeding routine</li>
                    <li>Monitor bleeding and pain</li>
                    <li>Get help with daily tasks</li>
                  </ul>
                </Col>
                <Col md={4}>
                  <h6>🗓️ 2-6 Weeks:</h6>
                  <ul>
                    <li>Gradually increase activity</li>
                    <li>6-week postpartum checkup</li>
                    <li>Discuss contraception</li>
                    <li>Address any concerns</li>
                  </ul>
                </Col>
                <Col md={4}>
                  <h6>🗓️ Beyond 6 Weeks:</h6>
                  <ul>
                    <li>Cleared for normal activities</li>
                    <li>Return to exercise gradually</li>
                    <li>Consider returning to work</li>
                    <li>Continue self-care practices</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      )
    }
  ];

  return (
    <div className="pregnancy-support-page">
      <Container className="py-5">
        <Row>
          <Col lg={12} className="text-center mb-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="page-title">
                <span className="page-icon">🤱</span>
                Pregnancy Support & Guidance
              </h1>
              <p className="page-description">
                Comprehensive support for every stage of your pregnancy journey
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
              <TabNavigation tabs={tabs} defaultActiveKey="first-trimester" />
            </motion.div>
          </Col>

          <Col lg={3}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="sticky-top" style={{ top: '100px' }}>
                <DailyTip category="pregnancy" />
                
                <Card className="mt-4">
                  <Card.Header>
                    <h6 className="mb-0">📞 Emergency Contacts</h6>
                  </Card.Header>
                  <Card.Body>
                    <small>Keep these numbers handy:</small>
                    <ul className="small mt-2 mb-0">
                      <li>Your OB/GYN office</li>
                      <li>Hospital labor & delivery</li>
                      <li>24-hour nurse hotline</li>
                      <li>Partner/support person</li>
                      <li>Backup childcare</li>
                    </ul>
                  </Card.Body>
                </Card>

                <Card className="mt-4 bg-light">
                  <Card.Body className="text-center">
                    <h6>🤰 Pregnancy Fact</h6>
                    <p className="mb-0">
                      A baby's heart starts beating around 6 weeks of pregnancy, 
                      even before many women know they're pregnant!
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

export default PregnancySupport;