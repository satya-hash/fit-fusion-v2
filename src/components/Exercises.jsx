/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect, useContext } from "react";
import Pagination from "@/components/Pagination";
import Card from "@/components/Card";
import { ExerciseContext } from "@/context/ContextProvider";

import CardSkeleton from "./CardSkeleton";

const Exercises = () => {
	const { setAllExercises, allExercises } = useContext(ExerciseContext);

	const [currPage, setCurrPage] = useState(1);
	const [isloading, setIsloading] = useState(true);

	const startIndex = (currPage - 1) * 10;
	const endIndex = startIndex + 10;

	const currExercises = allExercises.slice(startIndex, endIndex);

	const handlePageChange = (pageNum) => {
		window.scrollTo({ top: 1000, behavior: "smooth" });
		setCurrPage(pageNum);
	};

	useEffect(() => {
		const getExercisesData = async () => {
			const res = await fetch("/api/exercises");
			const { data } = await res.json();
			setAllExercises(data);
		};

		setTimeout(() => {
			setIsloading(false);
		}, 2000);

		getExercisesData();
	}, []);

	if (isloading) {
		return <CardSkeleton num={4} />;
	}

	return (
		<div
			id="exercise"
			className=" w-full mx-auto flex flex-col items-center p-5 gap-10 mt-12">
			<h2 className="mr-auto w-full max-w-screen-2xl mx-auto"> Explore Now </h2>
			<div className="flex flex-wrap gap-12 justify-center items-center">
				{/* Exercises */}

				{allExercises &&
					currExercises.map((exercise, index) => (
						<div key={index}>
							<Card exercise={exercise} />
						</div>
					))}
			</div>

			{/* Pagination  */}

			<Pagination
				currPage={currPage}
				totalPages={Math.ceil(allExercises.length / 10)}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};

export default Exercises;
