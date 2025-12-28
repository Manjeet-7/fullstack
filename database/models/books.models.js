
const bookmodel = (sequelize,DataTypes)=>{
     
    const books = sequelize.define("book",{
        bookName : {
            type : DataTypes.STRING,
            allowNull : false

        },
        bookPrice : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        bookAuthor : {
            type : DataTypes.STRING
        },
        bookGenre : {
            type : DataTypes.STRING
        },
        bookDescription : {
              type : DataTypes.TEXT    
        }
    })

    return books
}

export default bookmodel