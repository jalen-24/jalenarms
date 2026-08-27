import { useInView, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import goLogo from "../assets/go.png"
import pythonLogo from "../assets/python.webp"

import swiftuiLgo from "../assets/swiftui.png"
import swiftLogo from "../assets/swift.svg"
import Carvana from './Carvana';
import CommunityBridges from './CommunityBridges';
import HotSpot from './HotSpot';
import SillySocksAndMore from './SillySocksAndMore';
import Signalizer from './Signalizer';
import StarHealth from './StarHealth';

const Work = ({onIsInView}: {onIsInView: () => void}) => {
  const containerRef = useRef(null)
  const containerInView = useInView(containerRef, { once: false })

  useEffect(() => {
      if (containerInView) { onIsInView() }
  }, [containerInView])

  return (
    <motion.div initial={{opacity: 0, y: 50}} animate={containerInView ? { opacity: 1, y: 0 } : {}} transition={{duration: 0.8, ease: "easeOut"}} id="Work" ref={containerRef}  className="flex flex-col justify-start max-w-[100vw] lg:w-[75%] sm:w-[80%] mx-auto sm:gap-10 md:gap-10 gap-10 md:pt-20">
      <div className="flex flex-col gap-2">
        <p className="text-3xl text-white font-semibold">Work</p>
      </div>
      <Carvana />

      <CommunityBridges />

      <HotSpot />

      <SillySocksAndMore />

      <Signalizer />

      <StarHealth />

    </motion.div>
  )
}

export default Work
