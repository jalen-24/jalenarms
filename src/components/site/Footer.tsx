import { profile } from "@/data/site"
import { downloadResume } from "@/utils"

const Footer = () => (
  <footer className="relative z-[1] border-t border-[color:var(--line)] mt-16">
    <div className="max-w-5xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
      <div>
        <p className="mono text-xs text-[color:var(--accent)] mb-2">
          ja<span className="text-[color:var(--text-mute)]">::</span>dev
        </p>
        <p className="text-sm text-[color:var(--text-dim)]">{profile.name}</p>
        <p className="mono text-[11px] text-[color:var(--text-mute)] mt-1">
          {profile.title}
        </p>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <a href={profile.links.github} target="_blank" rel="noreferrer" className="mono text-[11px] text-[color:var(--text-mute)] hover:text-[color:var(--accent)]">github</a>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="mono text-[11px] text-[color:var(--text-mute)] hover:text-[color:var(--accent)]">linkedin</a>
        <a href={profile.links.upwork} target="_blank" rel="noreferrer" className="mono text-[11px] text-[color:var(--text-mute)] hover:text-[color:var(--accent)]">upwork</a>
        <a href={`mailto:${profile.email}`} className="mono text-[11px] text-[color:var(--text-mute)] hover:text-[color:var(--accent)]">email</a>
        <button onClick={downloadResume} className="mono text-[11px] text-[color:var(--text-mute)] hover:text-[color:var(--accent)]">cv</button>
      </div>
    </div>
  </footer>
)

export default Footer
