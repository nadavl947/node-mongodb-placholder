module.exports = {
    getAllPosts: function (db) {
      try {
        const response = db.collection("post").find({}).toArray();
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    insertNewPost: function (db, body, mongodb) {
      try {
        const response = db.collection("post").insertOne({
          title: body.title,
          text: body.text,
          creator: mongodb.ObjectId(body.creator),
          publishData: body.publishData,
          comments: [],
        });
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    updatePost: function (db, body, mongodb, postId, updateType) {
      if (updateType === '1') {
        try {
          const response = db
            .collection("post")
            .updateOne({ _id: mongodb.ObjectId(postId) }, { $set: body });
          return response.result;
        } catch (error) {
          console.log(error);
        }
      } else if (updateType === '2') {
        try {
          const response = db.collection("post").updateOne(
            { _id: mongodb.ObjectId(postId) },
            {
              $push: {
                comments: {
                  autor: mongodb.ObjectId(body.comments.autor),
                  text: body.comments.text,
                },
              },
            }
          );
          return response.result;
        } catch (error) {
          console.log(error);
        }
      }
    },
    deletePost: function (db, mongodb, postId) {
      try {
        const response = db
          .collection("post")
          .deleteOne({ _id: mongodb.ObjectId(postId) });
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  };
  