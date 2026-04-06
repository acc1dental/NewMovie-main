import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "¿Quieres ser mi hijo?",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Spirited Away",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "The Dark Knight",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Dilwale Dulhania Le",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "The Green Mile",
    image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Interstellar",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Inception",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop",
  },
];

const SliderToo = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-[#141414] px-6 pt-[120px] mt-[120px] md:px-12 lg:px-20 text-white">
      <div className="mx-auto max-w-[1800px]">
        
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-[28px] font-bold tracking-tight">
              Explore our wide variety of categories
            </h2>
            <p className="text-[#999999] text-[15px] mt-3 max-w-xl">
              Whether you’re looking for a comedy to make you laugh, a drama to make you think, 
              or a documentary to learn something new.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              ref={prevRef}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f1f1f] text-white hover:bg-[#2a2a2a] transition-all hover:scale-105 active:scale-95"
              aria-label="Previous slide"
            >
              <ArrowLeft size={26} />
            </button>

            <button
              ref={nextRef}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f1f1f] text-white hover:bg-[#2a2a2a] transition-all hover:scale-105 active:scale-95"
              aria-label="Next slide"
            >
              <ArrowRight size={26} />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          speed={700}
          loop={true}
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
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="group cursor-pointer">
                <Link to={"/movie_inside"}>
                <div className="relative overflow-hidden rounded-3xl bg-[#111111] p-3 transition-all duration-300 hover:bg-[#1a1a1a]">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="h-[340px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>

                  <h3 className="pt-5 pb-2 text-[18px] font-semibold line-clamp-1 px-1">
                    {movie.title}
                  </h3>
                </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderToo;