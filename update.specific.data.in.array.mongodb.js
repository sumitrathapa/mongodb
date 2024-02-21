use("imdb");
// db.friends.updateOne(
//   { name: "Suvechha" },
//   { $set: { scores: { sub: "Population Science" } } }
// );

//? $, $[], $[identifier]

//? $ => In array we used $ to change the one item
//? $[] => In array we used $[] to change the all item
//? $[identifier] => In array we used $[item] and arrayFilters
//? to change upon the conditions

// db.friends.updateOne(
//   { name: "Prithvi" },
//   {
//     $push: {
//       scores: {
//         $each: [
//           { sub: "English", point: 25 },
//           { sub: "computer", point: 55 },
//           { sub: "GK", point: 60 },
//         ],
//       },
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Prithvi", "scores.sub": "Social" },
//   { $set: { "scores.$.sub": "Science" } }
// );

// db.friends.updateOne(
//   { name: "Prithvi", "scores.sub": "computer" },
//   { $set: { "scores.$.sub": "MERN" } }
// );

// db.friends.updateOne(
//   { name: "Prithvi", "scores.sub": "English" },
//   { $set: { "scores.$.sub": "Nepali", "scores.$.point": 59 } }
// );

// db.friends.updateOne(
//   { name: "Prithvi", "scores.point": 55 },
//   { $set: { "scores.$.sub": "Python" } }
// );

//db.friends.updateOne({ name: "Prithvi" }, { $set: { "scores.$[].point": 70 } });

// db.friends.updateOne(
//   { name: "Prithvi", "scores.sub": "Nepali" },
//   { $set: { "scores.$.point": 65 } }
// );

// db.friends.updateOne(
//   { name: "Prithvi", "scores.sub": "Python" },
//   { $set: { "scores.$.point": 60 } }
// );

//?decrease point of all subjects by 10
// db.friends.updateOne(
//   { name: "Prithvi" },
//   { $inc: { "scores.$[].point": -10 } }
// );

//? update "Hiking" to "Rafting"
// db.friends.updateOne(
//   { name: "Prithvi", hobbies: "Hiking" },
//   { $set: { "hobbies.$": "Rafting" } }
// );

// db.friends.updateOne(
//   { name: "Prithvi" },
//   { $set: { "scores.$[item].point": 66 } },
//   {
//     arrayFilters: [{ "item.point": { $gte: 55 } }],
//   }
// );

//? change Prithvi's hobbies of Gaming and Raftiing to Cycling
// db.friends.updateOne(
//   { name: "Prithvi" },
//   { $push: { hobbies: { $each: ["Gaming", "Dancing"] } } }
// );

// db.friends.updateOne(
//   { name: "Prithvi" },
//   { $set: { "hobbies.$[item]": "Cyling" } },
//   { arrayFilters: [{ $or: [{ item: "Gaming" }, { item: "Rafting" }] }] }
// );

db.friends.updateOne(
  { name: "Prithvi" },
  { $set: { "hobbies.$[item]": "Cycling" } },
  { arrayFilters: [{ item: "Cyling" }] }
);
db.friends.find();
