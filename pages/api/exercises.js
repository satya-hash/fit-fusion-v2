let data;
const url = "https://exercisedb.p.rapidapi.com/exercises/";
const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": process.env.NEXT_PUBLIC_EXERCISE_DB_KEY,
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
	},
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	data = result;
} catch (error) {
	console.error(error);
}

export default function handler(req, res) {
	try {
		res.status(200).json({ data });
	} catch (err) {
		res.status(500).json({ statusCode: 500, message: err.message });
	}
}
export { data };
