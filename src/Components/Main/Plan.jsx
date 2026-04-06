import React, { useState } from 'react';

const StreamVibePricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      name: "Basic Plan",
      description: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      monthlyPrice: 9.99,
      yearlyPrice: 90.99,
    },
    {
      name: "Standard Plan",
      description: "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
      monthlyPrice: 12.99,
      yearlyPrice: 120.99,
    },
    {
      name: "Premium Plan",
      description: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
      monthlyPrice: 14.99,
      yearlyPrice: 140.99,
    },
  ];

  return (
    <div className=" bg-[#141414] text-white pt-[120px]  font-sans">
      <div className="px-[80px] mx-auto">
        {/* Header */}
        <div className=" mb-12 flex justify-between">
          <div>
            <h1 className="font-[700] text-[28px]">
            Choose the plan that’s right for you
          </h1>
          <p className="text-[#999999] text-[16px]   font-[400]">
            Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. 
            Get ready for non-stop <br />entertainment!
          </p>
          </div>

          {/* Billing Toggle */}
          <div className="w-[190px] h-[61px] flex items-center bg-[#0F0F0F] rounded-[6px] p-1 mt-10 border border-[#262626]">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`w-[94px] h-[45px] rounded-[6px] text-sm font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-[#1F1F1F] text-white shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`w-[94px] h-[45px] rounded-[6px] text-sm font-medium transition-all ${
                billingPeriod === 'yearly'
                  ? 'bg-[#1F1F1F] text-white shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {plans.map((plan, index) => {
            const price = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
            const period = billingPeriod === 'monthly' ? '/month' : '/year';

            return (
              <div
                key={index}
                className="bg-[#1A1A1A] rounded-3xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col"
              >
                {/* Plan Name */}
                <h3 className="text-2xl font-semibold mb-3">{plan.name}</h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-10 flex-grow">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-10">
                  <span className="text-[40px] font-[600] tracking-tight">
                    ${price}
                  </span>
                  <span className="text-gray-500 text-xl ml-1">{period}</span>
                </div>

                {/* Buttons */}
                <div className="space-y-4 mt-auto flex gap-[20px]">
                  <button className="w-[196px] h-[63px] rounded-xl border border-zinc-700 hover:border-zinc-500 text-white font-medium transition-colors">
                    Start Free Trial
                  </button>
                  <button className="w-[196px] h-[63px] rounded-xl bg-red-600 hover:bg-red-700 font-semibold transition-colors">
                    Choose Plan
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StreamVibePricing;