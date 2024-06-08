import { NextResponse } from "next/server";
import {  auth } from "../../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import jwt from "jsonwebtoken";


export async function POST(req: Request) {

    if (req.method !== 'POST') {
        return NextResponse.json(new Error('Method not allowed'), {status: 405});
    }

    if (!req.body) {
        return NextResponse.json(new Error('Invalid request'), {status: 400});
    }
    try{
        const { email, password } = await req.json();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        if (!user) {
            return NextResponse.json(new Error('Invalid credentials'), {status: 401});
        }
        
       // const secretkey = process.env.JWT_SECRET;
        const secretkey = "cemOsH0JHZZ3scN74m0sl3Pw9HCCtBSL"
        
        if (!secretkey) {
            throw new Error('JWT Secret is not defined');
        }
        const token = jwt.sign({id: user.uid ,email: user.email }, secretkey, {expiresIn: '1h'});

        const res = NextResponse.json({ token });
        res.headers.set('Set-Cookie', `auth=${token}; Secure; HttpOnly; Path=/`);

        return res;
    }catch(error){
        console.error('Error during login:', error);
        return NextResponse.json({ error: error}, { status: 500 });
    }   
}