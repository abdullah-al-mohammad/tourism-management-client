import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import banner1 from '../../../assets/banner/banner1.jpg'
import banner2 from '../../../assets/banner/banner2.jpg'
import banner3 from '../../../assets/banner/banner3.jpg'
import Header from '../../../layout/header/Header';

const Home = () => {
    return (
        <div>
            <Swiper
                className='h-96 w-full'
                modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                effect='fade'
                navigation
                autoplay
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img className='h-full object-cover' src={banner2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-full object-cover' src={banner3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-full object-cover' src={banner1} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;