import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { SunIcon } from '../components/Icons.jsx'

export default function ChristGolgotha() {
  return (
    <Layout>
      <PageHead
        tag="Cosmology"
        tagColor="red"
        icon={SunIcon}
        title="Christ and the Mystery of Golgotha"
        lede="The center everything else in this notebook quietly refers back to."
      />
      <article>
        <p>
          In Steiner's cosmology, Christ is not, first and foremost, a historical figure to venerate — he
          is a spiritual solar entity, the same intelligence of which Sorat, elsewhere in this notebook,
          is described as the dark counterpart. His descent into the body of Jesus of Nazareth, and his
          death, is what Steiner calls the Mystery of Golgotha: not one religious event among others, but
          the central hinge of the entire cosmic evolution — the first moment a force previously
          perceptible only from the sun enters the earth itself, and human evolution along with it.
        </p>
        <p>
          It's from this event, according to the letters on Michael discussed later in this notebook,
          that cosmic intelligence begins "falling" out of the spiritual hierarchies and into individual
          human souls — making possible the free, individual intellect of the modern human being, but
          also, as the entry on Ahriman explains, exposing that intellect to the risk of capture. It is
          also from this event that the rhythms of 666 and 333 years, tied respectively to Sorat and to
          the healing forces of human consciousness, are measured forward.
        </p>

        <h2>The center, not a third pole</h2>
        <p>
          In the mystery of triplicity, Christ isn't a third weight sitting alongside Lucifer and Ahriman
          on the scale — he is the condition of the balance itself, the point the beam turns on. That is
          why trying to understand Sorat, or Lucifer, or Ahriman in isolation always leaves something out:
          in Steiner's system, none of the three powers actually makes sense except in relation to this
          center.
        </p>

        <SeeAlso links={[['/triplicity', 'the mystery of triplicity'], ['/sorat', 'Sorat'], ['/foundation-stone', 'the Foundation Stone']]} />
        <Sources items={[
          "Rudolf Steiner, <em>Christianity as Mystical Fact</em>, 1902.",
          "Rudolf Steiner, lecture cycle <em>The Mission of Michael</em>, 1919.",
          "Rudolf Steiner, GA 26, <em>The Michael Mystery</em>, 1924–1925.",
        ]} />
      </article>
    </Layout>
  )
}
