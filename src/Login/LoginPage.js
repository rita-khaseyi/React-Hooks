import './login.css';
import React , {useState} from 'react';
import { Link } from 'react-router-dom';

const LoginPage=()=>{
    const [submit,setSubmit]=useState(false);
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [succeed,setSucceed] = useState('');

    const handleSubmit = async(e)=>{
        setSucceed("login successful")
        e.preventDefault();
        setSubmit(true);
        const info={
            username:username,
            password:password
     }
     console.log({info});

     try {
        const response=await fetch('https://dummyjson.com/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(info)
        })
        const results = await response.json();
        console.log(results);
    }
    catch(err){
        console.log(err.message);
    }
   
}
return(
    <div className="login">
        <form className='form' onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type="text" placeholder="Enter your username" 
            onChange={(e)=>setUsername(e.target.value)} />
            <br/>
            <br/>
            <input type="password" placeholder="Enter your password"  onChange={(e)=>setPassword(e.target.value)} />
            <br/>
            <br/>
            <Link to={`/products`}> <button  type="submit">Login</button></Link> 


        </form>
        {submit && <p> {succeed}</p>}
    </div>
)
}

export default LoginPage;