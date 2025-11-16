import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdFormatQuote, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Slide } from "react-awesome-reveal";

const reviews = [
	{
		name: "Sadia Rahman",
		location: "Dhaka, Bangladesh",
		img: "https://i.pravatar.cc/100?img=11",
		text: "Foodio has made it so easy to enjoy my favorite meals at home. The service is fast and always reliable.",
	},
	{
		name: "Arif Chowdhury",
		location: "Chittagong, Bangladesh",
		img: "https://i.pravatar.cc/100?img=12",
		text: "I love the freshness and variety Foodio offers. It’s my go-to for quick, delicious food!",
	},
	{
		name: "Maya Sultana",
		location: "Sylhet, Bangladesh",
		img: "https://i.pravatar.cc/100?img=13",
		text: "Every order is packed with care and arrives hot. Foodio never disappoints!",
	},
	{
		name: "Tanvir Hasan",
		location: "Rajshahi, Bangladesh",
		img: "https://i.pravatar.cc/100?img=14",
		text: "Great customer support and easy-to-use app. Foodio makes ordering food a breeze.",
	},
	{
		name: "Nusrat Jahan",
		location: "Khulna, Bangladesh",
		img: "https://i.pravatar.cc/100?img=15",
		text: "The best food delivery experience I’ve had. Highly recommended!",
	},
];

const CustomerReview = () => {
	return (
		<section className="max-w-7xl mx-auto px-4 pb-8 md:pb-16 lg:pb-24">
			<div className="mb-12">
				<Slide direction="right">
					<h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-4">
						What Our  
						<span className="text-secondary border-b-2 border-secondary">
							{" "} Customers {" "}
						</span>
							Are Saying
					</h2>
				</Slide>
				<Slide direction="left">
					<p className="text-center text-accent mb-10 max-w-2xl mx-auto">
						Discover real stories and honest feedback from people who use Foodio
						every day. Your experience matters to us!
					</p>
				</Slide>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
				{/* Left: Title, Subtitle, Arrows */}
				<div className="flex flex-col items-start md:items-center">
					<h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
						From our{" "}
						<span className="text-secondary">community</span>
					</h3>
					<p className="text-accent mb-8 max-w-xs">
						See what our customers are saying about their Foodio experience.
					</p>
					<div className="flex gap-3">
						<button className="swiper-button-prev-custom w-10 h-10 flex items-center justify-center rounded-full pl-2 border border-secondary hover:bg-secondary/10 transition">
							<MdArrowBackIos size={20} />
						</button>
						<button className="swiper-button-next-custom w-10 h-10 flex items-center justify-center rounded-full border border-secondary hover:bg-secondary/10 transition">
							<MdArrowForwardIos size={20} />
						</button>
					</div>
				</div>
				{/* Right: Swiper Review */}
				<div>
					<Swiper
						modules={[Navigation, Autoplay]}
						navigation={{
							prevEl: ".swiper-button-prev-custom",
							nextEl: ".swiper-button-next-custom",
						}}
						slidesPerView={1}
						loop={true}
						autoplay={{ delay: 3500, disableOnInteraction: false }}
						speed={700}
						className="w-full"
					>
						{reviews.map((review, idx) => (
							<SwiperSlide key={idx}>
								<div className="bg-base-100/90 p-0 md:p-4 flex flex-col items-start">
									<span className="text-3xl text-secondary font-serif mb-4">
										<MdFormatQuote />
									</span>
									<p className="text-2xl md:text-3xl font-medium text-accent mb-6 leading-snug">
										{review.text}
									</p>
									<div className="flex items-center gap-3 mt-2">
										<img
											src={review.img}
											alt={review.name}
											className="w-10 h-10 rounded-full border border-secondary"
										/>
										<div>
											<p className="font-semibold text-primary leading-tight">
												{review.name}
											</p>
											<p className="text-xs text-accent leading-tight">
												{review.location}
											</p>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default CustomerReview;
