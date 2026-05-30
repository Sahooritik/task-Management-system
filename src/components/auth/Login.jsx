import React, { useState } from 'react';

const Login = () => {
const [user, setUser] = useState({
  email:"",
  password:""
})



    function handleSubmit(e){
       e.preventDefault()
       console.log(user)
       setUser({ 
      password:"",
      email:""})
     
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl  border-emerald-600 p-20'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>

             <input onChange={(e)=>setUser({...user,email:e.target.value})} value={user.email} required type="email"  placeholder='enter your email' className='text-white border-2 outline-none bg-transparent font-medium border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 '/>
             <input onChange={(e)=>setUser({...user,password:e.target.value})} value={user.password} required type="password"  placeholder='enter your password' className='text-white border-2 font-medium outline-none bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mt-3 '/>
             <button className='text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 rounded-full  mt-7 w-full'>Login</button>
            </form>
        </div>
          
    </div>
  );
};

export default Login;