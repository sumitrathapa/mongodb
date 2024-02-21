use("imdb");

//? array read operations
//? $all
//? $elemMatch
//? $size

// db.students.insertMany([
//   {
//     name: "Manish",
//     favoriteSingers: ["Arijit",    "Menuka", "Shreya"],
//     hobbies: [
//       {
//         name: "Badminton",
//         frequency: 5,
//       },
//       {
//         name: "PubG",
//         frequency: 7,
//       },
//       {
//         name: "Dancing",
//         frequency: 2,
//       },
//     ],
//   },

//   {
//     name: "Sona",
//     favoriteSingers: ["Sonu", "Narayan", "Pramod"],
//     hobbies: [
//       {
//         name: "Singing",
//         frequency: 4,
//       },
//       {
//         name: "Football",
//         frequency: 5,
//       },
//       {
//         name: "Volleyball",
//         frequency: 3,
//       },
//     ],
//   },

//   {
//     name: "Arun",
//     favoriteSingers: ["Aatif", "Sushant", "Udit"],
//     hobbies: [
//       {
//         name: "PubG",
//         frequency: 5,
//       },
//       {
//         name: "Singing",
//         frequency: 7,
//       },
//       {
//         name: "Bikes",
//         frequency: 2,
//       },
//     ],
//   },
// ]);
// db.students.find();

//? find students whose fav singer includes "Arijit" and "Shreya"
// db.students.find({
//   $and: [{ favoriteSingers: "Arijit" }, { favoriteSingers: "Shreya" }],
// });

//? $all
//? same fieldma and lagexa tyo field array ho vane $all use garne
// db.students.find({ favoriteSingers: { $all: ["Arijit", "Shreya"] } });

//?$size

// db.students.insertOne({
//   name: "Rina",
//   favoriteSingers: ["Neha", "Tony"],
//   hobbies: [
//     {
//       name: "Dancing",
//       frequency: 10,
//     },
//   ],
// });
// db.students.find();

//? find students who has two favorite singers.
//! $size doesnot accept range such as $gt,$lt

// db.students.find({ favoriteSingers: { $size: 2 } });

// ? find students  who has three favorite singers.
// db.students.find({ favoriteSingers: { $size: 3 } });

//? find students who has only one hobbies
// db.students.find({ hobbies: { $size: 1 } });

//? $elemMatch
//? Arrayma autai elementma sabai condition match hunaparyo

//? find students whose hobby is "PubG"
//? and  frequency is greater than 6
//!$and gives unexpected results
// db.students.find({
//   $and: [{ "hobbies.name": "PubG" }, { "hobbies.frequency": { $gt: 6 } }],
// });

// db.students.find({
//   hobbies: { $elemMatch: { frequency: { $gt: 6 }, name: "PubG" } },
// });

// ? find students whose hobby is "Singing" and
// ? frequency is greater than or equals to 5
// db.students.find({
//   hobbies: { $elemMatch: { name: "Singing", frequency: { $gt: 5 } } },
// });
