// let express = require("express")

// let app = express()  //express funct call garera app ma store greko

// app.get("/",(request,response)=>{
//     // response.send("hello world")
//     response.json({             //through json , json jasle frontend backend transfer/connect/like api grxa jun dubai le bujxa tyo language
//         name : "Manjit",
//         adddress : "Bhaktapur"
//     })
// })

// app.get("/about",(request,response)=>{  
//     response.send("About world")  
// })

// app.post("/register",(request,response)=>{
//    response.json({
//     name : "Register Successfully"
//    })
// })

// app.listen(3000,()=>{            //listen is event in js and funct is callback funct
//     console.log("serverr started succesfully at port 3000")    //3000 port no ma succesfully run vayo vane console log gar
// })



let express = require("express")

// const {bookFetch,postBook,deleteBook , patchBook} = require("./controller/bookController")

let app = express()  //express funct call garera app ma store greko

 
const {db} = require("./database/connection")
const bookRoute = require("./routes/bookRoutes")

const cors = require("cors")

// app.get("/books",bookFetch)

// app.post("/books",postBook)

// app.delete("/books/:id",deleteBook)

//  app.patch("/books/:id", patchBook)

app.use(cors({
    origin : 'http://localhost:5173'
}))

 //For postgres -- install sequelize
 //And sequelize driver -- npm i pg


app.use(express.json())

app.use("/api",bookRoute)

app.listen(2000,()=>{            //listen is event in js and funct is callback funct
    console.log("serverr started succesfully at port 2000")    //3000 port no ma succesfully run vayo vane console log gar
})