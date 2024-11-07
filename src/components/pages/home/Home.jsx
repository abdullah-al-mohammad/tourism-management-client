import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { useLoaderData } from 'react-router-dom';
// import banner1 from '../../../assets/banner/banner1.jpg'
// import banner2 from '../../../assets/banner/banner2.jpg'
// import banner3 from '../../../assets/banner/banner3.jpg'
// import Header from '../../../layout/header/Header';

const Home = () => {
    const touristSpot = useLoaderData()
    console.log(touristSpot);

    return (
        <div>
            <Swiper
                className=''
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
                <SwiperSlide><img className='' src='https://placehold.co/1950x600/000000/FFF' alt="" /></SwiperSlide>
                <SwiperSlide><img className='' src='https://placehold.co/1950x600/000000/FFF' alt="" /></SwiperSlide>
                <SwiperSlide><img className='' src='https://placehold.co/1950x600/000000/FFF' alt="" /></SwiperSlide>
            </Swiper>

            {/* tourist spot section */}
            <section className='my-3 container mx-auto'>
                <h1 className='text-center text-4xl mb-5'>Tourist Spot</h1>
                <div className='grid grid-cols-3 gap-2'>
                    {
                        touristSpot.map(spot => {
                            const { _id, url, spot, description } = spot;

                            return (
                                <div key={_id} className="card card-compact bg-base-100 w-96 shadow-xl">
                                    <figure>
                                        <img
                                            src={url}
                                            alt="spot" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">View Details Page</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;