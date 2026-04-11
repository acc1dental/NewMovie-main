import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';

const SearchPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['Movies', 'TV Series', 'Actors', 'All'];

  return (
    /* Use min-h-screen to ensure the dark background covers the whole page */
    <div className="bg-[#141414] min-h-screen w-full text-white flex flex-col pt-[70px]">
      <Navbar/>

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 md:px-8 py-12">
        {/* Search Input Section */}
        <div className="relative flex items-center mb-10">
          <input
            type="text"
            placeholder="Search for movies, TV shows, or actors..."
            className="w-full bg-[#0F0F0F] border border-[#262626] rounded-xl py-4 px-6 pr-36 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all text-white"
          />
          <button className="absolute right-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
            Search
          </button>
        </div>

        {/* Filter Buttons Section */}
        <div className="flex flex-wrap justify-center gap-3 mb-20 bg-[#0F0F0F] border border-[#262626] p-2 rounded-xl w-fit mx-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg transition-all duration-200 font-medium ${
                activeFilter === filter
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-transparent text-[#999999] hover:text-white hover:bg-[#1A1A1A]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Moving Banner inside main keeps it centered and bounded */}
      </main>
        <Banner/>


      <Footer/>
    </div>
  );
};

export default SearchPage;