import { data } from "../../exercises";

export default function handler(req, res) {
	try {
		const { bodyPart } = req.query;
		const filteredExercises = data.filter((exercise) =>
			exercise.bodyPart.includes(bodyPart)
		);
		res.status(200).json({ data: filteredExercises });
	} catch (err) {
		res.status(500).json({ statusCode: 500, message: err.message });
	}
}
