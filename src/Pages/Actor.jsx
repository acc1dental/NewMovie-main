import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Ensure Autoplay is imported
import { ArrowLeft, ArrowRight } from "lucide-react";
import Banner from "../Components/Main/Banner";
import Api_Service from "../Service/Api_Service";
import Footer from "../Components/Main/Footer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Actor = () => {
  const { id } = useParams();
  const [Actor, setActor] = useState();
  const [ActorMovie, setActorMovie] = useState([]);
  
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const getActor = async () => {
    try {
      const response = await Api_Service.GetData(`person/${id}`);
      const response2 = await Api_Service.GetData(`person/${id}/movie_credits`);

      setActor(response);
      setActorMovie(response2.cast || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    getActor();
  }, [id]);

  return (
    <div className="bg-[#141414] min-h-screen text-white">
      {/* Actor Header Section */}
      <div className="flex justify-center px-4 md:px-25 pt-20 md:pt-35 gap-10 md:gap-20">
        <div className="flex-shrink-0">
          <img
            src={`https://image.tmdb.org/t/p/w500/${Actor?.profile_path}`}
            alt="actor"
            className="rounded-[9px] object-cover w-[250px] md:w-[350px]"
          />
        </div>
        <div className="w-full">
          <h1 className="text-[30px] md:text-[45px] font-bold mb-2">{Actor?.name}</h1>
          <h2 className="text-[15px] text-gray-500 uppercase tracking-widest font-semibold mb-4">Biography</h2>
          <p className="text-gray-400 text-sm mb-2">{Actor?.birthday}</p>
          <p className="text-gray-300 leading-relaxed max-h-[300px] overflow-y-auto pr-2 scrollbar-hide">
            {Actor?.biography || "No biography available."}
          </p>
        </div>
      </div>

      {/* Filmography Slider */}
      <section className="px-6 pt-[120px] md:px-12 lg:px-25">
        <div className="mx-auto max-w-[1800px]">
          
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-[28px] font-bold tracking-tight">
                {Actor?.name}'s Filmography
              </h2>
              <p className="text-[#999999] text-[15px] mt-3 max-w-xl">
                Explore the projects featuring {Actor?.name}.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                ref={prevRef}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f1f1f] text-white hover:bg-[#2a2a2a] transition-all"
              >
                <ArrowLeft size={26} />
              </button>
              <button
                ref={nextRef}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f1f1f] text-white hover:bg-[#2a2a2a] transition-all"
              >
                <ArrowRight size={26} />
              </button>
            </div>
          </div>

          {/* CHECK: Autoplay is in modules, and delay is set */}
          <Swiper
            modules={[Navigation, Autoplay]} 
            spaceBetween={24}
            speed={1000} // Speed of the transition effect
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false, // Keep sliding after user interaction
              pauseOnMouseEnter: true,      // Optional: stop when mouse is over
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
              1536: { slidesPerView: 5, spaceBetween: 24 },
            }}
          >
            {ActorMovie && ActorMovie.map((movie) => (
              <SwiperSlide key={movie.id}>
                <div className="group cursor-pointer">
                  <Link to={`/movie_inside/${movie.id}`}>
                    <div className="relative overflow-hidden rounded-3xl bg-[#111111] p-3 transition-all duration-300 hover:bg-[#1a1a1a]">
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt={movie.title}
                          className="h-[340px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      </div>
                      <h3 className="pt-5 pb-2 text-[18px] font-semibold line-clamp-1 px-1">
                        {movie.title || movie.name}
                      </h3>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Banner />
      <Footer />
    </div>
  );
};

export default Actor;