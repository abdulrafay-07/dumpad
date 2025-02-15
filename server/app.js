import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

//Cors Middleware
app.use(cors({ 
    origin:process.env.CORS_ORIGIN,
    credentials: true
}
))

//Middleware for JSON Configuration
app.use(express.json({limit: "64kb"}))

//Middleware for URL Configuration 
app.use(express.urlencoded({extended: true, limit: "64kb"}))

//Middleware  to keep files availaible to public in public folder
app.use(express.static("public"))

//Middleware for cookieParser
app.use(cookieParser());


//Routes Import 
    // import userRouter from "./routes/user.routes.js"


//To use Routes
    //app.use("/api/v1/use", userRouter)  


export default app; 