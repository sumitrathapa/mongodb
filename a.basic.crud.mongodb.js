use("Udemy"); //database

// db.course.find();

// db.course.insertOne({ name: "HTML/CSS", duration: 30, price: 5000 });

// db.course.find();

// db.student.insertOne({ name: "sona", age: 24, address: "Koteswor" });

// db.student.find();

//CRUD
// ? Create => Add

//? insertOne,insertMany
//? insertOne => to insert one item to db

// db.product.insertOne({
//   name: "Bottle",
//   brand: "Serve well",
//   price: 1000,
// });

// db.product.find();

// db.product.insertOne({
//   name: "Noodle",
//   brand: "Wai Wai",
//   price: 30,
// });

// db.product.find();

// db.product.insertOne({
//   name: "Rice cooker",
//   brand: "Samsung",
//   price: 10600,
// });

// db.product.find();

//? insert many
// db.product.insertMany([
//   { name: "Shampo", brand: "Sunslik", price: 1000 },
//   { name: "Hair oil", brand: "Dabur amala", price: 600 },
// ]);

// db.product.find();

// db.customer.insertOne({
//   name: "Ansu",
//   address: "Chupra",
//   email: "ansu@gmai;.com",
// });
// db.customer.find();

//? read operation=>
//?to read or get item from table
//? findOne,find

//? findOne => return first item that matches the condition
// db.product.findOne({ price: 1000 });
// db.product.findOne({ brand: "Wai Wai" });

// ? find=> returns all product that matches the condition

// db.product.find({ price: 1000 });

// db.product.find();

// ? deleteOne, deleteMany
// db.product.deleteOne({ name: "Rice cooker" });
// db.product.deleteMany({ price: 1000 });

// ? update => changes values/edit
//? updateOne,updateMany

// db.product.updateOne(
//   { name: "Hair oil" },
//   {
//     $set: { price: 1100, brand: "Parachute" },
//   }
// );

// db.product.insertOne({ name: "Hair oil", brand: "Streaks", price: 800 });

// db.product.updateMany(
//   { name: "Hair oil" },
//   {
//     $set: { price: 1600 },
//   }
// );

db.product.find();
