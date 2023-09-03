import Image from "next/image";
import React from "react";

const VideoCard = ({ video }) => {
	return (
		<div className="bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden max-w-sm w-full mx-3 dark:bg-gray-800 dark:border-gray-700">
			{video.snippet.thumbnails && video.snippet.thumbnails.medium && (
				<Image
					className="object-contain w-full aspect-video "
					src={video.snippet.thumbnails.medium.url}
					alt={video.snippet.title}
					height={90}
					width={160}
				/>
			)}
			<div className="p-5 flex flex-col h-80 justify-between -mt-6">
				<h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
					{" "}
					{video.snippet.title}{" "}
				</h5>
				<p className="font-normal  text-gray-700 mb-3 dark:text-gray-400">
					{" "}
					{video.snippet.description}{" "}
				</p>
				<a
					href={` https://youtube.com/watch/${video.id.videoId} `}
					target="_blank"
					className="text-white mr-auto bg-[#ff9945] btn focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Watch
					<svg
						className="-mr-1 ml-2 h-4 w-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clipRule="evenodd"></path>
					</svg>
				</a>
			</div>
		</div>
	);
};

export default VideoCard;
