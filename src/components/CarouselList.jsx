"use client";
import React, { useContext } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";
import GYM from "../assets/gym.png";
import { ExerciseContext } from "@/context/ContextProvider";

const CarouselList = ({ list }) => {
	const { setAllExercises } = useContext(ExerciseContext);
	const notify = (item) =>
		toast.promise(setBodyPart(item), {
			pending: "Fetching Exercises",
			success: `Fetched ${item.toLocaleUpperCase()} Exercises`,
			error: "Error fetching Exercises",
		});
	const setBodyPart = async (item) => {
		let url = "/api/exercises/bodypart";
		if (item === "all") {
			url = "/api/exercises";
		} else {
			url = `/api/exercises/bodypart/${item}`;
		}
		try {
			const res = await fetch(url);
			const data = await res.json();

			setAllExercises(data.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};
	return (
		<div className="w-full max-w-screen-2xl mx-auto mt-6 ">
			<Splide
				options={{
					rewind: false,
					perPage: 6,
					perMove: 1,
					gap: "1rem",
					pagination: false,
					breakpoints: {
						640: {
							perPage: 1,
						},
						768: {
							perPage: 3,
						},
						1024: {
							perPage: 5,
						},
					},
				}}>
				<SplideSlide className=" flex justify-center">
					<div
						onClick={() => notify("all")}
						className="h-48 w-48 p-5 rounded-br-2xl bg-white flex flex-col items-center  border-r-4 border-b-4 border-[#ff9945]">
						<Image src={GYM} alt="gym" width={70} height={70} />
						<h3 className="capitalize font-semibold text-lg">all</h3>
					</div>
				</SplideSlide>
				{list.map((item, index) => {
					return (
						<SplideSlide key={index} className=" flex justify-center">
							<div
								onClick={() => notify(item)}
								className="h-48 w-48 p-5 rounded-br-2xl bg-white flex flex-col items-center  border-r-4 border-b-4 border-[#ff9945]">
								<Image src={GYM} alt="gym" width={70} height={70} />
								<h3 className="capitalize font-semibold text-lg"> {item} </h3>
							</div>
						</SplideSlide>
					);
				})}
			</Splide>
		</div>
	);
};

export default CarouselList;
