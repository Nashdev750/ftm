import { useForm } from "react-hook-form";
import { Button, Input } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import Link from "next/link";
import logo from '../images/logo.png'
import Image from "next/image";
import Footer from "@/components/Footer";
import React from "react";

const Newpassword = ()=>{
    const { register, handleSubmit,setValue, formState: { errors } } = useForm();
    const onSubmit = data =>{console.log(data);} 
    return<><div className="w-full py-8 max-w-lg mx-auto px-3">
           <div className="mx-auto pb-6 flex items-center gap-2">
            <Image src = {logo} alt="LOGO" width={50}/>
            <p className="font-extrabold text-3xl text-blue-gray-800">FMP</p>
            
           </div>
          <p className='text-3xl font-normal text-blue-gray-800 pb-4'>Set New Password</p>
          <div className="pb-4">
            <p className="flex items-center gap-2">Otp sent to <span className="font-bold text-blue-gray-800 text-sm">nashdev750@gmail.com </span><Link href='/reset' className="text-cyan-500 underline">edit</Link></p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full pb-3">
                 <Input type="text" error={errors.email} label="OTP"  {...register("otp",{required:true})} />
            </div>
            <div className="w-full pb-3">
                 <Input type="password" error={errors.email} label="New Password"  {...register("password",{required:true})} />
            </div>
            <div className="w-full pb-3">
                 <Input type="password" error={errors.email} label="Confirm New Password"  {...register("new",{required:true})} />
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

export default Newpassword