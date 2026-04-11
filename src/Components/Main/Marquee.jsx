import axios from "axios";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Api_Service from "../../Service/Api_Service";

const Marquees = () => {

  const [moviePosters , setMoviePosters] = useState()

        
   

  const getMovies = async () => {
    const response = await Api_Service.GetData('trending/movie/week')
    setMoviePosters(response.results)
  }


  useEffect(()=> {
    getMovies()
  },[])

  const PosterRow = ({ speed, direction = "left" }) => (
    <div className="py-1">
      <Marquee speed={speed} direction={direction} gradient={false} play={true}>
        {moviePosters && moviePosters.map((movie) => (
          <div key={movie.id} className="px-1.5">
            <div className="w-[200px] h-[230px] overflow-hidden bg-[#1A1A1A] border border-white/5 rounded-[5px]">
              <img
                className="w-full h-full object-cover opacity-40 grayscale-[0.2]"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="movie poster"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );

  return (
    <div className="relative bg-[#0F0F0F] h-[726px] w-full overflow-hidden flex flex-col justify-center">
      
      {/* 1. Background Grid */}
      <div className="relative z-0 opacity-60">
        <PosterRow speed={15} />
        <PosterRow speed={20} direction="right" />
        <PosterRow speed={15} />
        <PosterRow speed={25} direction="right" />
        <PosterRow speed={18} />
      </div>

      {/* 2. Fix: Multi-layered Smooth Gradients */}
      
      {/* Top Fade */}

      {/* Bottom Fade - THE KEY FIX: 
          We use a very tall gradient (h-96) that goes from solid black 
          to transparent to ensure the transition is butter-smooth. */}
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent z-20" />
      
      {/* Heavy Central/Corner Vignette */}
      <div className="absolute inset-0 z-30 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(15,15,15,0.7)_50%,#0F0F0F_100%)]" />

    </div>
  );
};

export default Marquees;