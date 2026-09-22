import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import { BookIcon } from '../components/Icons.jsx'
import { Link } from 'react-router-dom'

const EVENTS = [
  ['1861', <>Born in Kraljevec. <Link to="/anthroposophy">a life and a method</Link></>],
  ['1879', <>By Steiner's own account, the age of Michael begins. <Link to="/michael">Michael</Link></>],
  ['1883–97', <>Edits Goethe's scientific writings. <Link to="/goethean-method">the Goethean root</Link></>],
  ['1891–94', <>Doctorate in philosophy; then <em>Truth and Science</em> and <em>The Philosophy of Freedom</em>.</>],
  ['1902', <>Begins lecturing for the Theosophical Society. <Link to="/theosophy-split">theosophy, and the split</Link></>],
  ['1907–08', <>The Apocalypse of John lecture cycles: the doctrine of Sorat is born. <Link to="/sorat">Sorat</Link></>],
  ['1912', <>Develops eurythmy. <Link to="/arts-architecture">eurythmy and architecture</Link></>],
  ['1913', <>Breaks with the Theosophists; founds the Anthroposophical Society.</>],
  ['1914–22', <>With Edith Maryon, carves <em>The Representative of Humanity</em>. <Link to="/triplicity">triplicity</Link></>],
  ['1917', <>First memoranda on the threefold social order. <Link to="/threefolding">threefolding</Link></>],
  ['1919', <>First Waldorf school opens in Stuttgart; the <em>Mission of Michael</em> lecture cycle.</>],
  ['1920', <>The first Goetheanum opens.</>],
  ['1921', <>Weleda is founded. <Link to="/medicine">anthroposophic medicine</Link></>],
  ['1922', <>The first Goetheanum burns down, New Year's Eve.</>],
  ['1923–24', <>Christmas Conference: the Society is re-founded, the Foundation Stone is laid. <Link to="/foundation-stone">the Foundation Stone</Link></>],
  ['1923–25', <>Weekly letters to members on the mission of Michael.</>],
  ['1924', <>The Koberwitz lectures: biodynamic agriculture is born. <Link to="/biodynamics">biodynamics</Link></>],
  ['1925', <>With Ita Wegman, lays the foundations of anthroposophic medicine. Dies March 30 in Dornach.</>],
  ['1332 / 1998', <>Later peaks of the 666-year rhythm. <Link to="/sorat">Sorat</Link></>],
  ['1413–3573', <>The epoch of the consciousness soul — the one we are still, on this account, inside of. <Link to="/epochs">epochs of consciousness</Link></>],
]

export default function Timeline() {
  return (
    <Layout>
      <PageHead
        tag="Orientation"
        tagColor="blue"
        icon={BookIcon}
        title="Timeline"
        lede="Every date in this notebook, biographical and doctrinal, kept deliberately on one line."
      />
      <p className="lede" style={{ marginBottom: 28 }}>
        Verifiable biography and doctrinal chronology are not separated here on purpose — that is how
        Steiner himself tended to present them, and pulling them apart would misrepresent how he thought
        his own life related to his own cosmology.
      </p>
      <ul className="tl">
        {EVENTS.map(([y, e], i) => (
          <li key={i}><span className="y">{y}</span><span className="e">{e}</span></li>
        ))}
      </ul>
      <SeeAlso links={[['/anthroposophy', 'a life and a method'], ['/bibliography', 'full bibliography']]} />
    </Layout>
  )
}
