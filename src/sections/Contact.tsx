import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiUpwork } from "react-icons/si"
import { profile } from "@/data/site"
import { Band, NodeLabel } from "@/components/site/primitives"

const Contact = () => (
  <Band id="Contact" className="py-6">
    <NodeLabel index="05">contact</NodeLabel>

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="node mt-5 p-6 md:p-10"
    >
      <p className="text-2xl md:text-3xl font-semibold tracking-tight max-w-lg leading-tight">
        Open to backend and distributed systems work.
      </p>

      <div className="flex flex-col gap-1 mt-8">
        <span className="mono text-[11px] text-[color:var(--text-mute)]">email</span>
        <a
          href={`mailto:${profile.email}`}
          className="text-[color:var(--accent)] text-lg hover:underline underline-offset-4 w-fit"
        >
          {profile.email}
        </a>
      </div>

      <div className="h-px w-full bg-[color:var(--line)] my-7" />

      <div className="flex items-center gap-2">
        {[
          { href: profile.links.github, Icon: FaGithub, label: "GitHub" },
          { href: profile.links.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
          { href: profile.links.upwork, Icon: SiUpwork, label: "Upwork" },
        ].map(({ href, Icon, label }) => (
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
    </motion.div>
  </Band>
)

export default Contact
