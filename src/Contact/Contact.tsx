import { useEffect, useRef } from 'react'
import { motion, useInView } from "framer-motion"

const Contact = ({ onIsInView }: { onIsInView: () => void }) => {
  const containerRef = useRef(null)
  const containerInView = useInView(containerRef, { once: false })

  useEffect(() => {
    if (containerInView) { onIsInView() }
  }, [containerInView])

  return (
    <motion.div ref={containerRef} initial={{opacity: 0, y: 50}} animate={containerInView ? { opacity: 1, y: 0 } : {}} transition={{duration: 0.8, ease: "easeOut"}} id="Contact"  className="flex flex-col justify-start max-w-[100vw] lg:w-[75%] sm:w-[80%] mx-auto sm:gap-10 md:gap-10 gap-10 md:pt-20 md:p-0 p-5 md:h-[75vh] min-h-screen">
        <div className="flex items-start gap-10 md:flex-row flex-col">
            <div className="flex flex-col w-full gap-5">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-3 w-full">
                        <div className='md:border-b border-b-0 border-zinc-700 pb-1 w-full'>
                            <p className="text-3xl text-white font-semibold">Contact</p>
                        </div>
                        <div className="flex flex-col text-zinc-300 gap-5 mt-5">
                            <div className="flex flex-col">
                                <p className='text-zinc-400'>Email</p>
                                <a href='mailto:jalenarms@outlook.com' className='text-cyan-400'>jalenarms@outlook.com</a>
                            </div>
                            <div className="flex flex-col">
                                <p className='text-zinc-400'>Phone</p>
                                <a href='tel:+16145968904' className='text-cyan-400'>(614) 596-8904</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Contact
