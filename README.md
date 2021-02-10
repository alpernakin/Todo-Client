**To run the client** ```npm run test``` & ```npm run start```

**Must change in the server in index.js**

```
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,  access-control-allow-methods");
res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
next();
```
