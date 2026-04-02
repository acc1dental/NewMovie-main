import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const movies = [
  {
    id: 1,
    title: "¿Quieres ser mi hijo?",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Spirited Away",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "The Dark Knight",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Dilwale Dulhania Le",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "The Green Mile",
    image:
      "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Interstellar",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Inception",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop",
  },
];

 const CategorySlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <section className="bg-[#141414] px-4 py-10 text-white md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1800px]">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-[28px] font-[700]">
              Explore our wide variety of categories
            </h2>
            <p className="font-[400] text-[16px] text-[#999999] pt-[10px]">
              Whether you’re looking for a comedy to make you laugh, a drama to
              make you think, or a documentary to learn something new.
            </p>
          </div>

          <div className="flex flex-col items-end gap-4">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0d0d0d] p-2">
              <button
                ref={prevRef}
                type="button"
                aria-label="Previous slide"
                className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#181818] text-white transition duration-300 hover:bg-[#222222] hover:scale-[1.03]"
              >
                <ArrowLeft size={24} />
              </button>

              <button
                ref={nextRef}
                type="button"
                aria-label="Next slide"
                className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#181818] text-white transition duration-300 hover:bg-[#222222] hover:scale-[1.03]"
              >
                <ArrowRight size={24} />
              </button>
            </div>

           
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          speed={777}
          loop={true}
          onBeforeInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }if (
              swiper.params.pagination &&
              typeof swiper.params.pagination !== "boolean"
            ) {
              swiper.params.pagination.el = paginationRef.current;
            }
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
            type: "bullets",
            renderBullet: function (index, className) {
              return `<span class="${className} custom-number-bullet">${
                index + 1
              }</span>`;
            },
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
            },
            520: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 4,
            },
          }}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="group cursor-pointer rounded-2xl bg-[#111111] p-3 transition duration-300 hover:bg-[#151515]">
                <div className="relative overflow-hidden rounded-[18px]">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="h-[340px] w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent" />
                </div>

                <h3 className="pt-4 text-[18px] font-semibold text-white line-clamp-1">
                  {movie.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .custom-number-pagination .swiper-pagination-bullet {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0 !important;
          background: #141414;
          color: #f4f4f5;
          border: 1px solid rgba(255,255,255,0.08);
          opacity: 1;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .custom-number-pagination .swiper-pagination-bullet:hover {
          background: #1f1f1f;
          transform: translateY(-1px);
        }

        .custom-number-pagination .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #ef4444, #ec4899);
          color: white;
          border-color: transparent;
          box-shadow: 0 10px 30px rgba(236, 72, 153, 0.25);
        }
      `}</style>
    </section>
  );
}

export default CategorySlider

