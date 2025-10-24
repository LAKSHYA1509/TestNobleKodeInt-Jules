'use client';

import { useState, useEffect } from 'react';
import ServiceOption from './ServiceOption';

interface Service {
    id: string;
    name: string;
    baseHours: number;
    perPage?: boolean;
    perLanguage?: boolean;
}

const serviceOptions: Service[] = [
    { id: 'sitePlanning', name: 'Site Planning', baseHours: 20 },
    { id: 'landingPages', name: 'Each Unique Landing Page Design & Development', baseHours: 40 },
    { id: 'seoOptimization', name: 'Onsite Optimization', baseHours: 30 },
    { id: 'copywriting', name: 'Copywriting Page Count', baseHours: 15, perPage: true },
    { id: 'multiLanguage', name: 'Multi-Language Feature (Per Language)', baseHours: 25, perLanguage: true },
    { id: 'contentMigration', name: 'Content Migration', baseHours: 35 },
    { id: 'motionGraphics', name: 'Motion Graphics', baseHours: 45, perPage: true },
    { id: 'basicSearch', name: 'Basic Search', baseHours: 20 },
    { id: 'interactiveMap', name: 'Interactive Map', baseHours: 30 },
    { id: 'eventsCalendar', name: 'Events Calendar', baseHours: 40 },
    { id: 'chatFeature', name: 'Chat Feature', baseHours: 25 },
    { id: 'projectManagement', name: 'Project Management & Client Communication', baseHours: 40 }
];

export default function Calculator() {
    const [hourlyRate, setHourlyRate] = useState(30);
    const [selectedServices, setSelectedServices] = useState<Record<string, boolean>>({});
    const [quantities, setQuantities] = useState<Record<string, number>>({});
    const [totalHours, setTotalHours] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        calculateTotals();
    }, [selectedServices, quantities, hourlyRate]);

    const calculateTotals = () => {
        let hours = 0;
        serviceOptions.forEach(service => {
            if (selectedServices[service.id]) {
                const quantity = quantities[service.id] || 1;
                hours += service.baseHours * (service.perPage || service.perLanguage ? quantity : 1);
            }
        });
        setTotalHours(hours);
        setTotalPrice(hours * hourlyRate);
    };

    const handleServiceToggle = (id: string, checked: boolean) => {
        setSelectedServices(prev => ({ ...prev, [id]: checked }));
    };

    const handleQuantityChange = (id: string, quantity: number) => {
        setQuantities(prev => ({ ...prev, [id]: quantity }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you! Your proposal request has been submitted.');
    };

    return (
        <div className="max-w-3xl mx-auto bg-[#0A1628] rounded-lg p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Website Type */}
                <div className="space-y-4">
                    <label className="block text-lg font-semibold text-gray-200">
                        Website Type*
                    </label>
                    <div className="flex space-x-6">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="websiteType"
                                value="informational"
                                className="mr-2 w-4 h-4 accent-blue-500"
                                defaultChecked
                            />
                            <span className="text-gray-200">Informational</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="websiteType"
                                value="ecommerce"
                                className="mr-2 w-4 h-4 accent-blue-500"
                            />
                            <span className="text-gray-200">E-Commerce</span>
                        </label>
                    </div>
                </div>

                {/* Hourly Rate */}
                <div className="space-y-4">
                    <label className="block text-lg font-semibold text-gray-200">
                        Hourly Rate*
                    </label>
                    <input
                        type="number"
                        min="10"
                        max="1000"
                        value={hourlyRate}
                        readOnly
                        onChange={(e) => setHourlyRate(parseInt(e.target.value) || 100)}
                        className="w-full bg-[#1A2537] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 text-gray-200"
                    />
                    <p className="text-sm text-gray-400">Please enter a number from 10 to 1000</p>
                </div>

                {/* Service Options */}
                <div className="space-y-6">
                    {serviceOptions.map((service) => (
                        <ServiceOption
                            key={service.id}
                            {...service}
                            onToggle={handleServiceToggle}
                            onQuantityChange={handleQuantityChange}
                            hourlyRate={hourlyRate}
                        />
                    ))}
                </div>

                {/* Total */}
                <div className="border-t border-gray-700 pt-6 mt-8">
                    <div className="flex justify-between items-center text-xl font-semibold">
                        <span className="text-gray-200">Estimated Price:</span>
                        <span className="text-blue-400">
                            {totalHours}h ${totalPrice.toLocaleString()}
                        </span>
                    </div>
                </div>

                {/* Form Actions */}
                <div className="flex justify-end space-x-4 mt-8">
                    <button
                        type="button"
                        className="px-6 py-3 bg-[#1A2537] rounded-md hover:bg-[#243247] transition-colors duration-200 text-gray-200"
                    >
                        Previous
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200 text-white"
                    >
                        Send Me Proposal
                    </button>
                </div>
            </form>
        </div>
    );
}
