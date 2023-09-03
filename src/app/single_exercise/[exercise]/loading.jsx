import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
	return (
		<div className="bg-white max-w-screen-xl w-full mx-auto mt-14 py-8 md:py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
				<div className="md:w-1/2 md:mr-4 mb-4 md:mb-0">
					<Skeleton
						className="w-full h-auto rounded-md shadow-md object-contain"
						height={450}
						width={350}
					/>
				</div>

				<div className="md:w-1/2 md:ml-4">
					<h2 className="text-2xl md:text-3xl font-semibold mb-2 capitalize">
						<Skeleton width={200} />
					</h2>
					<p>
						<Skeleton count={5} width={100} />
					</p>
					<div className="flex flex-col md:flex-row gap-5">
						<Skeleton width={100} />
						<Skeleton width={100} />
						<Skeleton width={100} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
