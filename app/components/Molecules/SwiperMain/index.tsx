'use client';

import React, {useState} from 'react';
import * as Types from './type';
import { cn } from '@/app/lib';
import styles from './index.module.scss';
// Swiper core and required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const MainSlide = React.forwardRef<HTMLDivElement, Types.MainSlideProps>((props, ref) => {
  const { className = '', ...rest } = props;
  return (
    <div ref={ref} className={cn(styles.mainslide, className)} {...rest}>
      <Swiper className={cn('swiper', styles['mainslide_swiper'])}
        modules={[EffectCoverflow, Pagination]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 60,
          stretch: 20,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        loop
      >
        <SwiperSlide><img src="main_slide01.jpg" /></SwiperSlide>
        <SwiperSlide><img src="main_slide02.jpg" /></SwiperSlide>
        <SwiperSlide><img src="main_slide03.jpg" /></SwiperSlide>
        <SwiperSlide><img src="main_slide04.jpg" /></SwiperSlide>
        <SwiperSlide><img src="main_slide05.jpg" /></SwiperSlide>
      </Swiper>
    </div>
  );
});
MainSlide.displayName = 'MainSlide';
export default MainSlide;
