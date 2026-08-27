import React from 'react'
import tailwindLogo from "../assets/tailwind.png"
import reactLogo from "../assets/react.svg"
import goLogo from "../assets/go.png"
import sqlLogo from "../assets/sql1.png"
import nodeLogo from "../assets/nodejs.png"


const StarHealth = () => {
  return (
    <div className="md:grid md:grid-cols-12 flex flex-col items-start md:gap-10 gap-2">
        <p className="text-zinc-400 text-sm col-span-2">2022 - 2023</p>
        <div className="flex flex-col col-span-10">
            <div className="flex md:flex-row flex-col md:items-center md:gap-2">
            <p className="font-semibold text-white text-xl">StarHealth</p>
                <div className="flex items-center gap-2">
                    {/* Replace with actual logo images */}
                    <img src={reactLogo} alt='' className='w-6 h-6 rounded-sm' />
                    <img src={tailwindLogo} alt='' className='w-5 h-5 rounded-sm' />
                    <img src={nodeLogo} alt='' className='w-5 h-5 rounded-sm' />
                    <img src={sqlLogo} alt='' className='w-5 h-5 rounded-sm' />
                </div>
            </div>
            <p className="text-sm text-cyan-400">Fullstack Software Developer</p>
            <div className="flex flex-col mt-8 gap-5">
                <div className="flex items-start gap-4">
                    {/* Replace with actual logo image */}
                    <img src={reactLogo} alt="" className="w-5 h-5 rounded-sm" />
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            <span className="text-white font-medium">Next.js T3 migration</span> — led the migration to a T3 stack, using tRPC for end-to-end type safety and Prisma as the ORM, eliminating a class of client/server runtime errors.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            <span className="text-white font-medium">Directory search</span> — built a page with search and filtering that made a large record set navigable for end users.
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
                            <span className="text-white font-medium">Schema restructuring</span> — reworked the existing schema, improving data retrieval performance and unblocking frontend features.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            <span className="text-white font-medium">Views</span> — precomputed common joins to speed up the app's heaviest queries
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            <span className="text-white font-medium">Indexing</span> — indexed the tables behind search and filtering so the directory stayed responsive at scale
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>

  )
}

export default StarHealth
