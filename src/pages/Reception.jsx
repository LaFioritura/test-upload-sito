import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { BookIcon } from '../components/Icons.jsx'

export default function Reception() {
  return (
    <Layout>
      <PageHead
        tag="Reception & Comparisons"
        tagColor="yellow"
        icon={BookIcon}
        title="Critical Reception"
        lede="What independent historians actually say, and how the response goes."
      />
      <article>
        <p>
          Reconstructing an esoteric doctrine from its own declared sources doesn't mean staying silent
          about the objections raised against it. Historians and philosophers of science independent of
          the anthroposophical movement have raised serious ones, and this entry summarizes them without
          taking a side — the sources at the bottom let anyone follow the argument further.
        </p>

        <h2>Science or pseudoscience</h2>
        <p>
          Philosophers of science such as Michael Ruse classify anthroposophy as pseudoscience: a system
          that speaks the language of the scientific method — observation, verification, systematic
          argument — while concerning entities that remain, by definition, outside any independent
          empirical check. Anthroposophists respond that this objection applies a standard, quantitative
          natural science, to a domain Steiner himself considered valid only within its own boundaries —
          his "spiritual science" claimed a different method, not natural science in a mystical disguise.
        </p>

        <h2>Race and antisemitism</h2>
        <p>
          The most cited body of research on a considerably more uncomfortable question comes from the
          American historian Peter Staudenmaier. He argues that Steiner's more mature esoteric writings —
          in particular the reconstruction of human prehistory known as the Akashic Record material —
          contain a racial hierarchy of epochs and lineages, and that some of his statements on Jews and
          Judaism go beyond the ordinary polemics of his period. On this basis, Staudenmaier also
          documents how fringes of the anthroposophical movement became entangled, in ways that were
          neither linear nor consistent, with National Socialist circles during the 1930s.
        </p>
        <p>
          Scholars close to the movement — Robert Rose, in a point-by-point rebuttal, is the most
          frequently cited — object that the quotations used to support this reading are often pulled out
          of context, that some translations have distorted the original meaning, and that a distinction
          needs to be drawn between the historically situated statements of an author writing at the turn
          of the twentieth century and the universalist principles — brotherhood among peoples, the
          freedom of every human being — Steiner states elsewhere, including in the very lectures on the
          threefold social order covered in this notebook.
        </p>
        <p>
          This notebook doesn't referee that dispute. It records it because anyone approaching this
          cosmology — including the Sorat narrative, which assigns a specific historical role to different
          civilizations and religious traditions — has a right to know this side of its reception too.
        </p>

        <SeeAlso links={[['/anthroposophy', 'a life and a method'], ['/threefolding', 'the threefold social order'], ['/comparisons', 'comparisons and later theories']]} />
        <Sources items={[
          "Michael Ruse, <em>Democracy and Pseudo-Science: Rudolf Steiner and Anthroposophy</em>, Logos Journal.",
          "Peter Staudenmaier, <em>Between Occultism and Fascism: Anthroposophy and the Politics of Race in the Fascist Era</em>, Brill, 2014.",
          "Robert Rose, <em>Transforming Criticisms of Anthroposophy and Waldorf Education</em>.",
          "Peter Zegers and Peter Staudenmaier, critical material collected at waldorfcritics.org.",
        ]} />
      </article>
    </Layout>
  )
}
