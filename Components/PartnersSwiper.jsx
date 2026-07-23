"use client";

/* eslint-disable @next/next/no-img-element */

import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function PartnersSwiper({ items }) {
  const swiperRef = useRef(null);

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={2.2}
        spaceBetween={12}
        loop={items.length > 6}
        grabCursor
        autoplay={{
          delay: 2200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          480: { slidesPerView: 3.2 },
          768: { slidesPerView: 4.2, spaceBetween: 16 },
          1024: { slidesPerView: 6, spaceBetween: 16 },
        }}
        aria-label="Client partners"
        className="w-[calc(100%+(100vw-100%)/2)] select-none"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="h-auto">
            <div className="group flex h-24 items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] px-5 py-4 transition hover:border-cyan-400/35 hover:bg-white/[0.06]">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title || ""}
                  loading="lazy"
                  className="max-h-10 max-w-full object-contain transition duration-300 group-hover:scale-105"
                />
              ) : (
                <span className="text-center text-xs font-semibold text-white/70">
                  {item.title}
                </span>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Previous partners"
          onClick={() => swiperRef.current?.slidePrev()}
          className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg border border-white/15 text-white transition hover:border-cyan-400 hover:text-cyan-400"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next partners"
          onClick={() => swiperRef.current?.slideNext()}
          className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg border border-white/15 text-white transition hover:border-cyan-400 hover:text-cyan-400"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
