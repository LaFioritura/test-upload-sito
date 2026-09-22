import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { DoubleIcon } from '../components/Icons.jsx'

export default function Threshold() {
  return (
    <Layout>
      <PageHead
        tag="Cosmology"
        tagColor="red"
        icon={DoubleIcon}
        title="The Guardian of the Threshold"
        lede="Meeting the sum total of your own unresolved weight."
      />
      <article>
        <p>
          In <em>How to Know Higher Worlds</em> (1904–05), Steiner describes an experience he claims
          awaits, sooner or later, anyone who consciously takes up a path of inner development: an
          encounter with the Guardian of the Threshold, a being that presents the full, composite image of
          a person's own accumulated flaws and imbalances — unresolved karma, essentially, assembled into
          a single confronting picture — before allowing the seeker to cross into a more direct perception
          of the spiritual world.
        </p>

        <h2>Two guardians, not one</h2>
        <p>
          Steiner distinguishes a Lesser Guardian, the image of one's own individual limitations, from a
          Greater Guardian, a figure tied to humanity's collective destiny and its relationship to the
          Christ impulse. The first encounter is preparatory and personal, a private reckoning. The second
          concerns the meaning of human evolution as a whole, and is described in far more guarded terms —
          Steiner treats it as something that can be approached but not summarized.
        </p>
        <p>
          There's a real kinship, in the vocabulary of anthroposophy, between this figure and the
          ahrimanic double described elsewhere in this notebook: both are images of a residue the "I" has
          to face directly instead of letting it operate unseen. What changes is the intention behind each
          one. The Guardian shows itself in order to make a free choice possible. The ahrimanic double, by
          contrast, works best precisely when it stays invisible.
        </p>

        <SeeAlso links={[['/karma', 'karma and reincarnation'], ['/double', 'the double, and the machines']]} />
        <Sources items={["Rudolf Steiner, <em>How to Know Higher Worlds</em>, 1904–1905."]} />
      </article>
    </Layout>
  )
}
