import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import CollapsibleSection from '../components/CollapsibleSection';
import DailyTip from '../components/DailyTip';

const MentalWellness = () => {
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState('inhale');
  const [breathingCount, setBreathingCount] = useState(4);

  const startBreathingExercise = () => {
    setBreathingActive(true);
    setBreathingPhase('inhale');
    setBreathingCount(4);
    
    const breathingCycle = () => {
      // Inhale for 4 seconds
      setBreathingPhase('inhale');
      let count = 4;
      const inhaleTimer = setInterval(() => {
        setBreathingCount(count);
        count--;
        if (count < 0) {
          clearInterval(inhaleTimer);
          
          // Hold for 4 seconds
          setBreathingPhase('hold');
          count = 4;
          const holdTimer = setInterval(() => {
            setBreathingCount(count);
            count--;
            if (count < 0) {
              clearInterval(holdTimer);
              
              // Exhale for 6 seconds
              setBreathingPhase('exhale');
              count = 6;
              const exhaleTimer = setInterval(() => {
                setBreathingCount(count);
                count--;
                if (count < 0) {
                  clearInterval(exhaleTimer);
                  if (breathingActive) {
                    setTimeout(breathingCycle, 1000);
                  }
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    };
    
    breathingCycle();
  };

  const stopBreathingExercise = () => {
    setBreathingActive(false);
  };

  const mentalWellnessSections = [
    {
      title: 'Stress Management Techniques',
      icon: '🧘‍♀️',
      content: (
        <div>
          <Row>
            <Col md={6}>
              <h6>🌊 Quick Stress Relief:</h6>
              <ul>
                <li><strong>Deep Breathing:</strong> 4-7-8 technique</li>
                <li><strong>Progressive Muscle Relaxation:</strong> Tense and release</li>
                <li><strong>Grounding:</strong> 5-4-3-2-1 sensory technique</li>
                <li><strong>Mindful Walking:</strong> Focus on each step</li>
                <li><strong>Cold Water:</strong> Splash on face or wrists</li>
              </ul>
            </Col>
            <Col md={6}>
              <h6>🌱 Long-term Strategies:</h6>
              <ul>
                <li><strong>Regular Exercise:</strong> 30 minutes daily</li>
                <li><strong>Meditation Practice:</strong> Start with 5 minutes</li>
                <li><strong>Journaling:</strong> Write thoughts and feelings</li>
                <li><strong>Social Connection:</strong> Maintain relationships</li>
                <li><strong>Hobby Time:</strong> Engage in enjoyable activities</li>
              </ul>
            </Col>
          </Row>
          
          <Alert variant="info" className="mt-3">
            <strong>💡 Remember:</strong> Stress is normal, but chronic stress can impact your health. 
            Practice these techniques regularly, not just during stressful times.
          </Alert>
        </div>
      )
    },
    {
      title: 'Anxiety & Worry Management',
      icon: '💭',
      content: (
        <div>
          <h6>🔄 Cognitive Techniques:</h6>
          <Card className="mb-3">
            <Card.Body>
              <h6>Challenge Anxious Thoughts:</h6>
              <ol>
                <li><strong>Identify:</strong> What am I thinking?</li>
                <li><strong>Examine:</strong> Is this thought realistic?</li>
                <li><strong>Evidence:</strong> What proof do I have?</li>
                <li><strong>Reframe:</strong> What's a more balanced thought?</li>
              </ol>
            </Card.Body>
          </Card>
          
          <Row>
            <Col md={6}>
              <h6>🛡️ Coping Strategies:</h6>
              <ul>
                <li>Set worry time (15 minutes daily)</li>
                <li>Practice acceptance of uncertainty</li>
                <li>Focus on what you can control</li>
                <li>Use positive self-talk</li>
                <li>Create a worry journal</li>
              </ul>
            </Col>
            <Col md={6}>
              <h6>🚨 When to Seek Help:</h6>
              <ul>
                <li>Anxiety interferes with daily life</li>
                <li>Physical symptoms (racing heart, sweating)</li>
                <li>Avoiding situations due to anxiety</li>
                <li>Sleep problems persist</li>
                <li>Panic attacks occur</li>
              </ul>
            </Col>
          </Row>
        </div>
      )
    },
    {
      title: 'Mood & Emotional Balance',
      icon: '🌈',
      content: (
        <div>
          <h6>🎭 Understanding Emotions:</h6>
          <p>Emotions are temporary and provide valuable information about our needs and experiences.</p>
          
          <Row>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header>
                  <h6 className="mb-0">😊 Mood Boosters</h6>
                </Card.Header>
                <Card.Body>
                  <ul className="mb-0">
                    <li>🌞 Get sunlight exposure</li>
                    <li>🎵 Listen to uplifting music</li>
                    <li>🤗 Practice gratitude daily</li>
                    <li>🌸 Spend time in nature</li>
                    <li>😂 Watch something funny</li>
                    <li>🤝 Connect with loved ones</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header>
                  <h6 className="mb-0">⚖️ Emotional Regulation</h6>
                </Card.Header>
                <Card.Body>
                  <ul className="mb-0">
                    <li>🏷️ Name your emotions</li>
                    <li>🤲 Accept feelings without judgment</li>
                    <li>⏸️ Pause before reacting</li>
                    <li>🗣️ Express emotions healthily</li>
                    <li>🎯 Focus on solutions</li>
                    <li>💝 Practice self-compassion</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Alert variant="warning">
            <strong>🚨 Signs of Depression:</strong> Persistent sadness, loss of interest, 
            changes in appetite/sleep, fatigue, difficulty concentrating, or thoughts of self-harm. 
            Please reach out to a mental health professional if experiencing these symptoms.
          </Alert>
        </div>
      )
    },
    {
      title: 'Sleep & Rest',
      icon: '😴',
      content: (
        <div>
          <h6>🌙 Sleep Hygiene Tips:</h6>
          <Row>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header>
                  <h6 className="mb-0">🌆 Evening Routine</h6>
                </Card.Header>
                <Card.Body>
                  <ul className="mb-0">
                    <li>📱 No screens 1 hour before bed</li>
                    <li>🛁 Warm bath or shower</li>
                    <li>📚 Read a calming book</li>
                    <li>🍵 Herbal tea (chamomile, lavender)</li>
                    <li>🧘‍♀️ Gentle stretching or meditation</li>
                    <li>📝 Write in a gratitude journal</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header>
                  <h6 className="mb-0">🛏️ Sleep Environment</h6>
                </Card.Header>
                <Card.Body>
                  <ul className="mb-0">
                    <li>🌡️ Cool temperature (65-68°F)</li>
                    <li>🌑 Dark room (blackout curtains)</li>
                    <li>🔇 Quiet environment (earplugs/white noise)</li>
                    <li>🛏️ Comfortable mattress and pillows</li>
                    <li>📵 Keep bedroom for sleep only</li>
                    <li>🌿 Consider aromatherapy</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <h6>💤 Rest vs. Sleep:</h6>
          <p>Rest doesn't always mean sleep. Active rest includes meditation, gentle yoga, 
          or simply sitting quietly. Both are essential for mental wellness.</p>
          
          <Alert variant="info">
            <strong>💡 Sleep Goal:</strong> Aim for 7-9 hours of quality sleep per night. 
            Consistency in sleep schedule is more important than perfect timing.
          </Alert>
        </div>
      )
    },
    {
      title: 'Mindfulness & Meditation',
      icon: '🧘',
      content: (
        <div>
          <h6>🎯 What is Mindfulness?</h6>
          <p>Mindfulness is the practice of being fully present and engaged in the current moment, 
          without judgment.</p>
          
          <Row>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header>
                  <h6 className="mb-0">🌱 Beginner Practices</h6>
                </Card.Header>
                <Card.Body>
                  <ul className="mb-0">
                    <li><strong>Mindful Breathing:</strong> Focus on breath for 5 minutes</li>
                    <li><strong>Body Scan:</strong> Notice sensations from head to toe</li>
                    <li><strong>Mindful Eating:</strong> Savor each bite slowly</li>
                    <li><strong>Walking Meditation:</strong> Focus on each step</li>
                    <li><strong>Loving-Kindness:</strong> Send good wishes to others</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header>
                  <h6 className="mb-0">📱 Helpful Apps</h6>
                </Card.Header>
                <Card.Body>
                  <ul className="mb-0">
                    <li><strong>Headspace:</strong> Guided meditations</li>
                    <li><strong>Calm:</strong> Sleep stories and meditation</li>
                    <li><strong>Insight Timer:</strong> Free meditation library</li>
                    <li><strong>Ten Percent Happier:</strong> Practical approach</li>
                    <li><strong>Waking Up:</strong> Philosophy-based</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <h6>🏆 Benefits of Regular Practice:</h6>
          <ul>
            <li>Reduced stress and anxiety</li>
            <li>Improved focus and concentration</li>
            <li>Better emotional regulation</li>
            <li>Enhanced self-awareness</li>
            <li>Improved sleep quality</li>
            <li>Greater life satisfaction</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="mental-wellness-page">
      <Container className="py-5">
        <Row>
          <Col lg={12} className="text-center mb-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="page-title">
                <span className="page-icon">🧘‍♀️</span>
                Mental Wellness & Self-Care
              </h1>
              <p className="page-description">
                Tools and techniques for emotional balance and mental health
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
              {mentalWellnessSections.map((section, index) => (
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
                <DailyTip category="mental" />
                
                {/* Breathing Exercise Widget */}
                <Card className="mt-4">
                  <Card.Header>
                    <h5 className="mb-0">
                      <span className="me-2">💨</span>
                      Breathing Exercise
                    </h5>
                  </Card.Header>
                  <Card.Body className="text-center">
                    <div className="breathing-circle-container mb-3">
                      <motion.div
                        className="breathing-circle"
                        animate={{
                          scale: breathingActive ? 
                            (breathingPhase === 'inhale' ? 1.3 : 
                             breathingPhase === 'hold' ? 1.3 : 1) : 1
                        }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                      >
                        {breathingActive ? (
                          <div>
                            <div className="breathing-phase">{breathingPhase}</div>
                            <div className="breathing-count">{breathingCount}</div>
                          </div>
                        ) : (
                          <div className="breathing-ready">Ready</div>
                        )}
                      </motion.div>
                    </div>
                    
                    <p className="small mb-3">
                      {breathingActive ? 
                        `${breathingPhase.charAt(0).toUpperCase() + breathingPhase.slice(1)} for ${breathingCount} seconds` :
                        "4-4-6 breathing technique for instant calm"
                      }
                    </p>
                    
                    <div>
                      {!breathingActive ? (
                        <Button 
                          variant="primary" 
                          onClick={startBreathingExercise}
                          className="me-2"
                        >
                          Start Exercise
                        </Button>
                      ) : (
                        <Button 
                          variant="outline-secondary" 
                          onClick={stopBreathingExercise}
                        >
                          Stop Exercise
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>

                <Card className="mt-4">
                  <Card.Header>
                    <h6 className="mb-0">🆘 Crisis Resources</h6>
                  </Card.Header>
                  <Card.Body>
                    <small>If you're in crisis, reach out:</small>
                    <ul className="small mt-2 mb-0">
                      <li><strong>988:</strong> Suicide & Crisis Lifeline</li>
                      <li><strong>Text HOME to 741741:</strong> Crisis Text Line</li>
                      <li><strong>911:</strong> Emergency services</li>
                      <li><strong>SAMHSA:</strong> 1-800-662-4357</li>
                    </ul>
                  </Card.Body>
                </Card>

                <Card className="mt-4 bg-light">
                  <Card.Body className="text-center">
                    <h6>🌟 Daily Affirmation</h6>
                    <p className="mb-0 fst-italic">
                      "I am worthy of love, care, and respect. I choose to prioritize 
                      my mental health and well-being today."
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

export default MentalWellness;