import React from "react";
import Marquee from "react-fast-marquee";

const Marquees = () => {
  const moviePosters = [
    "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    "https://image.tmdb.org/t/p/w500/1XDDXPXGiSTxF6vI1oX8w6X1y5X.jpg",
    "https://image.tmdb.org/t/p/w500/jXyuSByuUv776W7p59U99YpYvbi.jpg",
    "https://image.tmdb.org/t/p/w500/NNxpe99uYUXuG37uOOCp6O6Ueg.jpg",
    "https://image.tmdb.org/t/p/w500/qNBAXmqAFQ69pZp7mU5JyS9pS9p.jpg",
    "https://media.themoviedb.org/t/p/w440_and_h660_face/zFL0ut2MFO2JcvxVsEWD4ojD5FB.jpg",
    "https://media.themoviedb.org/t/p/w440_and_h660_face/cleiiADxvT9mEzXHVDdAyaCZCVB.jpg",
    "https://media.themoviedb.org/t/p/w440_and_h660_face/3NaiRtILh0UV8e64IzTALnqT7hr.jpg",
    "https://media.themoviedb.org/t/p/w440_and_h660_face/kpxYvaCnbRi7btNnpLCJrehy77e.jpg",
    "https://media.themoviedb.org/t/p/w440_and_h660_face/oA1XlT4haoeug2YLzUccM8myBlR.jpg",
    "https://media.themoviedb.org/t/p/w440_and_h660_face/mayjUmmXGM1n5E5AJnOfylig10W.jpg",
    "https://media.themoviedb.org/t/p/w440_and_h660_face/9zdZeAxt7Xxu5omPufFu1TMl8BP.jpg",
    "https://media.themoviedb.org/t/p/w440_and_h660_face/6Oz0DW4H6f1LH0UWsdjVeZyalDH.jpg",
    "https://media.themoviedb.org/t/p/w440_and_h660_face/pfz9fm6XOorOFkxmin7tqFMv14g.jpg",
    "https://media.themoviedb.org/t/p/w440_and_h660_face/2DIBDFHiKQawz4WPsYekl9DHwyA.jpg",




  ];

  const PosterRow = ({ speed, direction = "left" }) => (
    <div className="py-1">
      <Marquee speed={speed} direction={direction} gradient={false} play={true}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="px-1.5">
            <div className="w-[200px] h-[230px] overflow-hidden bg-[#1A1A1A] border border-white/5 rounded-[5px]">
              <img
                className="w-full h-full object-cover opacity-40 grayscale-[0.2]"
                src={moviePosters[i % moviePosters.length]}
                alt="movie poster"
                loading="lazy"
                onError={(e) => {
                  e.target.src = "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg";
                }}
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
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0F0F0F] to-transparent z-10" />

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