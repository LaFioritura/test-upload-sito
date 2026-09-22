import { useNavigate } from 'react-router-dom'

const COLORS = ['#ff3d1f', '#1a3aff', '#ffd400', '#111111']

const NODES = [
  { id: 'sorat', label: 'SORAT', x: 340, y: 60, to: '/sorat', c: 0 },
  { id: '666', label: '666', x: 430, y: 108, to: '/sorat', c: 2 },
  { id: 'gematria', label: 'GEMATRIA', x: 225, y: 95, to: '/sorat', c: 2 },
  { id: 'lucifer', label: 'LUCIFER', x: 110, y: 185, to: '/triplicity', c: 0 },
  { id: 'ahriman', label: 'AHRIMAN', x: 570, y: 195, to: '/double', c: 1 },
  { id: 'michael', label: 'MICHAEL', x: 335, y: 185, to: '/michael', c: 3 },
  { id: 'archons', label: 'ARCHONS', x: 65, y: 300, to: '/comparisons', c: 3 },
  { id: 'karma', label: 'KARMA', x: 245, y: 345, to: '/karma', c: 1 },
  { id: 'double', label: 'THE DOUBLE', x: 490, y: 335, to: '/double', c: 0 },
  { id: 'threshold', label: 'THRESHOLD', x: 615, y: 275, to: '/threshold', c: 1 },
  { id: 'threefold', label: 'THREEFOLD ORDER', x: 165, y: 385, to: '/threefolding', c: 2 },
  { id: 'golgotha', label: 'GOLGOTHA', x: 405, y: 300, to: '/christ-golgotha', c: 3 },
]

const EDGES = [
  ['sorat', '666'], ['sorat', 'gematria'], ['sorat', 'michael'],
  ['lucifer', 'michael'], ['ahriman', 'michael'], ['lucifer', 'ahriman'],
  ['ahriman', 'double'], ['michael', 'golgotha'], ['karma', 'threshold'],
  ['karma', 'threefold'], ['archons', 'sorat'], ['double', 'threshold'],
  ['golgotha', 'karma'], ['threefold', 'lucifer'],
]

const byId = Object.fromEntries(NODES.map((n) => [n.id, n]))

export default function Diagram() {
  const navigate = useNavigate()

  return (
    <figure className="diagram-block">
      <svg viewBox="0 0 680 420" role="img" aria-label="A scattered map of the ideas covered in this notebook">
        <title>A field of associations, not a hierarchy</title>
        <desc>
          Twelve terms scattered across the page and loosely connected — a research map, not an org chart.
          No term sits above the others; click any of them to open its notebook entry.
        </desc>

        {EDGES.map(([a, b], i) => {
          const dashed = a === 'archons' || b === 'archons'
          return (
            <line
              key={i}
              x1={byId[a].x} y1={byId[a].y} x2={byId[b].x} y2={byId[b].y}
              stroke="#bbb" strokeWidth="1.5"
              strokeDasharray={dashed ? '3 4' : undefined}
            />
          )
        })}

        {NODES.map((n) => (
          <g
            key={n.id}
            className="node-link"
            role="link"
            tabIndex={0}
            onClick={() => navigate(n.to)}
            onKeyDown={(e) => (e.key === 'Enter' ? navigate(n.to) : null)}
            aria-label={`Open ${n.label}`}
          >
            <rect x={n.x - 60} y={n.y - 22} width="120" height="44" fill="transparent" />
            <circle className="dot" cx={n.x} cy={n.y} r="6" fill={COLORS[n.c]} />
            <text
              x={n.x}
              y={n.y - 14}
              textAnchor="middle"
              fontSize="11.5"
              fontWeight="800"
              fill="#111"
              fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
              letterSpacing="0.02em"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
      <p className="diagram-caption">
        Twelve terms, no top and no bottom — click any of them, or scan the full index below.
      </p>
    </figure>
  )
}
