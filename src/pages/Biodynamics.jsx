import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { RootsIcon } from '../components/Icons.jsx'

export default function Biodynamics() {
  return (
    <Layout>
      <PageHead
        tag="Applied"
        tagColor="blue"
        icon={RootsIcon}
        title="Biodynamic Agriculture"
        lede="Cow horns, compost, and — improbably — natural wine."
      />
      <article>
        <p>
          In 1924, a year before his death, Steiner delivers eight lectures at Koberwitz, in Silesia, to a
          group of farmers worried about soil depletion following the introduction of synthetic
          fertilizer. Out of these comes biodynamic agriculture: the farm treated as a single, self-sustaining
          organism, governed by the same principle of balanced polar forces that runs through the rest of
          this cosmology, using a set of specific preparations — the best known is "preparation 500," cow
          manure aged over winter inside a buried cow horn — intended, on the doctrine, to carry cosmic
          forces into the soil rather than simply chemical nutrients.
        </p>

        <h2>From cow horns to the wine list</h2>
        <p>
          The Demeter certification mark, created in the 1920s to identify biodynamic produce, still
          exists, and today it is especially prominent in an industry Steiner could not have anticipated:
          winemaking. A number of internationally respected estates — in France, in Italy, in California —
          follow Demeter-certified biodynamic practices, often without the label mentioning the
          anthroposophical roots the method actually comes from.
        </p>

        <SeeAlso links={[['/constitution', 'the fourfold human being'], ['/threefolding', 'the threefold social order'], ['/trajectories', 'curious trajectories']]} />
        <Sources items={[
          "Rudolf Steiner, <em>Agriculture Course</em>, the Koberwitz lectures, 1924.",
          "Historical and current material on the Demeter certification mark.",
        ]} />
      </article>
    </Layout>
  )
}
