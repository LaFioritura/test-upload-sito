import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { FlameIcon } from '../components/Icons.jsx'

export default function FoundationStone() {
  return (
    <Layout translated={false}>
      <PageHead
        tag="The Three Powers"
        tagColor="yellow"
        icon={FlameIcon}
        title="The Foundation Stone"
        lede="A meditation recited into eight hundred people, one year after a building burned to the ground."
      />
      <article>
        <p>
          On New Year's Eve, 1922, the first Goetheanum — built entirely of wood — burns to the ground.
          Exactly one year later, from December 24, 1923 through New Year's Day 1924, Steiner gathers
          roughly eight hundred people in Dornach for the Christmas Conference, and refounds the
          Anthroposophical Society from scratch. Across those days he recites, repeatedly, a text that
          lays a new foundation stone — not in matter this time, but, in his own words, "in the hearts" of
          those present: the Foundation Stone meditation, now collected as GA 260 of his complete works.
        </p>

        <h2>A text meant to be practiced, not read</h2>
        <p>
          Steiner is explicit on one point: this text isn't meant to convey information, it's meant to be
          practiced as meditation. It describes the human constitution — the limbs, the rhythm of heart
          and lungs, the head — in direct relation to the spiritual hierarchies acting through each region,
          and it names, within itself, both the luciferic and the ahrimanic elements explicitly, inviting
          whoever recites it to experience their balance rather than merely understand it conceptually.
          The theologian Sergei Prokofieff called it the essential quintessence of the whole of
          anthroposophy. Because of its character as an esoteric mantra — and because it is, formally, a
          poem, protected by copyright in its modern translations — this notebook describes its content
          rather than reproducing its verses; the editions listed under sources let anyone read it in
          full.
        </p>
        <p>
          The connection to the rest of this notebook is direct. Where the entry on triplicity describes
          the balance between Lucifer and Ahriman in doctrinal terms, the Foundation Stone is the attempt
          to make that balance a lived, collective experience — recited in the very year the building
          meant to embody it architecturally had just burned to ash.
        </p>

        <SeeAlso links={[['/triplicity', 'the mystery of triplicity'], ['/christ-golgotha', 'Christ and the Mystery of Golgotha'], ['/timeline', 'timeline']]} />
        <Sources items={[
          "Rudolf Steiner, <em>The Foundation Stone Meditation</em>, GA 260, Christmas Conference, Dornach, 1923–1924.",
          "Peter Selg, <em>Rudolf Steiner's Foundation Stone Meditation and the Destruction of the Twentieth Century</em>, Temple Lodge Publishing, 2013.",
        ]} />
      </article>
    </Layout>
  )
}
