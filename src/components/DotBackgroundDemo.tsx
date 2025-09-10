import { cn } from "../lib/utils";
import React, { useEffect } from "react";
import { InteractiveHoverButton } from "./ui/InteractiveHoverButton ";

const chatbots = [
	{
		heading: "Fashion Stylist Bot",
		description:
			"Personal style advisor that understands fashion trends, provides styling tips, suggests outfit combinations, and helps customers make informed fashion choices.",
		features: [
			"Smart Personalise Outfit suggestions through Cards",
			"Order tracking & updates",
			"Live Call support",
			"Lead generation and deep customer's problem Analysis",
			"Image upload suggestions",
		],
		demoUrl: "https://calendly.com/guptaritik67856/fashion-stylist-demo",
	},
	{
		heading: "Skincare Beauty Chatbot",
		description:
			"AI-powered beauty assistant for D2C skincare and cosmetics brands. Handles personalized product recommendations, skin type quizzes, routine building, and provides instant beauty advice to customers 24/7.",
		features: [
			"Personalized Product Recommendations with image upload",
			"Skin Quiz & Routine Build",
			"24/7 Query Handling through Chat and voice and order tracking",
			"Analytics & Insights Dashboard",
		],
		demoUrl: "https://calendly.com/guptaritik67856/skincare-beauty-demo",
	},
	{
		heading: "E-commerce Shopping Assistant",
		description:
			"Smart shopping companion that helps customers find products, track orders, handle returns, and provide personalized recommendations based on browsing history and preferences.",
		features: [
			"Product recommendation engine",
			"Order tracking & updates",
			"Return & refund processing",
			"Live Call support",
			"Personalized shopping experience",
			"Lead generation and deep customer's problem Analysis",
		],
		demoUrl: "https://calendly.com/guptaritik67856/ecommerce-shopping-demo",
	},
];

export function DotBackgroundDemo() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	const handleDemoClick = (url: string) => {
		window.open(url, "_blank");
	};

	return (
		<div className="relative flex min-h-screen w-full items-center justify-center bg-white dark:bg-black">
			{/* Dot Background */}
			<div
				className={cn(
					"absolute inset-0",
					"[background-size:20px_20px]",
					"[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
					"dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
				)}
			/>
			{/* Gradient from 4 corners */}
			<div
				className="pointer-events-none absolute inset-0 z-10"
				style={{
					backgroundImage: `
                        radial-gradient(circle at left top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 60%),
                        radial-gradient(circle at right top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 60%),
                        radial-gradient(circle at left bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 60%),
                        radial-gradient(circle at right bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 60%)
                    `,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "left top, right top, left bottom, right bottom",
					backgroundSize: "65% 65%, 65% 65%, 65% 65%, 65% 65%",
				}}
			/>
			{/* Main Content */}
			<div className="relative z-20 w-full flex flex-col items-center">
				{/* Page Heading */}
				<div className="mb-12 text-center mt-24">
					<h1 className="text-5xl md:text-6xl font-medium text-white mb-4">
						Chatbot Demos
					</h1>
					<p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
						Experience our AI-powered chatbots and voicebots in action across
						different industries. Each demo showcases real-world applications and
						capabilities.
					</p>
				</div>
				{/* Chatbot Cards */}
				<div className="flex flex-col gap-12 w-full max-w-5xl">
					{chatbots.map((bot, idx) => (
						<div
							key={idx}
							className="bg-[#181818] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 shadow-lg"
						>
							{/* Left Section */}
							<div className="flex-1 text-white">
								<h2 className="text-5xl md:text-5xl font-light mb-6">
									{bot.heading}
								</h2>
								<p className="text-base md:text-lg mb-8 max-w-md">
									{bot.description}
								</p>
								<div>
									<h3 className="text-2xl font-light mb-2">FEATURES</h3>
									<ul className="list-disc list-inside text-base ml-4 space-y-1 mb-6">
										{bot.features.map((f, i) => (
											<li key={i}>{f}</li>
										))}
									</ul>
								
									<InteractiveHoverButton onClick={() => handleDemoClick(bot.demoUrl)} className="ml-4 -mt-4">View Demo</InteractiveHoverButton>
								</div>
							</div>
							{/* Right Section */}
							<div className="flex-1 flex items-center justify-center relative">
								<div className="w-[300px] h-[450px] bg-gray-300 rounded-[2.5rem] border-4 border-[#2e4156] shadow-inner" />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
