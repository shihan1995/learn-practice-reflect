
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, UserPlus, Trophy } from 'lucide-react';
import QuoteCard from '@/components/QuoteCard';
import Layout from '@/components/Layout';
import Button from '@/components/Button';

const Index = () => {
  const navigate = useNavigate();
  
  const handleStartJourney = () => {
    navigate('/hlp');
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="animate-fade-in-up space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Welcome to Teach<span className="text-teachfx-blue">FX</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Your platform for learning, practicing, and reflecting on high-leverage teaching practices
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <QuoteCard onAction={handleStartJourney} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm"
          >
            <div className="p-6">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">Your Learning Journey</h2>
              <p className="mb-6 text-gray-600">
                Improve your teaching effectiveness through our structured learn-practice-reflect framework.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teachfx-lightblue text-teachfx-blue">
                    <Target className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Learn</h3>
                    <p className="text-sm text-gray-600">Access videos, resources, and guided lessons on effective teaching practices</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teachfx-lightblue text-teachfx-blue">
                    <UserPlus className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Practice</h3>
                    <p className="text-sm text-gray-600">Apply what you've learned through interactive exercises and recorded sessions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teachfx-lightblue text-teachfx-blue">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Reflect</h3>
                    <p className="text-sm text-gray-600">Engage with a community of educators and receive personalized feedback</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-auto border-t border-gray-100 bg-gray-50 p-6">
              <Button 
                variant="primary" 
                fullWidth 
                size="lg"
                icon={<ArrowRight className="h-4 w-4" />}
                iconPosition="right"
                onClick={handleStartJourney}
              >
                Start Your Learning Journey
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-teachfx-blue/10 to-teachfx-teal/10 p-8 text-center"
        >
          <Trophy className="mx-auto mb-4 h-12 w-12 text-teachfx-blue" />
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">Track Your Progress</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            As you complete each module, you'll earn recognition for your growth as an educator.
            Continue your journey to see your dashboard fill with achievements.
          </p>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Index;
