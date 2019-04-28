const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://anamariatucaliuc11:Mongo@cluster0-zbehl.mongodb.net/Poly";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("Poly").collection("task");
  // perform actions on the collection object
  client.close();
});


client.connect(function(err){
    if (err) throw err;
    var dataSet = client.db("Poly").collection("task").find();
    dataSet.forEach(function(task){
        console.log(task.name+'|'+task.done);
    });
});
