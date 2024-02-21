use("imdb");

db.movies.find();

//? array update operators
//? $push ,$addToSet,$pop, $pull,$pullAll

//? $push => adds new data to end of array

//db.friends.updateOne({ name: "Laxman" }, { $push: { hobbies: "Dancing" } });

//? multiple value push using $push
//? $each is called a modifier

//? push "Singing" and "Riding" to Laxman's hobbies.
// db.friends.updateOne(
//   { name: "Laxman" },
//   { $push: { hobbies: { $each: ["Singing", "Riding"] } } }
// );

// db.friends.updateOne({ name: "Laxman" }, { $push: { hobbies: "Cardio" } });

// db.friends.find();

//? addToSet=> push value to array if that item is not already there

//db.friends.updateOne({ name: "Laxman" }, { $addToSet: { hobbies: "Cycling" } });

// db.friends.updateOne(
//   { name: "Laxman" },
//   { $addToSet: { hobbies: { $each: ["Riding", "Book"] } } }
// );

//? add Hiking and Cricket to hobbies of prithvi
// db.friends.updateOne(
//   { name: "Prithvi" },
//   { $addToSet: { hobbies: { $each: ["Hiking", "Cricket"] } } }
// );

//? add Cycling and Driving to Jibana's hobbies
// db.friends.updateOne(
//   { name: "jibana" },
//   { $addToSet: { hobbies: { $each: ["Cycling", "Driving"] } } }
// );

//? add sub:English and point 61 to Suvechha's scores
// db.friends.updateOne(
//   { name: "Suvechha" },
//   { $addToSet: { scores: { sub: "English", point: 61 } } }
// );

//?$pop => removes item from start and end of array
// 1 => removes values from end of array
// -1=> removes values from start of array

// db.friends.updateOne({ name: "Laxman" }, { $pop: { hobbies: 1 } });

// db.friends.updateOne({ name: "Laxman" }, { $pop: { hobbies: -1 } });

//? remove last item and first item from jibana's scores
// db.friends.updateOne({ name: "jibana" }, { $pop: { scores: 1 } });

// db.friends.updateOne({ name: "jibana" }, { $pop: { scores: -1 } });

//? $pull
//? remove item based upon the condition

// db.friends.updateOne(
//   { name: "Suvechha" },
//   { $pull: { scores: { point: { $gt: 60 } } } }
// );

//db.friends.updateOne({ name: "jibana" }, { $pull: { hobbies: "Dancing" } });

// db.friends.updateOne(
//   { name: "Prithvi" },
//   { $pull: { scores: { sub: "Science" } } }
// );

//? remove scores for Prithvi whose point is greater than 70
// db.friends.updateOne(
//   { name: "Prithvi" },
//   { $pull: { scores: { point: { $gt: 70 } } } }
// );

//? remove "Cycling" from Laxman's hobbies
// db.friends.updateOne({ name: "Laxman" }, { $pull: { hobbies: "Cycling" } });

//! remove "Cricket"and "Basketball" from Prithvi's hobbies
// db.friends.updateOne(
//   { name: "Prithvi" },
//   { $pull: { hobbies: { $in: ["Cricket", "Basketball"] } } }
// );

// //? $pullAll => removes all matching values from an array
// db.friends.updateOne(
//   { name: "Laxman" },
//   { $pullAll: { hobbies: ["Dancing", "Swimming", "Riding"] } }
// );

//db.friends.find();

//? not more necessary
// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $pullAll: {
//       scores: [
//         { sub: "Math", point: 50 },
//         { sub: "Science", point: 65 },
//       ],
//     },
//   }
//);

  
