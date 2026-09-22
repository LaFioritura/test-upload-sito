import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { SunIcon } from '../components/Icons.jsx'

export default function Sorat() {
  return (
    <Layout>
      <PageHead
        tag="The Three Powers"
        tagColor="yellow"
        icon={SunIcon}
        title="Sorat"
        lede="The sun's demon, decoded from Hebrew letters, on a 666-year clock."
      />
      <article>
        <p>
          Sorat belongs to a different lecture cycle than the mystery of triplicity: the two courses on
          the Apocalypse of John that Steiner delivered in Munich and Nuremberg in 1907–08, now collected
          as volumes 104 and 104a of his complete works. There he reconstructs, through gematria, how the
          Apocalypticist would have encoded the beast's name. Transliterating the Hebrew letters correctly
          into their numeric values — rather than the traditional, philologically mistaken reading that
          produces "Nero" — yields the word "Sorat," whose value is precisely 666. In the old tradition of
          stellar demonology, which assigns every celestial body both a bright intelligence and a dark
          demon, Sorat is the demon of the sun: the shadow counterpart of the same solar intelligence of
          which, in this reading, Christ is the revelation.
        </p>

        <h2>A six-hundred-year clock</h2>
        <p>
          Steiner ties Sorat to a historical rhythm of 666 years in which its influence would intensify: a
          first peak around the year 666, a second around 1332, a third expected around 1998. The first of
          these moments, he claims, coincides with the Academy of Gondishapur — a center of learning that
          preserved Aristotle's texts for later transmission to Europe, but that, in this account, also
          spread a spiritual knowledge that was premature and unbalanced, an excess later offset, in
          Steiner's telling, by the rise of Islam. Set against this rhythm is one of the opposite sign: a
          333-year cycle tied to the Mystery of Golgotha and to the healing forces of human consciousness.
        </p>

        <h2>What actually sets it apart</h2>
        <p>
          The point that genuinely distinguishes Sorat from Lucifer and Ahriman — easy to lose in a
          casual retelling — is this: Lucifer and Ahriman are beings left behind by an evolution of which
          they nonetheless remain part, and whose hindering function turns out to be necessary for the
          achievement of freedom, as the entry on triplicity lays out. Sorat isn't presented that way. It
          isn't a belated inheritance from an earlier cosmic phase; it's a power whose objective isn't to
          divert human development but to interrupt it outright. Its opposition isn't symmetrical to
          Lucifer's and Ahriman's — it's aimed directly at the Christ impulse, and, as the next entry
          covers, at the mission of the being that impulse is said to represent in the present age.
        </p>

        <div className="callout">
          A note on scope: nothing in this doctrine, as Steiner states it, singles out any living person or
          community for blame. The historical narrative around Gondishapur assigns roles to civilizations
          and religious traditions in the abstract, centuries removed from the present — a point worth
          holding onto exactly because later, looser readings sometimes don't.
        </div>

        <h2>A philological aside</h2>
        <p>
          The "Nero" reading Steiner sets himself against is not a strawman — it's the dominant modern
          scholarly position. Textual critics including R. H. Charles, whose <em>Critical and Exegetical
          Commentary on the Revelation of St. John</em> (1920) remains a standard reference, derive 666
          from a Hebrew transliteration of the Greek "Neron Caesar," a reading confirmed by an early
          manuscript variant that gives 616 instead — the number that results from dropping the final
          consonant in the Latinized spelling of the same name. Steiner was aware of the Nero reading and
          rejected it on the grounds that it explains the numbers without explaining why the Apocalypticist
          would have hidden a living emperor's name in a text about cosmic history at all. Mainstream New
          Testament scholarship has not adopted Steiner's alternative; it is presented here as his
          argument, not as a rival philological consensus.
        </p>

        <SeeAlso links={[['/triplicity', 'the mystery of triplicity'], ['/michael', 'Michael and the falling intelligence'], ['/comparisons', 'comparisons and later theories']]} />
        <Sources items={[
          "Rudolf Steiner, <em>Die Apokalypse des Johannes</em> (GA 104, Nuremberg 1908) and <em>Aus der Bilderschrift der Apokalypse des Johannes</em> (GA 104a, Munich 1907).",
          "Rudolf Steiner, <em>Eternal and Transient Elements in Human Life</em>, on the 666-year rhythm and the Gondishapur episode.",
          "R. H. Charles, <em>A Critical and Exegetical Commentary on the Revelation of St. John</em>, 1920, on the \"Neron Caesar\" gematria of 666.",
        ]} />
      </article>
    </Layout>
  )
}
