import { Link } from 'react-router-dom'
import SideRays from '../components/SideRays'

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SideRays
          speed={1.8}
          rayColor1="#EAB308"
          rayColor2="#96c8ff"
          intensity={1.6}
          spread={2}
          origin="top-right"
          tilt={0}
          saturation={1.4}
          blend={0.7}
          falloff={1.8}
          opacity={0.95}
        />
      </div>

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <p className="font-mono text-xs tracking-[0.4em] text-white/40 uppercase mb-6">
          Est. 2017
        </p>
        <h1
          className="font-display text-6xl md:text-8xl font-semibold tracking-tight text-center"
          style={{ textShadow: '0 4px 40px rgba(255,255,255,0.15)' }}
        >
          M.J. <span className="italic text-white/70">Archives</span>
        </h1>
        <p className="mt-6 text-white/60 text-base md:text-lg text-center max-w-xl">
          Personal archives of Jiahui Zhang & Min Ma — a small island we call home.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-3xl">
          <Link to="/jiahui" className="group">
            <article className="glass-strong rounded-3xl p-8 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white/[0.14]">
              <p className="text-xs tracking-[0.3em] uppercase text-amber-200/70 mb-3">Archive #001</p>
              <h2 className="font-display text-3xl font-semibold">Jiahui Zhang</h2>
              <p className="mt-2 text-sm text-white/60">Research · Engineering · Life</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/80 group-hover:text-white">
                Open Archive
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </article>
          </Link>

          <div className="glass rounded-3xl p-8 opacity-80 cursor-not-allowed">
            <p className="text-xs tracking-[0.3em] uppercase text-rose-200/70 mb-3">Archive #002</p>
            <h2 className="font-display text-3xl font-semibold text-white/70">Min Ma</h2>
            <p className="mt-2 text-sm text-white/50">Coming Soon</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/40">
              In preparation
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
