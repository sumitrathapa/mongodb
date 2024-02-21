use("netflix");

// ?1. add a new movie to movie table

// db.movie.insertOne({
//   name: "Cast away",
//   leadActor: "Tom Hanks",
//   releaseYear: 2002,
//   length: 120,
// });

// ?2. Add another movie
// db.movie.insertOne({
//   name: "Batman",
//   leadActor: "Christian Bale",
//   releaseYear: 2000,
//   length: 90,
// });

// ?3. add two movie
// db.movie.insertMany([
//   {
//     name: "Chakka Panja",
//     leadActor: "Dipak Raj Giri",
//     releaseYear: 2017,
//     length: 180,
//   },
//   {namr:"12th fail",leadActor:"Vikrant Massey",releaseYear:2023,length:90},
// ]);

//? find movies
// db.movie.find();

// ?4. find movie whose lead actor is "Vikrant Massey"
// db.movie.findOne({ leadActor: "Vikrant Massey" });

// ?5. find movie whose name is "Chakka Panja"
// db.movie.findOne({ name: "Chakka Panja" });

// ?6. find movies which was released in 2017.
// db.movie.find({ releaseYear: 2017 });

// ?edit
// ?7. Change releaseYear of "Chakka Panja" to 2020
// db.movie.updateOne(
//   { name: "Chakka Panja" },
//   {
//     $set: {
//       releaseYear: 2020,
//     },
//   }
// );

// ?8. change length of "Cast away" to 90 minutes and releaseYear to 2000

// db.movie.updateOne({ name: "Cast away" }, { $set: { releaseYear: 2000 } });

// ?9.update those movies whose length is 90 to 105
// db.movie.updateMany(
//   { length: 90 },
//   {
//     $set: {
//       length: 105,
//     },
//   }
// );

// ?10.delete movie whose main role is played by "Dipak Raj Giri"
// db.movie.deleteOne({ leadActor: "Dipak Raj Giri" });

// db.movie.find();

// ?11.delete movies whose length is 105
// db.movie.deleteMany({ length: 105 });
// db.movie.find();
