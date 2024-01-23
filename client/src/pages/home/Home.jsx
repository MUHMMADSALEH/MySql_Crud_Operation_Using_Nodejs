import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [book, setBook] = useState([]);
const navigate=useNavigate()
  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const response = await axios.get("http://localhost:8080/book");
      setBook(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete=async(id)=>{
    try {
await axios.delete("http://localhost:8080/book/"+id)
window.location.reload()
        
    } catch (error) {
        console.log(error)
    }



  }
  const handleAddBook=(e)=>{
e.preventDefault()
navigate("addbook")

  }

const handleUpdate=(e)=>{
e.preventDefault()
navigate("/updatebook")

}

  return <div>
<h1>Saleh Book Store</h1>
<div className="books">
    {
        book.map(book=>(
            <div className="book" key={book.id}>
             {book.cover_pic &&  <img src={book.cover_pic} alt=" book cover picture " />}
             {book.title}
             {book.descr}
             {book.Author}
             {book.price}
            </div>
        ))
    }
</div>
<button className="delete"   onClick={()=>handleDelete(book.id)}>Delete</button>
<button className="update"  onClick={handleUpdate}>Update</button>

<button className="addbook" onClick={handleAddBook}>Add New Book</button>
  </div>;
};
export default Home;
