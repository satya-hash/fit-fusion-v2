const categories = [
  "back",
  "cardio",
  "chest",
  "lower arms",
  "lower legs",
  "neck",
  "shoulders",
  "upper arms",
  "upper legs",
  "waist",
];

export default function handler(req, res) {
  try {
    res.status(200).json({ data: categories });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
