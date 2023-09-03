/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import HeroSection from "@/components/HeroSection";
import SearchExercises from "@/components/SearchExercises";
import Exercises from "@/components/Exercises";
const page = () => {
	return (
		<div className="">
			<HeroSection />
			<SearchExercises />
			<Exercises />
		</div>
	);
};

export default page;
