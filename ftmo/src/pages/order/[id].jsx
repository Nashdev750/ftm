import { moneyFormat } from "@/components/countries"
import { Button, Progress } from "@material-tailwind/react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const { default: Layout } = require("@/components/Layout")
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getData, postData } from "@/api";
import { toast } from "react-toastify";
import auth from "@/components/Auth";
import Button90 from "@/components/buttons/Button90";





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


const Order = ()=>{

    const [order, setOrder] = useState({})
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const {id} = router.query
    useEffect(()=>{
        if(!id) return
        getData('order/'+id)
        .then(res=>{
           setLoading(false)   
           setOrder(res.data)
        })
        .catch(err=>{
            setLoading(false)  
        })

    },[id])
 
    
    return <> 
       {loading 
         ?<div className="w-full flex justify-center items-center py-5 flex-col gap-3">
            <Progress/>
            <p>Loading</p>
         </div>   
    :<Layout>
        <PayPalScriptProvider options={{ "client-id":"AXxeRVolJKo2_Lwvd84kG1A5y7_MdNkBN1E3kGJy-16TQ-GfG2cZOLXAJc5Tbj-cTfZK0EA3C0lrwfPE" }}>
        
        <div className="w-full flex flex-col justify-start items-start gap-4">
                <div className="w-full bg-white shadow rounded">
                <p className="text-blue-gray-600 font-semibold text-lg  p-4 text-center flex justify-center items-center flex-col gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {order?.status == 1?'Order Completed':'Your order have been received'}</p>
                    {order?.status ==0 && 
                        <p className="px-4 pb-4 text-center">
                        Your challenge will be proceed as soon as your payment is completed. You will receive login details in your email within <strong>24 hours</strong> after your payment.</p>
                    }
                <div className="w-full border"></div>
                <p className="text-blue-gray-600 font-normal text-sm  p-4">Order Details.</p>
                <div className="w-full px-4">
                    <div className="w-full flex gap-3 py-3">
                        <span className="text-blue-gray-800 font-medium">Order Number:</span>
                        <span className="text-blue-gray-800 font-medium">{order?.orderid}</span>
                    </div>
                    <div className="w-full border"></div>
                    <div className="w-full flex gap-3 py-3">
                        <span className="text-blue-gray-800 font-medium">Account Size:</span>
                        <span className="text-blue-gray-800 font-medium">{moneyFormat(accounts[currencies[order?.currency]]?.sizes[order?.size])}</span>
                    </div>
                    <div className="w-full border"></div>
                    <div className="w-full flex gap-3 py-3">
                        <span className="text-blue-gray-800 font-medium">Trading Currency:</span>
                        <span className="text-blue-600  font-medium">{currencies[order?.currency]}</span>
                    </div>
                    <div className="w-full border"></div>
                    <div className="w-full flex gap-3 py-3">
                        <span className="text-blue-gray-800 font-medium">Trading Platform:</span>
                        <span className="text-blue-600 font-medium">{order?.platform?(order?.platform?"Metatrader 4":"Metatrader 5"):''}</span>
                    </div>
                    { order.status == 1 &&
                        <>
                            <div className="w-full border"></div>
                            <div className="w-full flex gap-3 py-3">
                                <span className="text-blue-gray-800 font-medium">Login Details:</span>
                                <span className="text-green-500 font-medium">Pending</span>
                            </div>
                        </>    
                    }
                    
                </div>
                <div className="w-full p-4 flex justify-between items-center bg-cyan-600">
                    <span className="text-white font-bold">{order?.status == 1?'Total Paid:':'Total Payable:'}</span>
                    <span className="text-white font-bold">$ {moneyFormat(order?.amount)}</span>
                </div>
               
                </div>
        </div>
        {order?.status == 0 && 
            <div className="w-full flex justify-between items-stretch  mt-4 md:flex-col md:gap-4 md:items-center">
            <div className="w-1/2 pr-2 md:w-full md:p-0">
                <div className="w-full h-full shadow bg-white rounded p-4">
                <p>Pay with Paypal</p>  
                <div className="w-full border my-4"></div>
                <PayPalButtons style={{ layout: "horizontal",zIndex:'-1' }}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: order?.amount || 100,
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {

                            postData('order/update/'+id,details)
                            .then(res=>{
                               toast.success("Order completed, reload this page if you don't see any update")
                               window.location.reload()
                            })
                            .catch(err=>{
                                toast.error('Unable to process this order please contact support.')
                                console.log(err)
                            })
                        });
                    }}
                />
                </div>
            </div>
            <div className="w-1/2 pl-2 md:w-full md:p-0">
                <div className="w-full h-full shadow bg-white rounded p-4">
                <p>Pay with Cypto wallet</p> 
                <div className="w-full border my-4"></div>
                <Button90 amount={order?.amount}/>
                </div>
            </div>
        
        </div>
        
        }
 

        </PayPalScriptProvider>
    </Layout>}</>
}

export default auth(Order)