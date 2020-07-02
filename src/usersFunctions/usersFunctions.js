module.exports = {
  getAllUsers: function (db) {
    try {
      const response = db.collection("users").find({}).toArray();
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  insertNewUser: function (db, body) {
    try {
      const response = db.collection("users").insertOne(body);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  updateUser: function (db, body, mongodb, updateType, userId) {
    if (updateType === "updateone") {
      try {
        const response = db
          .collection("users")
          .updateOne({ _id: mongodb.ObjectId(userId) }, { $set: body });
        return response;
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = db
          .collection("users")
          .updateMany({}, { $inc: { age: +1 } });
        return response;
      } catch (error) {
        console.log(error);
      }
    }
  },
  deleteUser: function (db, mongodb, userId) {
    try {
      const response = db
        .collection("users")
        .deleteOne({ _id: mongodb.ObjectId(userId) });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
