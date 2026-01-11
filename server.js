let dotenv=require("dotenv")
dotenv.config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());

connectDB();
app.get("/",(req,res)=>{
    res.json({message:"server started"})
})
app.use("/auth", require("./routes/authRoutes"));
app.use("/events", require("./routes/eventRoutes"));
app.use("/bookings", require("./routes/bookingRoutes"));

app.listen(process.env.PORT, () =>
  console.log(` http://localhost:${process.env.PORT}`)
)