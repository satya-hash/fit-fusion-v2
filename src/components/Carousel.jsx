"use client";
import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
const Carousel = ({ images }) => {
	return (
		<Splide
			options={{
				arrows: false,
				pagination: false,
				rewind: true,
				autoplay: "true",
				perPage: 1,
				perMove: "1",
				type: "loop",
				autoplay: true,
				autoScroll: {
					speed: 1000,
				},
				breakpoints: {
					1000: {
						perPage: 1,
					},
				},
			}}>
			{images.map((image, index) => {
				return (
					<SplideSlide key={index}>
						<Image
							priority={true}
							src={image}
							quality={100}
							alt="exercise"
							width={image.width}
							height={image.height}
							className="object-cover w-full h-[90vh] aspect-video"
						/>
					</SplideSlide>
				);
			})}
		</Splide>
	);
};

export default Carousel;
