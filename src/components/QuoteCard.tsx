
import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface QuoteCardProps {
  onAction?: () => void;
}

const quotes = [
  {
    text: "The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.",
    author: "William Arthur Ward"
  },
  {
    text: "Education is not the filling of a pail, but the lighting of a fire.",
    author: "William Butler Yeats"
  },
  {
    text: "The best teachers are those who show you where to look but don't tell you what to see.",
    author: "Alexandra K. Trenfor"
  },
  {
    text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin"
  },
  {
    text: "Teaching is not a profession; it's a passion.",
    author: "Unknown"
  }
];

const QuoteCard: React.FC<QuoteCardProps> = ({ onAction }) => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        setIsVisible(true);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teachfx-blue/90 to-teachfx-navy p-1 shadow-lg transition-all duration-300 hover:shadow-xl"
      onClick={onAction}
    >
      <div className="flex h-full flex-col justify-between rounded-xl bg-white p-6">
        <div className="mb-4 flex items-center">
          <Sparkles className="mr-2 h-5 w-5 text-teachfx-teal" />
          <h3 className="text-sm font-medium text-teachfx-teal">Daily Inspiration</h3>
        </div>
        
        <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <blockquote className="mb-4 text-xl font-medium leading-relaxed text-gray-800">
            "{currentQuote.text}"
          </blockquote>
          <footer className="text-right text-sm font-medium text-gray-500">
            — {currentQuote.author}
          </footer>
        </div>
        
        <div className="mt-4 flex justify-end">
          <button 
            className="rounded-full bg-teachfx-lightblue px-4 py-2 text-sm font-medium text-teachfx-blue shadow-sm transition-all hover:bg-teachfx-blue hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              onAction?.();
            }}
          >
            Start Learning Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
