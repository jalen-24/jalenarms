import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiUpwork } from "react-icons/si"
import { FaFileArrowDown } from "react-icons/fa6"
import { motion } from "framer-motion"
import { profile } from "@/data/site"
import { downloadResume } from "@/utils"
import { Band, NodeLabel, Chip } from "@/components/site/primitives"

const socials = [
  { href: profile.links.github, Icon: FaGithub, label: "GitHub" },
  { href: profile.links.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
  { href: profile.links.upwork, Icon: SiUpwork, label: "Upwork" },
]

const Hero = () => (
  <Band id="About" className="pt-28 md:pt-36 pb-4">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <NodeLabel index="01">about</NodeLabel>

      <div className="node mt-5 p-6 md:p-10">
        <div className="flex items-center gap-3 mb-7">
          <img
            src={profile.avatar}
            alt=""
            className="w-11 h-11 rounded-full object-cover border border-[color:var(--line)]"
          />
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)] pulse-dot" />
            <span className="mono text-[11px] text-[color:var(--text-dim)]">available</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          {profile.name}
        </h1>
        <p className="mono text-sm md:text-base mt-3 text-[color:var(--accent)]">
          {profile.title}
          <span className="text-[color:var(--text-mute)]"> · </span>
          <span className="text-[color:var(--text-dim)]">{profile.focus}</span>
        </p>

        <div className="mt-7 space-y-4 max-w-2xl">
          {profile.bio.map((p) => (
            <p key={p.slice(0, 24)} className="text-[15px] leading-relaxed text-[color:var(--text-dim)]">
              {p}
            </p>
          ))}
        </div>

        <div className="h-px w-full bg-[color:var(--line)] my-7" />

        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="node node-hover w-10 h-10 grid place-items-center text-[color:var(--text-dim)] hover:text-[color:var(--accent)]"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>

          <button
            onClick={downloadResume}
            className="mono text-xs flex items-center gap-2 px-4 py-2.5 rounded border border-[color:var(--line)] text-[color:var(--text-dim)] hover:text-[color:var(--accent)] hover:border-[color:var(--accent-dim)] transition-colors"
          >
            <FaFileArrowDown />
            download cv
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {["C#", ".NET", "Service bus", "SQL + NoSQL", "CI/CD"].map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </motion.div>
  </Band>
)

export default Hero
