import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { CrystalIcon } from '../components/Icons.jsx'

export default function Medicine() {
  return (
    <Layout translated={false}>
      <PageHead
        tag="Applied"
        tagColor="blue"
        icon={CrystalIcon}
        title="Anthroposophic Medicine"
        lede="An extension of medicine, not an alternative to it — at least by its own account."
      />
      <article>
        <p>
          In the early 1920s, Steiner develops, together with the Dutch physician Ita Wegman, an extension
          of conventional medicine — and the word is deliberate: not an alternative to mainstream
          medicine, but an attempt to extend it toward the fourfold human constitution described elsewhere
          in this notebook. The balance between the luciferic and ahrimanic poles becomes one of the
          interpretive frameworks used, on this account, to read a patient's illness.
        </p>

        <h2>Weleda, and complementary therapies</h2>
        <p>
          From the same collaboration comes Weleda, founded in 1921, still operating internationally today
          as a pharmaceutical and cosmetics company producing homeopathic and herbal preparations on
          anthroposophical principles. Anthroposophic medicine also includes its own non-pharmacological
          therapies — curative eurythmy, therapeutic painting — and is recognized differently from country
          to country: in Germany and Switzerland, some of its treatments are reimbursed by the public
          health system, while independent medical and scientific communities discuss its clinical
          grounding with the same caution reserved, more broadly, for the epistemological status of
          anthroposophy as a whole — the subject of the entry on critical reception.
        </p>

        <SeeAlso links={[['/constitution', 'the fourfold human being'], ['/reception', 'critical reception'], ['/waldorf', 'Waldorf education']]} />
        <Sources items={[
          "Rudolf Steiner and Ita Wegman, <em>Fundamentals of Therapy</em>, 1925.",
          "Historical material on the founding of Weleda, 1921.",
        ]} />
      </article>
    </Layout>
  )
}
