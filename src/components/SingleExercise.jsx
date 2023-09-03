/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { ExerciseContext } from "@/context/ContextProvider";
import Image from "next/image";
import React, { useEffect, useState, useContext } from "react";
import Skeleton from "react-loading-skeleton";

const SingleExercise = ({ params }) => {
	// const [singleExercise, setSingleExercise] = useState("");
	const { exercise, setExercise } = useContext(ExerciseContext);
	const [isloading, setIsloading] = useState(true);

	useEffect(() => {
		getSingleExerecise();
		setTimeout(() => {
			setIsloading(false);
		}, 2000);

		async function getSingleExerecise() {
			const res = await fetch(`/api/exercises/exercise/${params.exercise}`);
			const data = await res.json();
			setExercise(data.data[0]);
		}
	}, []);
	return (
		<div className="bg-white max-w-screen-xl w-full mx-auto mt-14 py-8 md:py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
				<div className="md:w-1/2 md:mr-4 mb-4 md:mb-0">
					{exercise && (
						<Image
							className="w-full h-auto rounded-md shadow-md object-contain"
							alt={exercise.name}
							src={exercise.gifUrl}
							width={100}
							height={100}
						/>
					)}
				</div>

				<div className="md:w-1/2 md:ml-4">
					<h2 className="text-2xl md:text-3xl font-semibold mb-2 capitalize">
						{exercise.name}
					</h2>
					<p>
						Embark on a comprehensive workout featuring the renowned{" "}
						<span className="text-[#ff9945] font-medium capitalize">
							{exercise.name}
						</span>
						. This all-encompassing routine refines {exercise.target} and
						targets the{" "}
						<span className="text-[#ff9945] font-medium capitalize">
							{exercise.bodyPart}
						</span>{" "}
						for optimal results. Enhance cardiovascular endurance, build
						strength, and promote flexibility with this holistic approach.
						Whether you're a novice establishing fundamentals or a seasoned
						enthusiast, this workout guarantees a comprehensive strategy.
						Elevate your capabilities and perfect your{" "}
						<span className="text-[#ff9945] font-medium capitalize">
							{exercise.name}
						</span>{" "}
						technique on your path to fitness excellence.
					</p>
					<div className="flex flex-col md:flex-row gap-5">
						<button className="btn capitalize text-gray-600 ">
							{exercise.target}
						</button>
						<button className="btn capitalize text-gray-800">
							{exercise.bodyPart}
						</button>
						<button className="btn capitalize text-gray-800">
							{exercise.equipment}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleExercise;
