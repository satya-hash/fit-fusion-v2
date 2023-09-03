"use client";
import { ExerciseContext } from "@/context/ContextProvider";
import React, { useState, useContext, useEffect } from "react";
import CarouselList from "./CarouselList";

const SearchExercises = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [bodyPartList, setBodyPartList] = useState([]);
	const { allExercises, setAllExercises } = useContext(ExerciseContext);

	const getSearch = async () => {
		if (!searchQuery) return;

		const filteredExercises = allExercises.filter((exercise) => {
			return (
				exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				exercise.target.toLowerCase().includes(searchQuery.toLowerCase()) ||
				exercise.bodyPart.toLowerCase().includes(searchQuery.toLowerCase()) ||
				exercise.equipment.toLowerCase().includes(searchQuery.toLowerCase())
			);
		});

		setAllExercises(filteredExercises);
	};

	const getBodyPartsList = async () => {
		const res = await fetch("/api/exercises/bodyPartList");
		const data = await res.json();
		setBodyPartList(data.data);
	};
	useEffect(() => {
		getBodyPartsList();
	}, []);

	return (
		<>
			<div className="max-w-5xl w-full mx-auto flex justify-between gap-2 items-center p-5">
				<input
					type="text"
					className="w-full h-14 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					placeholder="Search Exercises"
				/>
				<button
					onClick={() => {
						getSearch();
					}}
					className="btn h-14 md:w-auto">
					{" "}
					Search{" "}
				</button>
			</div>
			<CarouselList list={bodyPartList} />
		</>
	);
};

export default SearchExercises;
