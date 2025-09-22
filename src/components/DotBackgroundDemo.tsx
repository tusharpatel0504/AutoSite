import { useEffect } from "react";
import { cn } from "../lib/utils";
import { InteractiveHoverButton } from "./ui/InteractiveHoverButton ";
import { LazyVideo } from "./LazyVideo";

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
		demoUrl: "https://res.cloudinary.com/dasdeglju/video/upload/v1758551550/Fashion_Stylist_Bot_video_urv8bt.mp4",
		video: "https://res.cloudinary.com/dasdeglju/video/upload/v1758551550/Fashion_Stylist_Bot_video_urv8bt.mp4",
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
		demoUrl: "https://res.cloudinary.com/dasdeglju/video/upload/v1758551557/Skincare_Beauty_Chatbot_tceqti.mp4",
		video: "https://res.cloudinary.com/dasdeglju/video/upload/v1758551557/Skincare_Beauty_Chatbot_tceqti.mp4",
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
		demoUrl: "https://res.cloudinary.com/dasdeglju/video/upload/v1758551557/E-commerce_Shopping_Assistant_qioabx.mp4",
		video: "https://res.cloudinary.com/dasdeglju/video/upload/v1758551557/E-commerce_Shopping_Assistant_qioabx.mp4",
	},
];

const ipadMockup = "/apple-ipad-air-4-medium.png";

export function DotBackgroundDemo() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	const handleDemoClick = (url: string) => {
		window.open(url, "_blank");
	};

	return (
		<div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
			{/* Dot Pattern Background */}
			<div
				className={cn(
					"absolute inset-0 z-0",
					"[background-size:32px_32px]",
					"[background-image:radial-gradient(circle,#404040_1.5px,transparent_1.5px)]",
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

			{/* Page Heading */}
			<div className="mb-16 text-center mt-28 relative z-20 px-4">
				<h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
					Chatbot Demos
				</h1>
				<p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
					Experience our AI-powered chatbots and voicebots in action across
					different industries. Each demo showcases real-world applications and
					capabilities.
				</p>
			</div>

			{/* Chatbot Cards */}
			<div className="flex flex-col gap-12 w-full max-w-6xl relative z-20 px-4 sm:px-6 md:px-8">
				{chatbots.map((bot, idx) => (
					<div
						key={idx}
						className="bg-[#181818] rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-lg"
					>
						{/* Left Section */}
						<div className="flex-1 text-white w-full">
							<h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
								{bot.heading}
							</h2>
							<p className="text-xs sm:text-sm md:text-base mb-6 md:mb-8 max-w-md">
								{bot.description}
							</p>
							<div>
								<h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
									FEATURES
								</h3>
								<ul className="list-disc list-inside text-xs sm:text-sm md:text-base ml-4 space-y-1 mb-6">
									{bot.features.map((f, i) => (
										<li key={i}>{f}</li>
									))}
								</ul>
								<InteractiveHoverButton
									onClick={() => handleDemoClick(bot.demoUrl)}
									className="ml-2 md:ml-4 -mt-2 sm:-mt-4"
								>
									View Demo
								</InteractiveHoverButton>
							</div>
						</div>

						{/* Right Section */}
						<div className="flex-1 flex items-center justify-center relative w-full">
							<div className="relative w-[90vw] sm:w-[70vw] md:w-[500px] flex items-center justify-center">
								{/* iPad Mockup */}
								<img
									src={ipadMockup}
									alt="iPad Air 4 Mockup"
									className="w-full h-full object-contain drop-shadow-2xl pointer-events-none select-none"
									draggable={false}
								/>
								{/* Video Overlay */}
								<LazyVideo
									src={bot.video}
									autoPlay
									loop
									muted
									playsInline
									className="absolute"
									style={{
										width: "94%",
										height: "90%",
										borderRadius: "0.75rem",
										objectFit: "contain",
										background: "#000",
										boxShadow: "0 2px 12px rgba(0,0,0,0.5)",
									}}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
