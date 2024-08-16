import Logo from '../assets/Youtube-logo.jpg'
import { Link } from 'react-router-dom'
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error,setError]= React.useState("")
    const [users,setUsers]= React.useState([])

    const navigate = useNavigate();

    React.useEffect(() => {
        axios.get('https://66804b9b56c2c76b495bb562.mockapi.io/api/users')
          .then( response => {
          setUsers(response.data);
          })
          .catch(error => {
            console.log(error);
          })
    },[])

    const checkData=(e)=>{
        e.preventDefault();
        setError('')

        if (!username || !password) {
            setError('Please enter your username and password')
            return;
        }

      const user = users.find(e =>
          e.username === username && e.password === password        
      )
          if(user) {
              localStorage.setItem('UserName', user.username);
              localStorage.setItem('UserId', user.id);
              navigate('/home')
          } else {
              setError('Username or password is not correct!')
          }  
    }

    return(
<>
  <div className="h-full w-full flex justify-center items-center sm:flex-row">
    <div className="flex flex-col lg:flex-row w-full lg:w-1/4 sm:w-full sm:h-20 sm:justify-center justify-around items-center">
      <img className="hidden sm:block" src={Logo} alt="youtube" />
    </div>
    <div className="flex flex-col lg:flex-row lg:w-1/2 justify-center items-center bg-white space-y-8 sm:space-y-0">
      <div className="w-full h-full mt-12 px-8 sm:px-32 lg:px-24">
        <div className="bg-white flex-col items-center rounded-md shadow-2xl p-5">
          <h1 className="text-gray-800 font-bold text-4xl mb-4 flex justify-center sm:text-lg sm:text-start">
            Log in to Youtube
          </h1>
          <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
            <input
              id="username"
              className="pl-2 w-full sm:text-sm outline-none border-none"
              type="text"
              name="username"
              placeholder="Username"
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl">
            <input
              className="pl-2 w-full sm:text-sm outline-none border-none"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
          <div className="sm:flex sm:justify-center">
            <button
              onClick={checkData}
              className="w-full sm:w-auto bg-red-500 mt-5 py-2 px-6 rounded-2xl hover:bg-red-300 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
            >
              Login
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-sm sm:text-xs ml-2">Don't have an account yet?</p>
            <Link to='/Signup'>
              <p className="text-sm ml-2 sm:text-xs text-black hover:text-red-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                Sign up
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
    );
}
export default Login