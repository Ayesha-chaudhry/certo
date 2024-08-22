"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

export default function projSlider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mx-5 w-[400px] h-[306px] bg-white rounded-3xl my-12">
            <div className="flex gap-2 px-12 pt-12">
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
            </div>
            <p className="text-black text-lg mx-8 py-5">
              Does exactly what it says. Clear to read and understand. This is
              now the second iPhone we've used it on and would certainly
              recommend this app.
            </p>
            <h1 className="text-black text-lg mx-8 font-extrabold">
              Jennifer Black
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-5 w-[400px] h-[306px] bg-white rounded-3xl my-12">
            <div className="flex gap-2 px-12 pt-12">
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
            </div>
            <p className="text-black text-lg mx-8 py-5">
              Does exactly what it says. Clear to read and understand. This is
              now the second iPhone we've used it on and would certainly
              recommend this app.
            </p>
            <h1 className="text-black text-lg mx-8 font-extrabold">
              Jennifer Black
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-5 w-[400px] h-[306px] bg-white rounded-3xl my-12">
            <div className="flex gap-2 px-12 pt-12">
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
            </div>
            <p className="text-black text-lg mx-8 py-5">
              Does exactly what it says. Clear to read and understand. This is
              now the second iPhone we've used it on and would certainly
              recommend this app.
            </p>
            <h1 className="text-black text-lg mx-8 font-extrabold">
              Jennifer Black
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-5 w-[400px] h-[306px] bg-white rounded-3xl my-12">
            <div className="flex gap-2 px-12 pt-12">
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
            </div>
            <p className="text-black text-lg mx-8 py-5">
              Does exactly what it says. Clear to read and understand. This is
              now the second iPhone we've used it on and would certainly
              recommend this app.
            </p>
            <h1 className="text-black text-lg mx-8 font-extrabold">
              Jennifer Black
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-5 w-[400px] h-[306px] bg-white rounded-3xl my-12">
            <div className="flex gap-2 px-12 pt-12">
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
            </div>
            <p className="text-black text-lg mx-8 py-5">
              Does exactly what it says. Clear to read and understand. This is
              now the second iPhone we've used it on and would certainly
              recommend this app.
            </p>
            <h1 className="text-black text-lg mx-8 font-extrabold">
              Jennifer Black
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-5 w-[400px] h-[306px] bg-white rounded-3xl my-12">
            <div className="flex gap-2 px-12 pt-12">
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
              <img src="/images/svg.png" />
            </div>
            <p className="text-black text-lg mx-8 py-5">
              Does exactly what it says. Clear to read and understand. This is
              now the second iPhone we've used it on and would certainly
              recommend this app.
            </p>
            <h1 className="text-black text-lg mx-8 font-extrabold">
              Jennifer Black
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
