var mongodb = require('mongodb');
var shared={};

    shared.getMongoCon=function(res,cb){
    var url="mongodb://localhost:27017";
    var mongoClient=mongodb.MongoClient;

    mongoClient.connect(url,function(err,cluster){
        if(err){
            res.send('db con error');
        }
        var db=cluster.db('OnlineShopping');
        cb(db);
  })
      /*   mongoClient.connect(url,{ useUnifiedTopology: true },async(err,cluster)=>{
        if(err){
            res.send("DB Connection Error");
        }
        var db=await cluster.db('OnlineShopping');
        cb(db);
    }); */
}

module.exports=shared;