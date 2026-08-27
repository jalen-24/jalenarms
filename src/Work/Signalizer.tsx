import React from 'react'
import tailwindLogo from "../assets/tailwind.png"
import reactLogo from "../assets/react.svg"
import nodeLogo from "../assets/nodejs.png"
import sqlLogo from "../assets/sql1.png"

const Signalizer = () => {
  return (
    <div className="md:grid md:grid-cols-12 flex flex-col items-start md:gap-10 gap-2">
        <p className="text-zinc-400 text-sm col-span-2">
            2023 - 2023
        </p>
        <div className="flex flex-col col-span-10">
            <div className="flex md:flex-row flex-col md:items-center md:gap-2">
            <p className="font-semibold text-white text-xl">Signalizer.io</p>
            <div className="flex items-center gap-2">
                {/* Replace with actual logo images */}
                <img src={reactLogo} alt='' className='w-5 h-5 rounded-sm' />
                <img src={tailwindLogo} alt='' className='w-5 h-5 rounded-sm' />
                <img src={nodeLogo} alt='' className='w-6 h-6 rounded-sm' />
                <img src={sqlLogo} alt='' className='w-6 h-6 rounded-sm' />
            </div>
            </div>
            <p className="text-sm text-cyan-400">Lead Fullstack Developer</p>
            <div className="flex flex-col mt-8 gap-5">
                <div className="flex items-start gap-4">
                    {/* Replace with actual logo image */}
                    <img src={reactLogo} alt="" className="w-5 h-5 rounded-sm" />
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            <span className="text-white font-medium">Real-time platform</span> — architected a Next.js application delivering up-to-the-minute stock and cryptocurrency pricing and news.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            <span className="text-white font-medium">Chart.js</span> — let users analyze trends across customizable timeframes, making the underlying data far easier to interpret.
                            </p>
                        </div>
                        {/* <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            <span className="text-white font-medium">Stripe subscriptions</span> — implemented a monthly billing model that gated premium data and created recurring revenue.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            Enhanced data visualization by implementing Chart.js, allowing
                            users to dynamically analyze financial trends across customizable
                            timeframes, resulting in improved user engagement and data
                            comprehension.
                            </p>
                        </div> */}
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    {/* Replace with actual logo image */}
                    <img src={nodeLogo} alt="" className="w-5 h-5 rounded-sm" />
                    <div className="flex flex-col gap-4">
                        {/* <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            Architected and developed a real-time financial data platform
                            using Next.js, providing users with access to up-to-the-minute
                            stock market and cryptocurrency news and pricing information.
                            </p>
                        </div> */}
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            Integrated Stripe to implement a monthly subscription model,
                            enabling access to premium financial data and ensuring recurring
                            revenue generation.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            <span className="text-white font-medium">Postgres schema</span> — designed the table structures backing every new feature
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    {/* Replace with actual logo image */}
                    <img src={sqlLogo} alt="" className="w-5 h-5 rounded-sm" />
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            Designed new database table structures for all new features using a postgres database
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Signalizer
