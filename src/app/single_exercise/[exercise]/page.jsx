import ExerciseVideoList from "@/components/ExerciseVideoList";
import SingleExercise from "@/components/SingleExercise";

const page = ({ params }) => {
	return (
		<section>
			<SingleExercise params={params} />
			{/* related to same bodypart */}
			<ExerciseVideoList params={params} target={false} />
			<ExerciseVideoList params={params} target={true} />
		</section>
	);
};

export default page;
