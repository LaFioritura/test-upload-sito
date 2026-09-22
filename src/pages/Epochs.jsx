import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { SpiralIcon } from '../components/Icons.jsx'

export default function Epochs() {
  return (
    <Layout>
      <PageHead
        tag="Cosmology"
        tagColor="red"
        icon={SpiralIcon}
        title="The Epochs of Consciousness"
        lede="Why this particular century is, on this account, the most exposed one yet."
      />
      <article>
        <p>
          After the sinking of Atlantis, Steiner divides human evolution into a sequence of cultural
          epochs, each governed by a distinct configuration of soul: the ancient Indian epoch, the
          ancient Persian, the Egypto-Chaldean, the Greco-Latin. Then ours — which he dates to 1413, and
          calls the epoch of the consciousness soul, projected in this scheme to run until roughly 3573.
          Each epoch, on his account, lasts about 2,160 years, a figure lifted from the astronomical
          period of the precession of the equinoxes, the slow twenty-six-thousand-year wobble of the
          Earth's axis against the background of the zodiac.
        </p>

        <h2>Two powers, unevenly distributed</h2>
        <p>
          The two hindering powers don't weigh the same across all of these phases. Lucifer's influence
          peaks in the older epochs — the ones organized around myth, ritual, and a wisdom that arrived
          through direct inner perception rather than hard-won intellectual labor. Ahriman's influence, by
          contrast, grows precisely as our own epoch approaches, and accelerates sharply from the
          sixteenth century onward, tracking the rise of modern experimental science, mechanized
          production, and — in the readings taken up later in this notebook — everything built on top of
          those two things since.
        </p>
        <p>
          Sorat, Ahriman's specific task, the electronic double: every major theme covered elsewhere in
          this notebook concerns this exact stretch of history, and that isn't incidental to the scheme —
          it's what the scheme predicts. In Steiner's account, ours is the epoch in which the human being
          has to reach full self-awareness without the direct, perceptible guidance from the spiritual
          world that earlier epochs took for granted. That is the price of the specific kind of freedom
          his philosophy is built around — and, by the same logic, exactly why this is also the epoch in
          which a person is most exposed.
        </p>

        <SeeAlso links={[['/sorat', 'Sorat'], ['/michael', 'Michael and the falling intelligence'], ['/threefolding', 'the threefold social order']]} />
        <Sources items={["Rudolf Steiner, GA 26, letter \"The Historic Upheavals Attendant upon the Birth of the Consciousness Soul\" (April 5, 1925)."]} />
      </article>
    </Layout>
  )
}
