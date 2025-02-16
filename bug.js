```javascript
//Incorrect usage of $inc operator in update query
db.collection('myCollection').updateOne({"_id":ObjectId("651510515678")},{$inc:{field1:1,field2:1}});
//Correct usage of $inc operator in update query
db.collection('myCollection').updateOne({"_id":ObjectId("651510515678")},{$inc:{field1:1},$inc:{field2:1}});
```