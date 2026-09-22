import { useNavigate } from 'react-router-dom'

const NODES = [
  { id: 'sorat', to: '/sorat', label: 'Sorat', x: 320, y: 46 },
  { id: 'michele', to: '/michele', label: 'Michele', x: 320, y: 104 },
  { id: 'lucifero', to: '/triplicita', label: 'Lucifero', x: 140, y: 176 },
  { id: 'arimane', to: '/doppio', label: 'Arimane', x: 500, y: 176 },
  { id: 'uomo', to: '/conclusione', label: "L'essere umano", x: 320, y: 258 },
]

export default function Diagram() {
  const navigate = useNavigate()

  const Node = ({ id, to, label, x, y, children }) => (
    <g
      className="node-link"
      role="link"
      tabIndex={0}
      onClick={() => navigate(to)}
      onKeyDown={(e) => (e.key === 'Enter' ? navigate(to) : null)}
      aria-label={`Vai a ${label}`}
    >
      <rect className="hit" x={x - 46} y={y - 24} width="92" height="48" />
      {children}
    </g>
  )

  return (
    <figure className="diagram-block">
      <svg viewBox="0 0 640 300" role="img" aria-label="La bilancia di Lucifero e Arimane, con Sorat e Michele">
        <title>La bilancia di Lucifero e Arimane, sovrastata da Sorat e Michele</title>
        <desc>
          Un fulcro sorretto dall'essere umano regge un braccio con Lucifero a sinistra e Arimane a destra.
          Sopra, separati dalla bilancia, Sorat minaccia e Michele lo contrasta.
        </desc>

        {/* beam */}
        <line x1="140" y1="120" x2="500" y2="120" stroke="#201d17" strokeWidth="1.5" />
        {/* fulcrum */}
        <path d="M300 120 L340 120 L320 156 Z" fill="#201d17" />
        {/* stand down to the human */}
        <line x1="320" y1="156" x2="320" y2="234" stroke="#201d17" strokeWidth="1.5" />
        {/* chains */}
        <line x1="140" y1="120" x2="140" y2="155" stroke="#9a927e" strokeWidth="1" />
        <line x1="500" y1="120" x2="500" y2="155" stroke="#9a927e" strokeWidth="1" />
        {/* Michele -> fulcrum */}
        <line x1="320" y1="112" x2="320" y2="120" stroke="#b98a4a" strokeWidth="1" />
        {/* Sorat -> Michele, contested */}
        <line x1="320" y1="66" x2="320" y2="92" stroke="#935139" strokeWidth="1" strokeDasharray="2 3" />

        {/* Sorat */}
        <Node {...NODES[0]}>
          <g className="shape">
            <circle cx="320" cy="46" r="18" fill="#201d17" />
            <path d="M320 24 L324 34 L336 30 L328 40 L338 46 L326 48 L330 60 L320 52 L310 60 L314 48 L302 46 L312 40 L304 30 L316 34 Z" fill="none" stroke="#935139" strokeWidth="0.75" opacity="0.7" />
          </g>
          <text className="label" x="320" y="12" textAnchor="middle" fontSize="12.5" fill="#5c564a" fontFamily="Newsreader, serif">Sorat</text>
        </Node>

        {/* Michele */}
        <Node {...NODES[1]}>
          <g className="shape">
            <line x1="312" y1="104" x2="328" y2="104" stroke="#b98a4a" strokeWidth="1.5" />
            <line x1="320" y1="97" x2="320" y2="111" stroke="#b98a4a" strokeWidth="1.5" />
            <circle cx="320" cy="104" r="3" fill="#b98a4a" />
          </g>
          <text className="label" x="320" y="134" textAnchor="middle" fontSize="12.5" fill="#5c564a" fontFamily="Newsreader, serif">Michele</text>
        </Node>

        {/* Lucifero pan */}
        <Node {...NODES[2]}>
          <ellipse className="shape" cx="140" cy="168" rx="30" ry="9" fill="none" stroke="#201d17" strokeWidth="1.25" />
          <path className="shape" d="M110 168 Q140 186 170 168" fill="none" stroke="#201d17" strokeWidth="1.25" />
          <text className="label" x="140" y="204" textAnchor="middle" fontSize="14" fill="#201d17" fontFamily="Newsreader, serif">Lucifero</text>
        </Node>

        {/* Arimane pan */}
        <Node {...NODES[3]}>
          <ellipse className="shape" cx="500" cy="168" rx="30" ry="9" fill="none" stroke="#201d17" strokeWidth="1.25" />
          <path className="shape" d="M470 168 Q500 186 530 168" fill="none" stroke="#201d17" strokeWidth="1.25" />
          <text className="label" x="500" y="204" textAnchor="middle" fontSize="14" fill="#201d17" fontFamily="Newsreader, serif">Arimane</text>
        </Node>

        {/* human */}
        <Node {...NODES[4]}>
          <circle className="shape" cx="320" cy="242" r="7" fill="none" stroke="#201d17" strokeWidth="1.25" />
          <text className="label" x="320" y="272" textAnchor="middle" fontSize="13" fill="#5c564a" fontFamily="Newsreader, serif">l'essere umano regge la bilancia</text>
        </Node>
      </svg>
      <figcaption className="diagram-caption">
        seleziona un nodo, oppure scorri l'indice qui sotto
      </figcaption>
    </figure>
  )
}
