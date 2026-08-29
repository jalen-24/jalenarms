import { useEffect, useRef, type ReactNode } from 'react'
import reactLogo from "../assets/react.svg"
import pythonLogo from "../assets/python.webp"
import sqlLogo from "../assets/sql1.png"
import tailwindLogo from "../assets/tailwind.png"
import swiftui from "../assets/swiftui.png"
import csharpLogo from "../assets/csharp-logo.png"
import dotnetLogo from "../assets/dotnet-logo.svg"
import blazorLogo from "../assets/blazorLogo.png"
import { SiGraphql, SiElasticsearch, SiTypescript, SiSwift, SiGit } from "react-icons/si"
import { FaDatabase } from "react-icons/fa"
import { VscAzure, VscAzureDevops } from "react-icons/vsc"
import { motion, useInView } from "framer-motion"

type Tech = { name: string; img?: string; icon?: ReactNode }

const groups: { label: string; items: Tech[] }[] = [
    {
        label: "Backend & Data",
        items: [
            { name: "C#", img: csharpLogo },
            { name: ".NET / ASP.NET Core", img: dotnetLogo },
            { name: "GraphQL", icon: <SiGraphql className="w-6 h-6 text-pink-500" /> },
            { name: "Elasticsearch", icon: <SiElasticsearch className="w-6 h-6 text-cyan-400" /> },
            { name: "SQL Server", img: sqlLogo },
            { name: "Cosmos DB", icon: <VscAzure className="w-6 h-6 text-sky-400" /> },
            { name: "Marten", icon: <FaDatabase className="w-5 h-5 text-emerald-400" /> },
            { name: "Python", img: pythonLogo },
        ],
    },
    {
        label: "Frontend & Mobile",
        items: [
            { name: "React.js", img: reactLogo },
            { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-blue-400" /> },
            { name: "Blazor / WASM", img: blazorLogo },
            { name: "Tailwind CSS", img: tailwindLogo },
            { name: "SwiftUI", img: swiftui },
            { name: "Swift", icon: <SiSwift className="w-6 h-6 text-orange-500" /> },
        ],
    },
    {
        label: "Platform & Tooling",
        items: [
            { name: "Azure", icon: <VscAzure className="w-6 h-6 text-sky-400" /> },
            { name: "Azure DevOps", icon: <VscAzureDevops className="w-6 h-6 text-blue-400" /> },
            { name: "CI/CD", icon: <SiGit className="w-6 h-6 text-orange-600" /> },
        ],
    },
]

const TechnologiesAndSkills = ({ onIsInView }: { onIsInView: () => void }) => {
    const containerRef = useRef(null)
    const containerInView = useInView(containerRef, { once: false })

    useEffect(() => {
        if (containerInView) { onIsInView() }
    }, [containerInView])

    return (
        <motion.div
            ref={containerRef}
            className="flex flex-col w-full lg:w-[75%] sm:w-[80%] mx-auto gap-7 justify-start text-white sm:p-0 md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={containerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="flex flex-col">
                <h2 className="text-3xl font-semibold text-white mb-3">Technologies I Use</h2>
                <p className='text-sm text-zinc-300 pb-2'>What I reach for day to day. Not a limit on what I can pick up.</p>
            </div>

            <div className="flex flex-col gap-8">
                {groups.map((group) => (
                    <div key={group.label} className="flex flex-col gap-3">
                        <p className="text-sm text-cyan-400 font-medium">{group.label}</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {group.items.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="flex items-center bg-zinc-950 p-3 rounded-md gap-3 border border-zinc-800/80"
                                >
                                    <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                                        {tech.img
                                            ? <img src={tech.img} alt="" className="w-6 h-6 object-contain" />
                                            : tech.icon}
                                    </div>
                                    <p className="text-sm">{tech.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default TechnologiesAndSkills
