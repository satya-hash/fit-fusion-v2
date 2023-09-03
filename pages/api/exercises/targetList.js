const targetList = [
  "abductors",
  "abs",
  "adductors",
  "biceps",
  "calves",
  "cardiovascular system",
  "delts",
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "levator scapulae",
  "pectorals",
  "quads",
  "serratus anterior",
  "spine",
  "traps",
  "triceps",
  "upper back",
];

export default function handler(req, res) {
  try {
    res.status(200).json({ data: targetList });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
