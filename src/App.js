import './App.css';
import {useState} from 'react';
import axios from "axios";

function App() {
  const [newUser,setNewUser]=useState({
    name:'',
    datebirth:'',
    photo:''
  })

  const handleSubmit=(e)=>{
    e.preventDefault();
    const formdata= new FormData();
    formdata.append('photo',newUser.photo);
    formdata.append('datebirth',newUser.datebirth);
    formdata.append('name',newUser.name);
    console.log("Photo :",newUser.photo)
    axios.post('http://localhost:5800/users/add/',formdata)
    .then(res=>{console.log(res)})
    .catch(e=>{
      console.log(e)
    })

  }
  const handleChange=(e)=>{
    setNewUser({...newUser,[e.target.name]:e.target.value})

  }
  const handlePhoto=(e)=>{
    setNewUser({...newUser,photo:e.target.files[0]})

  }



  return (
    <div className="App">
      
      <header className="App-header">
      <h4>Create Profile </h4>
       <form onSubmit={handleSubmit} encType='multipart/form-data' className='form'>
        <input type="text" 
        placeholder="Enter Name"
        onChange={handleChange}
        name='name'
        className='form-control  m-4 p-3'
        />
     
        <input type="date" 
        placeholder="Date of birth"
        onChange={handleChange}
        name='datebirth'
        className='form-control m-4 p-3'
        />
        <input type="file" 
        name='photo'
        onChange={handlePhoto}

        accept=".png, .jpg , .jpeg"
        placeholder="Choose file"
        className='form-control  m-4 p-3'
        />
        <input
        type='submit'
        className='btn btn-success m-4 p-3 w-100'
        />  
        </form>
      </header>
    </div>
  );
}

export default App;
