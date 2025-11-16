import React from 'react';
import { Slide } from 'react-awesome-reveal';
import howItWOrksLottie from '../../assets/lotties/how-it-works.json'
import Lottie from 'lottie-react';
const steps = [
	{
		title: 'Browse & Choose',
		desc: 'Explore our menu, filter by category, and discover trending dishes loved by the Foodio community.'
	},
	{
		title: 'Order & Pay',
		desc: 'Add your favorites to the cart, review your order, and checkout securely in seconds.'
	},
	{
		title: 'Enjoy & Repeat',
		desc: 'Sit back and relax! Your food will be delivered hot and fresh. Love it? Order again anytime!'
	}
];

const HowItWorks = () => {
	return (
		<section className="max-w-7xl mx-auto px-4 pb-8 md:pb-16 lg:pb-24">
			<div className="mb-12">
				<Slide direction="right">
					<h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-4">
						How <span className="text-secondary border-b-2 border-secondary">It Works</span>
					</h2>
				</Slide>
				<Slide>
					<p className="text-center text-accent mb-10 max-w-2xl mx-auto">
						Ordering your favorite food from Foodio is simple and fun. Just follow these steps and enjoy delicious meals delivered to your door!
					</p>
				</Slide>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
				{/* Illustration */}
				<div className="flex justify-center">
					 <Lottie animationData={howItWOrksLottie} className="w-100 h-100"></Lottie>
                                       
				</div>
				{/* Steps */}
				<ol className="relative border-l-2 border-secondary/20 ml-6 md:ml-0">
					{steps.map((step, idx) => (
						<li
							key={step.title}
							className="mb-12 last:mb-0 flex items-start"
						>
							<span
								className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
									idx === 0
										? 'bg-secondary text-white border-secondary'
										: 'bg-base-100 text-secondary border-secondary/40'
								} absolute -left-5 top-0`}
							>
								{idx === 0 ? (
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										strokeWidth="3"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M5 13l4 4L19 7"
										/>
									</svg>
								) : (
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										strokeWidth="3"
										viewBox="0 0 24 24"
									>
										<circle cx="12" cy="12" r="10" />
									</svg>
								)}
							</span>
							<div className="ml-8">
								<span className="uppercase text-xs text-secondary font-semibold tracking-widest">
									Step {idx + 1}
								</span>
								<h3 className="text-lg md:text-xl font-bold text-primary mb-1 mt-1">
									{step.title}
								</h3>
								<p className="text-accent text-base max-w-md">
									{step.desc}
								</p>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
};

export default HowItWorks;