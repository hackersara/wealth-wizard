import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import FinanceTip from './components/FinanceTip';
import LearningPath from './components/LearningPath';
import Testimonials from './components/Testimonials';

const financeTips = [
  {
    title: "The Power of Compound Interest",
    description: "Einstein called it the 8th wonder of the world. Start early and let your money grow exponentially!"
  },
  {
    title: "50/30/20 Rule",
    description: "Allocate 50% of your income to needs, 30% to wants, and 20% to savings and investments."
  },
  {
    title: "Emergency Fund",
    description: "Always maintain 3-6 months of expenses as an emergency fund for financial security."
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <main>
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Financial Calculators
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Calculator type="sip" />
            <Calculator type="lumpsum" />
          </div>
        </motion.section>

        <LearningPath />

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Financial Tips
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {financeTips.map((tip, index) => (
              <FinanceTip key={index} {...tip} />
            ))}
          </div>
        </motion.section>

        <Testimonials />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg mb-4">Start your financial journey today with WealthWizard</p>
          <p className="text-gray-400">© 2024 WealthWizard. All rights reserved.<br> saranshchaudhary1130@gmail.com </br><br> shatakshisharma611gmail.com</br></p>
        </div>
      </footer>
    </div>
  );
}

export default App;