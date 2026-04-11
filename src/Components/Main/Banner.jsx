import React from 'react'
import { NavLink } from 'react-router-dom';

// --- 1. Data Structure (Fictional StreamVibe Content) ---
const marqueeData = [
  { id: 1, title: 'Poster 1', image: 'https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg?auto=compress&cs=tinysrgb&w=600' }, // Sample sci-fi
  { id: 2, title: 'Poster 2', image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600' }, // Sample nature/adventure
  { id: 3, title: 'Poster 3', image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600' }, // Sample texture
  { id: 4, title: 'Poster 4', image: 'https://images.pexels.com/photos/33129/popcorn-movie-time-entertainment.jpg?auto=compress&cs=tinysrgb&w=600' }, // Sample popcorn
  { id: 5, title: 'Poster 5', image: 'https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&w=600' }, // Sample city night
  { id: 6, title: 'Poster 6', image: 'https://images.pexels.com/photos/2104113/pexels-photo-2104113.jpeg?auto=compress&cs=tinysrgb&w=600' }, // Sample portrait
  { id: 7, title: 'Poster 7', image: 'https://images.pexels.com/photos/347683/pexels-photo-347683.jpeg?auto=compress&cs=tinysrgb&w=600' }, // Sample space
  { id: 8, title: 'Poster 8', image: 'https://images.pexels.com/photos/163036/mario-luigi-yoshi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=600' }, // Sample animation
  // (You would typically have 30-40 unique URLs here for a dense grid)
];

// Combine and duplicate the data to create a denser, repetitive grid
const fullMarqueeList = [...marqueeData, ...marqueeData, ...marqueeData, ...marqueeData, ...marqueeData, ...marqueeData];


// --- 2. Marquees Background Component ---
const MarqueesBackground = () => {
  return (
    // We use inset-0 to cover the parent, and a very low opacity.
    <div className="absolute inset-0 z-0 flex flex-wrap gap-1 p-2 opacity-[0.05] overflow-hidden">
      {fullMarqueeList.map((item, index) => (
        <img 
          key={item.id + "-" + index} // Use a unique key
          src={item.image} 
          alt={item.title}
          className="w-[100px] h-[150px] object-cover rounded-sm shrink-0"
        />
      ))}
    </div>
  );
};


// --- 3. Main Banner Component (Updated) ---
const Banner = () => {
  return (
    <div className="w-[100%] h-auto bg-[#141414] flex justify-center items-center py-[120px] px-[80px]">
        {/* Main Banner Container with background gradient and border */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#140F0F] from-[10%] via-[#220E0E]  to-[150%] to-[#E50000] to-[150%] w-[1383px] h-[256px] rounded-[12px] flex items-center border-[1px] border-[#262626] text-white">
          
          {/* 1. Add the new background images layer behind the content */}
          <MarqueesBackground />

          {/* 2. Main Content Container (Placed in front of the background) */}
          <div className="relative z-10 w-full flex items-center justify-between px-[60px]">
              <div className="text-content max-w-[800px]">
                  <h1 className='font-bold text-[28px] mb-2'>Start your free trial today!</h1>
                  <p className='font-[400] text-[16px] text-gray-300'>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
              </div>

              <NavLink to="/subs">
              <button className='w-[150px] h-[50px] rounded-[8px] bg-[#E50000] text-white font-[600] text-[16px] cursor-pointer hover:bg-red-700 transition-colors'>Start a Free Trail</button>

              </NavLink>

          </div>
        </div>
    </div>
  )
}

export default Banner