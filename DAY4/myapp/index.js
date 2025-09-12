const express=require('express');
const app=express();
const {open}=require('sqlite');
const sqlite3=require('sqlite3');
const path = require('path');
const dbPath=path.join(__dirname,'goodreads.db');
let db= null;
const initlizeDBAndServer = async()=>{
    try{db = await open({
        filename:dbPath,
        driver:sqlite3.Database
    })
    app.listen(4000,()=>{
    console.log('server is running in the port 4000')
})
} catch(e){
        console.log(`DB Error : ${e.message}`);
        process.exit(1);
    }
}


initlizeDBAndServer();

// Get all books details
app.get('/books',async(request,response)=>{
    const getAllBooks =`select * from books order by title;`
    const bookarray=await db.all(getAllBooks);
    response.send(bookarray)
})


app.get("/books/genre/:genre/", async (request, response) => {
    const { genre } = request.params;

    const getBooksQuery = `
        SELECT
            *
        FROM
            books
        WHERE
            genre = ?;`;

    const books = await db.all(getBooksQuery, [genre]);

    response.send(books);
});
