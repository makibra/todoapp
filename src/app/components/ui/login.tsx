"use client"
 import react, { useState } from 'react';
 import {useRouter} from "next/navigation";


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const handleSubmit = async (event:any) => {
        if ( !email || !password) {
            alert("Please enter your email and password.");
            return;
        }
        event.preventDefault();
        try{
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: email, password: password})
            });
            if(response.status === 500){
                alert('Invalid credentials\nPlease check your email and password.');

            }
            if (!response.ok) {
                const data = await response.json();
                setError(data.error || 'An error occurred during sign-in');
                return;
            }
            const data = await response.json();
            router.push('/dashboard');
            
            
        } catch (error) {
            setError('An error occurred during sign-in');
            console.error(error);
        }
    }
 
    return(
        <>
        <div className="flex flex-wrap">
            <div className="flex w-full flex-col md:w-1/2">
                <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
                <p className="text-left text-3xl font-bold">To-Do List App</p>
                <p className="mt-2 text-left text-gray-500">Welcome back, please enter your details.</p>
                <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white"><img className="mr-2 h-5" src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"  /> Log in with Google</button>
                <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
                    <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">or</div>
                </div>
                <form  onSubmit={handleSubmit} className="flex flex-col pt-3 md:pt-8">
                    <div className="flex flex-col pt-4">
                    <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                        <input type="email" 
                               id="login-email" 
                               className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" 
                               placeholder="Email" 
                               value={email} 
                               onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    </div>
                    <div className="mb-12 flex flex-col pt-4">
                    <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                        <input type="password" 
                               id="login-password" 
                               className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" 
                               placeholder="Password" 
                               value={password}
                               onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    </div>
                    <button type="submit" className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Log in</button>
                </form>
                <div className="py-12 text-center">
                    <p className="whitespace-nowrap text-gray-600">
                    Don't have an account?
                    <a href="/signUp" className="underline-offset-4 font-semibold text-gray-900 underline">Sign up for free.</a>
                    </p>
                </div>
                </div>
            </div>
            <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
                <div className="absolute bottom-0 z-10 px-8  opacity-100">
                <p className="mb-4 text-3xl font-semibold leading-10">Stay organized and boost your productivity with our intuitive To-Do List App. Manage your tasks efficiently and achieve your goals with ease.</p>
                {/* <p className="mb-4 text-3xl font-semibold">Mak Ibra</p>
                <p className="text-white">cs student</p>
                <p className="mb-7 text-white text-sm opacity-70">develovr</p> */}
                </div>
                <img className="-z-1 absolute top-0 h-full w-full object-cover opacity-90" src="/login2.jpg" />
            </div>
            </div>

        </>
    );
}