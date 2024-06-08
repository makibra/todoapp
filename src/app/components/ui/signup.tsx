"use client"
import react, { useState } from 'react';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (event:any) => {
      event.preventDefault();
      try{
        const  response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,})
        });
        if (!response.ok) {
          const data = await response.json();
          console.log(data);
          return;
        }else{
          console.log('User created successfully');
        }
        alert('User created successfully');
      }catch(error){
        console.log('An error occurred during sign-up');
        console.error(error);
      }
  }
    return(
        <div className="bg-white w-screen font-sans text-gray-900">
          <div className=" ">
            <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
              <div className="mx-2 pt-12 pt-7 text-center md:mx-auto md:w-2/3 md:pb-14">
                <h1 className="mb-4 text-3xl font-black leading-4 sm:text-5xl xl:text-6xl">Sign up</h1>
                <div className="text-lg sm:text-xl">
                  <div className="">
                    <p className="mb-4">Let's do this! Start your free trial by filling in our simple form below. You will be hearing from us soon!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 mx-auto w-full pb-16 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl">
            <form onSubmit={handleSubmit} className="shadow-lg mb-4 rounded-lg border border-gray-100 py-10 px-8">
              <div className="mb-4"><label className="mb-2 block text-sm font-bold" >Full Name</label>
                <input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" 
                    id="name" 
                    type="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="name" 
                    required />
                <span className="my-2 block"></span>
              </div>
              <div className="mb-4"><label className="mb-2 block text-sm font-bold" >E-mail</label>
                <input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" 
                    id="email" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email" 
                    required />
                <span className="my-2 block"></span>
              </div>
              <div className="mb-4"><label className="mb-2 block text-sm font-bold" >Password</label>
                <input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" 
                    id="password" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="******************" 
                    required/>
              </div>
              <div className="mb-6">
                <label className="mb-2 flex text-sm">
                  <input type="checkbox" name="accept" className="mr-2" required />
                  <div className="text-gray-800">
                    <p className="">
                      I accept the
                      <a href="#" className="cursor-pointer text-gray-500 underline px-1">terms of use</a>
                      and
                      <a href="#" className="cursor-pointer text-gray-500 underline px-1">privacy policy</a>
                    </p>
                  </div>
                </label>
              </div>
              <div className="flex items-center">
                <button  className=" w-full cursor-pointer rounded bg-black py-2 px-8 text-center text-lg font-bold  text-white" type="submit">Create account</button>
              </div>
            </form>
          </div>
        </div>
    );
}