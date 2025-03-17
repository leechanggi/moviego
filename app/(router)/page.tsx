import React from 'react';
import { SwiperMain } from '@/app/components';

const Page = () => {
  const msData = [
    { img:'main_slide01.jpg', alt:'main01' },
    { img:'main_slide01.jpg', alt:'main02' },
    { img:'main_slide01.jpg', alt:'main03' },
    { img:'main_slide01.jpg', alt:'main04' },
    { img:'main_slide01.jpg', alt:'main05' }
  ]

  return (
    <>
      <main>
        <SwiperMain data={msData}/>
      </main>
    </>
  );
};

export default Page;
