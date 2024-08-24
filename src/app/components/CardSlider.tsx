"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { testimonials } from "@/utils/rawData";
import TestimonialSlide from "./TestimonialSlide";


export default function ProjSlider() {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 250,
    },
  };

  return (
    <Swiper
      centeredSlides={false}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
      breakpoints={breakpoints}
    >
      {testimonials.map((testimonialData, index) => (
        <SwiperSlide key={index}>
          <TestimonialSlide
            imageSrc={testimonialData.imageSrc}
            altText={testimonialData.altText}
            testimonial={testimonialData.testimonial}
            author={testimonialData.author}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
