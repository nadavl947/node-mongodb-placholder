module.exports = {
    getAllTodos: function (db) {
      try {
        const response = db.collection("todos").find({}).toArray();
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    insertNewTodo: function (db, body) {
      try {
        const response = db.collection("todos").insertOne({
          userId: body.userId,
          title: body.title,
          completed: false,
        });
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    deleteTodo: function (db, todoId, mongodb) {
      try {
        const response = db
          .collection("todos")
          .deleteOne({ _id: mongodb.ObjectId(todoId) });
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    updateTodo: async function (db, todoId, mongodb) {
      try {
        const response = await db
          .collection("todos")
          .findOne({ _id: mongodb.ObjectId(todoId) });
        if (response.completed) {
          db.collection("todos").updateOne(
            { _id: mongodb.ObjectId(todoId) },
            { $set: { completed: false } }
            );
        } else {
          db.collection("todos").updateOne(
            { _id: mongodb.ObjectId(todoId) },
            { $set: { completed: true } }
            );
        }
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  };
  