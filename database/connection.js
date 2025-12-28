const { Sequelize, DataTypes } = require("sequelize")

   const sequelize = new Sequelize("postgresql://postgres.wwwwqjytsuadpnbtoqbt:tijnamispassword@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres")

   sequelize.authenticate()
   .then(()=>{
    console.log("Authenticate vayoo")
   })
.catch((err)=>{
   console.log("Error" + err)
    }
)

  const db = {}
  db.haha = Sequelize
  db.hehe = sequelize


// next method
// const db = {
//     haha : Sequelize,
//     hehe : sequelize,
// }

db.books = require("./models/books.models").default(sequelize,DataTypes)  //Function call
   
//Migration of database goes here
sequelize.sync({alter: true}).then(()=>{
    console.log("Migratin succssfylly!")
})


 module.exports = db

   
