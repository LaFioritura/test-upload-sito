import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { SpiralIcon } from '../components/Icons.jsx'

export default function ArtsArchitecture() {
  return (
    <Layout translated={false}>
      <PageHead
        tag="Applied"
        tagColor="blue"
        icon={SpiralIcon}
        title="Eurythmy and Architecture"
        lede="Visible speech, and two very different buildings named after Goethe."
      />
      <article>
        <p>
          Eurythmy, developed by Steiner from 1912 onward with Lory Smits and later Marie von Sivers, is
          an art of movement meant to make the sounds of speech and music visible in gesture — "visible
          speech," "visible song," in Steiner's own terms. Each sound corresponds to a specific gesture, in
          a logic that applies to the body the same idea of invisible formative forces that runs through
          the rest of this cosmology.
        </p>

        <h2>Two Goetheanums</h2>
        <p>
          The first Goetheanum, opened in 1920 in Dornach and destroyed by fire on New Year's Eve 1922,
          was a double-domed wooden structure designed by Steiner according to a principle that rejects
          the right angle in favor of organic, curved form — meant, as with <em>The Representative of
          Humanity</em> at its center, to express the same dynamic balance of polar forces
          architecturally rather than just doctrinally. The second Goetheanum, cast in reinforced
          concrete, still designed by Steiner but completed after his death, is now considered one of the
          earlier large-scale examples of organic expressionist architecture, and remains the seat of the
          General Anthroposophical Society today.
        </p>

        <SeeAlso links={[['/triplicity', 'the mystery of triplicity'], ['/foundation-stone', 'the Foundation Stone'], ['/trajectories', 'curious trajectories']]} />
        <Sources items={[
          "Chronology of the development of eurythmy, from 1912 onward.",
          "Historical and architectural material on the first and second Goetheanum, Dornach.",
        ]} />
      </article>
    </Layout>
  )
}
