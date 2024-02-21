use("Broadway");
//? CRUD

//?  Create/add operation => insertOne , insertMany;

//?insertOne
// db.course.insertOne({
//   name: "MERN",
//   duration: 90,
//   price: 25000,
// });

// db.course.insertOne({
//   name: "HTML/CSS",
//   duration: 30,
//   price: 6000,
// });

//? insertMany
// db.course.insertMany([
//   {
//     name: "Java programing",
//     duration: 60,
//     price: 23000,
//   },
//   {
//     name: "Python",
//     duration: 90,
//     price: 25000,
//   },
// ]);

// db.course.find();

//? read operation =>findOne,find

//? findOne
// db.course.findOne({ price: 6000 });
// db.course.findOne({ duration: 60 });

//?find
// db.course.find({ price: 25000 });

//? delete operation => deleteOne,deleteMany

//?deleteOne
// db.course.deleteOne({ name: "Python" });

//?deleteMany
// db.course.deleteMany({ price: 25000 });

//? update operation => updateOne,updateMany

// db.course.updateOne(
//   { name: "Java programing" },
//   {
//     $set: {
//       price: 30000,
//       duration: 90,
//     },
//   }
// );

// db.course.insertOne({
//   name: "Java programing",
//   duration: 100,
//   price: 32000,
// });

// db.course.updateMany(
//   { name: "Java programing" },
//   {
//     $set: {
//       price: 33000,
//     },
//   }
// );
db.course.find();
