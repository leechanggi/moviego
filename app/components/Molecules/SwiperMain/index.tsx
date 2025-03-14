'use client';

import React, {useState} from 'react';
import * as Types from './type';
import { cn } from '@/app/lib';
import styles from './index.module.scss';
// Swiper core and required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const MainSlide = React.forwardRef<HTMLDivElement, Types.MainSlideProps>((props, ref) => {
  const { className = '', ...rest } = props;
  const [isToggled, setIsToggled] = useState(true);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const swiperPlay = () => {
    setIsToggled(!isToggled);
    if(!isToggled){
      swiperInstance.autoplay.start();
    }else{
      swiperInstance.autoplay.stop();
    }
  };
  return (
    <div ref={ref} className={cn(styles.mainslide, className)} {...rest}>
      <Swiper onSwiper={setSwiperInstance} className='mySwiper'
        modules={[Autoplay, EffectCoverflow, Pagination]}
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
        autoplay= {isToggled ? { delay: 2000, disableOnInteraction: false } : false }
        pagination={{ el: '.swiper-pagination', clickable: true }}
        loop
      >
        <SwiperSlide><img src="main_slide01.jpg" /></SwiperSlide>
        <SwiperSlide><img src="main_slide02.jpg" /></SwiperSlide>
        <SwiperSlide><img src="main_slide03.jpg" /></SwiperSlide>
        <SwiperSlide><img src="main_slide04.jpg" /></SwiperSlide>
        <SwiperSlide><img src="main_slide05.jpg" /></SwiperSlide>
      </Swiper>
      <div className={styles.navigation}>
        <div className="swiper-pagination">
        </div>
        <button type='button' className={styles.btn_play} onClick={swiperPlay}>{!isToggled ? <img src='icon_play.svg' alt="Play"/> : <img src='icon_stop.svg' alt="Stop"/> }</button>
      </div>
    </div>
  );
});
MainSlide.displayName = 'MainSlide';
export default MainSlide;
