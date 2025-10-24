'use client';

import React, { useState } from 'react';

type Currency = 'INR' | 'USD';

interface PlanProp {
    plans: {
        name: string;
        price: number;
        title: string;
        features: string[];
    }[]
}


const PricingPlans = (plans : PlanProp) => {
    const [currency, setCurrency] = useState<Currency>('INR');

    const formatPrice = (inrPrice: number): string => {
        if (currency === 'INR') return `₹${inrPrice}`;
        const usdRate = 83; // Static conversion rate
        const usdPrice = Math.round(inrPrice / usdRate);
        return `$${usdPrice}`;
    };

    return (
        <section className="py-16 px-4  text-center max-lg:py-1">
            <h2 className="text-cyan-500 font-medium uppercase mb-2">Choose Your Plan</h2>
            <h1 className="text-3xl font-bold mb-4">Flexible Pricing Plans</h1>
            <p className=" max-w-xl mx-auto mb-6">
                We have experience working with large and small businesses and are ready to develop a
                targeted strategy and plan that's just right for you.
            </p>

            {/* Currency Toggle */}
            <div className="flex items-center  justify-center mb-10 gap-4 ">
                <span className="font-semibold text-sm">INR(₹)</span>
                <label className="inline-flex relative items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer border-2 border-gray-300 "
                        onChange={() => setCurrency(currency === 'INR' ? 'USD' : 'INR')}
                        checked={currency === 'USD'}
                    />
                    <div className="w-11 h-6 bg-gray-300  dark:bg-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-cyan-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500" />
                </label>
                <span className="font-semibold text-sm">USD($)</span>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto max-lg:!grid-cols-1">
                {plans.plans.map((plan: { name: string; price: number; title: string; features: string[] }, index: number) => (
                    
                    <div
                        key={index}
                        className=" shadow-md rounded-xl p-6 border  hover:shadow-xl transition duration-300"
                    >
                        <div className="text-sm font-medium  bg-cyan-400 px-3 py-1 rounded-full w-fit mx-auto mb-4">
                            {plan.name}
                        </div>
                        <h3 className="text-2xl font-bold mb-1">{formatPrice(plan.price)}</h3>
                        <p className=" font-medium mb-4">{plan.title}</p>
                        <ul className="text-sm  sm:text-center md:text-left space-y-2 mb-6 text-left  !leading-[30px]">
                            {plan.features.map((feature: string, i: number) => (
                                <li key={i} className="flex items-start gap-2 text-[1rem] ">
                                    <span className="text-cyan-500">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PricingPlans;
