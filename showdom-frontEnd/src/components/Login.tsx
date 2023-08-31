import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import APIService from '../service/APIService'
import User from '../models/User'





function Login() {

    
const [username, setUsername] = useState<string>('')
const [password, setPassword] = useState<string>('')
const [token, setToken] = useCookies(['mytoken'])
const [isLogin, setLogin] = useState(true)
const [authRetrieved, setAuthRetrieved] = useState(true)

let navigate = useNavigate()
// let authRetrieved = true;


useEffect(() => {
    if (token['mytoken']) {
        navigate('/medias')
    }

}, [token])


const loginBtn = async () => {
    if (username && password) {
        const userBody:User = {
            username: username,
            password: password
        };

        let authData = APIService.LoginUser(userBody)
        // console.log(authData.then(resp => resp.status))
        if (await authData.then(resp => resp.status === 400)) {
            setAuthRetrieved(false);
            // authData.catch(error => console.log(error))
        }
        // if (authData)
    // .then(resp => setToken('mytoken', resp.token))
    // .then(resp => console.log(resp))
    // .catch(error => console.log(error))
    }
    
    
}


const registerBtn = () => {
    if (username && password) {
        const userBody:User = {
            username: username,
            password: password
        };
        
    APIService.RegisterUser(userBody)
    .then(() => loginBtn())
    .catch(error => console.log(error))
}

}




    return (
        <div className='App'>
  
          {isLogin ? <h2>Login Here</h2> : <h2>Register Here</h2>}
          
          <br/>
          <div className='mb-3'>
              <label htmlFor='username' className='form-label'>Username</label>
              <input type="text" id='username' placeholder='Enter your username' 
              value={username} className='form-control' onChange={e => setUsername(e.target.value)}/> 
  
          </div>
  
          <div className='mb-3'>
              <label htmlFor='password' className='form-label'>Password</label>
              <input type="password" id='password' placeholder='Enter your password' 
              value={password} className='form-control' onChange={e => setPassword(e.target.value)}/> 
  
          </div>
          
          {isLogin ? <button onClick={loginBtn} className='btn btn-primary'>Login</button>
          : <button onClick={registerBtn} className='btn btn-primary'>Register</button> }

            {authRetrieved !== true ? <h6> User does not Exist</h6> : null}
          
  
          <div>
  
              <br/>
              {isLogin ? <h5>If you don't have an account, please <button className='btn btn-primary' onClick={() => setLogin(false)}>Register</button>here </h5>
              
              : <h5>If you have an account, please <button className='btn btn-primary' onClick={() => setLogin(true)}>Login</button>here</h5>
              }
  
  
          </div>
  
  
        </div>
      )
  
}

export default Login
