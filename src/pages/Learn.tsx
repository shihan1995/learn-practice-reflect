
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, BookOpen, Video, Link as LinkIcon } from 'lucide-react';
import Layout from '@/components/Layout';
import VideoPlayer from '@/components/VideoPlayer';
import StepIndicator from '@/components/StepIndicator';
import Button from '@/components/Button';

const Learn = () => {
  const [searchParams] = useSearchParams();
  const hlpType = searchParams.get('hlp') || 'discourse';
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState('video');
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [readingCompleted, setReadingCompleted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleProceedToPractice = () => {
    navigate(`/practice?hlp=${hlpType}`);
  };
  
  // Placeholder data based on HLP type
  const getTitle = () => {
    switch (hlpType) {
      case 'discourse': return 'Classroom Discourse';
      case 'environment': return 'Supportive Learning Environment';
      case 'content': return 'Rigorous Content';
      case 'cognitive': return 'Cognitive Engagement';
      default: return 'Classroom Discourse';
    }
  };
  
  const quizQuestions = [
    {
      id: 'q1',
      question: 'Which of the following best describes a key component of effective classroom discourse?',
      options: [
        { id: 'a', text: 'Teacher dominates at least 80% of speaking time' },
        { id: 'b', text: 'Students engage in meaningful peer-to-peer discussions' },
        { id: 'c', text: 'Avoiding complex questions to maintain pace' },
        { id: 'd', text: 'Only calling on students who raise their hands' }
      ],
      correctAnswer: 'b'
    },
    {
      id: 'q2',
      question: 'What is "wait time" in classroom questioning?',
      options: [
        { id: 'a', text: 'The time teachers wait for students to arrive to class' },
        { id: 'b', text: 'The break between different lesson segments' },
        { id: 'c', text: 'The time between asking a question and calling on students' },
        { id: 'd', text: 'The period at the end of class for questions' }
      ],
      correctAnswer: 'c'
    },
    {
      id: 'q3',
      question: 'Which questioning technique is most likely to promote higher-order thinking?',
      options: [
        { id: 'a', text: 'Simple recall questions to check basic understanding' },
        { id: 'b', text: 'Yes/no questions to quickly assess comprehension' },
        { id: 'c', text: 'Open-ended questions that require analysis and synthesis' },
        { id: 'd', text: 'Multiple choice questions with clear right answers' }
      ],
      correctAnswer: 'c'
    }
  ];
  
  const checkAnswers = () => {
    const allCorrect = quizQuestions.every(q => selectedAnswers[q.id] === q.correctAnswer);
    setQuizCompleted(allCorrect);
    
    if (!allCorrect) {
      alert('Review your answers and try again. Look for the concepts discussed in the video and readings.');
    }
  };
  
  const readingResources = [
    {
      title: 'Effective Questioning Strategies',
      author: 'Educational Leadership Journal',
      url: '#',
      time: '15 min'
    },
    {
      title: 'Student-Centered Discussion Techniques',
      author: 'Teaching Excellence Center',
      url: '#',
      time: '12 min'
    },
    {
      title: 'Building Classroom Communities Through Dialogue',
      author: 'Journal of Teacher Education',
      url: '#',
      time: '20 min'
    }
  ];
  
  const handleResourceRead = () => {
    setReadingCompleted(true);
  };
  
  const handleVideoComplete = () => {
    setVideoCompleted(true);
  };

  return (
    <Layout>
      <div className="animate-fade-in">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="mb-3 text-3xl font-bold text-gray-900">
            Learning: {getTitle()}
          </h1>
          <p className="text-lg text-gray-600">
            Enhance your understanding through videos, readings, and assessments
          </p>
        </motion.div>
        
        <div className="mb-8">
          <StepIndicator
            steps={[
              { label: 'Learn', current: true },
              { label: 'Practice', completed: false },
              { label: 'Reflect', completed: false },
            ]}
          />
        </div>
        
        <div className="mb-8 flex space-x-1 rounded-lg border bg-white p-1 shadow-sm">
          <button
            className={`flex flex-1 items-center justify-center space-x-2 rounded-md px-4 py-3 text-sm font-medium transition ${
              activeTab === 'video'
                ? 'bg-teachfx-blue text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('video')}
          >
            <Video className="h-4 w-4" />
            <span>Video Instruction</span>
            {videoCompleted && <Check className="ml-1 h-4 w-4" />}
          </button>
          
          <button
            className={`flex flex-1 items-center justify-center space-x-2 rounded-md px-4 py-3 text-sm font-medium transition ${
              activeTab === 'reading'
                ? 'bg-teachfx-blue text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('reading')}
          >
            <BookOpen className="h-4 w-4" />
            <span>Readings</span>
            {readingCompleted && <Check className="ml-1 h-4 w-4" />}
          </button>
          
          <button
            className={`flex flex-1 items-center justify-center space-x-2 rounded-md px-4 py-3 text-sm font-medium transition ${
              activeTab === 'quiz'
                ? 'bg-teachfx-blue text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('quiz')}
          >
            <BookOpen className="h-4 w-4" />
            <span>Assessment</span>
            {quizCompleted && <Check className="ml-1 h-4 w-4" />}
          </button>
        </div>
        
        <div className="mb-8 rounded-xl border bg-white shadow-sm">
          {activeTab === 'video' && (
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Video Instruction
              </h2>
              <VideoPlayer
                src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
                title={`Introduction to ${getTitle()}`}
                description="Learn the key principles and strategies for implementing this practice in your classroom."
                onComplete={handleVideoComplete}
              />
              {videoCompleted && (
                <div className="mt-4 flex justify-end">
                  <Button
                    variant="primary"
                    icon={<ArrowRight className="h-4 w-4" />}
                    iconPosition="right"
                    onClick={() => setActiveTab('reading')}
                  >
                    Continue to Readings
                  </Button>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'reading' && (
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Additional Readings
              </h2>
              <div className="mb-6 space-y-4">
                {readingResources.map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-all hover:border-teachfx-blue/20 hover:shadow-md"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teachfx-lightblue text-teachfx-blue">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{resource.title}</h3>
                        <p className="text-sm text-gray-500">{resource.author} • {resource.time} read</p>
                      </div>
                    </div>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center rounded-md bg-teachfx-lightblue px-3 py-1.5 text-sm font-medium text-teachfx-blue transition-all hover:bg-teachfx-blue hover:text-white"
                    >
                      <LinkIcon className="mr-1.5 h-3.5 w-3.5" />
                      Read
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setActiveTab('video')}
                >
                  Back to Video
                </Button>
                
                <Button
                  variant="primary"
                  icon={<ArrowRight className="h-4 w-4" />}
                  iconPosition="right"
                  onClick={() => {
                    handleResourceRead();
                    setActiveTab('quiz');
                  }}
                >
                  Continue to Assessment
                </Button>
              </div>
            </div>
          )}
          
          {activeTab === 'quiz' && (
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Knowledge Check
              </h2>
              <p className="mb-6 text-gray-600">
                Complete this assessment to demonstrate your understanding of {getTitle()}.
              </p>
              
              <form className="mb-6 space-y-6">
                {quizQuestions.map((question) => (
                  <div key={question.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                    <h3 className="mb-3 text-base font-medium text-gray-900">
                      {question.question}
                    </h3>
                    <div className="space-y-2">
                      {question.options.map((option) => (
                        <label
                          key={option.id}
                          className={`flex cursor-pointer items-center rounded-md border border-gray-200 p-3 transition-all hover:bg-gray-50 ${
                            selectedAnswers[question.id] === option.id
                              ? 'border-teachfx-blue bg-teachfx-lightblue/30'
                              : ''
                          }`}
                        >
                          <input
                            type="radio"
                            name={question.id}
                            value={option.id}
                            checked={selectedAnswers[question.id] === option.id}
                            onChange={() => {
                              setSelectedAnswers({
                                ...selectedAnswers,
                                [question.id]: option.id,
                              });
                            }}
                            className="mr-3 h-4 w-4 text-teachfx-blue focus:ring-teachfx-blue"
                          />
                          <span className="text-sm text-gray-700">{option.text}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </form>
              
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setActiveTab('reading')}
                >
                  Back to Readings
                </Button>
                
                {quizCompleted ? (
                  <Button
                    variant="primary"
                    icon={<ArrowRight className="h-4 w-4" />}
                    iconPosition="right"
                    onClick={handleProceedToPractice}
                  >
                    Continue to Practice
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={checkAnswers}
                    disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
                  >
                    Check Answers
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
        
        {videoCompleted && readingCompleted && quizCompleted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 flex justify-center"
          >
            <Button
              size="lg"
              onClick={handleProceedToPractice}
              icon={<ArrowRight className="h-5 w-5" />}
              iconPosition="right"
            >
              Continue to Practice Phase
            </Button>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default Learn;
