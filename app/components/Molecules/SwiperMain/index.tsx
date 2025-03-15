'use client';

import React, {useState} from 'react';
import * as Types from './type';
import { cn } from '@/app/lib';
import styles from './index.module.scss';
// Swiper core and required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import IconPlay from '/public/icon_play.svg';
import IconStop from '/public/icon_stop.svg';

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

  const msData = [
    { img:'main_slide01.jpg', alt:'main01' },
    { img:'main_slide01.jpg', alt:'main02' },
    { img:'main_slide01.jpg', alt:'main03' },
    { img:'main_slide01.jpg', alt:'main04' },
    { img:'main_slide01.jpg', alt:'main05' }
  ]

  return (
    <section ref={ref} className={cn(styles.mainslide, className)} {...rest}>
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
        {msData.map((item, index) => {
          return (
            <SwiperSlide><img src={item.img} alt={item.alt} /></SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.navigation}>
        <div className="swiper-pagination"></div>
        <button type='button' className={styles.btn_play} onClick={swiperPlay}>{!isToggled ? <IconPlay alt='재생' /> : <IconStop alt='정지' /> }</button>
      </div>
    </section>
  );
});
MainSlide.displayName = 'MainSlide';
export default MainSlide;
