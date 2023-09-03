"use client";
import { ExerciseContext } from "@/context/ContextProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Card = ({ exercise }) => {
	const { bodyPart, equipment, gifUrl, id, name } = exercise;
	const { setExercise } = useContext(ExerciseContext);

	return (
		<Link
			href={`/single_exercise/${id}`}
			onClick={() => setExercise(exercise)}
			className="bg-white rounded-xl shadow-md p-4 h-[30rem] w-96 items-center  flex flex-col justify-center">
			<Image
				className="w-full h-64 object-contain rounded-md"
				src={gifUrl}
				width={350}
				height={350}
				alt="Card Image"
			/>
			<div className="w-full h-full">
				<h4 className=" font-bold capitalize">{name}</h4>
				<div className="flex gap-3 mt-4">
					<button className="btn capitalize rounded-full text-gray-500">
						{bodyPart}
					</button>
					<button className="btn capitalize rounded-full text-gray-500">
						{equipment}
					</button>
				</div>
			</div>
		</Link>
	);
};

export default Card;
