const mongoClient=require('mongodb').MongoClient;

mongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    if(err)
    {
        return console.log(err);
    }
    console.log("Connected");
    db.close();
});