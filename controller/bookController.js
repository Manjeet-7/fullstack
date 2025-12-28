

const {books} = require("../database/connection")

  const bookFetch = async(request,response)=>{
       
     const datas = await books.findAll()    
    
        // response.send("hello world")
        response.json({             //through json , json jasle frontend backend transfer/connect/like api grxa jun dubai le bujxa tyo language
           message : "Book Fetched Successfully",
           datas,
        })    
    
  }

  const postBook = async(request,response)=>{
      const {bookName,bookPrice,bookAuthor,bookGenre} = request.body
      
        await books.create({
            bookName : bookName,
            bookPrice : bookPrice,
            bookAuthor : bookAuthor,
            bookGenre : bookGenre
         })
         // console.log(request.body)
         response.json({
          message : "Book added successfully"
         })
      }

      const singleBookFetch = async(request,response)=>{
             
          const id  = request.params.id
        const datas = await books.findByPk(id)
      
        response.json({
         message : "Single book Fetched Successfully",
         datas
        })
      }

      const deleteBook = async(request,response)=>{
         const id = request.params.id
       await  books.destroy({
            where : {
               id : id
            }
         })
    response.json({
     message : "Book deleted successfully"
    })
 }

 const editBook = async(request,response)=>{
   const id = request.params.id
   const{bookAuthor,bookName,bookPrice,bookGenre} = request.body

 await books.update({
   bookName : bookName,
   bookPrice,
   bookAuthor,
   bookGenre
  },
  {
   where : {
      id : id
   }

  })
    response.json({
     message : "Book updated successfully"
    })
   }
      
     module.exports = {bookFetch , postBook ,deleteBook , editBook ,singleBookFetch}


// const { books } = require("../database/connection"); // ✅ Assuming 'books' is your Sequelize model

// // Fetch all books
// const bookFetch = async (request, response) => {
//   try {
//     const datas = await books.findAll();
//     response.json({
//       message: "Books fetched successfully",
//       datas,
//     });
//   } catch (error) {
//     response.status(500).json({ message: "Error fetching books", error });
//   }
// };

// // Create a new book
// const postBook = async (request, response) => {
//   try {
//     const { bookName, bookPrice, bookAuthor, bookGenre } = request.body;

//     await books.create({
//       bookName,
//       bookPrice,
//       bookAuthor,
//       bookGenre,
//     });

//     response.json({
//       message: "Book added successfully",
//     });
//   } catch (error) {
//     response.status(500).json({ message: "Error adding book", error });
//   }
// };

// // Fetch a single book by ID
// const singleBookFetch = async (request, response) => {
//   try {
//     const id = request.params.id;
//     const data = await books.findByPk(id); // ✅ Fixed: `findByPK` → `findByPk`

//     response.json({
//       message: "Single book fetched successfully",
//       data,
//     });
//   } catch (error) {
//     response.status(500).json({ message: "Error fetching book", error });
//   }
// };

// // Delete a book by ID
// const deleteBook = async (request, response) => {
//   try {
//     const id = request.params.id;
//     await books.destroy({
//       where: { id },
//     });

//     response.json({
//       message: "Book deleted successfully",
//     });
//   } catch (error) {
//     response.status(500).json({ message: "Error deleting book", error });
//   }
// };

// // Edit (update) a book by ID
// const editBook = async (request, response) => {
//   try {
//     const id = request.params.id;
//     const { bookAuthor, bookName, bookPrice, bookGenre } = request.body;

//     await books.update(
//       {
//         bookName,
//         bookPrice,
//         bookAuthor,
//         bookGenre,
//       },
//       {
//         where: { id },
//       }
//     );

//     response.json({
//       message: "Book updated successfully",
//     });
//   } catch (error) {
//     response.status(500).json({ message: "Error updating book", error });
//   }
// };

// module.exports = {
//   bookFetch,
//   postBook,
//   deleteBook,
//   editBook,
//   singleBookFetch,
// };
