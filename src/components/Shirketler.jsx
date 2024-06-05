import React from 'react'
import Shirket from './Shirket'
import shekil1 from '/assets/images/shirket 1.webp'
import shekil2 from '/assets/images/shirket 2.webp'
import shekil3 from '/assets/images/shirket 3.webp'
import shekil4 from '/assets/images/shirket 4.webp'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay} from 'swiper/modules';
import 'swiper/css'

const Shirketler = () => {
  return (
    <div className='py-5'>
        <Swiper className='mySwiper'
                slidesPerView={3}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                breakpoints={{
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                >
        <SwiperSlide><Shirket imageProps={shekil1}/></SwiperSlide>
        <SwiperSlide><Shirket imageProps={shekil2}/></SwiperSlide>
        <SwiperSlide><Shirket imageProps={shekil3}/></SwiperSlide>
        <SwiperSlide><Shirket imageProps={shekil4}/></SwiperSlide>
        </Swiper>
        
    </div>
  )
}

export default Shirketler