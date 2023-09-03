"use client";
import { createContext, useState } from "react";

export const ExerciseContext = createContext();

const ContextProvider = ({ children }) => {
	const [allExercises, setAllExercises] = useState([]);
	const [exercise, setExercise] = useState([]);

	const values = {
		allExercises,
		setAllExercises,
		exercise,
		setExercise,
	};
	return (
		<ExerciseContext.Provider value={values}>
			{children}
		</ExerciseContext.Provider>
	);
};

export default ContextProvider;
