import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { Link, useLoaderData } from 'react-router-dom';
import banner1 from '../../../assets/Bangkok-Thailand-4.jpg'
import banner2 from '../../../assets/Phang-Nga-Bay-Phuket-Thailand.jpg'
import banner3 from '../../../assets/Saint-Martin-Island-Bangladesh2.jpg'
// import Header from '../../../layout/header/Header';

const Home = () => {
	const touristSpot = useLoaderData()
	// console.log(touristSpot);

	return (
		<div className='container mx-auto'>
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
				<SwiperSlide><img className='w-full h-96' src={banner1} alt="" /></SwiperSlide>
				<SwiperSlide><img className='w-full h-96' src={banner2} alt="" /></SwiperSlide>
				<SwiperSlide><img className='w-full h-96' src={banner3} alt="" /></SwiperSlide>
			</Swiper>

			{/* tourist spot section */}
			<section className='my-3 container mx-auto'>
				<h1 className='text-center text-4xl mb-5 font-serif'>Tourist Spots</h1>
				<div className='grid grid-cols-3 gap-2'>
					{
						touristSpot.map(visitSpot => {
							const { _id, url, spot, description } = visitSpot;

							return (
								<div key={_id} className="card card-compact bg-base-100 w-96 shadow-xl">
									<figure>
										<img
											src={url}
											alt="img" />
									</figure>
									<div className="card-body">
										<h2 className="card-title">{spot}</h2>
										<p>{description}</p>
										<div className="card-actions justify-end">
											<Link to={`/viewDetails/${visitSpot._id}`} className="btn btn-primary">View Details Page</Link>
										</div>
									</div>
								</div>
							)
						}
						)
					}
				</div>
			</section>
			{/* section 2 */}
			{/* <section>
				<h1 className='text-center text-4xl mb-5 font-serif'>Our Most Popular Adventures</h1>
				<div>
					<div className="card bg-base-100 w-96 shadow-xl">
						<figure>
							<img
								src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
								alt="Shoes" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">Thai Island To Visit</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
				</div>
			</section> */}
		</div>
	);
};

export default Home;