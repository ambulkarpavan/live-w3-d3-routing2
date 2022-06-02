import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const {isAuth,logout} = useContext(AuthContext);
  const navigate = useNavigate(); // this hook use for controlling html in js use for button
 const handleOnClick=() =>{
   //log,call api
 if(isAuth){
    logout();
    // navigate("/")
 }
 else{
  navigate("/login");
 }
    
   
 };
 
  return (
    <div style={{padding: "10px", display:"flex", gap:"20px"}}>
        Navbar:
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/feeds">Feeds</Link>
        
        <button onClick={ handleOnClick }>{isAuth ? "Logout" : "Login"}</button>
        
   
   </div>
  )
}

export default Navbar