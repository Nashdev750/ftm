import { Button } from "@material-tailwind/react"
import { useRouter } from "next/router"


const Challenges = ()=>{
    const router = useRouter()
    return <div className="w-full flex justify-between items-stretch gap-4 md:flex-col">

        <div className="w-1/2 rounded-xl shadow bg-white p-5 flex flex-col justify-center items-center gap-5 border border-cyan-500 md:w-full">
              <div>
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-blue-gray-200">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                    </svg>
              </div>
              <p className="w-full flex flex-col justify-center items-center">
                    <span className="text-blue-gray-600 text-2xl">FMFXO</span>
                    <span className="text-blue-gray-600 text-2xl">CHALLENGE</span>
              </p>
              <p className="text-center text-blue-gray-600">Pass this challenge and get funded with upto 300k USD</p>
              <p className="font-bold text-blue-500">TRADING OBJECTIVES</p>
              <div className="w-full ">
                <p className="text-blue-gray-600 flex items-center gap-2 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Pass the challenge</span>
                </p>
                <p className="text-blue-gray-600 flex items-center gap-2 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Show discipline and risk management</span>
                </p>
                <p className="text-blue-gray-600 flex items-center gap-2 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Show consistency in your trading skills</span>
                </p>
                <p className="text-blue-gray-600 flex items-center gap-2 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Not time limit</span>
                </p>
              </div>
              <Button className="w-full" onClick={e=>router.push('/new-challenge')}>Start Challenge</Button>
        </div>
        <div className="w-1/2 rounded-xl shadow bg-white p-5 flex flex-col justify-center items-center gap-5 border md:w-full">
              <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-blue-gray-200">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

              </div>
              <p className="w-full flex flex-col justify-center items-center">
                    <span className="text-blue-gray-600 text-2xl">FREE</span>
                    <span className="text-blue-gray-600 text-2xl">PLAYGROUND</span>
              </p>
              <p className="text-center text-blue-gray-600">Test your trading skills on a demo account</p>
              <p className="font-bold text-blue-500">NOTES</p>
              <div className="w-full ">
                <p className="text-blue-gray-600 flex items-center gap-2 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Ulimited trading days</span>
                </p>
                <p className="text-blue-gray-600 flex items-center gap-2 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Not eligible for trading account</span>
                </p>
                <p className="text-blue-gray-600 flex items-center gap-2 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Get free analysis</span>
                </p>
                <p className="text-blue-gray-600 flex items-center gap-2 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Eligible for FMFXO traders only, for stratey testing</span>
                </p>
              </div>
              <Button className="w-full">Start FREE Challenge</Button>
        </div>

    </div>
}

export default Challenges