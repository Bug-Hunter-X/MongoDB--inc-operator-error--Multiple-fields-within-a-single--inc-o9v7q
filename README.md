# MongoDB $inc Operator Error: Multiple Fields in a Single $inc

This repository demonstrates a common yet subtle error when using the `$inc` operator in MongoDB update queries. The incorrect usage involves attempting to increment multiple fields within a single `$inc` operator. This results in only the last field being correctly updated.

## Incorrect Usage:

The following code snippet shows the incorrect usage of the `$inc` operator:

```javascript
db.collection('myCollection').updateOne({"_id":ObjectId("651510515678")},{$inc:{field1:1,field2:1}});
```

## Correct Usage:

To correctly increment multiple fields, separate `$inc` operators must be used for each field:

```javascript
db.collection('myCollection').updateOne({"_id":ObjectId("651510515678")},{$inc:{field1:1},$inc:{field2:1}});
```

This ensures that each field is incremented independently and correctly.
