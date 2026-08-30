import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaStar } from "react-icons/fa"
import { SiUpwork } from "react-icons/si"
import { reviews, profile } from "@/data/site"
import { Band, NodeLabel } from "@/components/site/primitives"

const Reviews = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <Band id="Reviews" className="py-6">
      <div ref={ref}>
        <div className="flex items-center justify-between gap-4">
          <NodeLabel index="04">reviews</NodeLabel>
          <a
            href={profile.links.upwork}
            target="_blank"
            rel="noreferrer"
            aria-label="Upwork profile"
            className="shrink-0 text-[color:var(--text-dim)] hover:text-[color:var(--accent)] transition-colors"
          >
            <SiUpwork className="text-xl" />
          </a>
        </div>

        <p className="mono text-xs text-[color:var(--text-mute)] mt-4 mb-6">
          {reviews.length} contracts · 5.0 average
        </p>

        <div className="grid sm:grid-cols-2 gap-3">
          {reviews.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              className="node node-hover p-5 flex flex-col justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-1.5 mb-3">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <FaStar key={s} className="text-[10px] text-[color:var(--signal)]" />
                  ))}
                  <span className="mono text-[11px] text-[color:var(--text-dim)] ml-1">5.0</span>
                </div>
                <p className="text-sm font-medium mb-2.5 leading-snug">{r.title}</p>
                <p className="text-sm leading-relaxed text-[color:var(--text-mute)]">
                  &ldquo;{r.quote}&rdquo;
                </p>
              </div>
              <span className="mono text-[10px] text-[color:var(--text-mute)]">{r.period}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Band>
  )
}

export default Reviews
