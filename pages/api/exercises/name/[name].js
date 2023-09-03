import { data } from "../../exercises";

export default function handler(req, res) {
	try {
		const { name } = req.query;
		const filteredExercises = data.filter((exercise) =>
			exercise.name.includes(name)
		);
		res.status(200).json({ data: filteredExercises });
	} catch (error) {
		res.status(500).json({ statusCode: 500, message: error.message });
	}
}
