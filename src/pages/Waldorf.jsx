import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { SeedIcon } from '../components/Icons.jsx'

export default function Waldorf() {
  return (
    <Layout translated={false}>
      <PageHead
        tag="Applied"
        tagColor="blue"
        icon={SeedIcon}
        title="Waldorf Education"
        lede="From a cigarette factory in Stuttgart to schools on six continents."
      />
      <article>
        <p>
          In 1919, Emil Molt, director of the Waldorf-Astoria cigarette factory in Stuttgart, asks Steiner
          to found a school for his workers' children. The first Waldorf school opens that year, built
          directly on the fourfold human constitution described elsewhere in this notebook: teaching is
          organized in seven-year phases meant to track the developing physical, then etheric, then
          astral body of the child in sequence, rather than pushing abstract intellect ahead of schedule.
          Formal academic instruction — including reading — is deliberately delayed relative to
          conventional schooling, on the theory that forcing it earlier serves the timetable of institutions,
          not the developmental rhythm of the child.
        </p>

        <h2>Reach, and pushback</h2>
        <p>
          The movement has since gone global: Waldorf schools and kindergartens now operate in dozens of
          countries, from Mexico to Tanzania to China, making it plausibly the most widespread independent
          pedagogical experiment on Earth. It has also drawn pointed criticism — over the late introduction
          of reading, over practices like eurythmy or "formative forces" presented to parents as though
          they were established developmental science rather than doctrine, and over the presence, in some
          historical teacher-training material, of the same racial theorizing addressed directly in the
          entry on critical reception.
        </p>

        <SeeAlso links={[['/constitution', 'the fourfold human being'], ['/arts-architecture', 'eurythmy and architecture'], ['/reception', 'critical reception']]} />
        <Sources items={[
          "Chronology of the first Waldorf school, Stuttgart, 1919.",
          "Historical and critical material on the spread and controversies of Waldorf education, including material collected at waldorfcritics.org.",
        ]} />
      </article>
    </Layout>
  )
}
