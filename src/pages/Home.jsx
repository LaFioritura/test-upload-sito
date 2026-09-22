import Layout from '../components/Layout.jsx'
import Diagram from '../components/Diagram.jsx'
import { Link } from 'react-router-dom'

const GROUPS = [
  {
    title: 'Orientation',
    items: [
      ['/method', 'How This Notebook Works', 'The method, the sourcing rules, and the one name this whole thing turns around.'],
      ['/anthroposophy', 'A Life and a Method', 'A scientific editor who spent a decade with Goethe before he spent the rest of his life with the invisible.'],
      ['/goethean-method', 'The Goethean Root', 'Where the whole method of observation actually comes from.'],
      ['/theosophy-split', 'Theosophy, and the Split', 'Why a messianic child actor made one man walk out and start his own society.'],
      ['/timeline', 'Timeline', 'Every date in this notebook, biographical and doctrinal, on one line.'],
    ],
  },
  {
    title: 'Cosmology',
    items: [
      ['/constitution', 'The Fourfold Human Being', 'Physical, etheric, astral, I — and where exactly the two hindering powers move in.'],
      ['/epochs', 'The Epochs of Consciousness', 'Why this particular century is, on this account, the most exposed one yet.'],
      ['/karma', 'Karma and Reincarnation', 'Why a six-hundred-year rhythm needs more than one lifetime to make any sense.'],
      ['/threshold', 'The Guardian of the Threshold', 'Meeting the sum total of your own unresolved weight.'],
      ['/christ-golgotha', 'Christ and the Mystery of Golgotha', 'The center everything else in this notebook quietly refers back to.'],
    ],
  },
  {
    title: 'The Three Powers',
    items: [
      ['/triplicity', 'The Mystery of Triplicity', 'A scale, a sculpture, and two dates of incarnation.'],
      ['/sorat', 'Sorat', 'The sun\'s demon, decoded from Hebrew letters, on a 666-year clock.'],
      ['/michael', 'Michael and the Falling Intelligence', 'An intelligence that used to belong to the heavens, now loose inside human minds.'],
      ['/double', 'The Double, and the Machines', 'A being said to live in your nervous system — and its unauthorized sequel about computers.'],
      ['/foundation-stone', 'The Foundation Stone', 'A meditation recited into eight hundred people, one year after a building burned to the ground.'],
    ],
  },
  {
    title: 'Applied',
    items: [
      ['/waldorf', 'Waldorf Education', 'From a cigarette factory in Stuttgart to schools on six continents.'],
      ['/biodynamics', 'Biodynamic Agriculture', 'Cow horns, compost, and — improbably — natural wine.'],
      ['/medicine', 'Anthroposophic Medicine', 'An extension of medicine, not an alternative to it — at least by its own account.'],
      ['/arts-architecture', 'Eurythmy and Architecture', 'Visible speech, and two very different buildings named after Goethe.'],
    ],
  },
  {
    title: 'Social Life',
    items: [
      ['/threefolding', 'The Threefold Social Order', 'Liberty, equality, fraternity — assigned to three separate rooms of society.'],
    ],
  },
  {
    title: 'Reception & Comparisons',
    items: [
      ['/reception', 'Critical Reception', 'What independent historians actually say, and how the response goes.'],
      ['/comparisons', 'Comparisons and Later Theories', 'Archons, cosmic horror, tech critique — flagged as outside sources, not extensions.'],
      ['/trajectories', 'Curious Trajectories', 'Kandinsky, Hilma af Klint, an Italian typewriter company, and a bottle of biodynamic wine.'],
    ],
  },
  {
    title: 'Reference',
    items: [
      ['/bibliography', 'Full Bibliography', 'Every source in the notebook, indexed once.'],
      ['/conclusion', 'Closing: Freedom as a Task', 'Where all of this quietly comes back to one single idea.'],
    ],
  },
]

export default function Home() {
  return (
    <Layout>
      <div className="home-hero">
        <span className="tag red">an ongoing personal research notebook</span>
        <h1 className="huge">A map of correspondences,<br/>kept a little too carefully.</h1>
        <p className="home-lede">
          This is a working notebook, not a finished book. It tracks one recurring pattern across a
          hundred years of occult and cosmological thinking: the habit of assigning numbers to letters,
          demons to planets, ranks to centuries, and enemies to virtues — and then insisting, against
          all odds, that the resulting scaffolding is not decoration but structure.
        </p>
        <p className="home-lede">
          Most of the entries here circle back, sooner or later, to one especially thorough twentieth-century
          system — built by an Austrian scientific editor who spent a decade annotating Goethe before he
          spent the rest of his life mapping the invisible. If you want the short version of who that was
          and why this notebook trusts him more than it trusts most of his peers, start with the method page.
          If you'd rather wander in through the terms themselves, the field below has no entry point marked
          "start here" — that's deliberate.
        </p>
      </div>

      <div className="stat-row">
        <div className="stat"><div className="n">26</div><div className="l">entries</div></div>
        <div className="stat"><div className="n">40+</div><div className="l">primary &amp; secondary sources</div></div>
        <div className="stat"><div className="n">1</div><div className="l">system, mapped from the inside and the outside</div></div>
        <div className="stat"><div className="n">0</div><div className="l">claims taken on faith</div></div>
      </div>

      <Diagram />

      {GROUPS.map((g, gi) => (
        <div className="group" key={g.title}>
          <div className="group-head">
            <span className="idx">{String(gi + 1).padStart(2, '0')}</span>
            <h2>{g.title}</h2>
          </div>
          <div className="grid">
            {g.items.map(([to, t, d]) => (
              <Link className="entry" to={to} key={to}>
                <div className="t">{t}</div>
                <div className="d">{d}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <p className="disclaimer">
        This notebook reconstructs an esoteric doctrine from the sources it names, entry by entry. It
        does not independently evaluate that doctrine's historical validity, and it does not claim that
        any of the entities described in it exist. No author's name is attached to it on purpose — treat
        it as a set of notes anyone can pick up, check, and keep extending. See the README in the
        repository for how.
      </p>
    </Layout>
  )
}
