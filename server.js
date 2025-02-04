import express from "express"
import cors from "cors"
import {createServer} from "http"
import path from "path"

import bcrypt from "bcrypt"
import { fileURLToPath } from "url"
import dotenv from "dotenv"
import {MongoClient} from "mongodb"


dotenv.config();

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);


const app=express();
const server=createServer(app);

const PORT=process.env.PORT || 2500;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'views')));
app.use(express.json());
app.use(cors());


const mongoURI=process.env.MONGODB_URI || "mongodb://localhost:27017";
const client=new MongoClient(mongoURI);
let db;
 (async () =>{
  try{
    await client.connect();
    db=client.db("PawSome");
    console.log("Connected to database successfully");

    await db.collection("users").createIndex({email:1},{unique:true});
  }
  catch(err){
    console.error("Error Connecting to the DB:",err);
  }
 })();

// app.get('/',(req,res)=>{
//     res.render('');

//  })

app.post('/register',async(req,res)=>{
    const{email,password}=req.body;

    try{
        if(!email || !password){
            return res.status(400).json({error:'Email and Password are required'})
        }
        const existingUser=await db.collection('users').findOne({email});
        if(existingUser){
            return res.status(409).json({error:'Email already exists'});
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const result=await db.collection('users').insertOne({
            email,
            password:hashedPassword,
        });
        res.status(201).json({ message: "User registered successfully", userId: result.insertedId });
    }
    catch(err){
        console.error("Error registering User");
        return res.status(500).json({error:'Error Registering user'});
    }
});

app.post('/login',async(req,res)=>{
    const {email,password}=req.body;

    try{
        const user=await db.collection('users').findOne({email});
        if(!user){
            return res.status(401).json({error: 'Invalid Email and Password'});

        }
        const isPasswordValid=await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return response.status(401).json({error:"Invalid Email and Password"});
        }
        res.status(200).json({ message: "Login successful", userId: user._id });
    }
    catch(error){
        console.error("Error Logging user",error);
        return res.status(500).json({error:'error loggingt user'});
    }
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "Joinus.ejs"));
  });
server.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
});