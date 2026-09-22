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

        <h2>Reading Steiner from outside</h2>
        <p>
          Two very different books make a useful pair for anyone trying to see Steiner from outside the
          movement he founded. Gary Lachman's <em>Rudolf Steiner: An Introduction to His Life and Work</em>
          (Tarcher/Penguin, 2007) is a sympathetic but independent biography, written by a former Blondie
          bassist turned historian of Western esotericism, who calls Steiner one of the most
          underappreciated figures of the twentieth century precisely because his output is too large and
          too strange to fit comfortably into any single academic department. The German religious-studies
          historian Helmut Zander takes a considerably more skeptical line in <em>Rudolf Steiner: Die
          Biografie</em> (Piper, 2011), the most thorough critical academic biography to date, which
          traces in detail how much of Steiner's cosmology was assembled from the theosophical and
          occult literature already circulating in fin-de-siècle Germany and Austria — material covered
          more broadly in Corinna Treitel's <em>A Science for the Soul: Occultism and the Genesis of the
          German Modern</em> (Johns Hopkins University Press, 2004), a social history of the entire milieu
          Steiner emerged from rather than a study of Steiner specifically.
        </p>
        <p>
          Reading Lachman and Zander side by side is a reasonable antidote to both hagiography and
          dismissal: one treats Steiner as a serious, if singular, intellectual figure worth taking on his
          own terms; the other treats him as a case study in how a specific historical moment in German
          intellectual culture produced a specific kind of system-builder. Neither book is cited elsewhere
          in this notebook as a source for doctrine — for that, the notebook always goes back to Steiner's
          own lectures — but both inform how the entry on critical reception frames the more contested
          material.
        </p>

        <SeeAlso links={[['/method', 'how this notebook works'], ['/constitution', 'the fourfold human being'], ['/reception', 'critical reception']]} />
        <Sources items={[
          "Rudolf Steiner, <em>The Philosophy of Freedom</em>, 1894.",
          "Rudolf Steiner, <em>Truth and Science</em>, 1892.",
          "Gary Lachman, <em>Rudolf Steiner: An Introduction to His Life and Work</em>, Tarcher/Penguin, 2007.",
          "Helmut Zander, <em>Rudolf Steiner: Die Biografie</em>, Piper, 2011.",
          "Corinna Treitel, <em>A Science for the Soul: Occultism and the Genesis of the German Modern</em>, Johns Hopkins University Press, 2004.",
        ]} />
      </article>
    </Layout>
  )
}
