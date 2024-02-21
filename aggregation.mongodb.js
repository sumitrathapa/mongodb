use("imdb");

//? aggregate is read operation
//? makes no changes to db

//? pipeline stages
//? $match
//? $sort => sort documents based upon value and fields provided
// 1 => ascending => small to big
// -1 => descending =>big to small
//? $limit
//? $skip
//? $project
//? $group
//? $unwind
//? $lookup

//? $match => It is a filter stage, similar to read operation
//? $project => select field

// db.movies.aggregate([
//   {
//     $match: {
//       status: "Ended",
//       "rating.average": { $gte: 7 },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       status: 1,

//       averageRating: "$rating.average",
//     },
//   },
// ]);

db.movies.aggregate([
  {
    $match: {
      "rating.average": { $gt: 8 },
    },
  },
  {
    $project: {
      name: 1,
      // rating:1,
      avgRating: "$rating.average",
      scheduleDay: { $first: "$schedule.days" },
      genres: 1,
      secondGenres: { $arrayElemAt: ["$genres", 1] },
      //lastGenres: { $last: "$genres" },
    },
  },
  {
    $sort: {
      avgRating: 1,
    },
  },
]);

// db.movies.find();
