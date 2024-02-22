use("imdb");

// db.teachers.insertOne({
//   name: "Sambhav",
//   hobbies: ["Cycling", "Dancing", "Singing", "Book"],
// });

db.teachers.find();
db.teachers.aggregate([{ $match: {} }, { $unwind: "$hobbies" }]);
