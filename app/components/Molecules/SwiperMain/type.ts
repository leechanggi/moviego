import React from 'react';
import { SwiperProps } from 'swiper/react';

// slideItem 타입 정의
type slideItem = {
    img: string;
    alt: string;
};

// MainSlideProps 타입 정의
type MainSlideProps = {
    data: slideItem[]; // 데이터를 명확히 정의
} & SwiperProps & React.HTMLProps<HTMLDivElement>; // SwiperProps와 HTMLProps를 확장

export type { MainSlideProps };
