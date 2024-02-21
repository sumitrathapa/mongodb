use("imdb");

//? evaluation operator
//? $regex
//? $expr

//? find movies whose summary includes "Starling City"
// db.movies.find({ summary: { $regex: "Starling City", $options: "i" } });

//? find movies whose summary include "Pacific"
//db.movies.find({ summary: { $regex: "pacific", $options: "i" } });

//?find movies whose name includes "Morty"
//db.movies.find({ summary: { $regex: "morty", $options: "i" } });

//?$expr
//expression

// db.sales.insertMany([
//   {
//     name: "TV",
//     order: 100,
//     volume: 50,
//   },
//   {
//     name: "Bottle",
//     order: 70,
//     volume: 150,
//   },
//   {
//     name: "Mouse",
//     order: 25,
//     volume: 10,
//   },
//   {
//     name: "Rice",
//     order: 10,
//     volume: 500,
//   },
// ]);
// db.sales.find();

//? 1.find products whose order is greater than 100
// db.sales.find({ order: { $gt: 50 } });

//? 2.find product whose order is greater than volume

//?order > volume
// db.sales.find({ $expr: { $gt: ["$order", "$volume"] } });
