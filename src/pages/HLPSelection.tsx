
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, FileText, Brain } from 'lucide-react';
import Layout from '@/components/Layout';
import HLPCard from '@/components/HLPCard';

const HLPSelection = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const hlpOptions = [
    {
      title: "Classroom Discourse",
      description: "Learn how to facilitate meaningful discussions and promote student engagement through effective questioning strategies.",
      icon: <MessageCircle className="h-6 w-6" />,
      to: "/learn?hlp=discourse"
    },
    {
      title: "Supportive Learning Environment",
      description: "Discover techniques to create a positive, inclusive classroom culture where all students feel valued and supported.",
      icon: <Users className="h-6 w-6" />,
      to: "/learn?hlp=environment"
    },
    {
      title: "Rigorous Content",
      description: "Explore methods to enhance curriculum with challenging, relevant content that promotes deep understanding.",
      icon: <FileText className="h-6 w-6" />,
      to: "/learn?hlp=content"
    },
    {
      title: "Cognitive Engagement",
      description: "Master strategies to promote higher-order thinking skills and develop students' metacognitive awareness.",
      icon: <Brain className="h-6 w-6" />,
      to: "/learn?hlp=cognitive"
    }
  ];

  return (
    <Layout>
      <div className="animate-fade-in-up space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-3xl"
        >
          <h1 className="mb-3 text-3xl font-bold text-gray-900">
            Select a High-Leverage Practice
          </h1>
          <p className="text-lg text-gray-600">
            Each practice is designed to significantly impact student learning and teacher effectiveness.
            Choose one to begin your learning journey.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {hlpOptions.map((hlp, index) => (
            <HLPCard
              key={hlp.title}
              title={hlp.title}
              description={hlp.description}
              icon={hlp.icon}
              to={hlp.to}
              delay={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 rounded-xl bg-teachfx-lightblue p-6"
        >
          <div className="flex items-start space-x-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teachfx-blue text-white">
              <Brain className="h-5 w-5" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Why These Practices Matter</h3>
              <p className="text-gray-700">
                High-leverage practices are fundamental techniques and strategies that, when mastered,
                can transform your teaching effectiveness across all subjects, grade levels, and student populations.
                They serve as building blocks for more advanced pedagogical approaches.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default HLPSelection;
