use("imdb");
//? update => edit values in document

//? $set
//? update name from "Alish" to "Laxman"
//db.friends.updateOne({ name: "Alish" }, { $set: { name: "Laxman" } });

// db.friends.find();

//? update name from "Unique" to "Jibana"
//? and age to 21 and contact number to "9854763217"
// db.friends.updateOne(
//   { name: "Unique" },
//   { $set: { name: "jibana", age: 21, contactNumber: "9854763217" } }
// );

//? update name from "Prakash" to "Prithvi"
//? age to 22 and contactNumber to "9851023456"
// db.friends.updateOne(
//   { name: "Prakash" },
//   { $set: { name: "Prithvi", age: 22, contactNumber: "9851023456" } }
// );
db.friends.find();

// db.friends.updateOne({ _id: ObjectId("659fbbac8e46b28b92d7033c") },{$set:{name:"Prithvi",age:22,contactNumber:"9851023456"}});
// db.friends.find();

//? update name from "Nischal" to "Suvechha",age to 20 and
//? contactNumber to "9865321478" and also isNepali to true

// db.friends.updateOne(
//   { name: "Nischal" },
//   {
//     $set: {
//       name: "Suvechha",
//       age: 20,
//       contactNumber: "9865321478",
//       isNepali: true,
//     },
//   }
// );
//db.friends.find();

//? $inc=> increases or decreases value by given number
//db.friends.updateOne({ name: "Laxman" }, { $inc: { age: 10 } });

//? update age of  "Jibana" by 40
//? age = age+40

//db.friends.updateOne({ name: "jibana" }, { $inc: { age: 40 } });

// db.friends.find();
//? decrease age of "Jibana" by 45
//? age = age - 45;

//db.friends.updateOne({ name: "jibana" }, { $inc: { age: -45 } });

//db.friends.find();

//? increase age for all friends by 10
//db.friends.updateMany({}, { $inc: { age: 10 } });

//? $mul => multiplies field by provided value
//? age = age *2
//db.friends.updateOne({ name: "Suvechha" }, { $mul: { age: 10 } });
db.friends.find();

//? divide age of Prithvi by 2
//db.friends.updateOne({ name: "Prithvi" }, { $mul: { age: 0.5 } });
