import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { roles, type Role } from "@/data/site"
import { Band, NodeLabel, Chip } from "@/components/site/primitives"

const COLLAPSED = 4

const RoleNode = ({ role, index }: { role: Role; index: number }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [expanded, setExpanded] = useState(false)

  const hidden = role.bullets.length - COLLAPSED
  const shown = expanded ? role.bullets : role.bullets.slice(0, COLLAPSED)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: Math.min(index, 2) * 0.06, ease: "easeOut" }}
      className="relative flex gap-4 md:gap-6"
    >
      {/* timeline rail */}
      <div className="flex flex-col items-center shrink-0 pt-6">
        <span className={`port ${role.current ? "port-live" : ""}`} aria-hidden="true" />
        <span className="w-px flex-1 bg-[color:var(--line)] mt-2" aria-hidden="true" />
      </div>

      <div className="node node-hover flex-1 p-5 md:p-7 mb-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{role.company}</h3>
          <div className="flex flex-col items-start sm:items-end">
            <span className="mono text-[11px] text-[color:var(--text-dim)]">{role.dates}</span>
            {role.note && (
              <span className="mono text-[10px] text-[color:var(--text-mute)]">{role.note}</span>
            )}
          </div>
        </div>

        <p className="mono text-xs text-[color:var(--accent)] mt-1.5">{role.role}</p>

        {role.summary && (
          <p className="text-sm leading-relaxed text-[color:var(--text-mute)] mt-4 max-w-2xl">
            {role.summary}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mt-4">
          {role.tags.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>

        <div className="h-px w-full bg-[color:var(--line)] my-5" />

        <ul className="flex flex-col gap-3.5">
          {shown.map((b) => (
            <li key={b.key} className="flex gap-3 text-sm leading-relaxed">
              <span className="mono text-[color:var(--accent-dim)] select-none mt-0.5 shrink-0">
                &rsaquo;
              </span>
              <span className="text-[color:var(--text-dim)]">
                <span className="text-[color:var(--text)] font-medium">{b.key}</span>
                <span className="text-[color:var(--text-mute)]"> — </span>
                {b.text}
              </span>
            </li>
          ))}
        </ul>

        {hidden > 0 && (
          <button
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mono text-[11px] mt-5 px-3 py-1.5 rounded border border-[color:var(--line)] text-[color:var(--text-mute)] hover:text-[color:var(--accent)] hover:border-[color:var(--accent-dim)] transition-colors"
          >
            {expanded ? "− collapse" : `+ ${hidden} more`}
          </button>
        )}
      </div>
    </motion.div>
  )
}

const Work = () => (
  <Band id="Work" className="py-6">
    <NodeLabel index="03">work</NodeLabel>
    <p className="text-sm text-[color:var(--text-mute)] mt-4 mb-7 max-w-xl">
      Where the work above actually ran.
    </p>
    <div className="flex flex-col">
      {roles.map((role, i) => (
        <RoleNode key={role.id} role={role} index={i} />
      ))}
    </div>
  </Band>
)

export default Work
