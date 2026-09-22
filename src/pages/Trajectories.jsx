import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { CompassIcon } from '../components/Icons.jsx'

export default function Trajectories() {
  return (
    <Layout>
      <PageHead
        tag="Reception & Comparisons"
        tagColor="yellow"
        icon={CompassIcon}
        title="Curious Trajectories"
        lede="Kandinsky, Hilma af Klint, an Italian typewriter company, and a bottle of biodynamic wine."
      />
      <article>
        <p>
          Minor but verifiable links between the cosmology mapped in this notebook and fields that, at
          first glance, look entirely unrelated to it. Each entry below has its own source.
        </p>

        <h3>Kandinsky and the birth of abstraction</h3>
        <p>
          While still a member of the Theosophical Society in Munich, Wassily Kandinsky attended lectures
          Steiner gave in the city around 1908, and edited some of Steiner's material himself in 1909. His
          1912 treatise <em>Concerning the Spiritual in Art</em> — often treated as the founding manifesto
          of abstract painting — develops ideas about the inner resonance of color strikingly close to
          Steiner's own vocabulary. Kandinsky remained an artist with multiple sources, not an
          anthroposophist in any strict sense, but the debt is documented rather than speculative.
        </p>

        <h3>Hilma af Klint, the forgotten abstractionist</h3>
        <p>
          The Swedish painter Hilma af Klint — recognized only posthumously as one of the earliest makers
          of pure abstract painting — met Steiner personally in 1908, and went on to follow the
          development of anthroposophy. Steiner encouraged her to continue her inner work, while warning
          her about the risks of work produced in a mediumistic state without full conscious integration —
          an observation that sits close to what this notebook's entry on the Guardian of the Threshold
          describes.
        </p>

        <h3>Adriano Olivetti and the factory as a social organism</h3>
        <p>
          As the threefolding entry explains, the industrialist Adriano Olivetti applied, concretely, in
          the management of his own company and in the urban planning of Italy's Canavese region,
          principles separating economic, legal, and cultural spheres drawn directly from Steiner's social
          lectures — a rare case of an esoteric doctrine translated into real industrial policy, and the
          subject of recent Italian academic research.
        </p>

        <h3>Biodynamic wine</h3>
        <p>
          As the biodynamics entry covers, the method Steiner worked out in 1924 for a group of worried
          German farmers is today, through Demeter certification, a recognized and sought-after standard
          across a meaningful share of the world's fine-wine production — usually with no indication on
          the label that the practice traces back to an anthroposophical lecture cycle at all.
        </p>

        <SeeAlso links={[['/arts-architecture', 'eurythmy and architecture'], ['/biodynamics', 'biodynamic agriculture'], ['/threefolding', 'the threefold social order']]} />
        <Sources items={[
          "Historical material on Kandinsky, the Theosophical Society in Munich, and <em>Concerning the Spiritual in Art</em>, 1912.",
          "Biographical material on Hilma af Klint and her 1908 meeting with Steiner.",
          "Antonio Benfatto, <em>Threefold Social Order</em>, University of Padua, 2023–2024.",
          "Historical and current material on Demeter biodynamic certification in the wine industry.",
        ]} />
      </article>
    </Layout>
  )
}
