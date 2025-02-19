"use client"

import { useRouter } from 'next/navigation';

 
export const privateRoute = async() => {

    const user = await localStorage.getItem("user");
    const router = useRouter()
    console.log(user);
    

    if(!user){
        return router.push("/login");
    }
  
}
