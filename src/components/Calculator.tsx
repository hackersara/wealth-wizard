import React, { useState, useMemo } from 'react';
import { Calculator as CalcIcon, PiggyBank, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

interface CalculatorProps {
  type: 'sip' | 'lumpsum';
}

export default function Calculator({ type }: CalculatorProps) {
  const [amount, setAmount] = useState(1000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const calculateData = useMemo(() => {
    const data = [];
    if (type === 'sip') {
      const monthlyRate = rate / 12 / 100;
      for (let year = 0; year <= years; year++) {
        const months = year * 12;
        const invested = amount * months;
        const futureValue = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
        data.push({
          year,
          invested: Math.round(invested),
          value: Math.round(futureValue)
        });
      }
    } else {
      for (let year = 0; year <= years; year++) {
        const futureValue = amount * Math.pow(1 + rate / 100, year);
        data.push({
          year,
          invested: amount,
          value: Math.round(futureValue)
        });
      }
    }
    return data;
  }, [amount, years, rate, type]);

  const finalValue = calculateData[calculateData.length - 1]?.value || 0;
  const totalInvestment = calculateData[calculateData.length - 1]?.invested || 0;
  const returns = finalValue - totalInvestment;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center gap-2 mb-6">
        {type === 'sip' ? 
          <TrendingUp className="w-6 h-6 text-indigo-600" /> :
          <PiggyBank className="w-6 h-6 text-indigo-600" />
        }
        <h3 className="text-xl font-bold text-gray-800">
          {type === 'sip' ? 'SIP Calculator' : 'Lump Sum Calculator'}
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {type === 'sip' ? 'Monthly Investment' : 'One-time Investment'}
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time Period (Years)
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expected Return Rate (%)
            </label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <p className="text-sm text-indigo-600 font-medium">Investment</p>
              <p className="text-lg font-bold text-indigo-700">
                ₹{totalInvestment.toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-600 font-medium">Returns</p>
              <p className="text-lg font-bold text-green-700">
                ₹{returns.toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-purple-600 font-medium">Total Value</p>
              <p className="text-lg font-bold text-purple-700">
                ₹{finalValue.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={calculateData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip 
                formatter={(value) => `₹${Number(value).toLocaleString()}`}
                labelFormatter={(label) => `Year ${label}`}
              />
              <Line 
                type="monotone" 
                dataKey="invested" 
                stroke="#4F46E5" 
                strokeWidth={2}
                name="Amount Invested"
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Expected Value"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}