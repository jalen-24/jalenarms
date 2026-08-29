import React from 'react'
import goLogo from "../assets/go.png"
import pythonLogo from "../assets/python.webp"

import swiftuiLgo from "../assets/swiftui.png"
import swiftLogo from "../assets/swift.svg"

const HotSpot = () => {
  return (
    <div className="md:grid md:grid-cols-12 flex flex-col items-start md:gap-10 gap-2 ">
        <p className='text-zinc-400 text-sm col-span-2'>2024 - 2025</p>
        <div className="flex flex-col col-span-10">
          <div className="flex md:flex-row flex-col md:items-center md:gap-2">
            <p className='font-semibold text-white text-xl'>HotSpot</p>
            <div className="flex items-center gap-2">
              <img src={swiftuiLgo} alt='' className='w-6 h-6 rounded-sm' />
              <img src={swiftLogo} alt='' className='w-5 h-5 rounded-sm' />
              <img src={pythonLogo} alt='' className='w-5 h-5 rounded-sm' />
              {/* <img src={nodeLogo} alt='' className='w-6 h-6 rounded-sm' /> */}

            </div>

          </div>
          <p className='text-sm text-cyan-400'>Lead iOS Developer</p>
          <div className="flex flex-col mt-8 gap-5">
          <div className="flex items-start gap-4">
              <img src={pythonLogo} alt="" className="w-5 h-5 rounded-sm" />
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className="text-sm text-zinc-300">
                    <span className="text-white font-medium">Firebase Functions</span> — moved backend logic off the device, improving performance and reducing client-side complexity.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className="text-sm text-zinc-300">
                    <span className="text-white font-medium">Scheduled enrichment</span> — built a job that seeds the database with processed data, using the OpenAI API to analyze records and set key fields from the result.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className="text-sm text-zinc-300">
                    <span className="text-white font-medium">Email ingestion</span> — built an automated task that parses inbound emails, extracts event details with the OpenAI API, and imports them, removing manual event entry.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={swiftuiLgo} alt="" className="w-5 h-5 rounded-sm" />
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className="text-sm text-zinc-300">
                    <span className="text-white font-medium">SwiftUI migration</span> — migrated a UIKit and Storyboard app to SwiftUI, preserving all original functionality while improving maintainability.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className="text-sm text-zinc-300">
                    <span className="text-white font-medium">Figma to SwiftUI</span> — translated designs into pixel-perfect views, keeping the experience visually consistent throughout the app.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className="text-sm text-zinc-300">
                    <span className="text-white font-medium">State management</span> — used SwiftUI's state system to keep the interface smooth, responsive, and interactive.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={swiftLogo} alt="" className="w-5 h-5 rounded-sm" />
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className="text-sm text-zinc-300">
                    <span className="text-white font-medium">Extensions</span> — centralized date, font, and view helpers to cut duplication across the codebase.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className="text-sm text-zinc-300">
                    <span className="text-white font-medium">Global state</span> — designed ObservableObject classes for shared state and used structs for data modeling and type safety.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className="text-sm text-zinc-300">
                    <span className="text-white font-medium">Push notifications</span> — handled user authorization and secure device token storage so the app could re-engage users.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className="text-sm text-zinc-300">
                    <span className="text-white font-medium">Google Maps SDK</span> — used a delegate-based design to capture device tokens and handle map events, updating state dynamically as the user pans the map.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  )
}

export default HotSpot
