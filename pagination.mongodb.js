use("imdb");

//? pagination
//? $skip
//? $limit

//? page 1
// skip = (page-1) *limit

let page = 4;
const limit = 5;
let skip = (page - 1) * limit;
let searchText = "G";

let sortOrder = "asc";
let sortValue = sortOrder === "asc" ? 1 : -1;

db.movies.aggregate([
  {
    $match: {
      name: { $regex: searchText, $options: "i" },
    },
  },
  {
    $sort: {
      name: sortValue,
    },
  },

  { $skip: skip },
  { $limit: limit },

  {
    $project: {
      name: 1,
      id: 1,
      _id: 0,
    },
  },
]);

//db.movies.find();
