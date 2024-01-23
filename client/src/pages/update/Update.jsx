import react,{useState} from "react"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"

const Update =()=>{
const location=useLocation()
console.log(location.pathname.split("/")[2])
const bookId=location.pathname.split("/")[2]// finding  the id 
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
    const handleUpdate=async (e)=>{
e.preventDefault()
try {
    await axios.post("http://localhost:8080/addbook"+bookId,book)
    navigate("/")
    
} catch (error) {
    console.log(error);
}
    }

    console.log(book)

    


    return(
        <div className="form">
         <input type="text" name="title" placeholder="Enter title..." onChange={handleChange}/>
         <input type="text" name="descr" placeholder="Enter descr..." onChange={handleChange}/>
         <input type="text" name="cover_pic" placeholder="Enter cover_pic..." onChange={handleChange}/>
         <input type="text" name="Author" placeholder="Enter Author Name..." onChange={handleChange}/>
         <input type="number" name="price" placeholder="Enter price..." onChange={handleChange}/>
         <button onClick={handleUpdate}>Update</button>
        </div>

    )
}
export default Update;