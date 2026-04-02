  import React from "react";
  import Marquee from "react-fast-marquee";

  const Marquees = () => {
    // Movie Posters Data - Different popular movies
    const moviePosters = [
      "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",   // Captain America: Brave New World
      "https://image.tmdb.org/t/p/w500/5a4JdoFwll5DRtKMe7J0V3GCp2g.jpg",   // Dune: Part Two
      "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",   // The Batman
      "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",   // Oppenheimer
      "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",   // Barbie
      "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8fQ9i6a3u7v7.jpg",   // Spider-Man: No Way Home
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",   // Joker
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",   // Interstellar
      "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",   // John Wick: Chapter 4
      "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMUBjM.jpg",   // Deadpool & Wolverine
      "https://image.tmdb.org/t/p/w500/1XDDXPXGiSTxF6vI1oX8w6X1y5X.jpg",   // Avatar: The Way of Water
      "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",   // Wicked
      "https://image.tmdb.org/t/p/w500/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",   // Furiosa
      "https://image.tmdb.org/t/p/w500/7G9915LfUQbQf0z1f5W2Q8z0f2z.jpg",   // Gladiator II
    ];

    return (
      <div className="relative bg-[#0a0a0a] min-h-[657px] overflow-hidden">
        {/* Background gradient overlay for cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-transparent to-black/80 z-10" />

        {/* Marquee Row 1 - Top (slower) */}
        <div className="absolute top-0 w-full opacity-80">
          <Marquee speed={25} gradient={false}>
            {Array.from({ length: 14 }).map((_, i) => (
              <img
                key={i}
                className="w-[160px] h-[220px] mx-2 rounded-xl shadow-xl brightness-75 hover:brightness-100 transition"
                src={moviePosters[i % moviePosters.length]}
                alt="movie poster"
              />
            ))}
          </Marquee>
        </div>

        {/* Marquee Row 2 - Middle (normal speed) */}
        <div className="absolute top-[240px] w-full opacity-90">
          <Marquee speed={35} gradient={false}>
            {Array.from({ length: 14 }).map((_, i) => (
              <img
                key={i}
                className="w-[160px] h-[220px] mx-2 rounded-xl shadow-xl brightness-75 hover:brightness-100 transition"
                src={moviePosters[i % moviePosters.length]}
                alt="movie poster"
              />
            ))}
          </Marquee>
        </div>

        {/* Marquee Row 3 - Bottom (reversed + faster) */}
        <div className="absolute top-[480px] w-full opacity-75">
          <Marquee speed={28} direction="right" gradient={false}>
            {Array.from({ length: 14 }).map((_, i) => (
              <img
                key={i}
                className="w-[160px] h-[220px] mx-2 rounded-xl shadow-xl brightness-75 hover:brightness-100 transition"
                src={moviePosters[i % moviePosters.length]}
                alt="movie poster"
              />
            ))}
          </Marquee>
        </div>

        {/* Marquee Row 4 - Extra dense look */}
        <div className="absolute top-[720px] w-full opacity-70">
          <Marquee speed={40} gradient={false}>
            {Array.from({ length: 14 }).map((_, i) => (
              <img
                key={i}
                className="w-[160px] h-[220px] mx-2 rounded-xl shadow-xl brightness-75 hover:brightness-100 transition"
                src={moviePosters[i % moviePosters.length]}
                alt="movie poster"
              />
            ))}
          </Marquee>
        </div>

        {/* Central Logo + Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="relative">
            {/* Semi-transparent circular play icon */}
          
          </div>
        </div>

        {/* Text Content */}
        

        {/* Extra subtle vignette effect */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,#00000080_0%,transparent_70%)] z-10" />
      </div>
    );
  };

  export default Marquees;