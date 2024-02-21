use("imdb");

db.movies.find();

// ? read operation

// ? comparison operator
// ? $eq, $lt, $lte, $gt,$gte, $ne

//? $eq => ===
// name ==="Under the Dome"

// db.movies.find({ name: { $eq: "Under the Dome" } });

//? shortcut to find equals to/ equivalent code
// db.movies.find({ name: "Under the Dome" });

// ? $lt

// db.movies.find({ runtime: { $lt: 80 } });
// db.movies.find({ id: { $lt: 3 } });

// ? $gt
// db.movies.find({ "rating.average": { $gt: 9 } });

// ? find movies whose language is Japanese
//db.movies.find({ language: "Japanese" });

// ?find movies whose runtime is less than 30
//db.movies.find({ runtime: { $lt: 30 } });

//? find movies whose runtime is greater than 90
//db.movies.find({ runtime: { $gt: 90 } });

//? find movies whose rating is less than or equal to 6
// db.movies.find({ "rating.average": { $lte: 6 } });

//? $ne
// language !=="English"
// db.movies.find({ language: { $not: { $eq: "English" } } });

//? equivalent code
// db.movies.find({ language: { $ne: "Japanese" } });

//? find movies whose status is not "Ended"
// db.movies.find({ status: { $ne: "Ended" } });

//? find movies whose weight is not 75
//db.movies.find({ weight: { $ne: 75 } });

//? find movies whose genres include "Thriller"
// db.movies.find({ genres: ["Drama"] });

// db.movies.find({genres:"Drama"})

//? find movies whose genres include "crime"
//db.movies.find({ genres: "Crime" });

// ? logical operator
// ? $and,$or,$not,$nor

//? $and
// ? find movies whose weight is greater than 75
//?and rating is greater than 7

// db.movies.find({
//   $and: [{ weight: { $gt: 75 } }, { "rating.average": { $gt: 7 } }],
// });

//? Find movies whose genres is "Drama and "Crime

// db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Crime" }] });

// ? find movies whose network country name is "United States"
//? and status is "Running"
// db.movies.find({
//   $and: [{ "network.country.name": "United States" }, { status: "Running" }],
// });
// ? find movies whose rating is greater than 7 and less than equal to 9
// db.movies.find({
//   $and: [{ "rating.average": { $gt: 7 } }, { "rating.average": { $lte: 9 } }],
// });

//? equivalent code
// db.movies.find({ "rating.average": { $gt: 7, $lte: 9 } });

// db.movies.find({ $and: [{ type: "Scripted" }, { language: "English" }] });

//?equivalent code
// db.movies.find({ type: "Scripted", language: "English" });

//? $or
//? find movies whose rating is greater than 8 or genres is "Thriller"

// db.movies.find({
//   $or: [{ "rating.average": { $gt: 8 } }, { genres: "Thriller" }],
// });

// ? find movies whose id is less than 5 or runtime is less than30
// db.movies.find({ $or: [{ id: { $lt: 5 } }, { runtime: { $lt: 30 } }] });

//? *****Assignment****

//? Find movies whose status is "Ended"
// db.movies.find({ status: "Ended" });

//? find movies whose rating is 9
// db.movies.find({ "rating.average": 9 });

//? find movies whose rating is greater than 7 and less than 9
// db.movies.find({
//   $and: [{ "rating.average": { $gt: 7 } }, { "rating.average": { $lt: 9 } }],
// });

//? equivalent code
// db.movies.find({ "rating.average": { $gt: 7, $lt: 9 } });

//? find movies whose genres is Thriller
// db.movies.find({ genres: "Thriller" });

//? find movies whose status is Running
// db.movies.find({ status: "Running" });

//? find movies whose status is Ended and runtime is 60
// db.movies.find({ $and: [{ status: "Ended" }, { runtime: 60 }] });

// db.movies.find();

//? find movies whose weight is 75 and network country is Canada

// db.movies.find({
//   $and: [{ weight: 75 }, { "network.country.name": "Canada" }],
// });

//? find movies whose weight is 96 or runtime is 60
//db.movies.find({ $or: [{ weight: 96 }, { runtime: 60 }] });

// ? find movies whose rating average is not 9
//db.movies.find({ "rating.average": { $ne: 9 } });

//? $not
//? find movies whose generes doesnot include "Thriller"
// db.movies.find({ genres: { $ne: "Thriller" } });

//? find movies whose status is not "Ended"
// db.movies.find({ status: { $ne: "Ended" } });

//? $nor
//? find movies whose genres is neither "Thriller" nor "Drama"
// db.movies.find({ $nor: [{ genres: "Thriller" }, { genres: "Drama" }] });

//? find movies whose status is neither "Running" nor language is"English"

//  db.movies.find({ $nor: [{ status: "Running" }, { language: "English" }] });

//? $in
//? find movies whose rating is either 7 or 7.5 or 8 or 8.5 or 9 or 9.5
// db.movies.find({
//   $or: [
//     { "rating.average": 7 },
//     { "rating.average": 7.5 },
//     { "rating.average": 8 },
//     { "rating.average": 8.5 },
//     { "rating.average": 9 },
//     { "rating.average": 9.3 },
//   ],
// });

//? if $or is applied on same field for multiple conditions, we can use $in
// db.movies.find({ "rating.average": { $in: [7, 7.5, 8, 8.5, 9, 9.3] } });

//? $nin => If $nor is applied on same field,we can use $nin

// ? find movies whose genres is neither "Thriller" nor "Crime" nor "Supernatural"
// db.movies.find({
//   $nor: [
//     { genres: "Thriller" },
//     { genres: "Crime" },
//     { genres: "Supernatural" },
//   ],
// });

// db.movies.find({ genres: { $nin: ["Thriller", "Crime", "Supernatural"] } });
