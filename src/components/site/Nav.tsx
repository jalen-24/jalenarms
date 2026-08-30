import { useEffect, useState } from "react"
import { RiMenu4Fill, RiCloseLine } from "react-icons/ri"
import { downloadResume } from "@/utils"

export const SECTIONS = ["About", "Stack", "Work", "Reviews", "Contact"] as const
export type SectionId = (typeof SECTIONS)[number]

const Nav = () => {
  const [active, setActive] = useState<SectionId>("About")
  const [open, setOpen] = useState(false)

  // Highlight whichever section currently owns the upper third of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id as SectionId)
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.01, 0.25, 0.5] }
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const go = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    setOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--bg)]/85 backdrop-blur-md">
        <nav className="max-w-5xl mx-auto px-5 md:px-8 h-14 flex items-center justify-between">
          <button onClick={() => go("About")} className="mono text-xs tracking-widest text-[color:var(--accent)]">
            ja<span className="text-[color:var(--text-mute)]">::</span>dev
          </button>

          <div className="hidden md:flex items-center gap-1">
            {SECTIONS.map((id) => (
              <button
                key={id}
                onClick={() => go(id)}
                className={`mono text-[11px] px-3 py-1.5 rounded transition-colors ${
                  active === id
                    ? "text-[color:var(--accent)] bg-[color:var(--bg-node)]"
                    : "text-[color:var(--text-mute)] hover:text-[color:var(--text-dim)]"
                }`}
              >
                {id.toLowerCase()}
              </button>
            ))}
            <button
              onClick={downloadResume}
              className="mono text-[11px] ml-2 px-3 py-1.5 rounded border border-[color:var(--line)] text-[color:var(--text-dim)] hover:text-[color:var(--accent)] hover:border-[color:var(--accent-dim)] transition-colors"
            >
              cv
            </button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden text-[color:var(--text-dim)] text-xl"
          >
            {open ? <RiCloseLine /> : <RiMenu4Fill />}
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 top-14 z-40 md:hidden bg-[color:var(--bg)]/97 backdrop-blur-sm">
          <div className="flex flex-col p-5 gap-1">
            {SECTIONS.map((id) => (
              <button
                key={id}
                onClick={() => go(id)}
                className={`mono text-sm text-left px-3 py-3 rounded border border-[color:var(--line)] ${
                  active === id ? "text-[color:var(--accent)]" : "text-[color:var(--text-dim)]"
                }`}
              >
                {id.toLowerCase()}
              </button>
            ))}
            <button
              onClick={() => { downloadResume(); setOpen(false) }}
              className="mono text-sm text-left px-3 py-3 rounded border border-[color:var(--line)] text-[color:var(--text-dim)]"
            >
              download cv
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Nav
