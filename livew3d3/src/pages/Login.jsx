import React, { useContext, useState } from 'react'

import { AuthContext } from '../context/AuthContext';

const Login = () => {
// const navigate = useNavigate();
    const [loginCreds, setLoginCreds] = useState({})
    const{login} = useContext(AuthContext);
    
    const handleChange = (e) => {

        const {name,value} = e.target;
    setLoginCreds({
        ...loginCreds,
        [name]:value,
    });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
        // navigate("/feeds")
    };

  return (
    <div>Login
        <form 
        onSubmit={handleSubmit}
        style={{
            display:"flex",
            flexDirection:"column",
            margin:"auto",
            maxWidth:"200px",
            gap:"10px",

        }}>
            <input 
            type="email" 
            placeholder='email'
            name="email"
            onChange={handleChange}
            />
            <input 
            type="password" 
            placeholder='password..'
            name="password"
            onChange={handleChange}
            
            />
            <button type='submit'>Login</button>
            </form>
        </div>
 
  )
}

export default Login