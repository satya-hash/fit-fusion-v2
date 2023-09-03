"use client";
import React from "react";
import Carousel from "@/components/Carousel";

import Hero1 from "../assets/hero1.jpg";
import Hero2 from "../assets/hero2.jpg";
import Hero3 from "../assets/hero3.jpg";

const HeroSection = () => {
	return (
		<div className="relative">
			<div className="absolute  w-full h-full bg-black opacity-40 z-10" />
			<div className="absolute w-[90%] max-w-screen-md mx-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left z-10">
				<h4
					className="text-[#ff9945]  
        font-medium text-lg uppercase tracking-widest
        mb-5

        ">
					{" "}
					Fitness Club{" "}
				</h4>
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
					Elevate Your Fitness with FitFusion
				</h1>
				<button
					onClick={() => window.scrollTo({ top: 1100, behavior: "smooth" })}
					className="btn mr-auto">
					{" "}
					Get Fit Today
				</button>
			</div>
			<Carousel images={[Hero1, Hero2, Hero3]} />
		</div>
	);
};

export default HeroSection;
