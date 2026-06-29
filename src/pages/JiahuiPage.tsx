import { Link } from 'react-router-dom'
import SideRays from '../components/SideRays'
import ClickSpark from '../components/ClickSpark'
import TiltedCard from '../components/TiltedCard'
import FallingText from '../components/FallingText'
import LogoLoopRaw from '../components/LogoLoop'
import MasonryRaw from '../components/Masonry'
import BorderGlowRaw from '../components/BorderGlow'
import { SiGithub, SiWechat, SiBilibili } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa6'

// memo() / loose JSX hides prop types from TS — cast so JSX accepts our props
const LogoLoop = LogoLoopRaw as unknown as (props: any) => JSX.Element
const Masonry = MasonryRaw as unknown as (props: any) => JSX.Element
const BorderGlow = BorderGlowRaw as unknown as (props: any) => JSX.Element

const PAPER_BLOCKS = [
  {
    eyebrow: 'UVA · 2025',
    title: 'Multi-Frame 3D Scene Understanding',
    desc: 'Temporal consistency across frames for occupancy estimation and object pose in dynamic driving scenes. Joint work with the UVA Computer Vision Lab.',
    tags: ['3D Perception', 'Temporal', 'SE(3)'],
    href: 'https://academic.jiahui9923.com',
    glowColor: '40 90 70',
    colors: ['#fcd34d', '#fb923c', '#a78bfa'],
    accentClass: 'text-amber-300/80',
    linkClass: 'text-amber-300',
  },
  {
    eyebrow: 'Ecology + 3D · 2024',
    title: 'TreeSeg: Tree Structure from Point Clouds',
    desc: 'Instance segmentation of tree crowns from airborne LiDAR — supporting fine-grained ecological monitoring at the forest plot scale.',
    tags: ['Segmentation', 'Point Cloud', 'LiDAR'],
    href: 'https://academic.jiahui9923.com',
    glowColor: '155 75 60',
    colors: ['#6ee7b7', '#34d399', '#7dd3fc'],
    accentClass: 'text-emerald-300/80',
    linkClass: 'text-emerald-300',
  },
  {
    eyebrow: 'Boise State · 2026 — Forthcoming',
    title: 'Embodied Spatial Reasoning',
    desc: 'Forthcoming Ph.D. work at NIUCElab — advancing occupancy + embodied agents under Prof. Yu Zhang. Stay tuned.',
    tags: ['Embodied AI', 'Occupancy', 'PhD'],
    href: 'https://yuzhang03.github.io/lab.html',
    glowColor: '270 70 70',
    colors: ['#a78bfa', '#c084fc', '#7dd3fc'],
    accentClass: 'text-violet-300/80',
    linkClass: 'text-violet-300',
  },
]

const SOCIAL_LOGOS = [
  { node: <SiGithub />, title: 'GitHub', href: 'https://github.com/Jiahui0223', ariaLabel: 'GitHub' },
  { node: <FaLinkedinIn />, title: 'LinkedIn', href: '#', ariaLabel: 'LinkedIn' },
  { node: <SiWechat />, title: 'WeChat', href: '#', ariaLabel: 'WeChat' },
  { node: <SiBilibili />, title: 'Bilibili', href: '#', ariaLabel: 'Bilibili' },
]

const PHOTO_ITEMS = [
  { id: '1',  img: '/img/gallery/1jiahui.jpg',  url: '#', height: 720 },
  { id: '2',  img: '/img/gallery/2jiahui.jpg',  url: '#', height: 540 },
  { id: '3',  img: '/img/gallery/3jiahui.jpg',  url: '#', height: 880 },
  { id: '4',  img: '/img/gallery/4jiahui.jpg',  url: '#', height: 620 },
  { id: '5',  img: '/img/gallery/5jiahui.jpg',  url: '#', height: 780 },
  { id: '6',  img: '/img/gallery/6jiahui.jpg',  url: '#', height: 540 },
  { id: '7',  img: '/img/gallery/7jiahui.jpg',  url: '#', height: 700 },
  { id: '8',  img: '/img/gallery/8jiahui.jpg',  url: '#', height: 560 },
  { id: '9',  img: '/img/gallery/9jiahui.jpg',  url: '#', height: 820 },
  { id: '10', img: '/img/gallery/10jiahui.jpg', url: '#', height: 640 },
  { id: '11', img: '/img/gallery/11jiahui.jpg', url: '#', height: 750 },
  { id: '12', img: '/img/gallery/12jiahui.jpg', url: '#', height: 540 },
  { id: '13', img: '/img/gallery/13jiahui.jpg', url: '#', height: 700 },
]

// Lenis-powered smooth anchor scroll. Falls back to native if Lenis didn't init.
function smoothScrollTo(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault()
  const target = document.getElementById(id)
  if (!target) return
  const lenis = (window as any).lenis
  if (lenis) {
    lenis.scrollTo(target, { offset: -72 })
  } else {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function JiahuiPage() {
  return (
    <ClickSpark
      sparkColor="#ffffff"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={10}
      duration={500}
    >
      <div className="relative w-full overflow-hidden bg-[#0a0a0a]">
        <header className="fixed top-5 left-1/2 -translate-x-1/2 z-30 max-w-[calc(100vw-2rem)]">
          <div
            className="flex items-center gap-3 md:gap-5 rounded-full px-3 md:px-5 py-2 bg-white/[0.02] backdrop-blur-xl border border-white/8 shadow-[0_18px_50px_-15px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]"
          >
            <Link
              to="/"
              aria-label="M.J. Archives"
              className="text-xl md:text-[22px] leading-[1] tracking-wide px-2 whitespace-nowrap text-white/85 hover:text-white transition-colors"
            >
              𝓜.𝓙. 𝓐𝓻𝓬𝓱𝓲𝓿𝓮𝓼
            </Link>
            <span className="hidden md:block w-px h-4 bg-white/15" aria-hidden />
            <nav className="hidden md:flex items-center gap-1 text-[13px] text-white/70">
              <a
                href="#about"
                onClick={(e) => smoothScrollTo(e, 'about')}
                className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-all"
              >
                About
              </a>
              <a
                href="#papers"
                onClick={(e) => smoothScrollTo(e, 'papers')}
                className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-all"
              >
                Papers
              </a>
              <a
                href="#photos"
                onClick={(e) => smoothScrollTo(e, 'photos')}
                className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-all"
              >
                Photos
              </a>
              <a
                href="https://academic.jiahui9923.com"
                target="_blank"
                rel="noopener"
                className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-all"
              >
                Academic ↗
              </a>
            </nav>
          </div>
        </header>

        {/* SECTION 01 · ABOUT (now first) — SideRays bg + Bio left + TiltedCard right + LogoLoop bottom */}
        <section
          id="about"
          className="relative z-10 min-h-screen w-full pt-20 pb-0 flex flex-col overflow-hidden"
        >
          <div className="absolute inset-0 z-0 pointer-events-none">
            <SideRays
              rayColor1="#EAB308"
              rayColor2="#96c8ff"
              origin="top-right"
              speed={3}
              intensity={3}
              spread={2}
              tilt={13}
              saturation={1.5}
              blend={0.75}
              falloff={1.6}
              opacity={1}
            />
          </div>
          <div className="relative z-10 flex-1 flex items-center px-6 md:px-10">
            <div className="mx-auto max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:h-[540px] flex flex-col max-w-xl">
                <h2
                  className="font-hand text-6xl md:text-8xl text-white tracking-tight leading-[0.9] mb-4 shrink-0"
                  style={{ textShadow: '0 4px 60px rgba(234, 179, 8, 0.18)' }}
                >
                  Hi, I'm Jiahui.
                </h2>
                <div className="flex-1 min-h-0">
                  <FallingText
                    text="Ph.D. student in Computer Science, joining Boise State this Fall. Full-stack engineer by day — React, Python, occasional Three.js scenes. Researcher exploring 3D perception, Occupancy prediction, and Embodied AI. Off-hours — Swimming laps, Board games with friends, slow coffee chats, weekend cooking, and food-driven travel."
                    highlightWords={[
                      { words: ['3D', 'Occupancy', 'Embodied', 'AI'], className: 'text-amber-300 font-semibold' },
                      { words: ['Ph.D.', 'Full-stack', 'Researcher'], className: 'text-sky-300 font-semibold' },
                      { words: ['React', 'Python', 'Three.js'], className: 'text-violet-300 font-semibold' },
                      { words: ['Swimming', 'Board', 'friends', 'coffee', 'cooking', 'travel'], className: 'text-emerald-300 font-semibold' },
                    ]}
                    trigger="click"
                    backgroundColor="transparent"
                    wireframes={false}
                    gravity={0.18}
                    fontSize="1.15rem"
                    mouseConstraintStiffness={0.6}
                  />
                </div>
              </div>

              <div className="flex justify-center md:justify-end md:h-[540px]">
                <TiltedCard
                  imageSrc="/img/jiahui2.png"
                  altText="Jiahui Zhang portrait"
                  captionText="0223"
                  containerHeight="540px"
                  containerWidth="380px"
                  imageHeight="540px"
                  imageWidth="380px"
                  rotateAmplitude={12}
                  scaleOnHover={1.06}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/85 via-black/40 to-transparent rounded-b-[18px]">
                      <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-white/60 mb-1">
                        Archive · #001
                      </p>
                      <h3 className="font-display text-2xl font-semibold text-white">
                        Jiahui <span className="italic text-white/85">Zhang</span>
                      </h3>
                      <p className="text-sm text-white/70 mt-0.5">Researcher</p>
                    </div>
                  }
                />
              </div>
            </div>
          </div>

          {/* Single LogoLoop, at the very bottom of About — CSS mask for transparent fade so SideRays bg shows through */}
          <div
            className="relative z-10 w-full mt-16 pb-6"
            style={{
              maskImage:
                'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
            }}
          >
            <LogoLoop
              logos={SOCIAL_LOGOS}
              speed={45}
              direction="left"
              logoHeight={34}
              gap={72}
              scaleOnHover
              pauseOnHover
              fadeOut={false}
              ariaLabel="Social links"
              className="text-white/85"
            />
          </div>
        </section>

        {/* SECTION 03 · PAPERS — BorderGlow blocks */}
        <section
          id="papers"
          className="relative z-10 min-h-screen w-full px-6 md:px-10 py-24 flex flex-col"
        >
          <div className="mx-auto max-w-6xl w-full">
            <p className="font-mono text-xs tracking-[0.4em] uppercase text-white/40 mb-4">
              01 · Papers
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[0.95] mb-12">
              Selected <span className="italic text-white/85">Work</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PAPER_BLOCKS.map((p) => (
                <BorderGlow
                  key={p.title}
                  edgeSensitivity={28}
                  glowColor={p.glowColor}
                  backgroundColor="#0a0a0a"
                  borderRadius={24}
                  glowRadius={50}
                  glowIntensity={1.0}
                  coneSpread={25}
                  animated={false}
                  colors={p.colors}
                >
                  <div className="p-7 text-white/85 flex flex-col h-full min-h-[280px]">
                    <p className={`font-mono text-[10px] tracking-[0.3em] uppercase mb-4 ${p.accentClass}`}>
                      {p.eyebrow}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl font-semibold leading-snug mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-white/65 leading-relaxed mb-5 flex-1">
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.tags.map((t: string) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener"
                      className={`text-sm font-medium hover:opacity-80 transition-opacity inline-flex items-center gap-1 ${p.linkClass}`}
                    >
                      Read more <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </a>
                  </div>
                </BorderGlow>
              ))}
            </div>

            <p className="mt-12 text-white/50 text-sm">
              For a complete scholarly listing, visit my{' '}
              <a
                href="https://academic.jiahui9923.com"
                target="_blank"
                rel="noopener"
                className="text-white underline-offset-4 underline hover:opacity-80"
              >
                academic page
              </a>
              .
            </p>
          </div>
        </section>

        {/* SECTION 04 · PHOTOS — Masonry */}
        <section
          id="photos"
          className="relative z-10 w-full px-6 md:px-10 py-24"
        >
          <div className="mx-auto max-w-7xl w-full">
            <p className="font-mono text-xs tracking-[0.4em] uppercase text-white/40 mb-4">
              02 · Photos
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[0.95] mb-12">
              Frames
            </h2>
            <div className="w-full min-h-[1400px]">
              <Masonry
                items={PHOTO_ITEMS}
                ease="power3.out"
                duration={0.7}
                stagger={0.05}
                animateFrom="bottom"
                scaleOnHover
                hoverScale={0.96}
                blurToFocus
                colorShiftOnHover={false}
              />
            </div>
          </div>
        </section>
      </div>
    </ClickSpark>
  )
}
