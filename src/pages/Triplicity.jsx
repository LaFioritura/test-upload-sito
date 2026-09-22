import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { ScaleIcon } from '../components/Icons.jsx'

export default function Triplicity() {
  return (
    <Layout translated={false}>
      <PageHead
        tag="The Three Powers"
        tagColor="yellow"
        icon={ScaleIcon}
        title="The Mystery of Triplicity"
        lede="A scale, a sculpture, and two dates of incarnation."
      />
      <article>
        <p>
          In the lecture cycle <em>The Mission of Michael</em> (1919), Steiner introduces what he calls
          the mystery of triplicity: the claim that the world can only be understood as a three-term
          relationship, with the luciferic on one side, the ahrimanic on the other, and the human being in
          the middle, as the third term, holding the position of balance. The two powers, he says, are the
          two pans of a scale — a scale Steiner reportedly sketched on the blackboard, live, in front of
          his audience, to make the image concrete — and the Christ impulse, a solar spiritual entity, is
          the condition of that balance itself, not a third weight added to the other two.
        </p>
        <p>
          He defines the outward-facing character of the two forces in almost clinical terms: luciferic
          forces are the ones a person feels when giving way, one-sidedly, to fantasy or fanaticism —
          imagination unmoored from any check. Ahrimanic forces are their mirror opposite: hardening,
          desiccation, the pull toward shutting oneself up inside matter alone, mistaking the measurable
          for the whole of what's real. And it is, Steiner adds, in the interest of both powers that this
          mystery stay hidden — only by recognizing it consciously can a person actually take up the
          position of balance, instead of being pushed around by the two forces as if they were blind
          weather.
        </p>

        <h2>The Representative of Humanity</h2>
        <p>
          The same idea takes physical form in <em>The Representative of Humanity</em>, a nine-meter
          wooden sculpture carved in elm between 1914 and 1922, in collaboration with the English
          sculptor Edith Maryon, for the first Goetheanum. At the center stands Christ, one arm raised and
          one lowered; above him, Lucifer plunges from a rocky overhang; below, in the hollow of a cave,
          Ahriman crouches, coiled and bound. Steiner wanted the group to occupy the literal center of the
          entire building — its architectural keystone as much as its spiritual one. The unfinished model,
          still being worked on in an outside studio, survived the fire that destroyed the wooden
          Goetheanum on New Year's Eve, 1922. The completed sculpture now stands in the second,
          concrete Goetheanum in Dornach.
        </p>

        <h2>Two dates of incarnation</h2>
        <p>
          In these same lectures, and in related ones, Steiner places Lucifer's earthly incarnation in the
          third millennium before the Mystery of Golgotha, and describes an incarnation of Ahriman in the
          West as approaching in the modern era — prepared, he suggests, even by ideas that sound
          innocuous on their surface, such as the notion that economic security alone is sufficient for a
          healthy public life. It's from this second claim, combined with the observation that 1998 is the
          third multiple of 666, that later interpreters proposed that year as a symbolic date for
          Ahriman's incarnation — an extension they added, not a claim that appears in these terms in
          Steiner's own texts.
        </p>

        <SeeAlso links={[['/sorat', 'Sorat'], ['/michael', 'Michael and the falling intelligence'], ['/threefolding', 'the threefold social order']]} />
        <Sources items={[
          "Rudolf Steiner, lecture cycle <em>The Mission of Michael</em>, Dornach, 1919.",
          "Stefano Arcella, <em>The Mystery of Triplicity and the \"Threefold Mithras\"</em>.",
          "<em>The Representative of Humanity</em>, description of the sculptural group, 1914–1922; cf. Peter Selg, <em>The Figure of Christ</em>.",
          "Rudolf Steiner, lecture cycles collected as <em>Understanding Society</em> / <em>The Influence of Lucifer and Ahriman</em>.",
        ]} />
      </article>
    </Layout>
  )
}
