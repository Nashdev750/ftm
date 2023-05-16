import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from "@material-tailwind/react"
import image from '../images/forex-trading-station.png'
import Link from 'next/link'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  return (
    <>
    <main className='w-full md:px-4'>
      <div  className="w-3/4 m-auto py-4 flex gap-5 items-stretch md:w-full">
        <NavBar/>
      </div>
      <p className="w-3/4 m-auto py-0 text-xl font-bold text-blue-gray-800 md:w-full">Get funded in 8 to 14 trading days</p>
      <div className="w-3/4 m-auto py-10 flex gap-5 items-stretch md:w-full md:flex-col">
       
        <Image className='w-1/2 md:w-full' src={image} alt='image'/>
        <div className='w-1/2 flex flex-col justify-between py-5 md:w-full'>
          <h1 className="w-full font-bold text-5xl text-blue-gray-900 md:text-3xl">Start Your Trading Career With Us</h1>
          <p className='text-lg font-normal text-blue-gray-800'>Trade with a funded account <br /> and get upto 90% profit. </p>
          <Button className='max-w-[250px]' onClick={e=>router.push('/client-area')}>FTX Challenge</Button>
        </div>
      </div>
      <div className="w-full m-auto py-10 bg-[#262729]">
        <div className="w-3/4 m-auto flex gap-5 items-stretch md:w-full md:p-2 md:flex-wrap md:gap-0">
            <div className="w-1/3 md:w-1/2 md:p-2">
              <p className='text-cyan-500 text-3xl font-extrabold pb-3'>3M+</p>
              <p className='text-blue-gray-100 text-xl font-medium'>Trades Opened Every Month</p>
            </div>
            <div className="w-1/3 md:w-1/2 md:p-2">
              <p className='text-cyan-500 text-3xl font-extrabold pb-3'>129+</p>
              <p className='text-blue-gray-100 text-xl font-medium'>The number of countries where traders are registered with FTX</p>
            </div>
            <div className="w-1/3 md:w-1/2 md:p-2">
              <p className='text-cyan-500 text-3xl font-extrabold pb-3'>100k+</p>
              <p className='text-blue-gray-100 text-xl font-medium'>Payout to traders Every day</p>
            </div>
        </div>
      </div>
      <div className="w-3/4 m-auto py-10 md:w-full md:px-4" id='evaluation'>
        <h1 className="w-full font-bold text-3xl text-cyan-500 pb-4">Evaluation Process</h1>
        <p className='text-lg font-normal text-blue-gray-800'>In order to trade for our Proprietary Trading Firm, we require you to demonstrate your ability to manage risk. To ensure this, we have established Trading Objectives. Meeting these objectives will demonstrate your discipline and experience as a trader. You have complete freedom to choose your trading style, and there are no restrictions on the instruments or position sizes you may trade.</p>
        <div className="w-full flex items-stretch justify-between py-4 gap-10 md:flex-col md:gap-4">
          <div className="w-1/3 shadow-md p-5 rounded-2xl border md:w-full">
            <p className='bg-blue-gray-100 text-xl font-extrabold text-blue-gray-400 flex items-center justify-center'
              style={{
                width:'50px',
                height:'50px',
                borderRadius:'50%'
              }}
            >1.</p>
            <p className='font-bold text-2xl text-cyan-500 py-4'>Trading Challege</p>
            <p className='text-md font-normal text-blue-gray-800'>
            The initial stage of the Evaluation Process is the FTX Challenge. Successfully completing this stage is a prerequisite for progressing to the Verification stage. During the Challenge, you must demonstrate your trading abilities and exhibit discipline by adhering to the Trading Objectives.
            </p>
          </div>
          <div className="w-1/3 shadow-md p-5 rounded-2xl border md:w-full">
            <p className='bg-blue-gray-100 text-xl font-extrabold text-blue-gray-400 flex items-center justify-center'
              style={{
                width:'50px',
                height:'50px',
                borderRadius:'50%'
              }}
            >2.</p>
            <p className='font-bold text-2xl text-cyan-500 py-4'>Verification</p>
            <p className='text-md font-normal text-blue-gray-800'>
            The Verification stage is the final step in the process of becoming an FTX Trader. Upon successful completion of this stage, and once your trading results have been verified, you will be invited to trade for our Proprietary Trading Firm.
            </p>
          </div>
          <div className="w-1/3 shadow-md p-5 rounded-2xl border md:w-full">
            <p className='bg-blue-gray-100 text-xl font-extrabold text-blue-gray-400 flex items-center justify-center'
              style={{
                width:'50px',
                height:'50px',
                borderRadius:'50%'
              }}
            >3.</p>
            <p className='font-bold text-2xl text-cyan-500 py-4'>FTX Trader</p>
            <p className='text-md font-normal text-blue-gray-800'>
            As a trader for the FTX Proprietary Trading firm, it is important that you trade with responsibility and consistency in order to earn up to 90% of your profits. If you are able to generate consistent profits on your FTX Account, we may consider scaling your account in accordance with our Scaling Plan.
            </p>
          </div>

        </div>
      </div>
      <div className="w-3/4 m-auto py-10 md:w-full md:px-4" id='goals'>
        <p className='text-3xl font-normal text-blue-gray-800'>What you need to know before you start trading.</p>
      
        <p className='font-bold text-xl text-cyan-500 py-4 pb-1'>Trading Period</p>
        <p className='text-md font-normal text-blue-gray-800'>
        The FTX Challenge lasts for 30 days and the Verification process takes 60 days. However, if you successfully complete all the Trading Objectives before the 30-day mark, you won&apos;t have to wait for the remaining days to start the Verification process. For instance, if you manage to finish the Trading Objectives in 11 days, you won&apos;t have to wait for 19 more days. Instead, you will be moved to the Verification process as soon as possible
        </p>
      
        <p className='font-bold text-xl text-cyan-500 py-4 pb-1'>Minimum trading days</p>
        <p className='text-md font-normal text-blue-gray-800'>
        In order to achieve this goal, you need to participate in trading for a minimum of 10 days within the current cycle period. You must open at least one position every day during this period. A day of trading is defined as a day when you execute at least one trade. If you hold a trade over multiple days, only the day when the trade was initiated will count as a trading day.
        </p>
      
        <p className='font-bold text-xl text-cyan-500 py-4 pb-1'>Maximum Daily Loss</p>
        <p className='text-md font-normal text-blue-gray-800'>
        This principle is also referred to as the &quot;trader&apos;s daily stop-loss&quot;. As per our regulations, it is set at 5% (or 10% for the Aggressive version) of the initial account balance. The rule requires that at any given point during the day [CE(S)T = Central European (Summer) Time], the sum of the results from all closed positions and currently open floating P/Ls (profits/losses) should not exceed the set daily loss limit. The calculation formula is as follows:

        Current daily loss = results from closed positions for the day + result of open positions.

        For instance, if you are participating in an FTX Challenge with an initial account balance of $200,000, the Max Daily Loss limit is $10,000. If you incur losses of $8,000 in your closed trades, your account must not decrease by more than $2,000 in that day. Additionally, your open floating losses must not exceed -$2,000. This limit includes commissions and swaps.

        Conversely, if you earn a profit of $5,000 in a single day, you are allowed to incur losses of up to $15,000, but not beyond that. It is important to note that your Maximum Daily Loss takes into account your open trades as well. For instance, if you close trades with a loss of $6,000 in a day and subsequently open a new trade that incurs a floating loss of -$5,700 before ultimately becoming profitable, your daily loss would have already exceeded the permitted loss of $10,000, since at one point it would have been -$11,700.

        It is crucial to be aware that the Maximum Daily Loss resets at midnight CE(S)T. For instance, if you make a profit of $4,000 in a day and also have an open position incurring a floating loss of $13,000, you would not have violated the maximum daily loss limit. In this scenario, the current daily loss would be $9,000 ($4,000 closed profit – $13,000 open position). However, if you hold onto the position with a floating loss of $13,000 after midnight, you would have violated the daily loss limit since your previous day&apos;s profit does not carry over to the new day, and the open loss of $13,000 exceeds the maximum daily permitted loss of $10,000.

        The Maximum Daily Loss limit provides traders with enough flexibility to conduct trades while also ensuring a clearly defined daily risk for investors. Both parties benefit from this rule since the account value will not fall below the limit. This is also why the Maximum Daily Loss limit includes possible floating losses.
        </p>
        
        <p className='font-bold text-xl text-cyan-500 py-4 pb-1'>Maximum Loss</p>
        <p className='text-md font-normal text-blue-gray-800'>
        The account stop-loss rule is another term for this policy. The equity of the trading account cannot fall below 90% of the initial account balance at any point during the account duration. For instance, in an FTX Challenge with a balance of $100,000, the lowest equity the account can reach is $90,000. This is calculated by adding up both the closed and open positions, and not the account balance. The calculation logic is the same as that of the Maximum Daily Loss, with the only difference being that it is not limited to a single day but rather to the entire testing period. The limit is comprehensive of commissions and swaps. The 10% of the initial account balance provides sufficient room for the trader to demonstrate that their account is suitable for investment. It is a safety net that should keep the trader in the game even in the event of some initial losses. The investor has the assurance that under no circumstances can the trader&apos;s account decline below 90% (80% in the case of the Aggressive version) of its value.
        </p>
      
        
        <p className='font-bold text-xl text-cyan-500 py-4 pb-1'>Profit Target</p>
        <p className='text-md font-normal text-blue-gray-800'>
              
        The FTX Challenge and Verification have specific profit targets which are 10% and 20% respectively for the initial balance, and 5% and 10% respectively for the Verification. Meeting the profit target means that the sum of closed positions on the assigned trading account should reach the specified percentage within 30 calendar days for the FTX Challenge and within 60 calendar days for the Verification. Furthermore, all positions must be closed at the end of the trading period. For instance, if a trader is using an FTX Challenge account with an initial balance of $100,000, the profit target is $10,000 for the FTX Challenge and $5,000 for the Verification. It is important to note that once a trader meets all the Trading Objectives (whether in the FTX Challenge or Verification), except for the Profit Target, they will be provided with a new free FTX Challenge. However, to receive the new FTX Challenge for free, the trader&apos;s account profit must be positive at the end of the duration with all positions being closed.
        </p>
      
        
        <p className='font-bold text-xl text-cyan-500 py-4 pb-1'>Free Repeat</p>
        <p className='text-md font-normal text-blue-gray-800'>
        In case you fulfill all the Trading Objectives except for the Profit Target (whether in the FTX Challenge or Verification), and you close all positions while keeping a positive balance, you can redo the FTX Challenge for free. As long as you practice responsible risk management, you can attempt to pass the challenge an unlimited number of times.
        </p>
      
        
        <p className='font-bold text-xl text-cyan-500 py-4 pb-1'>Refundable Fee</p>
        <p className='text-md font-normal text-blue-gray-800'>
        When you become an FTX Trader, the initial fee will be reimbursed to you along with the first Profit Split.
        </p>
      

      </div>
      
    </main>
    <div className="w-full m-auto p-28 bg-cyan-500 flex justify-center items-center flex-col md:p-4">
       <p className='text-center font-bold text-4xl text-blue-gray-50' style={{lineHeight:'45px'}}>Join FTX traders <br />and get funded with upto 300k USD </p>
       <Link href={'/client-area'} className='py-2 px-10 my-8 border border-blue-gray-50 rounded-lg text-white'>Get Started</Link>
    </div>
    <Footer/>
    </>
  )
}
