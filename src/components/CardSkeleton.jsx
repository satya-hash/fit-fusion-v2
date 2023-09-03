import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CardSkeleton = ({ num }) => {
	const arr = new Array(num).fill(1);
	return (
		<div className="flex flex-wrap gap-12 justify-center ">
			{arr.map((_, index) => (
				<div
					key={index}
					className="rounded-xl shadow-md p-4 items-center  flex flex-col justify-center">
					<Skeleton
						className="object-contain rounded-md"
						height={350}
						width={350}
					/>
					<div className="w-full h-full">
						<h4 className="">
							<Skeleton width={150} />
						</h4>
						<div className="flex gap-3 mt-4">
							<button className=" rounded-full">
								<Skeleton width={100} />
							</button>
							<button className=" rounded-full">
								<Skeleton width={100} />
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default CardSkeleton;
