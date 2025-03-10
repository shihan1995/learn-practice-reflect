
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HLPCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  delay?: number;
}

const HLPCard: React.FC<HLPCardProps> = ({ title, description, icon, to, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-teachfx-lightblue opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10 p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teachfx-lightblue text-teachfx-blue">
          {icon}
        </div>
        
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mb-6 text-gray-600">{description}</p>
        
        <Link 
          to={to}
          className="inline-flex items-center text-sm font-medium text-teachfx-blue transition-all hover:text-teachfx-navy"
        >
          Begin Practice
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default HLPCard;
