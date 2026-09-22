import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { CompassIcon } from '../components/Icons.jsx'

export default function TheosophySplit() {
  return (
    <Layout>
      <PageHead
        tag="Orientation"
        tagColor="blue"
        icon={CompassIcon}
        title="Theosophy, and the Split"
        lede="Why a messianic child actor made one man walk out and start his own society."
      />
      <article>
        <p>
          Until 1913, Steiner didn't lead a movement of his own — he led the German section of the
          Theosophical Society, founded in New York in 1875 by Helena Blavatsky, which had grafted karma
          and reincarnation onto a sprawling occult cosmology of its own invention, borrowing freely and
          inconsistently from Hindu and Buddhist sources filtered through nineteenth-century European
          orientalism. Inside that movement, Steiner developed an increasingly distinct reading, centered
          on esoteric Christianity and on Christ as a solar spiritual being — a direction that pulled him
          further and further from the Society's center of gravity, which leaned more toward Indian and
          Tibetan source material.
        </p>

        <h2>The breaking point</h2>
        <p>
          The rupture came in 1912–13, when the Society's president, Annie Besant, began presenting a
          teenage boy named Jiddu Krishnamurti as the anticipated vehicle of a new World Teacher — a
          messianic expectation built around the Order of the Star in the East, an organization created
          specifically to prepare for his arrival. For Steiner this betrayed the very premise of inner
          development as he understood it: not an external savior to wait for, but a labor each person
          has to do alone. He founded the Anthroposophical Society in 1913 as an independent organization.
          Krishnamurti himself, years later, dissolved the Order built around him in a now-famous 1929
          speech, publicly rejecting the messianic role that had been assigned to him and insisting that
          truth is "a pathless land" no organization could claim to administer.
        </p>
        <p>
          It's the kind of episode that usually gets reduced to a footnote, but it says something
          structural about everything else in this notebook. From the mystery of triplicity to the
          Guardian of the Threshold, the constant in Steiner's system is that no external authority — not
          a spiritual hierarchy, not an incarnate master — can substitute for the individual's own
          conscious work. The Krishnamurti episode is, in effect, the same principle playing out as
          organizational history rather than doctrine.
        </p>

        <h2>What happened to Krishnamurti</h2>
        <p>
          Krishnamurti's own trajectory after 1929 is worth a moment, because it runs, almost by
          coincidence, along the same logic. Mary Lutyens — a childhood friend, and later his official
          biographer, in a multi-volume life beginning with <em>Krishnamurti: The Years of Awakening</em>
          (1975) — documents how thoroughly he rejected not just the specific role assigned to him but the
          entire machinery of guru and disciple: he spent the following six decades lecturing across the
          world on the position that organized belief of any kind, including the one built around himself,
          gets in the way of direct insight. Neither Steiner's break with Theosophy in 1913 nor
          Krishnamurti's break with his own cult in 1929 argues that spiritual authority is illegitimate in
          general — both men kept teaching for the rest of their lives. What both rejected, on record, was
          the idea that authority could be transmitted rather than earned individually, lecture by lecture,
          exercise by exercise.
        </p>

        <SeeAlso links={[['/anthroposophy', 'a life and a method'], ['/goethean-method', 'the Goethean root'], ['/timeline', 'timeline']]} />
        <Sources items={[
          "Biographical chronology of Rudolf Steiner and the founding of the Anthroposophical Society, 1902–1913.",
          "Historical material on the Theosophical Society, Annie Besant, and Jiddu Krishnamurti, 1912–1929.",
          "Mary Lutyens, <em>Krishnamurti: The Years of Awakening</em>, 1975.",
        ]} />
      </article>
    </Layout>
  )
}
