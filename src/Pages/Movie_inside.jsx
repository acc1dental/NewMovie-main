import React, { useEffect, useState, useRef } from 'react';
import { Play, Plus, ThumbsUp, Volume2, Calendar, Languages, Star, LayoutGrid, ArrowLeft, ArrowRight } from 'lucide-react';
import Banner from '../Components/Main/Banner';
import Footer from '../Components/Main/Footer';
import { useParams, Link } from 'react-router-dom'; // Added Link here
import Api_Service from '../Service/Api_Service';

const Inside = () => {
  const { id } = useParams();
  const [Movie, setMovie] = useState();
  const [Actors, setActors] = useState([]); 
  const [Director, setDirector] = useState([]);

  // --- Refs & State ---
  const castScrollRef = useRef(null);
  const [currentReviewPage, setCurrentReviewPage] = useState(0);

  const reviewsData = [
    { id: 1, name: "Aniket Roy", rating: 4.5, text: "This movie was recommended to me by a very dear friend who went for the movie by herself..." },
    { id: 2, name: "Swaraj", rating: 5, text: "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village)..." },
    { id: 3, name: "Priya Das", rating: 4, text: "The cinematography was absolutely breathtaking. A must watch for the visuals alone." },
    { id: 4, name: "Rahul V", rating: 5, text: "Incredible performance by the lead actor. The cultural depth is something rarely seen." },
  ];

  const reviewsPerPage = 2;
  const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);

  // --- Logic to find Director safely ---
  const directorData = Director?.find((member) => member.job === "Director");
  const musicData = Director?.find((member) => member.job === "Original Music Composer");

  const scrollCast = (direction) => {
    if (castScrollRef.current) {
      const scrollAmount = 400; 
      castScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const nextReview = () => setCurrentReviewPage((prev) => (prev + 1) % totalPages);
  const prevReview = () => setCurrentReviewPage((prev) => (prev - 1 + totalPages) % totalPages);

  const visibleReviews = reviewsData.slice(
    currentReviewPage * reviewsPerPage,
    (currentReviewPage * reviewsPerPage) + reviewsPerPage
  );

  const getMovie = async () => {
    try {
      const response = await Api_Service.GetData(`movie/${id}`);
      const response2 = await Api_Service.GetData(`movie/${id}/credits`);

      setActors(response2.cast || []); 
      setMovie(response);
      setDirector(response2.crew || []);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    getMovie();
  }, [id]);

  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="px-4 md:px-[80px] pt-[80px]">
        
        {/* --- Hero Section --- */}
        <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl mb-12">
          {Movie?.backdrop_path && (
            <img 
              src={`https://image.tmdb.org/t/p/original${Movie.backdrop_path}`}
              alt="Banner" 
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/40 to-transparent flex flex-col items-center justify-end pb-12 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{Movie?.original_title}</h1>
            <p className="text-gray-300 max-w-3xl mb-8 line-clamp-2">{Movie?.overview}</p>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            
            <section className="bg-[#1A1A1A] border border-white/5 p-8 rounded-2xl">
              <h2 className="text-gray-400 mb-4 text-lg">Description</h2>
              <p className="text-gray-200 leading-relaxed">{Movie?.overview}</p>
            </section>

            {/* --- Cast Slider --- */}
            <section className="bg-[#1A1A1A] border border-white/5 p-8 rounded-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-gray-400 text-lg">Cast</h2>
                <div className="flex gap-2">
                  <NavButton onClick={() => scrollCast('left')} icon={<ArrowLeft size={18} />} />
                  <NavButton onClick={() => scrollCast('right')} icon={<ArrowRight size={18} />} />
                </div>
              </div>
              <div ref={castScrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth">
                {Actors.map((actor) => (
                  actor.profile_path && (
                    /* --- WRAPPED IN LINK --- */
                    <Link to={`/actor/${actor.id}`} key={actor.id} className="min-w-[100px] group flex-shrink-0 cursor-pointer">
                      <div className="w-[100px] h-[100px] rounded-xl overflow-hidden bg-zinc-800 mb-2">
                        <img 
                          src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} 
                          alt={actor.name} 
                          className="w-full h-full object-cover transition group-hover:scale-110" 
                        />
                      </div>
                      <p className="text-[10px] text-center text-gray-400 truncate w-[100px] group-hover:text-white transition">{actor.name}</p>
                    </Link>
                  )
                ))}
              </div>
            </section>

            {/* --- Reviews Slider --- */}
            <section className="bg-[#1A1A1A] border border-white/5 p-8 rounded-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-gray-400 text-lg">Reviews</h2>
                <button className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                  <Plus size={16} /> Add Your Review
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {visibleReviews.map((review) => (
                  <ReviewCard key={review.id} {...review} />
                ))}
              </div>

              <div className="flex justify-center items-center gap-4 mt-8">
                <NavButton onClick={prevReview} icon={<ArrowLeft size={18} />} />
                <div className="flex gap-1">
                  {[...Array(totalPages)].map((_, i) => (
                    <div key={i} className={`w-6 h-1 rounded-full transition-all duration-300 ${currentReviewPage === i ? 'bg-red-600 w-8' : 'bg-zinc-700'}`} />
                  ))}
                </div>
                <NavButton onClick={nextReview} icon={<ArrowRight size={18} />} />
              </div>
            </section>
          </div>

          {/* Right Column: Metadata Sidebar */}
          <div className="space-y-6 bg-[#1A1A1A] border border-white/5 p-8 rounded-2xl h-fit">
            <MetaItem icon={<Calendar size={18} />} label="Released Year" value={Movie?.release_date?.split('-')[0] || "N/A"} />
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm"><Languages size={18} /> Languages</div>
              <div className="flex flex-wrap gap-2">
                {Movie?.spoken_languages?.map(l => (
                  <span key={l.iso_639_1} className="bg-zinc-800 border border-white/5 px-3 py-1 rounded-md text-xs">{l.name}</span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm"><Star size={18} /> Ratings</div>
              <div className="grid grid-cols-2 gap-4">
                <RatingBox source="IMDb" score={Movie?.vote_average?.toFixed(1) || "0.0"} />
                <RatingBox source="Streamvibe" score="4.9" />
              </div>
            </div>

            {/* SAFE DIRECTOR RENDERING */}
            <SidebarPerson 
              label="Director" 
              name={directorData ? directorData.name : "Loading..."}
              img={directorData?.profile_path ? `https://image.tmdb.org/t/p/w500${directorData.profile_path}` : null}
            />
            
            <SidebarPerson 
              label="Music" 
              name={musicData ? musicData.name : "Loading..."}
              img={musicData?.profile_path ? `https://image.tmdb.org/t/p/w500${musicData.profile_path}` : null}
            />
          </div>
        </div>
      </div>
      <Banner />
      <Footer />
    </div>
  );
};

/* --- UI Components --- */

const IconButton = ({ icon }) => (
  <button className="p-3 bg-black/40 border border-white/10 rounded-xl hover:bg-black/60 transition active:scale-95">
    {icon}
  </button>
);

const NavButton = ({ icon, onClick }) => (
  <button onClick={onClick} className="p-2 bg-zinc-900 border border-white/5 rounded-lg hover:bg-zinc-800 transition active:scale-90">
    {icon}
  </button>
);

const MetaItem = ({ icon, label, value }) => (
  <div className="space-y-1">
    <div className="flex items-center gap-2 text-gray-400 text-xs">
      {icon} <span>{label}</span>
    </div>
    <div className="text-base font-medium">{value}</div>
  </div>
);

const RatingBox = ({ source, score }) => (
  <div className="bg-zinc-900 border border-white/5 p-3 rounded-xl">
    <div className="text-[10px] text-gray-500 mb-1 uppercase tracking-wider">{source}</div>
    <div className="flex items-center gap-1 text-red-500 font-bold">
      <Star size={12} fill="currentColor" /> <span className="text-white text-sm">{score}</span>
    </div>
  </div>
);

const ReviewCard = ({ name, rating, text }) => (
  <div className="bg-black/40 border border-white/5 p-6 rounded-2xl space-y-4">
    <div className="flex justify-between items-start">
      <div>
        <h4 className="font-medium text-sm">{name}</h4>
        <p className="text-[10px] text-gray-500">From India</p>
      </div>
      <div className="flex text-red-500">
        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={i < Math.floor(rating) ? "currentColor" : "none"} />)}
      </div>
    </div>
    <p className="text-xs text-gray-400 leading-relaxed line-clamp-4">{text}</p>
  </div>
);

const SidebarPerson = ({ label, name, img }) => (
  <div className="space-y-2">
    <p className="text-gray-400 text-[10px] uppercase tracking-wider">{label}</p>
    <div className="bg-zinc-900 border border-white/5 p-2 rounded-xl flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-zinc-700 overflow-hidden">
        {img ? (
          <img src={img} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-zinc-600" />
        )}
      </div>
      <p className="text-xs font-medium">{name}</p>
    </div>
  </div>
);

export default Inside;