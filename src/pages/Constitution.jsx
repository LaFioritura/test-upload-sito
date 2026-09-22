import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { SeedIcon } from '../components/Icons.jsx'

export default function Constitution() {
  return (
    <Layout>
      <PageHead
        tag="Cosmology"
        tagColor="red"
        icon={SeedIcon}
        title="The Fourfold Human Being"
        lede="Physical, etheric, astral, I — and where exactly the two hindering powers move in."
      />
      <article>
        <p>
          Steiner describes the human being as built from four distinct members, each one shared with a
          different kingdom of nature. The physical body is held in common with minerals — the same
          chemistry, obeying the same laws. The etheric, or life body, governs growth, nutrition, and
          reproduction, and is shared with plants; it is what makes the difference between a living
          organism and a corpse made of identical chemical matter. The astral body is the seat of
          sensation, instinct, and desire, and is shared with animals. What remains — the "I," the
          principle of self-awareness and moral freedom — belongs, in this scheme, to the human being
          alone.
        </p>
        <p>
          In <em>Occult Science: An Outline</em> (1910), Steiner traces the formation of these four
          members back through a cosmic evolution unfolding across four vast stages he names Old Saturn,
          Old Sun, Old Moon, and Earth — not planets in the astronomical sense, but stages of cosmic
          consciousness, each governed by successively more specialized hierarchies of spiritual beings,
          each stage endowing humanity, in sequence, with one more of its four members: first the
          physical body, on Old Saturn; then the etheric, on the Old Sun; then the astral, on the Old
          Moon; and finally the "I," here on Earth.
        </p>

        <h2>Where Lucifer and Ahriman actually live</h2>
        <p>
          This is the scaffolding that makes Lucifer and Ahriman legible as something other than moral
          allegory. For Steiner, they are not personifications of vice; they are real beings who fell
          behind the general pace of that four-stage evolution — entities that were meant to finish their
          own development during an earlier cosmic phase, and instead find themselves, still incomplete,
          operating inside the human constitution as it exists today. Lucifer lodges in the astral body,
          the seat of feeling and desire. Ahriman lodges in the tension between the etheric and the
          physical — the point where life either stays supple or hardens into dead matter.
        </p>
        <p>
          Their lateness is exactly what makes them, in Steiner's vocabulary, hindering powers rather than
          simple enemies: not forces to defeat and remove, but necessary resistances the "I" has to push
          against in order to develop the specific kind of freedom Steiner's whole philosophical project
          is built around. Remove the resistance and, on this account, you don't get a freer human being —
          you get one with nothing left to be free from.
        </p>

        <SeeAlso links={[['/epochs', 'the epochs of consciousness'], ['/triplicity', 'the mystery of triplicity'], ['/karma', 'karma and reincarnation']]} />
        <Sources items={["Rudolf Steiner, <em>Occult Science: An Outline</em>, 1910."]} />
      </article>
    </Layout>
  )
}
