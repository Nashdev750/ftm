import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { getData } from "@/api";
import Link from "next/link";
import { moneyFormat } from "@/components/countries";
import moment from 'moment/moment';
import Auth from "@/components/Auth";
import Footer2 from "@/components/Footer2";

const TABLE_HEAD = ["#","Pay", "Account", "Platform", "Date",];
 
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

const Billing = ()=>{

    const [orders, setOrders] = useState([])
    useEffect(()=>{
       getData('orders/all/open')
       .then(res=>{
           setOrders(res.data)
       })
    },[])
  return (
    <Layout>
    <Card className="h-fit w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Pending Orders
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about the last transactions
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders?.map(
              (order, index) => {
                const isLast = index === orders?.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={index}>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {moneyFormat(order.orderid)}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        
                        <Typography variant="small" color="blue-gray" className="font-bold">
                          <Link href={'/order/'+order.orderid} className="bg-blue-gray-50 rounded-3xl py-2 pl-3 border text-blue-gray-700 border-cyan-400">Pay <span className="rounded-3xl py-2 px-3 bg-green-200">${order.amount}</span></Link>
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                      {moneyFormat(accounts[currencies[order.currency]]?.sizes[order.size])+`(${currencies[order.currency]})`}
                      </Typography>
                    </td>
                    
                    <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        {order.platform==1?'Metatrader 5':'Metatrader 4'}
                      </Typography>
                    </td>
                    <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        {moment(order.stamp).format( 'MMMM Do YYYY, h:mm:ss a')}
                      </Typography>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
       
      </CardFooter>
    </Card>
    <Footer2/>
    </Layout>
  );
}

export default Auth(Billing)