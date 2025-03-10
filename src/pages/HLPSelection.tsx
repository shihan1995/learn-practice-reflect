
import React from 'react';
import { Check, Mic, Play } from 'lucide-react';
import Layout from '@/components/Layout';

const HLPSelection = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Welcome to TeachFX, Shi Han!</h1>
        
        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-800">Onboarding</h2>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                2
              </div>
              <div className="flex-grow">
                <button className="bg-teachfx-blue text-white px-4 py-2 rounded-md flex items-center gap-2">
                  <Mic className="w-5 h-5" />
                  Create your voice sample
                </button>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                3
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-800 mb-1">Record yourself teaching</h2>
                <p className="text-gray-600">
                  You can record any lesson when you're speaking with students. Click Record on the side menu or download the 
                  TeachFX <a href="#" className="text-teachfx-blue underline">app for iPhone</a> or <a href="#" className="text-teachfx-blue underline">Android</a>.
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                4
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-800 mb-1">After you record 🎉</h2>
                <p className="text-gray-600 mb-4">
                  You'll get a summary of your lesson, a one-of-a-kind image, and helpful insights. It's pretty magical.
                </p>
                <div className="flex space-x-3">
                  <img src="/lovable-uploads/a91be689-959c-4f04-b54e-e12ebad9b3c0.png" alt="Results illustration" className="h-20 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" alt="Welcome video" className="w-full h-48 object-cover opacity-75" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/30 w-12 h-12 rounded-full flex items-center justify-center">
                <Play className="w-5 h-5 text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-medium">Welcome</p>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="How to record" className="w-full h-48 object-cover opacity-75" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/30 w-12 h-12 rounded-full flex items-center justify-center">
                <Play className="w-5 h-5 text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-medium">How to record</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HLPSelection;
