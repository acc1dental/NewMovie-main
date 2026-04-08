import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import axios from "axios";


const SliderToo = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

      const [movies , setMovies] = useState()
          
      let Base_Url = "https://api.themoviedb.org/3/"
      let Api_Key = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjkxOTNiNzkzNTBlOTliNGFhNjNkZjRmN2JlYjdmYyIsIm5iZiI6MTc1MjA0OTc0OC45OCwic3ViIjoiNjg2ZTI4NTQ5MmJjYzRiYWRlNmU4Yzg5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.vG6XZs3MsR0-kOOz1FQPxF2Zu0Ddw4rnkw7PCS9D9AI'
     
  
    const getMovies = async () => {
     const responce = await axios.get(`${Base_Url}trending/movie/day` , {
      headers:{
        Authorization:Api_Key
      }
     })
     setMovies(responce.data.results)
    }
  
  
    useEffect(()=> {
      getMovies()
    },[])

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
          {movies && movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="group cursor-pointer">
                <Link to={"/movie_inside"}>
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