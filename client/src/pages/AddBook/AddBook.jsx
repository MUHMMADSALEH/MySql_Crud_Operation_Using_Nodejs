import react,{useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddBook=()=>{

    const navigate=useNavigate()
    const [book,setBook]=useState({
        title:"",
        descr:"",
        cover_pic:"",
        Author:"",
        price:null
    })
    const handleChange=(e)=>{
       
        setBook((prev)=>({...prev,[e.target.name]:e.target.value}))

    }
    const handleSubmit=async (e)=>{
e.preventDefault()
try {
    await axios.post("http://localhost:8080/addbook",book)
    navigate("/")
    
} catch (error) {
    console.log(error);
}
    }

    console.log(book)


    return(
        <div className="form">
            <h1>Add Book</h1>
         <input type="text" name="title" placeholder="Enter title..." onChange={handleChange}/>
         <input type="text" name="descr" placeholder="Enter descr..." onChange={handleChange}/>
         <input type="text" name="cover_pic" placeholder="Enter cover_pic..." onChange={handleChange}/>
         <input type="text" name="Author" placeholder="Enter Author Name..." onChange={handleChange}/>
         <input type="number" name="price" placeholder="Enter price..." onChange={handleChange}/>
         <button onClick={handleSubmit}>Submit</button>
        </div>

    )
}
export default AddBook;