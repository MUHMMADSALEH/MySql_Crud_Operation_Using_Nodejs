import express, { json } from "express"
import db from "../Backend/connection.js"
import cors from 'cors'


const port=8080;
const app=express();
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{

    res.send("Hello from backend")

})

app.get("/book",(req,res)=>{
try {
    const q="SELECT * FROM books";
    db.query(q,(err,data)=>{
        if(data) return res.json(data)
        return res.json(err)
    })

    
} catch (error) {
    res.json(err);
}
})

app.post("/addbook",(req,res)=>{
   
    const q="INSERT INTO books (`title`,`descr`,`cover_pic`,`Author`,`price`) VALUES (?)"
    const values=[
        req.body.title,
        req.body.descr,
        req.body.cover_pic,
        req.body.Author,
        req.body.price

    ]
    db.query(q,[values],(err,data)=>{
        if(data) return res.json("book added successfully")
        return res.json(err)

    })
    ;
})

app.delete("books/:id",(req,res)=>{
    const bookId=req.params.id;
const q="DELETE FROM book WHERE id=?"
db.query(q,[bookId],(err,data)=>{
    if(data) return res.json("Book has been deleted succesfully")
    return res.json(err)
})
})
app.delete("books/:id",(req,res)=>{
    const bookId=req.params.id;
    const values=[
        req.body.title,
        req.body.descr,
        req.body.cover_pic,
        req.body.Author,
        req.body.price,
    ]
const q="UPDATE  books SET `title`=?,`descr`=?,`cover_pic`=?,`Author`=?,`price`=?  WHERE id=?"
db.query(q,[...values,bookId],(err,data)=>{
    if(data) return res.json("Book has been updated succesfully")
    return res.json(err)
})
})


app.listen(port,()=>{
    console.log(`Server is running on: ${port}`);

})

