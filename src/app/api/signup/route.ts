import { NextResponse } from "next/server";
import {db,  auth } from "../../../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";

export  async function POST(req: Request) {
        if (req.method !== 'POST') {
            return NextResponse.json(new Error('Method not allowed'), {status: 405});
        }
    
        if (!req.body) {
            return NextResponse.json(new Error('Invalid request'), {status: 400});
        }
    
        const {name, email, password } = await req.json();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        if (!userCredential) {
            return NextResponse.json(new Error('Invalid credentials'), {status: 401});
        }
        else{
            const docref = await doc(collection(db, "users"));
            await setDoc(docref, {name: name,email: email,password: password});
            const res = NextResponse.json({ message: 'User created successfully' }); 
            return res;
        }
              
}