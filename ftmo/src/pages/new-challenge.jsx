

const { default: Layout } = require("@/components/Layout")
import Image from 'next/image'
import meta4 from '../images/meta4.svg'
import meta5 from '../images/meta5.svg'
import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { Button, Input } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import Link from 'next/link'
import { getData, postData } from '@/api'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Auth from '@/components/Auth'
import Footer2 from '@/components/Footer2'

const moneyFormat = (val)=>{
    if(isNaN(val)) return '0'
    if(!val) return '0'
    let my = val.toString()
    let result = ''
    let index = 0
    for (let i = my.length-1; i >=0; i--) {
        result = my[i] + result
        index++
        if(index==3 && i > 0){
            index = 0
            result = ' '+result
        }
    }
    return result
}

const currencies = ["USD","EUR",'GBP','AUD','CAD','CHF']

const accounts = {
                USD:{
                    sizes:[10000,25000,50000,100000,200000],
                    cost: [100,200,300,500,1000]
                },
                EUR:{
                    sizes:[10000,22000,45000,90000,180000],
                    cost: [100,180,273,457,913]
                },
                GBP:{
                    sizes:[10000,20000,35000,70000,140000],
                    cost: [79,160,240,400,800]
                },
                AUD:{
                    sizes:[10000,25000,50000,100000,200000],
                    cost: [100,200,300,500,1000]
                },
                CAD:{
                    sizes:[10000,25000,50000,100000,200000],
                    cost: [100,200,300,500,1000]
                },
                CHF:{
                    sizes:[10000,25000,50000,100000,200000],
                    cost: [100,200,300,500,1000]
                },
}

const NewChallenge = ()=>{
    const { register, handleSubmit,setValue, formState: { errors } } = useForm();
    const router = useRouter()
    
    const [tcurrency, setTcurrency] = useState(0)
    const [size, setSize] = useState(0)
    const [meta, setMeta] = useState(0)
    const [discount, setDiscount] = useState(1)
    const [coupon, setCoupon] = useState()

    useEffect(()=>{
      const user = window.localStorage.getItem('user') || "{}"
      const userdata = JSON.parse(user)
      setValue('fname', userdata?.fname)
      setValue('lname', userdata?.lname)
      setValue('email', userdata?.email)
      setValue('country', userdata?.country)
    },[])
    
    useEffect(()=>{
       if(!coupon) return setDiscount(1)
       getData('coupon/'+coupon)
       .then(res=>{
          setDiscount(0.9)
       }).catch(err=>{
          setDiscount(1)
       })
    },[coupon])

    const onSubmit = data =>{
      delete data[""]
      delete data.terms
      delete data.terms2
      data.size = size
      data.currency = tcurrency
      data.platform = meta
      console.log(data)
      postData('order',data)
      .then(res=>{
        router.push('/order/'+res.data.number)
      }).catch(err=>{
        toast.error(err.response?.data?.error || "Unable to process order please try again")
      })
    } 

    return <Layout><div className="w-full flex flex-col justify-start items-start gap-4">
            <div className="w-full bg-white shadow rounded">
               <p className="text-blue-gray-600 font-semibold text-lg  p-4">Start New Challenge</p>
               <div className="w-full border"></div>
               <p className="text-blue-gray-600 font-normal text-sm  p-4">Configure your challenge and get started immediately.</p>
            </div>
            <form className="w-full bg-white shadow rounded" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full">
                    <p className="text-blue-gray-600 font-semibold p-4">Trading Platform</p>
                    <div className="w-full flex gap-2 items-center justify-start p-4 pt-0">
                        <div onClick={()=>setMeta(0)} className={`w-[150px] p-3 rounded-md py-2 border cursor-pointer  ${meta==0?'bg-cyan-500':'bg-blue-gray-50'}`}>
                            <Image src={meta4} alt='metatrader 4' width={120}/>
                        </div>
                        <div role='button' onClick={()=>setMeta(1)} className={`w-[150px] p-3 rounded-md py-2 border cursor-pointer  ${meta==1?'bg-cyan-500':'bg-blue-gray-50'}`}>
                            <Image src={meta5} alt='metatrader 5' width={120}/>
                        </div>
                    </div>
                </div>
                <div className="w-full border"></div>
                <div className="w-full">
                    <p className="text-blue-gray-600 font-semibold p-4">Trading Currency</p>
                    <div className="w-full flex gap-4 items-center justify-start p-4 pt-0 flex-wrap md:gap-2 md:justify-between">
                       {
                        currencies.map((c,i)=>(
                            <div key={i} onClick={()=>setTcurrency(i)} role='button' className={`w-[150px] p-3 rounded-md  py-3 border cursor-pointer uppercase text-center font-bold text-blue-gray-700 ${tcurrency==i?'bg-cyan-500 text-white':'bg-blue-gray-50'} md:w-[48%]`}>
                            {c}
                            </div>
                        ))
                       }
                    </div>
                </div>
                <div className="w-full border"></div>
                <div className="w-full">
                    <p className="text-blue-gray-600 font-semibold p-4">Account Size</p>
                    <div className="w-full flex gap-4 items-center justify-start p-4 pt-0 flex-wrap md:gap-2 md:justify-between">
                       {
                        accounts[currencies[tcurrency]].sizes.map((c,i)=>(
                            <div key={i} onClick={()=>setSize(i)} role='button' className={`w-[150px] p-3 rounded-md  py-3 border cursor-pointer uppercase text-center font-bold text-blue-gray-700 ${size==i?'bg-cyan-500 text-white':'bg-blue-gray-50'} md:w-[48%]`}>
                            {moneyFormat(c)+' '+currencies[tcurrency]}
                            </div>
                        ))
                       }
                    </div>
                </div>
                <div className="w-full border"></div>
                <div className="w-full">
                    <p className="text-blue-gray-600 font-semibold p-4">Billing Details</p>
                    <div className="w-full flex items-center flex-wrap p-2 pt-0">
                      <div className="w-1/2 p-2 md:w-full">
                        <Input type="text" error={errors.fname} label="First Name"  {...register("fname",{required:true})} />
                      </div>
                      <div className="w-1/2 p-2 md:w-full">
                        <Input type="text" error={errors.lname} label="Last Name"  {...register("lname",{required:true})} />
                      </div>
                      <div className="w-1/2 p-2 md:w-full">
                        <Input readOnly type="text" error={errors.email} label="Email"  {...register("email",{required:true})} />
                      </div>
                      <div className="w-1/2 p-2 md:w-full">
                        <Input type="number" error={errors.phone} label="Phone Number"  {...register("phone",{required:true})} />
                      </div>
                      <div className="w-1/2 p-2 md:w-full">
                        <Input type="text" error={errors.city} label="City"  {...register("city",{required:true})} />
                      </div>
                      <div className="w-1/2 p-2 md:w-full">
                        <Input type="text" error={errors.street} label="Street"  {...register("street",{required:true})} />
                      </div>
                      <div className="w-1/2 p-2 md:w-full">
                        <Input  type="text" error={errors.code} label="Zip Code"  {...register("code",{required:true})} />
                      </div>
                      <div className="w-1/2 p-2 md:w-full">
                        <Input readOnly type="text" error={errors.country} label="Country"  {...register("country",{required:true})} />
                      </div>
                      <div className="w-full pb-0 flex gap-2 items-center">
                        <Checkbox error = {errors.terms}  {...register("terms",{required:true})}/>
                        <p className="text-xs" style={{color:`${errors.terms?'red':''}`}}>I declare that I have read and agree with <Link className="text-cyan-500" href={'/terms'}>terms & conditions.</Link></p>
                      </div>
                      <div className="w-full pb-3 flex gap-2 items-center">
                        <Checkbox error = {errors.terms}  {...register("terms2",{required:true})}/>
                        <p className="text-xs" style={{color:`${errors.terms2?'red':''}`}}>I declare that I have read and agree with <Link className="text-cyan-500" href={'/terms'}>Cancellation & Refund Policy</Link></p>
                      </div>
                      <p className='p-2 w-full pb-0 text-sm'>Do you have coupon code?, get upto 20% off</p>
                      <div className="w-full p-2">
                            <Input type="text" {...register("coupon",{required:false,onChange:e=>setCoupon(e.target.value)})}  label="Coupon(optional)"  />
                      </div>
                      {coupon && discount==1 &&
                       <p className='w-full text-red-400 p-2'>coupon code you entered is not valid.</p>
                      }
                      <p className="p-4 pt-2 font-extrabold text-3xl text-blue-400">${accounts.USD.cost[size] * (discount)}</p>
                      <div className="w-full p-4">
                        <Button type='submit'>Proceed to Payment</Button>
                      </div>
                    </div>
                </div>
            </form>
          {/* coupon */}
          
        </div>
        <Footer2/>
    </Layout>
}

export default Auth(NewChallenge)