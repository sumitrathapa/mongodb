use("relations");
// db.owners.insertMany([
//   { name: "Kamal", address: "Surkhet" },
//   { name: "Laxman", address: "Lalitpur" },
//   { name: "Arun", address: "Tripureshwor" },
// ]);

// db.owners.find();

// db.vehicles.insertOne({
//   name: "FZ",
//   brand: "Yamaha",
//   cc: 250,
//   color: "blue",
//   ownerId: ObjectId("65d5a4f9ad89033b2f7ae19d"),
// });

//? lookup
// example

// db.vehicles.aggregate([
//   { $match: {} },
//   {
//     $lookup: {
//       from: "owners",
//       localField: "ownerId",
//       foreignField: "_id",
//       as: "ownerDetails",
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       brand: 1,
//       cc: 1,
//       color: 1,
//       ownerName: { $first: "$ownerDetails.name" },
//     },
// },
//]);

// ?one to one =>
// e.g one vehicle has one ownerDetails, one person has one national identity card
// ? one to many =>
// e.g. one person can play multiple games in sport week
// ?many to many => one to many from both direction
// e.g. one student can enroll in multiple courses in broadway
// and one course has multiple students

// db.courses.insertMany([
//   {
//     name: "MERN",
//     duration: 90,
//   },
//   {
//     name: "Python",
//     duration: 45,
//   },

//   {
//     name: "Devops",
//     duration: 65,
//   },

//   {
//     name: "AI",
//     duration: 90,
//   },
//   {
//     name: "Flutter",
//     duration: 55,
//   },
// ]);

// db.students.insertOne({
//   name: "Sumitra",
//   address: "Tinkune",
//   email: "sumitra@gmail.com",
//   enrolledCourseIds: [
//     ObjectId("65d5abbc68d1f91ed64a989a"),
//     ObjectId("65d5abbc68d1f91ed64a989c"),
//   ],
// });
db.students.aggregate([
  { $match: {} },
  {
    $lookup: {
      from: "courses",
      localField: "enrolledCourseIds",
      foreignField: "_id",
      as: "courseDetails",
    },
  },
  {
    $project: {
      name: 1,
      address: 1,
      email: 1,
      "courseDetails.name": 1,
      "courseDetails.duration": 1,
    },
  },
]);
