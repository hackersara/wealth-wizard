import React from 'react';
import { TrendingUp, BookOpen, PiggyBank } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Master Your Money with
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 ml-2">
              WealthWizard
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-indigo-100 mb-12 max-w-3xl mx-auto">
            Your journey to financial freedom starts here. Learn, calculate, and grow your wealth with our interactive tools.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
          <a href="https://wizard-modules.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-yellow-400 hover:text-white transition-all transform hover:scale-105">
              Start Learning Now
            </button>
            </a>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all">
              Try Our Calculators
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <BookOpen className="w-8 h-8" />,
              title: "Interactive Learning",
              description: "Master financial concepts through engaging modules"
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Smart Tools",
              description: "Calculate and visualize your financial growth"
            },
            {
              icon: <PiggyBank className="w-8 h-8" />,
              title: "Practical Tips",
              description: "Get actionable advice for better money management"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all">
              <div className="text-yellow-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-indigo-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}