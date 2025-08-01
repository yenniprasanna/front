import React from 'react';
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import CollapsibleSection from '../components/CollapsibleSection';
import DailyTip from '../components/DailyTip';

const LifestyleManagement = () => {
  const lifestyleSections = [
    {
      title: 'Daily Routines & Habits',
      icon: '⏰',
      content: (
        <div>
          <Row>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header className="bg-primary text-white">
                  <h6 className="mb-0">🌅 Morning Routine Ideas</h6>
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      Wake up at consistent time
                      <Badge bg="success" pill>5 min</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      Drink a glass of water
                      <Badge bg="success" pill>2 min</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      Light stretching or yoga
                      <Badge bg="warning" pill>10 min</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      Mindfulness or meditation
                      <Badge bg="warning" pill>10 min</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      Healthy breakfast
                      <Badge bg="info" pill>15 min</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      Review daily goals
                      <Badge bg="success" pill>5 min</Badge>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header className="bg-info text-white">
                  <h6 className="mb-0">🌙 Evening Routine Ideas</h6>
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      Prepare for tomorrow
                      <Badge bg="warning" pill>10 min</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      Skincare routine
                      <Badge bg="warning" pill>10 min</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      Gratitude journaling
                      <Badge bg="success" pill>5 min</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      Reading or gentle music
                      <Badge bg="info" pill>20 min</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      No screens before bed
                      <Badge bg="danger" pill>60 min</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      Consistent bedtime
                      <Badge bg="success" pill>Daily</Badge>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <div className="mt-4 p-3 bg-light rounded">
            <h6>💡 Habit Building Tips:</h6>
            <ul className="mb-0">
              <li><strong>Start Small:</strong> Begin with 2-minute habits</li>
              <li><strong>Stack Habits:</strong> Link new habits to existing ones</li>
              <li><strong>Be Consistent:</strong> Same time, same place daily</li>
              <li><strong>Track Progress:</strong> Use a habit tracker or journal</li>
              <li><strong>Be Patient:</strong> It takes 21-66 days to form a habit</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: 'Work-Life Balance',
      icon: '⚖️',
      content: (
        <div>
          <Row>
            <Col md={6}>
              <h6>🏢 At Work:</h6>
              <ul>
                <li><strong>Set Boundaries:</strong> Clear start/end times</li>
                <li><strong>Take Breaks:</strong> 5-10 minutes every hour</li>
                <li><strong>Prioritize Tasks:</strong> Use the Eisenhower Matrix</li>
                <li><strong>Learn to Say No:</strong> Protect your time and energy</li>
                <li><strong>Delegate:</strong> Share responsibilities when possible</li>
                <li><strong>Organize Workspace:</strong> Clean, comfortable environment</li>
              </ul>
              
              <h6>📱 Digital Wellness:</h6>
              <ul>
                <li>Turn off non-essential notifications</li>
                <li>Use "Do Not Disturb" modes</li>
                <li>Schedule specific times for email/social media</li>
                <li>Create phone-free zones (bedroom, dining)</li>
                <li>Practice digital detox weekends</li>
              </ul>
            </Col>
            
            <Col md={6}>
              <h6>🏠 At Home:</h6>
              <ul>
                <li><strong>Create Rituals:</strong> Transition from work mode</li>
                <li><strong>Designate Spaces:</strong> Separate work and relaxation areas</li>
                <li><strong>Family Time:</strong> Quality over quantity</li>
                <li><strong>Personal Time:</strong> Schedule time for yourself</li>
                <li><strong>Household Tasks:</strong> Share responsibilities</li>
                <li><strong>Relaxation:</strong> Engage in hobbies and interests</li>
              </ul>
              
              <Card className="mt-3">
                <Card.Header>
                  <h6 className="mb-0">🎯 Weekly Balance Check</h6>
                </Card.Header>
                <Card.Body>
                  <small>Rate each area (1-10) weekly:</small>
                  <ul className="small mt-2 mb-0">
                    <li>Work satisfaction</li>
                    <li>Personal relationships</li>
                    <li>Physical health</li>
                    <li>Mental well-being</li>
                    <li>Personal growth</li>
                    <li>Fun and recreation</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      )
    },
    {
      title: 'Time Management & Productivity',
      icon: '⏱️',
      content: (
        <div>
          <Row>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header>
                  <h6 className="mb-0">📋 Planning Techniques</h6>
                </Card.Header>
                <Card.Body>
                  <h6>🗓️ Time Blocking:</h6>
                  <ul>
                    <li>Assign specific time slots to tasks</li>
                    <li>Include buffer time between activities</li>
                    <li>Color-code different types of activities</li>
                    <li>Review and adjust weekly</li>
                  </ul>
                  
                  <h6>📝 To-Do List Strategies:</h6>
                  <ul>
                    <li><strong>MIT (Most Important Tasks):</strong> 3 priorities daily</li>
                    <li><strong>Time Boxing:</strong> Set time limits for tasks</li>
                    <li><strong>Batch Similar Tasks:</strong> Group related activities</li>
                    <li><strong>Two-Minute Rule:</strong> Do it now if it takes &lt;2 min</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header>
                  <h6 className="mb-0">🎯 Focus Techniques</h6>
                </Card.Header>
                <Card.Body>
                  <h6>🍅 Pomodoro Technique:</h6>
                  <ol>
                    <li>Work for 25 minutes</li>
                    <li>Take 5-minute break</li>
                    <li>Repeat 3 more times</li>
                    <li>Take longer break (15-30 min)</li>
                  </ol>
                  
                  <h6>🧠 Deep Work Strategies:</h6>
                  <ul>
                    <li>Eliminate distractions</li>
                    <li>Set clear objectives</li>
                    <li>Work in focused blocks</li>
                    <li>Track your peak energy hours</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <div className="alert alert-success">
            <h6>💡 Productivity Mindset:</h6>
            <p className="mb-0">
              Remember: Productivity isn't about doing more—it's about doing what matters most 
              efficiently while maintaining your well-being.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Self-Care & Personal Growth',
      icon: '🌱',
      content: (
        <div>
          <Row>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header className="bg-success text-white">
                  <h6 className="mb-0">💆‍♀️ Physical Self-Care</h6>
                </Card.Header>
                <Card.Body>
                  <ul className="mb-0">
                    <li>🛁 Regular baths or showers</li>
                    <li>💅 Skincare and grooming routines</li>
                    <li>💆‍♀️ Massage or spa treatments</li>
                    <li>🏃‍♀️ Regular exercise you enjoy</li>
                    <li>🥗 Nourishing, balanced meals</li>
                    <li>💤 Adequate sleep (7-9 hours)</li>
                    <li>👩‍⚕️ Regular health checkups</li>
                  </ul>
                </Card.Body>
              </Card>
              
              <Card className="mb-3">
                <Card.Header className="bg-info text-white">
                  <h6 className="mb-0">🧠 Mental Self-Care</h6>
                </Card.Header>
                <Card.Body>
                  <ul className="mb-0">
                    <li>📚 Reading for pleasure</li>
                    <li>🧘‍♀️ Meditation and mindfulness</li>
                    <li>📝 Journaling thoughts and feelings</li>
                    <li>🎨 Creative activities and hobbies</li>
                    <li>🧩 Puzzles and brain games</li>
                    <li>🎵 Listening to music</li>
                    <li>🌿 Time in nature</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header className="bg-warning text-dark">
                  <h6 className="mb-0">❤️ Emotional Self-Care</h6>
                </Card.Header>
                <Card.Body>
                  <ul className="mb-0">
                    <li>🤗 Spending time with loved ones</li>
                    <li>💬 Talking to a therapist or counselor</li>
                    <li>😂 Watching funny movies or shows</li>
                    <li>🙏 Practicing gratitude</li>
                    <li>🎭 Expressing emotions through art</li>
                    <li>🤝 Setting healthy boundaries</li>
                    <li>💝 Practicing self-compassion</li>
                  </ul>
                </Card.Body>
              </Card>
              
              <Card className="mb-3">
                <Card.Header className="bg-primary text-white">
                  <h6 className="mb-0">🌟 Spiritual Self-Care</h6>
                </Card.Header>
                <Card.Body>
                  <ul className="mb-0">
                    <li>🧘‍♀️ Meditation or prayer</li>
                    <li>🌅 Watching sunrises/sunsets</li>
                    <li>📖 Reading inspirational texts</li>
                    <li>🤝 Volunteering for causes you care about</li>
                    <li>🌱 Connecting with your values</li>
                    <li>🎯 Setting meaningful goals</li>
                    <li>🌍 Practicing environmental consciousness</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <div className="mt-4">
            <h6>📈 Personal Growth Areas:</h6>
            <Row>
              <Col md={4}>
                <h6 className="text-primary">🎓 Learning & Skills</h6>
                <ul>
                  <li>Take online courses</li>
                  <li>Learn a new language</li>
                  <li>Develop professional skills</li>
                  <li>Explore new hobbies</li>
                </ul>
              </Col>
              <Col md={4}>
                <h6 className="text-success">🤝 Relationships</h6>
                <ul>
                  <li>Improve communication skills</li>
                  <li>Build deeper connections</li>
                  <li>Practice active listening</li>
                  <li>Show appreciation regularly</li>
                </ul>
              </Col>
              <Col md={4}>
                <h6 className="text-warning">💪 Personal Strength</h6>
                <ul>
                  <li>Build confidence</li>
                  <li>Develop resilience</li>
                  <li>Practice assertiveness</li>
                  <li>Embrace challenges</li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
      )
    },
    {
      title: 'Financial Wellness',
      icon: '💰',
      content: (
        <div>
          <Row>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header>
                  <h6 className="mb-0">📊 Budgeting Basics</h6>
                </Card.Header>
                <Card.Body>
                  <h6>50/30/20 Rule:</h6>
                  <ul>
                    <li><strong>50% Needs:</strong> Housing, utilities, groceries</li>
                    <li><strong>30% Wants:</strong> Entertainment, dining out</li>
                    <li><strong>20% Savings:</strong> Emergency fund, retirement</li>
                  </ul>
                  
                  <h6>💡 Money-Saving Tips:</h6>
                  <ul>
                    <li>Track expenses for one month</li>
                    <li>Use the 24-hour rule for purchases</li>
                    <li>Automate savings transfers</li>
                    <li>Compare prices before buying</li>
                    <li>Cook meals at home more often</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header>
                  <h6 className="mb-0">🎯 Financial Goals</h6>
                </Card.Header>
                <Card.Body>
                  <h6>Short-term (1 year):</h6>
                  <ul>
                    <li>Build $1,000 emergency fund</li>
                    <li>Pay off credit card debt</li>
                    <li>Create a monthly budget</li>
                    <li>Start tracking expenses</li>
                  </ul>
                  
                  <h6>Long-term (5+ years):</h6>
                  <ul>
                    <li>Save 3-6 months of expenses</li>
                    <li>Contribute to retirement accounts</li>
                    <li>Consider investing</li>
                    <li>Plan for major purchases</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <div className="alert alert-info">
            <h6>💡 Financial Wellness Tips:</h6>
            <ul className="mb-0">
              <li><strong>Educate Yourself:</strong> Read books, take courses on personal finance</li>
              <li><strong>Start Small:</strong> Even $25/month in savings makes a difference</li>
              <li><strong>Automate:</strong> Set up automatic transfers to savings</li>
              <li><strong>Review Regularly:</strong> Check your budget and goals monthly</li>
              <li><strong>Seek Help:</strong> Consider financial advisors for complex situations</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const dailyHacks = [
    { icon: '💧', tip: 'Keep a water bottle visible to remember to stay hydrated' },
    { icon: '📱', tip: 'Put your phone in another room while working for better focus' },
    { icon: '🥗', tip: 'Prep healthy snacks on Sunday for the entire week' },
    { icon: '⏰', tip: 'Set a timer for 15 minutes to tackle one small task' },
    { icon: '🌱', tip: 'Place a plant on your desk to improve air quality and mood' },
    { icon: '📝', tip: 'Write tomorrow\'s top 3 priorities before bed' },
    { icon: '🚶‍♀️', tip: 'Take phone calls while walking for extra movement' },
    { icon: '🧘‍♀️', tip: 'Do 3 deep breaths before checking emails' }
  ];

  return (
    <div className="lifestyle-management-page">
      <Container className="py-5">
        <Row>
          <Col lg={12} className="text-center mb-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="page-title">
                <span className="page-icon">✨</span>
                Lifestyle Management
              </h1>
              <p className="page-description">
                Create sustainable routines for a balanced and fulfilling life
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
              {lifestyleSections.map((section, index) => (
                <CollapsibleSection
                  key={index}
                  title={section.title}
                  icon={section.icon}
                  defaultOpen={index === 0}
                >
                  {section.content}
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
                <DailyTip category="lifestyle" />
                
                <Card className="mt-4">
                  <Card.Header>
                    <h5 className="mb-0">
                      <span className="me-2">💡</span>
                      Daily Life Hacks
                    </h5>
                  </Card.Header>
                  <Card.Body>
                    {dailyHacks.map((hack, index) => (
                      <div key={index} className="d-flex align-items-start mb-3">
                        <span className="me-2 fs-5">{hack.icon}</span>
                        <small className="text-muted">{hack.tip}</small>
                      </div>
                    ))}
                  </Card.Body>
                </Card>

                <Card className="mt-4 bg-light">
                  <Card.Body className="text-center">
                    <h6>🎯 Weekly Challenge</h6>
                    <p className="mb-0">
                      This week, try implementing one new habit from the daily routines section. 
                      Start small and be consistent!
                    </p>
                  </Card.Body>
                </Card>

                <Card className="mt-4">
                  <Card.Header>
                    <h6 className="mb-0">📚 Recommended Reading</h6>
                  </Card.Header>
                  <Card.Body>
                    <ul className="small mb-0">
                      <li>"Atomic Habits" by James Clear</li>
                      <li>"The 7 Habits of Highly Effective People" by Stephen Covey</li>
                      <li>"Digital Minimalism" by Cal Newport</li>
                      <li>"The Life-Changing Magic of Tidying Up" by Marie Kondo</li>
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

export default LifestyleManagement;