// A small set of original graphic motifs, drawn for this project rather than
// sourced as photographs — see the README for why. Each is a flat, two-tone
// icon in the site's red/blue/yellow system, sized for a page header.

const wrap = (children, size = 120) => (
  <svg viewBox="0 0 120 120" width={size} height={size} role="presentation" aria-hidden="true">
    {children}
  </svg>
)

export const SunIcon = () => wrap(
  <>
    <circle cx="60" cy="60" r="26" fill="#111" />
    <path d="M60 8 L66 26 L54 26 Z M60 112 L66 94 L54 94 Z M8 60 L26 66 L26 54 Z M112 60 L94 66 L94 54 Z
      M23 23 L38 33 L33 38 Z M97 23 L82 33 L87 38 Z M23 97 L38 87 L33 82 Z M97 97 L82 87 L87 82 Z" fill="#ff3d1f" />
  </>
)

export const ScaleIcon = () => wrap(
  <>
    <line x1="20" y1="30" x2="100" y2="30" stroke="#111" strokeWidth="5" />
    <line x1="60" y1="30" x2="60" y2="100" stroke="#111" strokeWidth="5" />
    <path d="M50 100 L70 100 L60 112 Z" fill="#111" />
    <circle cx="20" cy="55" r="16" fill="none" stroke="#ff3d1f" strokeWidth="5" />
    <circle cx="100" cy="55" r="16" fill="none" stroke="#1a3aff" strokeWidth="5" />
    <line x1="20" y1="30" x2="20" y2="42" stroke="#111" strokeWidth="3" />
    <line x1="100" y1="30" x2="100" y2="42" stroke="#111" strokeWidth="3" />
  </>
)

export const SpiralIcon = () => wrap(
  <>
    <path d="M60 60 m0 -44 a44 44 0 1 1 -44 44 a34 34 0 1 1 34 -34 a24 24 0 1 1 -24 24 a14 14 0 1 1 14 -14"
      fill="none" stroke="#111" strokeWidth="6" strokeLinecap="round" />
    <circle cx="60" cy="60" r="5" fill="#ffd400" stroke="#111" strokeWidth="2" />
  </>
)

export const NetworkIcon = () => wrap(
  <>
    <line x1="30" y1="30" x2="90" y2="45" stroke="#111" strokeWidth="2.5" />
    <line x1="30" y1="30" x2="35" y2="90" stroke="#111" strokeWidth="2.5" />
    <line x1="90" y1="45" x2="85" y2="95" stroke="#111" strokeWidth="2.5" />
    <line x1="35" y1="90" x2="85" y2="95" stroke="#111" strokeWidth="2.5" />
    <line x1="30" y1="30" x2="85" y2="95" stroke="#111" strokeWidth="2.5" />
    <circle cx="30" cy="30" r="9" fill="#ff3d1f" />
    <circle cx="90" cy="45" r="9" fill="#1a3aff" />
    <circle cx="35" cy="90" r="9" fill="#ffd400" stroke="#111" strokeWidth="2" />
    <circle cx="85" cy="95" r="9" fill="#111" />
  </>
)

export const SeedIcon = () => wrap(
  <>
    <path d="M60 15 C90 30 95 70 60 105 C25 70 30 30 60 15 Z" fill="none" stroke="#111" strokeWidth="5" />
    <line x1="60" y1="25" x2="60" y2="95" stroke="#ffd400" strokeWidth="4" />
    <path d="M60 45 C75 45 80 55 75 62" fill="none" stroke="#1a3aff" strokeWidth="3" />
    <path d="M60 70 C45 70 40 78 45 85" fill="none" stroke="#ff3d1f" strokeWidth="3" />
  </>
)

export const FlameIcon = () => wrap(
  <>
    <path d="M60 100 C35 90 32 65 46 48 C44 60 52 64 54 56 C56 44 50 34 58 18 C66 40 78 46 78 66
      C78 78 72 90 60 100 Z" fill="#ff3d1f" />
    <path d="M60 100 C50 92 48 76 56 64 C56 76 62 82 62 100 Z" fill="#ffd400" />
  </>
)

export const CrystalIcon = () => wrap(
  <>
    <polygon points="60,15 92,45 80,100 40,100 28,45" fill="#1a3aff" opacity="0.15" />
    <polygon points="60,15 92,45 60,58 28,45" fill="#1a3aff" opacity="0.5" />
    <polygon points="60,58 92,45 80,100 60,80" fill="#1a3aff" />
    <polygon points="60,58 28,45 40,100 60,80" fill="#111" opacity="0.75" />
  </>
)

export const DoubleIcon = () => wrap(
  <>
    <circle cx="48" cy="50" r="26" fill="none" stroke="#111" strokeWidth="4" />
    <circle cx="72" cy="66" r="26" fill="none" stroke="#ff3d1f" strokeWidth="4" strokeDasharray="4 5" />
  </>
)

export const CompassIcon = () => wrap(
  <>
    <circle cx="60" cy="60" r="44" fill="none" stroke="#111" strokeWidth="4" />
    <polygon points="60,24 68,60 60,96 52,60" fill="#ff3d1f" />
    <circle cx="60" cy="60" r="6" fill="#111" />
  </>
)

export const BeamIcon = () => wrap(
  <>
    <circle cx="30" cy="60" r="12" fill="#ffd400" stroke="#111" strokeWidth="3" />
    <line x1="42" y1="60" x2="105" y2="30" stroke="#111" strokeWidth="4" />
    <line x1="42" y1="60" x2="105" y2="90" stroke="#111" strokeWidth="4" />
    <line x1="42" y1="60" x2="108" y2="60" stroke="#111" strokeWidth="4" />
    <circle cx="105" cy="30" r="5" fill="#ff3d1f" />
    <circle cx="105" cy="90" r="5" fill="#1a3aff" />
    <circle cx="108" cy="60" r="5" fill="#111" />
  </>
)

export const BookIcon = () => wrap(
  <>
    <rect x="24" y="24" width="72" height="72" fill="none" stroke="#111" strokeWidth="4" />
    <line x1="24" y1="42" x2="96" y2="42" stroke="#111" strokeWidth="2" />
    <line x1="24" y1="58" x2="96" y2="58" stroke="#111" strokeWidth="2" />
    <line x1="24" y1="74" x2="70" y2="74" stroke="#ff3d1f" strokeWidth="4" />
  </>
)

export const RootsIcon = () => wrap(
  <>
    <line x1="60" y1="20" x2="60" y2="60" stroke="#111" strokeWidth="5" />
    <path d="M60 60 L30 100 M60 60 L60 108 M60 60 L90 100" fill="none" stroke="#1a3aff" strokeWidth="4" />
    <circle cx="60" cy="18" r="10" fill="#ffd400" stroke="#111" strokeWidth="3" />
  </>
)
