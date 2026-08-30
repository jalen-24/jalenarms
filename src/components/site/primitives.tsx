import type { ReactNode } from "react"

/** Section label rendered like a node header: ── LABEL ─────────── */
export const NodeLabel = ({ children, index }: { children: ReactNode; index?: string }) => (
  <div className="flex items-center gap-3 w-full">
    {index && <span className="mono text-[11px] text-[color:var(--accent)]">{index}</span>}
    <span className="mono text-[11px] tracking-[0.18em] uppercase text-[color:var(--text-dim)]">
      {children}
    </span>
    <span className="h-px flex-1 bg-[color:var(--line)]" />
  </div>
)

/** Vertical connector between sections, optionally labelled like a message edge. */
export const Edge = ({ label, height = "h-16" }: { label?: string; height?: string }) => (
  <div className="flex flex-col items-center w-full select-none" aria-hidden="true">
    <div className={`edge ${height}`} />
    {label && (
      <span className="mono text-[10px] text-[color:var(--text-mute)] mt-2 mb-2 px-2 py-0.5 border border-[color:var(--line)] rounded bg-[color:var(--bg)]">
        {label}
      </span>
    )}
    {label && <div className={`edge ${height}`} />}
  </div>
)

/** Monospace chip used for technologies. */
export const Chip = ({ children }: { children: ReactNode }) => (
  <span className="mono text-[11px] px-2 py-1 rounded border border-[color:var(--line)] text-[color:var(--text-dim)] bg-[color:var(--bg)] whitespace-nowrap">
    {children}
  </span>
)

/** A section wrapper that keeps every band on the same measure. */
export const Band = ({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) => (
  <section id={id} className={`relative z-[1] w-full max-w-5xl mx-auto px-5 md:px-8 ${className}`}>
    {children}
  </section>
)
