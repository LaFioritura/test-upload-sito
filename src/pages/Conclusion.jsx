import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import { ScaleIcon } from '../components/Icons.jsx'
import { Link } from 'react-router-dom'

export default function Conclusion() {
  return (
    <Layout>
      <PageHead
        tag="Reference"
        tagColor="blue"
        icon={ScaleIcon}
        title="Closing: Freedom as a Task"
        lede="Where all of this quietly comes back to one single idea."
      />
      <article>
        <p>
          The philosophical center of Steiner's work isn't a demonology. It's a theory of freedom, stated
          already in 1894 in <em>The Philosophy of Freedom</em>: a moral action that arises neither from an
          external command nor from an instinct, but from an intuitive thought freely arrived at. Read
          from that center, Lucifer, Ahriman, and even Sorat stop being obstacles external to the project
          and become the precise resistance against which the capacity for a free, conscious act gets
          trained.
        </p>
        <blockquote>
          Without the pull toward excessive fantasy, there would be no need to win back a sense of reality.
          Without the pull toward hardening into matter, there would be no need to win back a sense of
          spirit. Without the threat of total interruption, it would make no sense to speak, as Steiner
          does, of an age — Michael's age — whose specific task is to guard the very possibility that
          humanity keeps choosing at all.
        </blockquote>
        <p>
          Naming these powers, on this reading, isn't meant to produce unease — it's meant to make that
          unease workable: to give a precise name to resistances that would otherwise stay only felt,
          never understood well enough to actually be met.
        </p>
        <SeeAlso links={[['/karma', 'karma and reincarnation'], ['/threefolding', 'the threefold social order']]} />
        <p style={{ marginTop: 28 }}><Link to="/">← back to the index</Link></p>
      </article>
    </Layout>
  )
}
