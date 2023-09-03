import { data } from "../../exercises";

export default function handler(req, res) {
	try {
		const { equipment } = req.query;

		console.log(equipment);

		const filteredExercises = data.filter((exercise) =>
			exercise.equipment.includes(equipment)
		);
		res.status(200).json({ data: filteredExercises });
	} catch (error) {
		res.status(500).json({ statusCode: 500, message: error.message });
	}
}
