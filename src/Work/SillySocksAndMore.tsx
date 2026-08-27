import React from 'react'
import tailwindLogo from "../assets/tailwind.png"
import reactLogo from "../assets/react.svg"
import goLogo from "../assets/go.png"
import sqlLogo from "../assets/sql1.png"

const SillySocksAndMore = () => {
  return (
    <div className="md:grid md:grid-cols-12 flex flex-col items-start md:gap-10 gap-2">
        <p className="text-zinc-400 text-sm col-span-2">2023 - 2024</p>
        <div className="flex flex-col col-span-10">
            <div className="flex md:flex-row flex-col md:items-center md:gap-2">
            <p className="font-semibold text-white text-xl">Silly Socks and More</p>
            <div className="flex items-center gap-2">
                {/* Replace with actual logo images */}
                <img src={goLogo} alt='' className='w-6 h-6 rounded-sm' />
                <img src={sqlLogo} alt='' className='w-6 h-6 rounded-sm' />
                <img src={reactLogo} alt='' className='w-5 h-5 rounded-sm' />
                <img src={tailwindLogo} alt='' className='w-5 h-5 rounded-sm' />
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
                            <span className="text-white font-medium">E-commerce platform</span> — led development on a Go, React, and Tailwind stack, taking the business from no online presence to selling products directly.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            <span className="text-white font-medium">Search & filtering</span> — let customers find items by category and keyword instead of scrolling the full catalog.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            <span className="text-white font-medium">Admin interface</span> — gave the owner direct control over orders, product catalog, and internal operations without developer involvement.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    {/* Replace with actual logo image */}
                    <img src={goLogo} alt="" className="w-5 h-5 rounded-sm" />
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                                <span className="text-white font-medium">Go HTTP server</span> — handled client requests and controlled data flow throughout the application
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                                <span className="text-white font-medium">Stripe checkout</span> — redirected users to a personalized ordering page and handled webhooks to keep payment status in sync
                            </p>
                        </div>

                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default SillySocksAndMore
