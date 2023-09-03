/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import VideoCard from "./VideoCard";

const ExerciseVideoList = ({ target, params }) => {
	const [videosList, setVideosList] = useState([]);
	const [exercise, setExercise] = useState("");
	const notify = () =>
		toast.promise(getVideosList(), {
			pending: "Fetching Exercises Videos",
			success: `Fetched Exercises Videos`,
			error: "Error fetching Exercises Videos",
		});
	const getVideosList = async () => {
		try {
			const res = await fetch(`/api/exercises/exercise/${params.exercise}`);
			let { data } = await res.json();
			setExercise(data[0]);

			const url = `https://www.googleapis.com/youtube/v3/search`;

			const ytParams = {
				key: process.env.NEXT_PUBLIC_YOUTUBE_KEY,
				part: "snippet",
				maxResults: 10,
				q: target ? `${data[0].target} workout` : `${data[0].name} workout`,
			};

			const queryString = new URLSearchParams(ytParams).toString();

			try {
				const res = await fetch(`${url}?${queryString}`);
				const data = await res.json();
				setVideosList(data.items);
			} catch (error) {
				console.log(error);
			}
		} catch (error) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		notify();
	}, []);

	return (
		<div className="w-full mx-auto max-w-screen-2xl">
			<h2 className="text-3xl text-gray-800 w-full max-w-screen-2xl mt-3  font-bold mx-3 capitalize">
				Similar{" "}
				<span className="text-[#ff9945]">
					{target ? exercise.target : exercise.name}{" "}
				</span>{" "}
				Workout{" "}
			</h2>
			<div className="overflow-hidden w-full max-w-screen-2xl my-6">
				<Splide
					options={{
						rewind: false,
						perPage: 4,
						perMove: 1,
						gap: "1rem",
						pagination: false,
						breakpoints: {
							640: {
								perPage: 1,
							},
							768: {
								perPage: 2,
							},
							1024: {
								perPage: 3,
							},
						},
					}}>
					{videosList &&
						videosList.map((video, index) => {
							return (
								<SplideSlide
									className=" flex justify-center items-center"
									key={index}>
									<VideoCard video={video} />{" "}
								</SplideSlide>
							);
						})}
				</Splide>
			</div>
		</div>
	);
};

export default ExerciseVideoList;
