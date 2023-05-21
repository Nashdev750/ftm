import { useForm } from "react-hook-form";
import { Button, Input } from "@material-tailwind/react";
import Link from "next/link";
import logo from '../images/logo.png'
import Image from "next/image";
import Footer from "@/components/Footer";
import React, { useContext, useEffect } from "react";
import { postData } from "@/api";
import { toast } from "react-toastify";
import { GoogleLogin } from 'react-google-login';
import { useRouter } from "next/router";
import { UserContext } from "@/context/User";


const Login = ()=>{
    const { register, handleSubmit,setValue, formState: { errors } } = useForm();
    const clientid = "649146982924-d4hb24qrlfa5avl8jpm74bugm46tapaa.apps.googleusercontent.com"
    // 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
    const router = useRouter()
    const {setUser} = useContext(UserContext)

    const onSuccess = (res) => {
        postData('login/google',{token:res.tokenId})
          .then(resp=>{
              if(!resp.data?.user){
                setUser(res.data)
                router.push('/register')
              }else{
                // login user
                window.localStorage.setItem('token', res.data.token)
                window.localStorage.setItem('user', JSON.stringify(res.data.user))
                window.location.href = '/client-area'
              }
            
          })
          .catch(err=>{
            toast.error(err?.response?.data?.error || "Network error please try again")
          })
        }
        const onError = (response) => {
            console.log(response);
        }


    const onSubmit = data =>{
        postData('login',data)
        .then(res=>{
            window.localStorage.setItem('token', res.data.token)
            window.localStorage.setItem('user', JSON.stringify(res.data.user))
            window.location.href = '/client-area'
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
          <p className='text-3xl font-normal text-blue-gray-800 pb-4'>Login</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full pb-3">
                 <Input type="email" error={errors.email} label="Email"  {...register("email",{required:true})} />
            </div>
            <div className="w-full pb-3">
                 <Input type="password" error={errors.password} label="Password"  {...register("password",{required:true})} />
            </div>
            <div className="w-full pb-2 flex">
                 <Button type="submit" className="w-full">Continue</Button>
            </div>
            </form>
            <div className="w-full flex justify-center items-center py-4 or">
                <span></span>
                <span>OR</span>
                <span></span>
            </div>
            <div className="flex gap-2 items-center py-5 pb-2 w-full wfull pt-0">
            <GoogleLogin
            clientId={clientid}
            buttonText="Continue With Google"
            onSuccess={onSuccess}
            onFailure={onError}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            
        />
            </div>
            <div className="flex gap-2 items-center py-5 pb-2">
            <p className="text-xs" style={{color:`${errors.terms?'red':''}`}}>Lost password?, <Link className="text-cyan-500" href={'/reset'}>Reset.</Link></p>
            </div>
            <div className="flex gap-2 items-center py-5 pt-0">
            <p className="text-xs" style={{color:`${errors.terms?'red':''}`}}>Don&apos;t have an account?, <Link className="text-cyan-500" href={'/register'}>Sign Up.</Link></p>
            </div>
    </div>
    <Footer/>
    </> 
}

export default Login