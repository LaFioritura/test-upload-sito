import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { SpiralIcon } from '../components/Icons.jsx'

export default function Karma() {
  return (
    <Layout>
      <PageHead
        tag="Cosmology"
        tagColor="red"
        icon={SpiralIcon}
        title="Karma and Reincarnation"
        lede="Why a six-hundred-year rhythm needs more than one lifetime to make any sense."
      />
      <article>
        <p>
          Steiner takes the idea that the "I" passes through a series of earthly lives from Indian
          sources, filtered through Theosophy, and puts it at the structural center of his own cosmology
          — not as an imported exotic flourish, but as the mechanism that makes the rest of the system
          hold together. Karma, in this account, is not blind fate. It is moral cause and effect: the same
          freedom worked out in <em>The Philosophy of Freedom</em>, stretched across a timescale longer
          than any single biography could contain.
        </p>

        <h2>Why one life isn't enough</h2>
        <p>
          This is the frame that makes it coherent to talk, as Steiner does, about forces that operate on
          rhythms of centuries — Sorat's 666 years, the counter-rhythm of 333, cultural epochs that each
          run longer than two millennia. No single lifetime could experience the full arc of any of these
          cycles from the inside. The actual counterpart to these forces, on this account, isn't the
          individual living through one incarnation; it's the reincarnating "I," accumulating and working
          through karma across a sequence of them.
        </p>
        <p>
          Even the balance between Lucifer and Ahriman, Steiner argued when discussing social life, comes
          into focus better through this lens: only by recognizing that each person carries a destiny
          shaped over a much longer time than one lifetime can a society be built that doesn't reduce a
          human being to a simple economic or political function — the argument that underlies the
          threefold social order elsewhere in this notebook.
        </p>

        <SeeAlso links={[['/constitution', 'the fourfold human being'], ['/threshold', 'the Guardian of the Threshold'], ['/threefolding', 'the threefold social order']]} />
        <Sources items={[
          "Rudolf Steiner, <em>The Philosophy of Freedom</em>, 1894.",
          "Rudolf Steiner, lecture cycle collected as <em>Understanding Society</em>, on karma as a foundation of social life.",
        ]} />
      </article>
    </Layout>
  )
}
