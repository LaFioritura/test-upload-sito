import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { ScaleIcon } from '../components/Icons.jsx'

export default function Threefolding() {
  return (
    <Layout translated={false}>
      <PageHead
        tag="Social Life"
        tagColor="red"
        icon={ScaleIcon}
        title="The Threefold Social Order"
        lede="Liberty, equality, fraternity — assigned to three separate rooms of society."
      />
      <article>
        <p>
          In 1917, with the war still underway, Steiner submits a memorandum to Austrian and German
          authorities proposing a social reorganization he calls the threefolding of the social organism,
          later developed into the book <em>Towards Social Renewal</em> (1919). The claim: social life
          should be understood as three autonomous spheres, currently tangled together precisely because
          of the imbalance between Lucifer and Ahriman covered elsewhere in this notebook.
        </p>

        <h2>Three spheres, three ideals</h2>
        <p>
          Steiner takes the three ideals of the French Revolution and assigns each to one distinct domain,
          arguing that each is valid only inside its own domain and becomes destructive the moment it
          spreads into the other two. Liberty belongs to cultural and spiritual life — education, science,
          art, religion. Equality belongs to legal and political life — the rights of every citizen before
          the law. Fraternity belongs to economic life, where cooperation matters more than competition or
          individual calculation.
        </p>
        <p>
          An economy that claims full market "liberty" with no obligation of fraternity slides, in this
          scheme, toward ahrimanic one-sidedness. A cultural life subjected to state-imposed equality
          slides the same direction. A legal system in which rights depend on wealth slides toward the
          opposite imbalance. Threefolding is, in effect, the social application of the mystery of
          triplicity: not erasing the two powers, but keeping either one from invading the other's
          territory.
        </p>

        <h2>An Italian case study: Adriano Olivetti</h2>
        <p>
          The industrialist Adriano Olivetti, who knew Steiner's work directly, built part of his own
          thinking on company management and regional planning in the Canavese area of Italy directly on
          these principles — a rare, and well-documented, case of an esoteric doctrine translated into
          actual industrial policy, covered in more detail in the entry on curious trajectories.
        </p>

        <SeeAlso links={[['/karma', 'karma and reincarnation'], ['/triplicity', 'the mystery of triplicity'], ['/reception', 'critical reception']]} />
        <Sources items={[
          "Rudolf Steiner, <em>Towards Social Renewal</em>, 1919.",
          "Rudolf Steiner, lecture cycle collected as <em>Understanding Society</em>, Dornach, 1918–1919.",
          "Antonio Benfatto, <em>Threefold Social Order: Rudolf Steiner's Social Thought in the Practice of Adriano Olivetti</em>, University of Padua, 2023–2024.",
        ]} />
      </article>
    </Layout>
  )
}
