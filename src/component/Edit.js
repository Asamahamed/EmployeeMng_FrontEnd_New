import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Edit() {
let nav=useNavigate()

const {id}=useParams()



    //addd user function
    const [user,setUser] =useState({

        username :"",
        lastname:"",
        email: "" 


    });
   
const {username,lastname,email}=user

// after that create the event call

const onInputChange=(e)=>
{
  setUser({...user, [e.target.name] :e.target.value});
}

// -----
useEffect(()=>
{
    loadUser()
},[])


  
//Add data into data base from add employee table 

const onSubmit =async (e) =>
{
   e.preventDefault();
   await axios.put(`http://localhost:8084/user/${id}`,user)

   nav("/")
};

//losrd data function update 

const loadUser =async  () =>
{
    const result=await axios.get(`http://localhost:8084/user/${id}`)
    setUser(result.data)
}



//-------------------------------
   




    return (
    <div className='cotainer'>
      
      <div className='row'>
      <div className='col-md-6 offset-md-3 border roumded p-4 mt-2 shadow'>
        
        <h2 className='text-center'>Edit User</h2>

    <form onSubmit={(e)=>onSubmit(e)}>

        <div className='mr-3  text-center'  >
    <label htmlFor='name' className='form-lable'>User name</label>
    <input type={"text" } className ="form-control" placeholder='Enter your name' 
        name='username'
        value={username}
         onChange={(e) =>onInputChange(e)}
         
         />

    </div>
    
    <div className='mr-3  text-center'>
    <label htmlFor='name' className='form-lable'>Last name</label>
    <input type={"text" } className ="form-control" placeholder='Enter  your last name' 
     name='lastname'  
     value={lastname}
     onChange={(e) =>onInputChange(e)}
    />
    </div>  


    <div className='mr-3  text-center'>
    <label htmlFor='gmail' className='form-lable'>Gmail</label>
    <input type={"text" } className ="form-control" placeholder='Enter your Gmail'
      name='email' 
      value={email} 
    
    onChange={(e) =>onInputChange(e)}
    />

      </div>

    <button type='submit' className='btn btn-outline-primary'>Submit</button>  
    <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link >
      

    </form>
    </div>

    </div>

    </div>
  )
}
