import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import { CompassIcon } from '../components/Icons.jsx'

const PREDICTIONS = [
  {
    text: 'Deliberate, marketed "friction" — timers, grayscale modes, subscription tiers that remove autoplay and recommendation entirely — becomes a visible, growing product category rather than a niche of digital-wellness apps, as a segment of users starts paying specifically to have choices put back in front of them.',
    falsify: 'Falsified if attention-preserving features remain a minor settings-menu afterthought with no dedicated market by the mid-2030s, and no platform finds it commercially worthwhile to sell friction as a feature.',
  },
  {
    text: 'Controlled studies isolating "did you write the first draft yourself" as a variable will keep finding a measurable gap in unaided recall and revision quality between AI-first and human-first drafting, even as the tools themselves improve — because the deficit tracks practice, not tool quality.',
    falsify: 'Falsified if, once the novelty period passes and tools mature, well-designed studies find no consistent gap between AI-first and human-first drafting on recall and revision measures.',
  },
  {
    text: 'A visible status marker emerges around demonstrated independence from algorithmic recommendation — reading physical books in public, using feature phones, "undiscoverable" media consumption — the same way that, a generation earlier, unplugging from television signaled something similar.',
    falsify: 'Falsified if no such status signaling emerges and recommendation-driven consumption instead becomes fully normalized with no countercultural pole at all.',
  },
  {
    text: 'At least one jurisdiction will regulate not content but interface mechanics directly — banning or restricting autoplay, infinite scroll, or variable-reward notification design by name, the way some already regulate loot boxes — treating the removal of a decision point as the harm, separate from whatever content fills the resulting time.',
    falsify: 'Falsified if regulatory attention stays fixed entirely on content moderation and no major jurisdiction targets interface mechanics as a distinct category within the decade.',
  },
  {
    text: 'The generational mental-health data Haidt and Twenge point to either continues to worsen in lockstep with further increases in feed-based media time, or it decouples once smartphone adoption saturates — and by the early 2030s this notebook expects enough longitudinal data to exist that the Haidt/Odgers dispute gets substantially resolved one way, not indefinitely stuck at "more research is needed."',
    falsify: 'Falsified if a full decade more of data produces no convergence at all, and the same correlational standoff described in the entry on autonomy is still the state of the art in the 2030s.',
  },
]

export default function Predictions() {
  return (
    <Layout translated={false}>
      <PageHead
        tag="Reading the Present"
        tagColor="red"
        icon={CompassIcon}
        title="What Would Have to Happen"
        lede="Ten-year predictions specific enough to be wrong — because a framework that can't be wrong isn't saying anything."
      />
      <article>
        <p>
          A cosmology explains everything after the fact and predicts nothing beforehand — that's the
          usual, fair complaint against symbolic systems, and it applies to this notebook's own material
          just as much as to anyone else's. So here's an attempt to do the opposite: five specific claims
          about the next ten years, each with a stated condition under which it would be wrong. None of
          these follow from Steiner's own texts — they follow from the present-tense reading built on top
          of them, and they should be judged as such.
        </p>

        <ol className="pred-list">
          {PREDICTIONS.map((p, i) => (
            <li key={i}>
              {p.text}
              <span className="falsify">Falsified if: {p.falsify}</span>
            </li>
          ))}
        </ol>

        <p>
          None of these predictions require artificial intelligence to become conscious, malicious, or
          even particularly capable. All five are about incentives, interfaces, and what a population does
          with a skill it's no longer required to practice — which is the actual claim this notebook is
          making, stripped of everything cosmological. If none of the five come true, the honest response
          is not to look for a sixth prediction that fits better. It's to conclude the framework was wrong.
        </p>

        <SeeAlso links={[['/present-tense', 'Sorat as a lens'], ['/hypothesis', 'does automation reduce autonomy?'], ['/case-studies', 'three case studies']]} />
      </article>
    </Layout>
  )
}
