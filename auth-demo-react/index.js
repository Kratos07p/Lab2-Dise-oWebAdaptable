import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoutes.js";

//We'll create our server
const app = express()

//Become json response
app.use(express.json())

//Habilite the cors
app.use(cors())

//Define a port
const PORT =  process.env.port ?? 3000

//Call the routes
app.use(UserRoute)

//Running the server
app.listen(PORT,()=>{
    console.log('Server running at port' + ' ' + PORT);
})

