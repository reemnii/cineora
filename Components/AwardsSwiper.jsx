"use client";

/* eslint-disable @next/next/no-img-element */

import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function AwardsSwiper({ items }) {
  const swiperRef = useRef(null);

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1.2}
        spaceBetween={14}
        loop={items.length > 4}
        grabCursor
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          480: { slidesPerView: 2.2 },
          768: { slidesPerView: 3, spaceBetween: 16 },
          1024: { slidesPerView: 4, spaceBetween: 16 },
        }}
        aria-label="Awards"
        className="w-[calc(100%+(100vw-100%)/2)] select-none"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="h-auto">
            <article className="group flex h-52 flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] p-5 text-center transition hover:border-cyan-400/40 hover:bg-white/[0.06]">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title || ""}
                  loading="lazy"
                  className="max-h-20 max-w-full object-contain transition duration-300 group-hover:scale-105"
                />
              ) : (
                <span className="text-sm font-semibold text-white/70">
                  {item.title}
                </span>
              )}

              {item.image && item.title && (
                <h3 className="mt-5 line-clamp-3 text-xs font-medium leading-relaxed text-white/65">
                  {item.title}
                </h3>
              )}
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Previous awards"
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
          aria-label="Next awards"
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
