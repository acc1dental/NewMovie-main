import React, { useState } from 'react';

const SupportForm = () => {
  const [selectedCountry, setSelectedCountry] = useState({
    code: '+998',
    flag: '🇺🇿',
  });

  const countries = [
    { code: '+998', flag: '🇺🇿', name: 'Uzbekistan' },
    { code: '+1', flag: '🇺🇸', name: 'United States' },
    { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
    { code: '+91', flag: '🇮🇳', name: 'India' },
    { code: '+7', flag: '🇷🇺', name: 'Russia' },
    { code: '+49', flag: '🇩🇪', name: 'Germany' },
    { code: '+33', flag: '🇫🇷', name: 'France' },
    { code: '+86', flag: '🇨🇳', name: 'China' },
    { code: '+81', flag: '🇯🇵', name: 'Japan' },
    { code: '+55', flag: '🇧🇷', name: 'Brazil' },
    { code: '+61', flag: '🇦🇺', name: 'Australia' },
  ];

  return (
    <div className="w-full h-[auto] bg-[#141414] pt-[80px] px-[80px]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left Side */}
        <div className="lg:w-5/12">
          <h1 className="text-white text-[38px] md:text-5xl font-bold leading-tight">
            Welcome to our support page!
          </h1>
          <p className="text-[#999999] text-lg mt-6 max-w-md">
            We're here to help you with any problems you may be having with our product.
          </p>
          <img 
            src="/support.png" 
            alt="Support" 
            className="mt-16 hidden lg:block w-full max-w-md"
          />
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-7/12 bg-[#0F0F0F] border border-[#262626] p-8 md:p-10 rounded-2xl w-full">
          
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="text-white font-semibold text-lg block mb-3">First Name</label>
              <input 
                type="text" 
                placeholder="Enter First Name" 
                className="w-full h-16 bg-[#141414] border border-[#262626] rounded-xl px-5 text-white placeholder:text-[#999999] focus:outline-none focus:border-[#E50000]"
              />
            </div>

            <div>
              <label className="text-white font-semibold text-lg block mb-3">Last Name</label>
              <input 
                type="text" 
                placeholder="Enter Last Name" 
                className="w-full h-16 bg-[#141414] border border-[#262626] rounded-xl px-5 text-white placeholder:text-[#999999] focus:outline-none focus:border-[#E50000]"
              />
            </div>
          </div>

          {/* Email & Phone Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div>
              <label className="text-white font-semibold text-lg block mb-3">Email</label>
              <input 
                type="email" 
                placeholder="Enter your Email" 
                className="w-full h-16 bg-[#141414] border border-[#262626] rounded-xl px-5 text-white placeholder:text-[#999999] focus:outline-none focus:border-[#E50000]"
              />
            </div>

            {/* Phone Number with Country Selector */}
            <div>
              <label className="text-white font-semibold text-lg block mb-3">Phone Number</label>
              <div className="flex bg-[#141414] border border-[#262626] rounded-xl overflow-hidden">
                
                {/* Country Selector - FIXED */}
                <div className="relative w-28">
                  <select 
                    value={selectedCountry.code}
                    onChange={(e) => {
                      const country = countries.find(c => c.code === e.target.value);
                      if (country) setSelectedCountry(country);
                    }}
                    className="w-full h-16 bg-[#141414] text-white pl-5 pr-8 border-r border-[#262626] rounded-l-xl appearance-none focus:outline-none cursor-pointer hover:bg-[#1a1a1a]"
                  >
                    {countries.map((country) => (
                      <option 
                        key={country.code} 
                        value={country.code}
                        className="bg-[#141414] text-white py-2"
                      >
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  {/* Custom Arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white text-sm">
                    ▼
                  </div>
                </div>

                {/* Phone Input */}
                <input 
                  type="tel" 
                  placeholder="Enter Phone Number" 
                  className="flex-1 h-16 bg-transparent px-5 text-white placeholder:text-[#999999] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="mt-10">
            <label className="text-white font-semibold text-lg block mb-3">Message</label>
            <textarea 
              placeholder="Enter your Message" 
              rows={6}
              className="w-full bg-[#141414] border border-[#262626] rounded-xl p-5 text-white placeholder:text-[#999999] resize-y focus:outline-none focus:border-[#E50000]"
            />
          </div>

          {/* Checkbox + Send Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-10">
            
            {/* Checkbox */}
            <div className="flex items-center gap-3">
              <input 
                type="checkbox" 
                id="terms"
                className="w-5 h-5 accent-[#E50000] bg-[#141414] border border-[#262626] rounded cursor-pointer"
              />
              <label htmlFor="terms" className="text-[#999999] text-base cursor-pointer select-none">
                I agree with Terms of Use and Privacy Policy
              </label>
            </div>

            {/* Send Button */}
            <button className="px-10 py-4 bg-[#E50000] hover:bg-red-700 transition-colors rounded-xl text-white font-semibold text-lg">
              Send Message
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SupportForm;