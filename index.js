import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"
import cors from "cors";
const app = express()

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";


 app.use(cors());
 app.use(express.json());
dotenv.config();

const PORT = process.env.PORT ||4000;
const URI=process.env.MogoDBURI;
//connect to mongoDB
try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,

    });
    console.log("connected to mongoDB");
   

} catch (error) {
    console.log("error:", error)
}
//routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`server is  listening on PORT ${PORT}`)
})