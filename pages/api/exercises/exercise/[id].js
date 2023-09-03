import { data } from "../../exercises";

export default function handler(req, res) {
	try {
		const { id } = req.query;

		const filteredExercises = data.filter((exercise) =>
			exercise.id.includes(id)
		);

		res.status(200).json({ data: filteredExercises });
	} catch (error) {
		res.status(500).json({ statusCode: 500, message: error.message });
	}
}
