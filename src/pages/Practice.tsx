
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mic, PlaySquare, Zap, MessageCircle, Check } from 'lucide-react';
import Layout from '@/components/Layout';
import StepIndicator from '@/components/StepIndicator';
import Button from '@/components/Button';

const Practice = () => {
  const [searchParams] = useSearchParams();
  const hlpType = searchParams.get('hlp') || 'discourse';
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState('record');
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<string | null>(null);
  const [promptResponse, setPromptResponse] = useState('');
  const [feedbackReceived, setFeedbackReceived] = useState(false);
  const [goalSet, setGoalSet] = useState(false);
  const [goal, setGoal] = useState('');
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleProceedToReflect = () => {
    navigate(`/reflect?hlp=${hlpType}`);
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
  
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];
      
      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };
      
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/mp3' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setRecordedAudio(audioUrl);
        
        // Stop all tracks on the stream to release the microphone
        stream.getTracks().forEach(track => track.stop());
      };
      
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Error accessing your microphone. Please ensure it is properly connected and you have granted the necessary permissions.');
    }
  };
  
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };
  
  const handleLLMResponse = () => {
    // Simulate LLM feedback
    setTimeout(() => {
      setFeedbackReceived(true);
      
      // Generate placeholder feedback based on HLP type
      let feedback = "";
      
      if (hlpType === 'discourse') {
        feedback = "Your response demonstrates a good understanding of classroom discourse principles. I noticed your focus on open-ended questioning and creating space for student voices. To enhance this further, consider incorporating more wait time after questions and specific prompts for peer-to-peer interaction. Your approach to redirecting student responses back to the class shows promising facilitation skills.";
      } else if (hlpType === 'environment') {
        feedback = "Your response reflects a strong commitment to creating a supportive learning environment. I particularly appreciated your emphasis on establishing clear expectations and recognizing student contributions. Consider exploring more structured approaches to community building, such as regular class meetings or collaborative norm-setting activities.";
      } else {
        feedback = "Your response shows thoughtful consideration of effective teaching practices. I noticed several strengths, including clear explanations and student-centered approaches. To develop this practice further, consider how you might incorporate more formative assessment opportunities and differentiated supports for diverse learners.";
      }
      
      setPromptResponse(feedback);
    }, 1500);
  };
  
  const handleSubmitGoal = () => {
    if (goal.trim().length > 10) {
      setGoalSet(true);
    } else {
      alert('Please enter a more detailed goal (at least 10 characters).');
    }
  };
  
  const promptExample = "A student has given an incomplete answer to your question about the main theme in a text. How would you respond to build on their thinking while encouraging deeper analysis?";

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
            Practice: {getTitle()}
          </h1>
          <p className="text-lg text-gray-600">
            Apply what you've learned through guided practice exercises
          </p>
        </motion.div>
        
        <div className="mb-8">
          <StepIndicator
            steps={[
              { label: 'Learn', completed: true },
              { label: 'Practice', current: true },
              { label: 'Reflect', completed: false },
            ]}
          />
        </div>
        
        <div className="mb-8 flex space-x-1 rounded-lg border bg-white p-1 shadow-sm">
          <button
            className={`flex flex-1 items-center justify-center space-x-2 rounded-md px-4 py-3 text-sm font-medium transition ${
              activeTab === 'record'
                ? 'bg-teachfx-blue text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('record')}
          >
            <Mic className="h-4 w-4" />
            <span>Record Practice</span>
            {recordedAudio && <Check className="ml-1 h-4 w-4" />}
          </button>
          
          <button
            className={`flex flex-1 items-center justify-center space-x-2 rounded-md px-4 py-3 text-sm font-medium transition ${
              activeTab === 'prompt'
                ? 'bg-teachfx-blue text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('prompt')}
          >
            <MessageCircle className="h-4 w-4" />
            <span>Respond to Prompt</span>
            {feedbackReceived && <Check className="ml-1 h-4 w-4" />}
          </button>
          
          <button
            className={`flex flex-1 items-center justify-center space-x-2 rounded-md px-4 py-3 text-sm font-medium transition ${
              activeTab === 'goal'
                ? 'bg-teachfx-blue text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('goal')}
          >
            <Zap className="h-4 w-4" />
            <span>Set a Goal</span>
            {goalSet && <Check className="ml-1 h-4 w-4" />}
          </button>
        </div>
        
        <div className="mb-8 rounded-xl border bg-white shadow-sm">
          {activeTab === 'record' && (
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Record Your Practice
              </h2>
              <p className="mb-6 text-gray-600">
                Record yourself demonstrating how you would implement {getTitle()} in a classroom setting.
                Speak clearly and focus on specific strategies you would use.
              </p>
              
              <div className="mb-8 rounded-lg bg-gray-50 p-6 text-center">
                {!recordedAudio ? (
                  <div className="flex flex-col items-center">
                    <div 
                      className={`mb-4 flex h-20 w-20 items-center justify-center rounded-full ${
                        isRecording 
                          ? 'animate-pulse bg-red-500' 
                          : 'bg-teachfx-blue'
                      } text-white shadow-lg`}
                    >
                      <Mic className="h-8 w-8" />
                    </div>
                    
                    {isRecording ? (
                      <div className="space-y-4">
                        <div className="text-sm font-medium text-red-500">Recording in progress...</div>
                        <Button onClick={stopRecording} variant="outline" size="lg">
                          Stop Recording
                        </Button>
                      </div>
                    ) : (
                      <Button onClick={startRecording} variant="primary" size="lg">
                        Start Recording
                      </Button>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="mb-6 flex items-center justify-center">
                      <PlaySquare className="mr-2 h-6 w-6 text-teachfx-blue" />
                      <span className="text-sm font-medium text-gray-700">
                        Recording Successful!
                      </span>
                    </div>
                    
                    <audio 
                      controls 
                      src={recordedAudio}
                      className="mb-4 w-full max-w-md"
                    />
                    
                    <div className="flex space-x-4">
                      <Button onClick={() => {
                        setRecordedAudio(null);
                        audioChunksRef.current = [];
                      }} variant="outline">
                        Record Again
                      </Button>
                      
                      <Button onClick={() => setActiveTab('prompt')} variant="primary">
                        Continue
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="rounded-lg bg-teachfx-lightblue p-4">
                <h3 className="mb-2 text-base font-medium text-gray-900">
                  Tips for Recording
                </h3>
                <ul className="ml-5 list-disc space-y-1 text-sm text-gray-700">
                  <li>Find a quiet space with minimal background noise</li>
                  <li>Speak clearly and at a moderate pace</li>
                  <li>Imagine you're addressing actual students</li>
                  <li>Incorporate specific strategies from the learning materials</li>
                  <li>Keep your response focused and concise (2-3 minutes)</li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'prompt' && (
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Respond to Teaching Scenario
              </h2>
              <p className="mb-6 text-gray-600">
                How would you respond to the following classroom scenario?
                Type your detailed response below to receive AI-powered feedback.
              </p>
              
              <div className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="mb-2 text-base font-medium text-gray-900">
                  Scenario:
                </h3>
                <p className="text-gray-700">{promptExample}</p>
              </div>
              
              {!feedbackReceived ? (
                <div className="mb-6">
                  <label htmlFor="response" className="mb-2 block text-sm font-medium text-gray-700">
                    Your Response:
                  </label>
                  <textarea
                    id="response"
                    rows={6}
                    className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 shadow-sm focus:border-teachfx-blue focus:ring focus:ring-teachfx-blue/20"
                    placeholder="Type your response here..."
                    value={promptResponse}
                    onChange={(e) => setPromptResponse(e.target.value)}
                  />
                  
                  <div className="mt-4 flex justify-end">
                    <Button
                      onClick={handleLLMResponse}
                      disabled={promptResponse.length < 20}
                      variant="primary"
                    >
                      Get Feedback
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="mb-6 space-y-4">
                  <div>
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      Your Response:
                    </h3>
                    <div className="rounded-lg border border-gray-200 bg-white p-3 text-gray-700">
                      {promptResponse}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="mb-2 flex items-center text-base font-medium text-gray-900">
                      <Zap className="mr-2 h-4 w-4 text-teachfx-blue" />
                      AI Feedback:
                    </h3>
                    <div className="rounded-lg border border-teachfx-blue/20 bg-teachfx-lightblue/30 p-4 text-gray-700">
                      <p>
                        Your response demonstrates a good understanding of classroom discourse principles. 
                        I noticed your focus on open-ended questioning and creating space for student voices. 
                        To enhance this further, consider incorporating more wait time after questions and 
                        specific prompts for peer-to-peer interaction. Your approach to redirecting student 
                        responses back to the class shows promising facilitation skills.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button onClick={() => setActiveTab('goal')} variant="primary">
                      Continue
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'goal' && (
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Set a Classroom Implementation Goal
              </h2>
              <p className="mb-6 text-gray-600">
                Based on what you've learned and practiced, set a specific, achievable goal
                for implementing {getTitle()} in your classroom.
              </p>
              
              {!goalSet ? (
                <div className="mb-6">
                  <label htmlFor="goal" className="mb-2 block text-sm font-medium text-gray-700">
                    Your Implementation Goal:
                  </label>
                  <textarea
                    id="goal"
                    rows={6}
                    className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 shadow-sm focus:border-teachfx-blue focus:ring focus:ring-teachfx-blue/20"
                    placeholder="I will implement this practice by..."
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                  />
                  
                  <div className="mt-4 flex justify-end">
                    <Button
                      onClick={handleSubmitGoal}
                      disabled={goal.length < 10}
                      variant="primary"
                    >
                      Set Goal
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="mb-6 space-y-6">
                  <div>
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      Your Implementation Goal:
                    </h3>
                    <div className="rounded-lg border border-gray-200 bg-white p-4 text-gray-700">
                      {goal}
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-green-50 p-4 text-green-800">
                    <div className="mb-2 flex items-center">
                      <Check className="mr-2 h-5 w-5 text-green-600" />
                      <h3 className="font-medium">Goal Successfully Set!</h3>
                    </div>
                    <p className="text-sm">
                      Remember to revisit this goal after you've had a chance to implement it in your classroom.
                      You'll be able to reflect on your progress in the next phase.
                    </p>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button onClick={handleProceedToReflect} variant="primary">
                      Continue to Reflection
                    </Button>
                  </div>
                </div>
              )}
              
              <div className="mt-6 rounded-lg bg-teachfx-lightblue p-4">
                <h3 className="mb-2 text-base font-medium text-gray-900">
                  Goal-Setting Tips
                </h3>
                <ul className="ml-5 list-disc space-y-1 text-sm text-gray-700">
                  <li>Make your goal specific and measurable</li>
                  <li>Focus on a single aspect of the practice to implement</li>
                  <li>Consider what resources or support you might need</li>
                  <li>Set a realistic timeframe for implementation</li>
                  <li>Think about how you'll know if you've been successful</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        
        {recordedAudio && feedbackReceived && goalSet && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 flex justify-center"
          >
            <Button
              size="lg"
              onClick={handleProceedToReflect}
              icon={<ArrowRight className="h-5 w-5" />}
              iconPosition="right"
            >
              Continue to Reflection Phase
            </Button>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default Practice;
