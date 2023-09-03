let data;
const url = "https://exercisedb.p.rapidapi.com/exercises/";
const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "f4ed946d77mshd5f0c4382bf79a6p12940djsn3b386aa0f7de",
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
