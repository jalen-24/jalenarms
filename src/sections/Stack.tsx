import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { stack } from "@/data/site"
import { Band, NodeLabel, Chip } from "@/components/site/primitives"

/** Skills ordered top to bottom by how much of my day-to-day they take up. */
const Stack = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <Band id="Stack" className="py-6">
      <div ref={ref}>
        <NodeLabel index="02">stack</NodeLabel>
        <p className="text-sm text-[color:var(--text-mute)] mt-4 mb-6 max-w-xl">
          Where I spend most of my time, top to bottom. Not a limit on what I&apos;ll pick up.
        </p>

        <div className="relative">
          {/* spine connecting every layer */}
          <span
            className="absolute left-[7px] top-3 bottom-3 w-px bg-[color:var(--line)] hidden sm:block"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-3">
            {stack.map((group, i) => (
              <motion.div
                key={group.layer}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
                className="flex items-start gap-4"
              >
                <span className="port mt-5 shrink-0 hidden sm:block" aria-hidden="true" />

                <div className="node node-hover flex-1 p-4 md:p-5">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                    <span className="mono text-xs text-[color:var(--accent)]">{group.layer}</span>
                    <span className="mono text-[11px] text-[color:var(--text-mute)]">
                      {group.caption}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Band>
  )
}

export default Stack
