import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { RootsIcon } from '../components/Icons.jsx'

export default function GoetheanMethod() {
  return (
    <Layout translated={false}>
      <PageHead
        tag="Orientation"
        tagColor="blue"
        icon={RootsIcon}
        title="The Goethean Root"
        lede="Where the whole method of observation actually comes from."
      />
      <article>
        <p>
          For roughly fourteen years before he became a public esoteric teacher, Steiner's working life
          was spent inside an archive: first at the Goethe and Schiller Archive in Weimar, editing two
          successive critical editions (1883–97) of Goethe's scientific writings, at a moment when that
          material was still treated, by most of the scientific establishment, as the embarrassing hobby
          of an otherwise great poet. Goethe's botany didn't reduce a plant to a set of equations
          detached from what a person actually sees; it tracked the plant's own transformation — seed to
          leaf to flower to fruit — looking for the underlying form inside the process itself, rather than
          behind it.
        </p>

        <h2>A thought that perceives, rather than reflects</h2>
        <p>
          What Steiner carried forward from this apprenticeship is an idea he would use for the rest of
          his life: that thinking, disciplined enough, is not a mirror held up to sense-data from
          outside, but a genuine organ of perception in its own right. This is the technical center of
          both <em>Truth and Science</em> (1892) and <em>The Philosophy of Freedom</em> (1894) — pure
          thought, for Steiner, doesn't just represent reality after the fact. It makes contact with it.
        </p>
        <p>
          It's also the point on which anthroposophy tries hardest to distinguish itself from the many
          other esoteric currents circulating in Steiner's Vienna and Munich and Berlin: not a revelation
          to be accepted, but a method to be practiced and, in principle, checked by anyone willing to do
          the exercises. Whether that distinction survives contact with the historical record is a
          separate and serious question, taken up directly in the entry on critical reception — but it is
          the claim as Steiner made it, and it is the reason the movement calls itself a science rather
          than a revelation.
        </p>

        <SeeAlso links={[['/anthroposophy', 'a life and a method'], ['/theosophy-split', 'theosophy, and the split'], ['/reception', 'critical reception']]} />
        <Sources items={[
          "Rudolf Steiner, <em>Truth and Science</em>, 1892.",
          "Rudolf Steiner, <em>The Philosophy of Freedom</em>, 1894.",
          "Rudolf Steiner, editorial work on Goethe's scientific writings, 1883–1897.",
        ]} />
      </article>
    </Layout>
  )
}
