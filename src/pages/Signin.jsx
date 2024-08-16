import Logo from '../assets/Youtube-logo.jpg'
import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


function Signin() {
    const [name, setName] = React.useState('');
    const [username, setUserName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error,setError]= React.useState("")
    const navigate = useNavigate();

    const postData=(e)=>{
        e.preventDefault();

        const validateName =(name)=> {
            const nameValid=4
            return name.length >= nameValid;
          }
          
          const validateEmail = (email)=> {
            const emailValid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailValid.test(email);
          }
          const validatePassword =(password)=> {
            const passValid=5
            return password.length >= passValid;
          }
          
        if (!validateName(name)){
          setError('Name must be at least 4 characters long')
          return;
        }
        if (!validateEmail(email)){
          setError('Please ensure the email address is correctly formatted (e.g., name@domain.com) ')
          return;
        }
        if (!validatePassword(password)){
          setError('Password must be at least 5 characters long')
          return;
        }
        setError('')
    
        axios.post('https://66804b9b56c2c76b495bb562.mockapi.io/api/users',{
            name,
            username,
            email,
            password,
        }).then(()=>{
            localStorage.setItem("name", name);
            navigate("/");
        })
    }

    return(
<>
<div className="flex flex-col items-center justify-center sm:flex-row ">
  <div className="flex flex-col lg:flex-row w-full lg:w-1/4 sm:w-full sm:h-20 sm:justify-center justify-around items-center">
    <Link to="/home"><img className="hidden sm:block" src={Logo} alt="" /></Link>
  </div>
  <div className="flex flex-col mt-12 lg:flex-row w-full lg:w-1/2 justify-center items-center bg-white space-y-8 sm:space-y-0">
    <div className="w-full sm:px-32 lg:px-24">
      <div className="bg-white rounded-md shadow-2xl p-5">
        <h1 className="text-gray-800 font-bold text-4xl mb-4 flex justify-center sm:text-lg sm:text-start">
          Sign up to Youtube
        </h1>
        <div className="flex items-center border-2 mb-6 py-2 px-3 rounded-2xl">
          <input
            id="Name"
            className="pl-2 w-full sm:text-sm outline-none border-none"
            type="text"
            name="Name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center border-2 mb-6 py-2 px-3 rounded-2xl">
          <input
            id="username"
            className="pl-2 w-full sm:text-sm outline-none border-none"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="flex items-center border-2 mb-6 py-2 px-3 rounded-2xl">
          <input
            id="email"
            className="pl-2 w-full sm:text-sm outline-none border-none"
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center border-2 mb-4 py-2 px-3 rounded-2xl">
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
        <div className="text-center">
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <div className="flex justify-center items-center w-full pb-4 ">
          <button
            onClick={postData}
            type="submit"
            className="w-full sm:w-auto bg-red-500 mt-5 py-2 px-6 rounded-2xl hover:bg-red-300 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
          >
            Sign up
          </button>
        </div>

        <div className="flex justify-center mt-4">
          <p className="text-sm sm:text-xs ml-2">Already have an account?</p>
          <Link to='/Login'>
            <p className="text-sm ml-2 sm:text-xs text-black hover:text-red-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
              Log in
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
export default Signin