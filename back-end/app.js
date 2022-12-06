const express = require('express');
var bodyParser = require('body-parser');
const authRouter =require('./routes/auth')
const path =require('path')
const app =express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const dotenv=require("dotenv");
const mongoose = require('mongoose');
// const authRout=require("./routes/auth");
const userRout=require("./routes/users");
const postRout=require("./routes/posts");
const catagoriesRout=require("./routes/categories");
const multer = require('multer');
var cors = require('cors');

app.use(cors());
app.use('/images',express.static(path.join(__dirname,"images")))

const MONGO_URL="mongodb+srv://whassan55:humza8085@cluster0.vnejidi.mongodb.net/blog?retryWrites=true&w=majority"
dotenv.config();
app.use(express.json());
mongoose.connect(MONGO_URL).then(()=>{console.log("Connected to Mongodb")}).catch((err)=>{
console.log("err",err);


});
const storage=multer.diskStorage({
destination:(req,file,cb)=>{

cb(null,"images");
},filename:(req,file,cb)=>{
cb(null,req.body.name);
},
});
const upload=multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
res.status(200).json("file has been uploaded");
})
app.use("/api/auth",authRouter);
app.use("/api/users",userRout);
app.use("/api/posts",postRout);
app.use("/api/categories",catagoriesRout);
app.listen(5000,()=>{
console.log("app is listenting");
});
