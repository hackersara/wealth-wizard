import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, DollarSign, PiggyBank, TrendingUp, Shield, Target } from 'lucide-react';

const modules = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Financial Basics",
    description: "Learn the fundamentals of money management and financial planning",
    color: "from-blue-500 to-blue-600",
    link: "https://wizard-modules.netlify.app" // Add the link for the module
  },
  {
    icon: <PiggyBank className="w-6 h-6" />,
    title: "Saving Strategies",
    description: "Master effective saving techniques and build your emergency fund",
    color: "from-green-500 to-green-600"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Investment Fundamentals",
    description: "Understand different investment options and their risks",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Risk Management",
    description: "Learn about insurance and protecting your financial future",
    color: "from-red-500 to-red-600"
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Debt Management",
    description: "Strategies for managing and eliminating debt effectively",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Retirement Planning",
    description: "Plan for a secure and comfortable retirement",
    color: "from-indigo-500 to-indigo-600"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function LearningPath() {
  const handleModuleClick = (link: string | undefined) => {
    if (link) {
      window.open(link, "_blank"); // Opens the webpage in a new tab
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your Financial Learning Path
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master your finances with our comprehensive learning modules
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {modules.map((module, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group cursor-pointer"
              onClick={() => handleModuleClick(module.link)} // Add onClick handler
            >
              <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${module.color} p-8 shadow-lg transform transition-all duration-300 group-hover:scale-[1.02]`}>
                <div className="absolute right-0 top-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-white/20 blur-2xl" />
                <div className="relative">
                  <div className="mb-4 inline-block rounded-lg bg-white/20 p-3">
                    {module.icon}
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {module.title}
                  </h3>
                  <p className="text-lg text-white/90">
                    {module.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
