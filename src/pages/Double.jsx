import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { DoubleIcon } from '../components/Icons.jsx'

export default function Double() {
  return (
    <Layout translated={false}>
      <PageHead
        tag="The Three Powers"
        tagColor="yellow"
        icon={DoubleIcon}
        title="The Double, and the Machines"
        lede="A being said to live in your nervous system — and its unauthorized sequel about computers."
      />
      <article>
        <p>
          There is, in Steiner's own authentic work, a real point of contact between the doctrine of
          Ahriman and technology — far more precise than any pairing with Sorat, and directly continuous
          with the entry on Michael. In a lecture cycle Steiner himself reportedly never returned to after
          delivering it, now collected under the title <em>The Electronic Doppelganger</em>, he describes
          a being of ahrimanic nature that lodges in the human nervous system shortly before birth and
          departs it at death, providing the physical basis for the electrical currents that make sensory
          perception and reaction to stimuli possible — a "double," in his own term, of a geographic
          rather than purely individual nature.
        </p>
        <p>
          It is, at the scale of a single body, the same operation the Michael entry describes at
          historical and cosmic scale: an intelligence that ought to remain alive and conscious ends up
          occupied instead by a principle that stiffens it into pure mechanism. A second kind of double —
          individual this time, tied to each person's own inner path rather than to the nervous system in
          general — is the Guardian of the Threshold, covered elsewhere in this notebook.
        </p>

        <h2>An extension, not a direct teaching</h2>
        <p>
          Steiner died in 1925, before modern computing existed; he obviously never spoke about artificial
          intelligence or digital networks. It's later anthroposophist authors who have extended the
          doctrine of the ahrimanic double to electronic and computational technology, reading algorithmic
          profiling, constant electronic mediation, and automation as a contemporary intensification of
          the same principle. It's a legitimate extension within anthroposophical vocabulary — Ahriman,
          not Sorat, remains the correct name here according to the original doctrine — but it remains an
          extension. Nothing in Steiner's own lectures addresses a machine built after his death.
        </p>

        <SeeAlso links={[['/michael', 'Michael and the falling intelligence'], ['/threshold', 'the Guardian of the Threshold'], ['/comparisons', 'comparisons and later theories']]} />
        <Sources items={[
          "Rudolf Steiner, lecture cycle collected as <em>Der Elektronische Doppelgänger</em>, edited by Andreas Neider, Rudolf Steiner Verlag, 2013.",
          "Later anthroposophist readings extending the doctrine to contemporary technology.",
        ]} />
      </article>
    </Layout>
  )
}
