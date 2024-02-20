let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let apiRouter = require("./api-router");
let cors = require("cors");
const dotenv = require("dotenv");


dotenv.config();
let port= process.env.port;
let dbcon = process.env.cloud_mongodb_con;


// bu kod ile tüm uygulamalar ile bağlantı kurulabilir
let app = new express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect(dbcon,{
    useNewUrlParser: true,
    useUnifiedTopology:true
});

var con = mongoose.connection;

if(!con) console.log("mongoDB'ye bağlanılamadı.")
else{ console.log("mongoDB'ye bağlandı")}
//http://localhost/api
app.use("/api",apiRouter);

app.get("/", (req,res)=>{
    res.send("Hello world")
});

app.listen(port,()=>{
    console.log("nodejs server çalışıyor")
})