"use client";
import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
	const handleScroll = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<>
			{isVisible && (
				<button
					className=" btn fixed right-8 bottom-8  w-12 h-12 flex justify-center items-center "
					onClick={handleScroll}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="1.5em"
						viewBox="0 0 384 512">
						<path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
					</svg>{" "}
				</button>
			)}
		</>
	);
};

export default ScrollToTop;
