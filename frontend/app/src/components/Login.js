import { useState } from "react";

function Login(){


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email,password); 
  }



    return(
    <div className="App">
        <header className="App-header">
          <div className='login-form-wrap'>
            <h2>Login</h2>
            <form className='login-form'>
              <input type='email' name='email' placeholder='email' required
              onChange={(e)=>setEmail(e.target.value)}></input>
              <input type='password' name='password' placeholder='Password' required
              onChange={(e)=>setPassword(e.target.value)}></input>
              <button type='submit' className='btn-login'
              onClick={(e)=> handleLogin(e)}>Login</button>
            </form>
          </div>
        
        </header>
      </div>
    );
  }

  export default Login;