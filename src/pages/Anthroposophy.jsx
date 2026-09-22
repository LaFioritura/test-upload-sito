import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { BookIcon } from '../components/Icons.jsx'

export default function Anthroposophy() {
  return (
    <Layout>
      <PageHead
        tag="Orientation"
        tagColor="blue"
        icon={BookIcon}
        title="A Life and a Method"
        lede="A scientific editor who spent a decade with Goethe before he spent the rest of his life with the invisible."
      />
      <article>
        <p>
          Rudolf Steiner was born in 1861 in Kraljevec, then a village of the Austro-Hungarian Empire,
          today in Croatia — the son of a railway stationmaster, which meant a childhood spent moving
          along a rail line, watching a technology most of his neighbors still found faintly miraculous.
          He studied mathematics and natural science in Vienna, and for the better part of two decades he
          was not, by any obvious measure, a mystic: he was a professional editor, hired to prepare
          Goethe's scientific writings — botany, optics, the theory of color — for a critical edition at a
          time when Goethe's science was widely dismissed as a poet's hobby, worth publishing only for
          sentimental reasons.
        </p>
        <p>
          In 1891 he earned a doctorate in philosophy with a dissertation on epistemology, published the
          following year as <em>Truth and Science</em>. In 1894 came <em>The Philosophy of Freedom</em>,
          the book he would return to for the rest of his life and the one his later esoteric work is,
          by his own account, never meant to contradict. Its central claim is disarmingly simple to state
          and famously hard to defend: a genuinely free moral act springs neither from an external
          command nor from an inherited instinct, but from an intuitive thought each person is, at least
          in principle, capable of arriving at alone.
        </p>

        <h2>From lecture hall to founder</h2>
        <p>
          From 1902 Steiner lectured under the auspices of the Theosophical Society, whose German section
          he came to lead. He broke with it in 1913 — the reasons are their own entry — to found the
          Anthroposophical Society, and in Dornach, Switzerland, he built the Goetheanum: part lecture
          hall, part temple, part studio, and the base from which eurythmy, biodynamic agriculture,
          Waldorf education, and anthroposophic medicine would all eventually emerge. He died in 1925,
          leaving behind something in the neighborhood of six thousand transcribed lectures — an amount
          of primary material almost without parallel among the founders of modern esoteric movements,
          most of whom left a handful of books and a great deal of unrecorded oral teaching.
        </p>

        <h2>A method, not a catalog of beliefs</h2>
        <p>
          The word anthroposophy, from the Greek for "wisdom of the human being," names what Steiner also
          called spiritual science — a label worth taking seriously rather than dismissing as branding. His
          claim was not that the invisible world should be accepted on faith, but that it could be
          approached with the same discipline he associated with the best of Western natural science:
          patient observation, testable method, an argument a reader could in principle check rather than
          simply be asked to trust. Whether that claim holds up is a live and serious question — one this
          notebook takes up directly in the entry on critical reception — but it is the claim Steiner
          actually made, and it is worth stating accurately before arguing with it.
        </p>
        <p>
          From that method come the applications anthroposophy is best known for today: Waldorf schools,
          biodynamic farms, Weleda's pharmacy shelves, a still-active architectural style built around
          organic curves instead of right angles. And from the same method comes the doctrine the rest of
          this notebook is mostly occupied with — not a folkloric sideline, but a working part of the same
          cosmology of human evolution that underwrites everything else Steiner built.
        </p>

        <SeeAlso links={[['/method', 'how this notebook works'], ['/constitution', 'the fourfold human being'], ['/reception', 'critical reception']]} />
        <Sources items={[
          "Rudolf Steiner, <em>The Philosophy of Freedom</em>, 1894.",
          "Rudolf Steiner, <em>Truth and Science</em>, 1892.",
        ]} />
      </article>
    </Layout>
  )
}
