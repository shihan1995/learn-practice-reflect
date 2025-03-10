
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Welcome to Teach<span className="text-teachfx-blue">FX</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Your platform for learning, practicing, and reflecting on high-leverage teaching practices
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="animate-fade-in">
            <QuoteCard onAction={handleStartJourney} />
          </div>

          <div className="flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm animate-fade-in">
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
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-teachfx-blue/10 to-teachfx-teal/10 p-8 text-center animate-fade-in">
          <Trophy className="mx-auto mb-4 h-12 w-12 text-teachfx-blue" />
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">Track Your Progress</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            As you complete each module, you'll earn recognition for your growth as an educator.
            Continue your journey to see your dashboard fill with achievements.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
