'use client';

import { useState, useEffect } from 'react';

interface ServiceOptionProps {
  id: string;
  name: string;
  baseHours: number;
  perPage?: boolean;
  perLanguage?: boolean;
  onToggle: (id: string, checked: boolean) => void;
  onQuantityChange: (id: string, quantity: number) => void;
  hourlyRate: number;
}

export default function ServiceOption({
  id,
  name,
  baseHours,
  perPage,
  perLanguage,
  onToggle,
  onQuantityChange,
  hourlyRate,
}: ServiceOptionProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [hours, setHours] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const calculatedHours = isChecked ? baseHours * (perPage || perLanguage ? quantity : 1) : 0;
    setHours(calculatedHours);
    setPrice(calculatedHours * hourlyRate);
  }, [isChecked, quantity, baseHours, hourlyRate, perPage, perLanguage]);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    onToggle(id, checked);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(value);
    onQuantityChange(id, value);
  };

  return (
    <div className="service-option p-4 rounded-lg border border-gray-800 bg-[#0A1628] hover:bg-[#1A2537] transition-colors duration-200">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <label className="flex items-center space-x-4">
            <div className="relative inline-block w-12 h-6 cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                checked={isChecked}
                onChange={handleToggle}
              />
              <div className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${
                isChecked ? 'bg-blue-600' : 'bg-[#1A2537]'
              } border border-gray-700`}>
                <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out ${
                  isChecked ? 'translate-x-6' : 'translate-x-1'
                } mt-0.5`}></div>
              </div>
            </div>
            <span className="text-lg text-gray-200">{name}</span>
          </label>
          {(perPage || perLanguage) && isChecked && (
            <div className="mt-4 ml-16">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-32 bg-[#1A2537] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 text-gray-200"
              />
              <span className="text-sm text-gray-400 ml-2">
                {perPage ? 'Pages' : 'Languages'}
              </span>
            </div>
          )}
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold text-gray-200">
            {hours}h
          </div>
          <div className="text-sm text-gray-400">
            ${price.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}
