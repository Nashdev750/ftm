import { useState } from "react";
import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    CardFooter,
  } from "@material-tailwind/react";


const accounts = {
    USD:{
        sizes:[10000,25000,50000,100000,200000],
        cost: [100,200,300,500,1000],
        dl: [500,1200,2500,5000,10000],
        ml: [1000,2500,5000,10000,20000],
        pt: [1000,2500,5000,10000,20000],
        s:'$'
    },
    EUR:{
        sizes:[10000,22000,45000,90000,180000],
        cost: [100,180,273,457,913],
        dl: [500,1000,2000,4000,8000],
        ml: [1000,2000,4000,8000,16000],
        pt: [1000,2000,4000,8000,16000],
        s:'€'
    },
    GBP:{
        sizes:[10000,20000,35000,70000,140000],
        cost: [79,160,240,400,800],
        dl: [500,1000,1700,3500,7000],
        ml: [1000,2000,3500,7000,14000],
        pt: [1000,2000,3500,7000,14000],
        s:'£'
    },
    AUD:{
        sizes:[10000,25000,50000,100000,200000],
        cost: [100,200,300,500,1000],
        dl: [700,1500,3200,6500,13000],
        ml: [1500,3000,6500,13000,26000],
        pt: [1500,3000,6500,13000,26000],
        s:'$'
    },
    CAD:{
        sizes:[10000,25000,50000,100000,200000],
        cost: [100,200,300,500,1000],
        dl: [7500,1500,3000,6000,12000],
        ml: [1500,3000,6000,12000,24000],
        pt: [1500,3000,6000,12000,24000],
        s:'$'
    },
    CHF:{
        sizes:[10000,25000,50000,100000,200000],
        cost: [100,200,300,500,1000],
        dl: [500,1000,2000,4000,8000],
        ml: [1000,2000,4000,8000,16000],
        pt: [1000,2000,4000,8000,16000],
        s:'CHF'
    },
}

const TABLE_HEAD = [
    'Account Size',
    'Trading Days',
    'Minimum Trading Days',
    'Maximum Daily Loss',
    'Maximum Loss',
    'Target Profit',
    'Refundable Fee'
]

const Comparison = ()=>{
    const [currency,setCurrency] = useState('USD')
   return <div className="w-full">
     <Card className="h-fit w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography color="gray" className="mt-1 font-normal">
            Prior to granting you permission to trade with our Proprietary Trading Firm, we must ensure your ability to handle risk. To accomplish this, we have devised Trading Objectives. By successfully meeting these objectives, you demonstrate your discipline and expertise as a trader. Your preferred trading style is entirely at your discretion, as we do not impose any restrictions on the instruments or position sizes you choose to trade
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
            {accounts[currency]?.sizes?.map(
              (account, index) => {
                const isLast = index === 4;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={index}>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {accounts[currency].s+account}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        Unlimited days
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        8 days
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {accounts[currency].s+accounts[currency].dl[index]}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {accounts[currency].s+accounts[currency].ml[index]}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {accounts[currency].s+accounts[currency].pt[index]}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {'$'+accounts['USD'].cost[index]}
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
   </div>
}

export default Comparison