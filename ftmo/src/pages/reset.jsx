import { useForm } from "react-hook-form";
import { Button, Input } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import Link from "next/link";
import logo from '../images/logo.png'
import Image from "next/image";
import Footer from "@/components/Footer";
import React from "react";
import { getData, postData } from "@/api";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Reset = ()=>{
     const router = useRouter()
    const { register, handleSubmit,setValue, formState: { errors } } = useForm();
    const onSubmit = data =>{
          getData('otp/'+data.email)
          .then(res=>{
             router.push('/newpassword/'+data.email)
          })
          .catch(err=>{
               toast.error(err?.response?.data?.error || "Network error please try again")
          })
    } 
    return<><div className="w-full py-8 max-w-lg mx-auto px-3">
           <div className="mx-auto pb-6 flex items-center gap-2">
            <Image src = {logo} alt="LOGO" width={50}/>
            <p className="font-extrabold text-3xl text-blue-gray-800">FMFX</p>
            
           </div>
          <p className='text-3xl font-normal text-blue-gray-800 pb-4'>Reset Password</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full pb-3">
                 <Input type="email" error={errors.email} label="Enter Your Email"  {...register("email",{required:true})} />
            </div>
            <div className="w-full pb-2">
                 <Button type="submit">Continue</Button>
            </div>
            </form>
            <div className="flex gap-2 items-center py-5 pt-0">
            <p className="text-xs" style={{color:`${errors.terms?'red':''}`}}>Back to <Link className="text-cyan-500" href={'/login'}>Login.</Link></p>
            </div>
    </div>
    <Footer/>
    </> 
}

export default Reset