import React from 'react';
import { Play, Plus, ThumbsUp, Volume2, Calendar, Languages, Star, LayoutGrid, ArrowLeft, ArrowRight } from 'lucide-react';

const Inside = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* --- Hero Section --- */}
        <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop" 
            alt="Kantara Banner" 
            className="w-full h-full object-cover"
          />
          {/* Hero Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/40 to-transparent flex flex-col items-center justify-end pb-12 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kantara</h1>
            <p className="text-gray-300 max-w-3xl mb-8 line-clamp-2">
              A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-xl flex items-center gap-2 font-semibold">
                <Play size={20} fill="currentColor" /> Play Now
              </button>
              <div className="flex gap-2">
                <IconButton icon={<Plus size={20} />} />
                <IconButton icon={<ThumbsUp size={20} />} />
                <IconButton icon={<Volume2 size={20} />} />
              </div>
            </div>
          </div>
        </div>

        {/* --- Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Info & Cast */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Description Card */}
            <section className="bg-[#1A1A1A] border border-white/5 p-8 rounded-2xl">
              <h2 className="text-gray-400 mb-4 text-lg">Description</h2>
              <p className="text-gray-200 leading-relaxed">
                A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.
              </p>
            </section>

            {/* Cast Section */}
            <section className="bg-[#1A1A1A] border border-white/5 p-8 rounded-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-gray-400 text-lg">Cast</h2>
                <div className="flex gap-2">
                  <NavButton icon={<ArrowLeft size={18} />} />
                  <NavButton icon={<ArrowRight size={18} />} />
                </div>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <div key={i} className="min-w-[100px] h-[100px] rounded-xl overflow-hidden bg-zinc-800">
                    <img src={`https://i.pravatar.cc/150?u=cast${i}`} alt="actor" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews Section */}
            <section className="bg-[#1A1A1A] border border-white/5 p-8 rounded-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-gray-400 text-lg">Reviews</h2>
                <button className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                  <Plus size={16} /> Add Your Review
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ReviewCard name="Aniket Roy" rating={4.5} text="This movie was recommended to me by a very dear friend who went for the movie by herself..." />
                <ReviewCard name="Swaraj" rating={5} text="A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village)..." />
              </div>
              <div className="flex justify-center items-center gap-4 mt-8">
                <NavButton icon={<ArrowLeft size={18} />} />
                <div className="flex gap-1">
                  <div className="w-6 h-1 bg-red-600 rounded-full" />
                  <div className="w-6 h-1 bg-zinc-700 rounded-full" />
                  <div className="w-6 h-1 bg-zinc-700 rounded-full" />
                </div>
                <NavButton icon={<ArrowRight size={18} />} />
              </div>
            </section>
          </div>

          {/* Right Column: Metadata Sidebar */}
          <div className="space-y-6 bg-[#1A1A1A] border border-white/5 p-8 rounded-2xl h-fit">
            <MetaItem icon={<Calendar size={18} />} label="Released Year" value="2022" />
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400"><Languages size={18} /> Languages</div>
              <div className="flex flex-wrap gap-2">
                {['English', 'Hindi', 'Tamil', 'Telegu', 'Kannada'].map(l => (
                  <span key={l} className="bg-zinc-800 border border-white/5 px-3 py-1 rounded-md text-sm">{l}</span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400"><Star size={18} /> Ratings</div>
              <div className="grid grid-cols-2 gap-4">
                <RatingBox source="IMDb" score="4.5" />
                <RatingBox source="Streamvibe" score="4" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400"><LayoutGrid size={18} /> Genres</div>
              <div className="flex gap-2">
                {['Action', 'Adventure'].map(g => (
                  <span key={g} className="bg-zinc-800 border border-white/5 px-3 py-1 rounded-md text-sm">{g}</span>
                ))}
              </div>
            </div>

            <SidebarPerson label="Director" name="Rishab Shetty" origin="From India" />
            <SidebarPerson label="Music" name="B. Ajaneesh Loknath" origin="From India" />

          </div>
        </div>
      </div>
    </div>
  );
};

/* --- Sub-components for cleaner code --- */

const IconButton = ({ icon }) => (
  <button className="p-3 bg-black/40 border border-white/10 rounded-xl hover:bg-black/60 transition">
    {icon}
  </button>
);

const NavButton = ({ icon }) => (
  <button className="p-2 bg-zinc-900 border border-white/5 rounded-lg hover:bg-zinc-800 transition">
    {icon}
  </button>
);

const MetaItem = ({ icon, label, value }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2 text-gray-400">
      {icon} <span>{label}</span>
    </div>
    <div className="text-lg font-medium">{value}</div>
  </div>
);

const RatingBox = ({ source, score }) => (
  <div className="bg-zinc-900 border border-white/5 p-3 rounded-xl">
    <div className="text-sm font-semibold mb-1">{source}</div>
    <div className="flex items-center gap-1 text-red-500">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} fill={i < Math.floor(score) ? "currentColor" : "none"} />
      ))}
      <span className="text-white text-xs ml-1">{score}</span>
    </div>
  </div>
);

const ReviewCard = ({ name, rating, text }) => (
  <div className="bg-black/40 border border-white/5 p-6 rounded-2xl space-y-4">
    <div className="flex justify-between items-start">
      <div>
        <h4 className="font-medium">{name}</h4>
        <p className="text-xs text-gray-500">From India</p>
      </div>
      <div className="flex text-red-500">
        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < rating ? "currentColor" : "none"} />)}
      </div>
    </div>
    <p className="text-sm text-gray-400 leading-relaxed line-clamp-4">{text}</p>
  </div>
);

const SidebarPerson = ({ label, name, origin }) => (
  <div className="space-y-3 pt-2">
    <p className="text-gray-400 text-sm">{label}</p>
    <div className="bg-zinc-900 border border-white/5 p-3 rounded-xl flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-zinc-700 overflow-hidden">
        <img src={`https://i.pravatar.cc/100?u=${name}`} alt={name} />
      </div>
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-gray-500">{origin}</p>
      </div>
    </div>
  </div>
);

export default Inside;