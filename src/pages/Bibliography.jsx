import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import { BookIcon } from '../components/Icons.jsx'
import { Link } from 'react-router-dom'

export default function Bibliography() {
  return (
    <Layout>
      <PageHead
        tag="Reference"
        tagColor="blue"
        icon={BookIcon}
        title="Full Bibliography"
        lede="Every source in the notebook, indexed once. Each entry also keeps its own sources at the bottom of the page."
      />
      <article>
        <h2>Works by Rudolf Steiner</h2>
        <ul>
          <li>Rudolf Steiner, <em>Truth and Science</em>, 1892. — <Link to="/goethean-method">entry</Link></li>
          <li>Rudolf Steiner, <em>Reincarnation and Karma: Two Fundamental Truths of Existence</em>, 1903. — <Link to="/karma">entry</Link></li>
          <li>Rudolf Steiner, <em>The Philosophy of Freedom</em>, 1894. — <Link to="/goethean-method">entry</Link>, <Link to="/conclusion">entry</Link></li>
          <li>Rudolf Steiner, <em>Christianity as Mystical Fact</em>, 1902. — <Link to="/christ-golgotha">entry</Link>, <Link to="/comparisons">entry</Link></li>
          <li>Rudolf Steiner, <em>How to Know Higher Worlds</em>, 1904–1905. — <Link to="/threshold">entry</Link></li>
          <li>Rudolf Steiner, GA 104 and GA 104a, 1907–1908. — <Link to="/sorat">entry</Link>, <Link to="/michael">entry</Link></li>
          <li>Rudolf Steiner, <em>Occult Science: An Outline</em>, 1910. — <Link to="/constitution">entry</Link></li>
          <li>Rudolf Steiner, <em>The Mission of Michael</em>, 1919. — <Link to="/triplicity">entry</Link>, <Link to="/christ-golgotha">entry</Link></li>
          <li>Rudolf Steiner, <em>Towards Social Renewal</em>, 1919. — <Link to="/threefolding">entry</Link></li>
          <li>Rudolf Steiner, <em>Understanding Society</em>, 1918–1919. — <Link to="/threefolding">entry</Link>, <Link to="/karma">entry</Link></li>
          <li>Rudolf Steiner, <em>The Influence of Lucifer and Ahriman</em>. — <Link to="/triplicity">entry</Link></li>
          <li>Rudolf Steiner, <em>Eternal and Transient Elements in Human Life</em>. — <Link to="/sorat">entry</Link></li>
          <li>Rudolf Steiner, GA 26, <em>The Michael Mystery</em>, 1924–1925. — <Link to="/michael">entry</Link>, <Link to="/epochs">entry</Link>, <Link to="/christ-golgotha">entry</Link></li>
          <li>Rudolf Steiner, <em>Cosmic Christianity and the Impulse of Michael</em>, 1924. — <Link to="/michael">entry</Link></li>
          <li>Rudolf Steiner, <em>Agriculture Course</em>, 1924. — <Link to="/biodynamics">entry</Link></li>
          <li>Rudolf Steiner, <em>The Foundation Stone Meditation</em>, GA 260, 1923–1924. — <Link to="/foundation-stone">entry</Link></li>
          <li>Rudolf Steiner and Ita Wegman, <em>Fundamentals of Therapy</em>, 1925. — <Link to="/medicine">entry</Link></li>
          <li>Rudolf Steiner, <em>Der Elektronische Doppelgänger</em>, 2013. — <Link to="/double">entry</Link></li>
        </ul>

        <h2>Secondary and anthroposophical literature</h2>
        <ul>
          <li>Stefano Arcella, <em>The Mystery of Triplicity and the "Threefold Mithras"</em>. — <Link to="/triplicity">entry</Link></li>
          <li>Peter Selg, <em>The Figure of Christ</em>. — <Link to="/triplicity">entry</Link></li>
          <li>Peter Selg, <em>Rudolf Steiner's Foundation Stone Meditation and the Destruction of the Twentieth Century</em>, 2013. — <Link to="/foundation-stone">entry</Link></li>
          <li>Antonio Benfatto, <em>Threefold Social Order</em>, University of Padua, 2023–2024. — <Link to="/threefolding">entry</Link>, <Link to="/trajectories">entry</Link></li>
          <li>Gary Lachman, <em>Rudolf Steiner: An Introduction to His Life and Work</em>, Tarcher/Penguin, 2007. — <Link to="/anthroposophy">entry</Link></li>
          <li>Helmut Zander, <em>Rudolf Steiner: Die Biografie</em>, Piper, 2011. — <Link to="/anthroposophy">entry</Link>, <Link to="/reception">entry</Link></li>
          <li>Corinna Treitel, <em>A Science for the Soul: Occultism and the Genesis of the German Modern</em>, Johns Hopkins University Press, 2004. — <Link to="/anthroposophy">entry</Link>, <Link to="/reception">entry</Link></li>
          <li>Sixten Ringbom, <em>The Sounding Cosmos</em>, 1970 / 2022. — <Link to="/trajectories">entry</Link></li>
          <li>Mary Lutyens, <em>Krishnamurti: The Years of Awakening</em>, 1975. — <Link to="/theosophy-split">entry</Link></li>
          <li>Frances Yates, <em>Giordano Bruno and the Hermetic Tradition</em>, 1964. — <Link to="/method">entry</Link></li>
          <li>Elaine Pagels, <em>The Gnostic Gospels</em>, 1979. — <Link to="/comparisons">entry</Link></li>
          <li>R. H. Charles, <em>A Critical and Exegetical Commentary on the Revelation of St. John</em>, 1920. — <Link to="/sorat">entry</Link></li>
        </ul>

        <h2>Gnostic sources (external comparison)</h2>
        <ul>
          <li><em>Apocryphon of John</em>. — <Link to="/comparisons">entry</Link></li>
          <li><em>Hypostasis of the Archons</em>. — <Link to="/comparisons">entry</Link></li>
        </ul>

        <h2>Independent critical reception</h2>
        <ul>
          <li>Michael Ruse, <em>Democracy and Pseudo-Science</em>. — <Link to="/reception">entry</Link></li>
          <li>Peter Staudenmaier, <em>Between Occultism and Fascism</em>, Brill, 2014. — <Link to="/reception">entry</Link></li>
          <li>Robert Rose, <em>Transforming Criticisms of Anthroposophy and Waldorf Education</em>. — <Link to="/reception">entry</Link></li>
          <li>Critical material collected at waldorfcritics.org. — <Link to="/reception">entry</Link></li>
        </ul>

        <SeeAlso links={[['/timeline', 'timeline'], ['/reception', 'critical reception']]} />
      </article>
    </Layout>
  )
}
