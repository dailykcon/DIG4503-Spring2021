import Axios from 'axios';
import {useState} from 'react';

function Get() {

    const[ISBN, setISBN] = useState("");   
    const[title, setTitle] = useState("");    
    const[author, setAuthor] = useState("");
    const[description, setDescription] = useState("");
    
    const getBook = async() => {
      const response = await Axios.get("http://localhost:45030/books/" + ISBN, {
        title:title,
        author:author,
        description:description});

      console.log(response.data);
    }
    
    return(
      <div>
        <h2>Retrieve book</h2>

        <input type = "text" placeholder= "ISBN" value={ISBN} onChange={(event) => setISBN(event.target.value)}/>
        <input type = "text" placeholder= "Title" value={title} onChange={(event) => setTitle(event.target.value)}/>
        <input type = "text" placeholder="Author" value={author} onChange={(event) => setAuthor(event.target.value)}/>
        <input type = "text" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)}/>
    
        <button onClick = {() => {getBook()}}>Submit</button>
        </div>
      );
    }
    
    export default Get;