import { useId, type ReactNode } from 'react'
import type { DressLook, DressPattern, Silhouette } from '../../data/dresses'

const CX = 120
const SKIN = '#ffe2cc'
const SKIN_SHADE = '#f4bfa0'
const HAIR = '#5b3425'
const HAIR_LIGHT = '#7a4a34'
const GOLD = '#fcd34d'
const GOLD_DARK = '#d97706'

/** Mép gấu váy: y ở hai đầu, nửa bề rộng, độ phình ở giữa (đường cong bậc hai). */
const HEM: Record<Silhouette, { y: number; hw: number; b: number }> = {
  aline: { y: 255, hw: 52, b: 6.5 },
  empire: { y: 255, hw: 50, b: 6.5 },
  tiered: { y: 262, hw: 74, b: 7 },
  ballgown: { y: 288, hw: 78, b: 9 },
  mermaid: { y: 296, hw: 58, b: 6 },
  grand: { y: 294, hw: 102, b: 11 },
}

const SKIRT_PATH: Record<Exclude<Silhouette, 'tiered'>, string> = {
  aline: 'M101 148 H139 L172 255 Q120 268 68 255 Z',
  empire: 'M104 128 H136 L170 255 Q120 268 70 255 Z',
  ballgown: 'M101 148 H139 C150 190 190 230 198 288 Q120 306 42 288 C50 230 90 190 101 148 Z',
  mermaid: 'M101 148 H139 C146 190 148 230 152 250 C170 270 176 285 178 296 Q120 308 62 296 C64 285 70 270 88 250 C92 230 94 190 101 148 Z',
  grand: 'M101 148 H139 C155 190 205 235 222 294 Q120 316 18 294 C35 235 85 190 101 148 Z',
}

const TIERS = [
  'M101 148 H139 L158 190 Q120 200 82 190 Z',
  'M90 172 H150 L176 226 Q120 238 64 226 Z',
  'M80 205 H160 L194 262 Q120 276 46 262 Z',
]

function hemPoints(sil: Silhouette, n: number, lift = 0): [number, number][] {
  const { y, hw, b } = HEM[sil]
  return Array.from({ length: n }, (_, i) => {
    const dx = (i / (n - 1)) * 2 * hw - hw
    return [CX + dx, y + b * (1 - (dx / hw) ** 2) - lift]
  })
}

const SPARKLES: [number, number][] = [
  [62, 128], [182, 134], [72, 205], [172, 212], [120, 258], [38, 262], [204, 266], [88, 24], [152, 20], [30, 160], [210, 170],
]

function PatternDef({ id, kind, color }: { id: string; kind: DressPattern; color: string }) {
  const shapes: Record<DressPattern, ReactNode> = {
    dots: <><circle cx="6" cy="6" r="2.6" /><circle cx="18" cy="18" r="2.6" /></>,
    hearts: <path d="M12 19 C3 12 5 6 9 6 C11 6 12 8 12 8 C12 8 13 6 15 6 C19 6 21 12 12 19Z" />,
    flowers: (
      <>
        {[0, 72, 144, 216, 288].map((a) => (
          <circle key={a} cx={12 + 4 * Math.cos((a * Math.PI) / 180)} cy={12 + 4 * Math.sin((a * Math.PI) / 180)} r="2.6" />
        ))}
        <circle cx="12" cy="12" r="1.8" fill="#fde047" />
      </>
    ),
    leaves: <ellipse cx="12" cy="12" rx="3.2" ry="7" transform="rotate(35 12 12)" />,
    stars: <path d="M12 3 L14 10 L21 12 L14 14 L12 21 L10 14 L3 12 L10 10Z" />,
    waves: <path d="M0 12 Q6 5 12 12 T24 12" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />,
    snowflakes: <path d="M12 3V21M4 7.5L20 16.5M4 16.5L20 7.5" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" />,
    notes: <><circle cx="8" cy="17" r="3" /><path d="M11 17V5Q16 6 17 10" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" /></>,
    stripes: <rect x="0" y="9" width="24" height="5" />,
    drops: <path d="M12 3 Q18 12 12 18 Q6 12 12 3Z" />,
    butterflies: (
      <>
        <ellipse cx="8" cy="9" rx="4.5" ry="3.4" /><ellipse cx="16" cy="9" rx="4.5" ry="3.4" />
        <ellipse cx="9" cy="16" rx="3.2" ry="2.6" /><ellipse cx="15" cy="16" rx="3.2" ry="2.6" />
      </>
    ),
    letters: <text x="12" y="16" fontSize="12" fontWeight="800" textAnchor="middle" fontFamily="Nunito, sans-serif">A</text>,
    feathers: <path d="M12 2 Q20 12 12 22 Q4 12 12 2Z M12 5V20" fillRule="evenodd" />,
  }
  return (
    <pattern id={id} width="24" height="24" patternUnits="userSpaceOnUse">
      <g fill={color} opacity="0.85">{shapes[kind]}</g>
    </pattern>
  )
}

function Sparkle({ x, y, s = 1, delay = 0 }: { x: number; y: number; s?: number; delay?: number }) {
  return (
    <path
      className="twinkle"
      d="M0 -6 L1.6 -1.6 L6 0 L1.6 1.6 L0 6 L-1.6 1.6 L-6 0 L-1.6 -1.6Z"
      transform={`translate(${x} ${y}) scale(${s})`}
      fill="#fff"
      stroke={GOLD}
      strokeWidth="0.6"
      style={{ animationDelay: `${delay}s` }}
    />
  )
}

function Gem({ x, y, r = 3.2, fill }: { x: number; y: number; r?: number; fill: string }) {
  return (
    <path
      d={`M${x} ${y - r} L${x + r * 0.8} ${y} L${x} ${y + r} L${x - r * 0.8} ${y} Z`}
      fill={fill}
      stroke="#fff"
      strokeWidth="0.8"
    />
  )
}

function Bow({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <g>
      <path d={`M${x} ${y} L${x - 13} ${y - 8} Q${x - 17} ${y} ${x - 13} ${y + 8} Z`} fill={color} />
      <path d={`M${x} ${y} L${x + 13} ${y - 8} Q${x + 17} ${y} ${x + 13} ${y + 8} Z`} fill={color} />
      <circle cx={x} cy={y} r="3.4" fill={color} stroke="#fff" strokeWidth="1" />
    </g>
  )
}

/** Công chúa mặc váy `look`, vẽ bằng SVG (khung 240×330). */
export function PrincessSvg({ look, className = '', title }: { look: DressLook; className?: string; title?: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')
  const sil = look.silhouette
  const hem = HEM[sil]
  const empire = sil === 'empire'
  const waistY = empire ? 128 : 148
  const skirtGradId = `sk${uid}`
  const patId = `pt${uid}`
  const capeId = `cp${uid}`
  const wingId = `wg${uid}`
  const auraId = `au${uid}`
  const skirtFill = look.skirt.length > 1 ? `url(#${skirtGradId})` : look.skirt[0]
  const lastSkirt = look.skirt[look.skirt.length - 1]
  const sparkleCount = look.sparkle ? (sil === 'grand' ? 11 : 8) : 0
  const bodicePath = `M96 110 Q120 124 144 110 L141 ${waistY} L99 ${waistY} Z`
  const skirtPaths = sil === 'tiered' ? null : SKIRT_PATH[sil]
  const layerScale = sil === 'grand' ? 0.025 : 0.05

  return (
    <svg viewBox="0 0 240 330" className={className} role="img" aria-label={title ?? 'Công chúa'} xmlns="http://www.w3.org/2000/svg">
      {title && <title>{title}</title>}
      <defs>
        {look.skirt.length > 1 && (
          <linearGradient id={skirtGradId} x1="0" y1="0" x2="0" y2="1">
            {look.skirt.map((c, i) => <stop key={i} offset={`${(i / (look.skirt.length - 1)) * 100}%`} stopColor={c} />)}
          </linearGradient>
        )}
        {look.cape && (
          <linearGradient id={capeId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={look.cape[0]} />
            <stop offset="100%" stopColor={look.cape[look.cape.length - 1]} />
          </linearGradient>
        )}
        {look.wings && (
          <linearGradient id={wingId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={look.wings[0]} />
            <stop offset="100%" stopColor={look.wings[look.wings.length - 1]} />
          </linearGradient>
        )}
        {look.aura && (
          <radialGradient id={auraId}>
            <stop offset="0%" stopColor={look.aura} stopOpacity="0.9" />
            <stop offset="60%" stopColor={look.aura} stopOpacity="0.35" />
            <stop offset="100%" stopColor={look.aura} stopOpacity="0" />
          </radialGradient>
        )}
        {look.pattern && <PatternDef id={patId} kind={look.pattern} color={look.patternColor ?? '#ffffff'} />}
      </defs>

      {/* Vầng sáng, cánh, áo choàng, đuôi váy (phía sau) */}
      {look.aura && <circle cx={CX} cy="175" r="150" fill={`url(#${auraId})`} className="aura-pulse" />}
      {look.wings && (
        <g opacity="0.82" stroke="#fff" strokeWidth="1.2">
          {[false, true].map((flip) => (
            <g key={String(flip)} transform={flip ? `translate(${CX * 2} 0) scale(-1 1)` : undefined}>
              <path d="M112 112 C60 36 8 58 18 112 C26 152 80 152 112 120 Z" fill={`url(#${wingId})`} />
              <path d="M112 122 C72 132 40 192 68 204 C98 210 112 166 112 128 Z" fill={`url(#${wingId})`} opacity="0.85" />
            </g>
          ))}
        </g>
      )}
      {look.cape && (
        <path d="M96 108 C58 180 38 262 26 308 Q120 326 214 308 C202 262 182 180 144 108 Z" fill={`url(#${capeId})`} stroke={look.accent} strokeWidth="1" />
      )}
      {look.train && sil !== 'tiered' && (
        <>
          <path
            d={`M101 148 H139 L${CX + hem.hw + 6} ${hem.y + 6} Q${CX} ${hem.y + hem.b * 2 + 18} ${CX - hem.hw - 6} ${hem.y + 6} Z`}
            fill={lastSkirt}
          />
          <path
            d={`M101 148 H139 L${CX + hem.hw + 6} ${hem.y + 6} Q${CX} ${hem.y + hem.b * 2 + 18} ${CX - hem.hw - 6} ${hem.y + 6} Z`}
            fill="#000" opacity="0.14"
          />
        </>
      )}

      {/* Búi tóc + tóc dài phía sau */}
      <circle cx={CX} cy="33" r="14" fill={HAIR} />
      <path d="M91 58 Q84 118 98 132 L142 132 Q156 118 149 58 Z" fill={HAIR} />

      {/* Chân & giày */}
      <rect x="107" y="236" width="9" height="66" rx="4" fill={SKIN} />
      <rect x="124" y="236" width="9" height="66" rx="4" fill={SKIN} />
      <ellipse cx="110" cy="304" rx="10" ry="5.5" fill={look.accent} />
      <ellipse cx="130" cy="304" rx="10" ry="5.5" fill={look.accent} />

      {/* Cổ + vai */}
      <rect x="113" y="84" width="14" height="26" rx="6" fill={SKIN} />
      <path d="M92 112 Q94 102 112 102 L128 102 Q146 102 148 112 L148 122 L92 122 Z" fill={SKIN} />

      {/* Váy */}
      {sil === 'tiered' ? (
        <g>
          {[2, 1, 0].map((i) => (
            <g key={i}>
              <path d={TIERS[i]} fill={look.tierColors?.[i] ?? look.skirt[0]} />
              {look.pattern && <path d={TIERS[i]} fill={`url(#${patId})`} />}
              <path d={TIERS[i]} fill="none" stroke={look.accent} strokeWidth="1" opacity="0.7" />
            </g>
          ))}
        </g>
      ) : (
        <g>
          <path d={skirtPaths!} fill={skirtFill} />
          {look.pattern && <path d={skirtPaths!} fill={`url(#${patId})`} />}
          {Array.from({ length: look.layers ?? 0 }, (_, i) => (
            <path
              key={i}
              d={skirtPaths!}
              fill={look.layerColor ?? '#ffffff'}
              opacity={0.24}
              stroke="#fff"
              strokeWidth="0.8"
              transform={`translate(${CX} 148) scale(${1 + layerScale * (i + 1)} ${1 + 0.03 * (i + 1)}) translate(${-CX} -148)`}
            />
          ))}
          <path d={skirtPaths!} fill="none" stroke={look.accent} strokeWidth="1" opacity="0.6" />
        </g>
      )}
      {/* nếp váy */}
      <path d={`M${CX} ${waistY + 8} L${CX - 8} ${hem.y - 8}M${CX + 14} ${waistY + 10} L${CX + 24} ${hem.y - 10}M${CX - 14} ${waistY + 10} L${CX - 24} ${hem.y - 10}`} stroke="#000" strokeOpacity="0.07" strokeWidth="2" fill="none" />

      {/* Viền gấu váy */}
      {look.trim === 'ruffle' &&
        hemPoints(sil, 11, 1).map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={sil === 'grand' || sil === 'ballgown' ? 9 : 7} fill="#fff" fillOpacity="0.8" stroke={look.accent} strokeWidth="1" />
        ))}
      {look.trim === 'lace' && (
        <>
          <path d={`M${hemPoints(sil, 2)[0][0]} ${hem.y} Q${CX} ${hem.y + hem.b * 2} ${hemPoints(sil, 2)[1][0]} ${hem.y}`} fill="none" stroke="#fff" strokeWidth="5" strokeDasharray="4 3" strokeLinecap="round" opacity="0.95" />
          <path d={`M${hemPoints(sil, 2)[0][0]} ${hem.y - 7} Q${CX} ${hem.y + hem.b * 2 - 7} ${hemPoints(sil, 2)[1][0]} ${hem.y - 7}`} fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="2 3" strokeLinecap="round" opacity="0.9" />
        </>
      )}
      {look.trim === 'pearls' &&
        hemPoints(sil, 16, 2).map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="#fff" stroke="#cbd5e1" strokeWidth="0.8" />
        ))}
      {look.trim === 'ribbon' && (
        <path d={`M${hemPoints(sil, 2)[0][0]} ${hem.y - 8} Q${CX} ${hem.y + hem.b * 2 - 8} ${hemPoints(sil, 2)[1][0]} ${hem.y - 8}`} fill="none" stroke={look.accent} strokeWidth="6" strokeLinecap="round" />
      )}

      {/* Tay */}
      <g fill="none" stroke={SKIN} strokeWidth="9" strokeLinecap="round">
        <path d="M95 112 Q78 142 88 172" />
        <path d="M145 112 Q162 142 152 172" />
      </g>
      <circle cx="88" cy="174" r="5.5" fill={SKIN} />
      <circle cx="152" cy="174" r="5.5" fill={SKIN} />

      {/* Thân áo */}
      <path d={bodicePath} fill={look.bodice} />
      {look.pattern && <path d={bodicePath} fill={`url(#${patId})`} opacity="0.7" />}
      <path d={bodicePath} fill="none" stroke={look.accent} strokeWidth="1" opacity="0.6" />
      <path d="M96 110 Q120 124 144 110" fill="none" stroke="#fff" strokeWidth="2" opacity="0.7" />

      {/* Tay áo */}
      {look.sleeves === 'puff' && (
        <>
          <circle cx="93" cy="116" r="12" fill={look.bodice} stroke={look.accent} strokeWidth="1" />
          <circle cx="147" cy="116" r="12" fill={look.bodice} stroke={look.accent} strokeWidth="1" />
          <ellipse cx="90" cy="112" rx="4" ry="3" fill="#fff" opacity="0.35" />
          <ellipse cx="144" cy="112" rx="4" ry="3" fill="#fff" opacity="0.35" />
        </>
      )}
      {look.sleeves === 'cap' && (
        <>
          <ellipse cx="94" cy="114" rx="8" ry="6.5" fill={look.bodice} stroke={look.accent} strokeWidth="1" />
          <ellipse cx="146" cy="114" rx="8" ry="6.5" fill={look.bodice} stroke={look.accent} strokeWidth="1" />
        </>
      )}
      {look.sleeves === 'off-shoulder' && (
        <>
          <path d="M86 114 Q120 100 154 114 L152 128 Q120 116 88 128 Z" fill={look.bodice} stroke={look.accent} strokeWidth="1" />
          <path d="M88 120 Q120 108 152 120" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="3 3" opacity="0.8" />
        </>
      )}
      {look.sleeves === 'sheer' && (
        <>
          <g fill="none" strokeLinecap="round" stroke={look.layerColor ?? look.bodice} strokeWidth="17" opacity="0.5">
            <path d="M95 114 Q76 144 87 172" />
            <path d="M145 114 Q164 144 153 172" />
          </g>
          <g fill="none" strokeLinecap="round" stroke="#fff" strokeWidth="2" opacity="0.8">
            <path d="M89 120 Q72 146 82 170" />
            <path d="M151 120 Q168 146 158 170" />
          </g>
          <ellipse cx="94" cy="114" rx="7" ry="6" fill={look.bodice} />
          <ellipse cx="146" cy="114" rx="7" ry="6" fill={look.bodice} />
        </>
      )}

      {/* Thắt lưng, nơ, đá quý */}
      {(look.sash || empire) && <rect x="98" y={waistY - 4} width="44" height="8" rx="3" fill={look.accent} />}
      {look.bow && <Bow x={CX} y={waistY} color={look.accent} />}
      {look.gems && (
        <>
          <Gem x={CX} y={waistY - 12} r={4.5} fill="#f472b6" />
          <Gem x={CX - 16} y={waistY + 10} fill="#38bdf8" />
          <Gem x={CX + 16} y={waistY + 10} fill="#38bdf8" />
          <Gem x={CX - 30} y={waistY + 50} r={3.6} fill="#fde047" />
          <Gem x={CX + 30} y={waistY + 50} r={3.6} fill="#fde047" />
          <Gem x={CX} y={waistY + 70} r={4.2} fill="#a78bfa" />
          <Gem x={CX - 52} y={hem.y - 20} r={3.6} fill="#f472b6" />
          <Gem x={CX + 52} y={hem.y - 20} r={3.6} fill="#f472b6" />
        </>
      )}

      {/* Đầu */}
      <circle cx={CX} cy="64" r="27" fill={SKIN} />
      <path d="M93 60 Q94 34 120 34 Q146 34 147 60 Q138 46 120 46 Q102 46 93 60Z" fill={HAIR} />
      <path d="M100 48 Q108 40 120 40" fill="none" stroke={HAIR_LIGHT} strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="109" cy="68" rx="3.4" ry="4.4" fill="#2b1a12" />
      <ellipse cx="131" cy="68" rx="3.4" ry="4.4" fill="#2b1a12" />
      <circle cx="110.2" cy="66.4" r="1.3" fill="#fff" />
      <circle cx="132.2" cy="66.4" r="1.3" fill="#fff" />
      <circle cx="102" cy="77" r="5" fill="#fb7185" opacity="0.4" />
      <circle cx="138" cy="77" r="5" fill="#fb7185" opacity="0.4" />
      <path d="M113 79 Q120 86 127 79" fill="none" stroke="#c2410c" strokeWidth="2" strokeLinecap="round" />
      <path d="M104 60 Q109 57 114 59M126 59 Q131 57 136 60" fill="none" stroke={HAIR} strokeWidth="1.8" strokeLinecap="round" />
      <ellipse cx="120" cy="92" rx="5" ry="2" fill={SKIN_SHADE} opacity="0.5" />

      {/* Vương miện / nơ tóc */}
      {look.tiara === 'simple' && (
        <g>
          <path d="M104 44 L107 31 L114 39 L120 27 L126 39 L133 31 L136 44 Q120 49 104 44Z" fill={GOLD} stroke={GOLD_DARK} strokeWidth="1" />
          <circle cx="120" cy="36" r="2.6" fill="#f472b6" />
        </g>
      )}
      {look.tiara === 'jeweled' && (
        <g>
          <path d="M101 46 L104 28 L112 38 L120 22 L128 38 L136 28 L139 46 Q120 52 101 46Z" fill={GOLD} stroke={GOLD_DARK} strokeWidth="1" />
          <circle cx="104" cy="28" r="2.6" fill="#fff" stroke={GOLD_DARK} strokeWidth="0.6" />
          <circle cx="136" cy="28" r="2.6" fill="#fff" stroke={GOLD_DARK} strokeWidth="0.6" />
          <Gem x={120} y={32} r={5.5} fill="#38bdf8" />
          <Gem x={110} y={43} r={3} fill="#f472b6" />
          <Gem x={130} y={43} r={3} fill="#f472b6" />
        </g>
      )}
      {look.tiara === 'grand' && (
        <g>
          <path d="M97 47 L100 24 L109 36 L113 14 L120 30 L127 14 L131 36 L140 24 L143 47 Q120 54 97 47Z" fill={GOLD} stroke={GOLD_DARK} strokeWidth="1.2" />
          <circle cx="100" cy="24" r="3" fill="#fff" stroke={GOLD_DARK} strokeWidth="0.6" />
          <circle cx="140" cy="24" r="3" fill="#fff" stroke={GOLD_DARK} strokeWidth="0.6" />
          <circle cx="113" cy="14" r="3" fill="#fff" stroke={GOLD_DARK} strokeWidth="0.6" />
          <circle cx="127" cy="14" r="3" fill="#fff" stroke={GOLD_DARK} strokeWidth="0.6" />
          <Gem x={120} y={36} r={7} fill="#a855f7" />
          <Gem x={107} y={44} r={3.4} fill="#38bdf8" />
          <Gem x={133} y={44} r={3.4} fill="#38bdf8" />
        </g>
      )}
      {!look.tiara && <Bow x={CX + 14} y={30} color={look.accent} />}

      {/* Vòng cổ */}
      {look.necklace && (
        <g>
          <path d="M104 100 Q120 120 136 100" fill="none" stroke="#fff" strokeWidth="3" strokeDasharray="0.1 5" strokeLinecap="round" />
          <Gem x={CX} y={116} r={4.5} fill="#f472b6" />
        </g>
      )}

      {/* Lấp lánh */}
      {SPARKLES.slice(0, sparkleCount).map(([x, y], i) => (
        <Sparkle key={i} x={x} y={y} s={0.9 + (i % 3) * 0.35} delay={(i * 0.37) % 2} />
      ))}
    </svg>
  )
}
