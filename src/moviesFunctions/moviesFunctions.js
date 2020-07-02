const projectionList = {
    url: 0,
    type: 0,
    language: 0,
    status: 0,
    premiered: 0,
    officialSite: 0,
    schedule: 0,
    weight: 0,
    webChannel: 0,
    externals: 0,
    updated: 0,
    _links: 0,
  };
  module.exports = {
    getAllMovies: function (db, pageNumber) {
      if (pageNumber === "1") {
        try {
          const response = db
            .collection("movies")
            .find({}, { projection: projectionList })
            .limit(10)
            .toArray();
          return response;
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const response = db
            .collection("movies")
            .find({}, { projection: projectionList })
            .skip(10 * (pageNumber - 1))
            .limit(10)
            .toArray();
          return response;
        } catch (error) {
          console.log(error);
        }
      }
    },
  };
  