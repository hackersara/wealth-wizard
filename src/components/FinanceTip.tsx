import React from 'react';
import { LightbulbIcon } from 'lucide-react';

interface FinanceTipProps {
  title: string;
  description: string;
}

export default function FinanceTip({ title, description }: FinanceTipProps) {
  return (
    <div className="group perspective">
      <div className="relative transform-style-3d transition-transform duration-1000 group-hover:rotate-y-180">
        <div className="bg-white rounded-xl shadow-lg p-6 backface-hidden">
          <div className="flex items-center gap-3 mb-4">
            <LightbulbIcon className="w-6 h-6 text-yellow-500" />
            <h3 className="text-lg font-semibold text-gray-800">Did You Know?</h3>
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 backface-hidden rotate-y-180">
          <p className="text-white text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
}