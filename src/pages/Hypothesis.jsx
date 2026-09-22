import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { ScaleIcon } from '../components/Icons.jsx'

export default function Hypothesis() {
  return (
    <Layout translated={false}>
      <PageHead
        tag="Reading the Present"
        tagColor="red"
        icon={ScaleIcon}
        title="Does Automation Reduce Autonomy?"
        lede="A hypothesis, the case for it, the case against it, and the actual data — laid out separately on purpose."
      />
      <article>
        <p>
          <strong>Hypothesis:</strong> increasing reliance on algorithmic and generative systems for
          everyday decisions and cognitive tasks measurably reduces human autonomy and independent
          judgment over time. This is the closest thing this notebook has to a testable version of the
          Ahriman doctrine, and it deserves to be argued honestly from both sides before anyone accepts it.
        </p>

        <div className="for-against">
          <div className="col for">
            <h3>The case for it</h3>
            <ul>
              <li>A 2025 MIT Media Lab preprint led by Nataliya Kosmyna, "Your Brain on ChatGPT," had 54 participants write essays using either ChatGPT, a search engine, or no tool, while recording EEG. The ChatGPT group showed the weakest brain connectivity of the three, and in a follow-up session recalled their own essays worse than either other group — a pattern the authors call "cognitive debt."</li>
              <li>Jonathan Haidt's <em>The Anxious Generation</em> (2024) documents a 145% rise in depression among American teen girls and a 161% rise among boys between 2010 and 2021, tracking the period smartphones and social feeds became universal among teenagers.</li>
              <li>Johann Hari's <em>Stolen Focus</em> (2022) argues, from interviews with attention researchers, that algorithm-driven feeds are specifically optimized against sustained attention, not incidentally hostile to it.</li>
              <li>The cognitive-science concept of "cognitive offloading" — outsourcing memory or calculation to an external tool — predates all of this technology; Evan Risko and Sam Gilbert's 2016 review in <em>Trends in Cognitive Sciences</em> shows the effect is old and well documented, which is itself part of the argument: today's tools offload far more, far more often.</li>
            </ul>
          </div>
          <div className="col against">
            <h3>The case against it</h3>
            <ul>
              <li>The Kosmyna study has 54 participants, was posted as a preprint, and has not completed peer review — the authors themselves describe the findings as preliminary, not as a settled result.</li>
              <li>Developmental psychologist Candice Odgers, reviewing Haidt's book in <em>Nature</em> (2024), argues the underlying research is mostly correlational, that "several meta-analyses and systematic reviews" find small or mixed effects, and that mental-health decline in some data sets appears to precede heavy social-media use rather than follow it — the reverse of the causal story.</li>
              <li>Oxford researcher Andrew Przybylski, attempting to reproduce Jean Twenge's screen-time findings, reported that the average correlation between screen time and wellbeing was comparable in size to the correlation between wearing glasses and wellbeing — statistically real, but small enough to carry little practical weight.</li>
              <li>The oldest version of this argument is Socrates, in Plato's <em>Phaedrus</em>, warning that writing would weaken memory by giving people an external record to rely on instead of internal recall. Writing did change what memory is used for. It's not obvious it made people less autonomous — which is the standing objection to every version of this argument since, including this one.</li>
            </ul>
          </div>
        </div>

        <h2>Where this notebook actually lands</h2>
        <p>
          Nowhere firm, and that's the honest answer rather than a dodge. The mechanism side of the
          argument — that specific products are engineered to minimize the moment of conscious choice,
          covered directly in the entry on case studies — is documented and not seriously disputed even by
          the platforms themselves. The population-level harm side — that this measurably degrades
          autonomy or mental health at scale — is contested by researchers who are not defending the
          technology, which is a meaningfully different situation from a debate where the only skeptics
          work for the industry being criticized. This notebook's own bet, stated once and not repeated
          past this page, is that the mechanism is real and the population-level effect is still being
          measured — which is exactly the situation the entry on predictions tries to make falsifiable
          rather than just asserting louder.
        </p>

        <SeeAlso links={[['/present-tense', 'Sorat as a lens'], ['/case-studies', 'three case studies'], ['/predictions', 'what would have to happen']]} />
        <Sources items={[
          "Nataliya Kosmyna et al., \"Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task,\" MIT Media Lab preprint, arXiv:2506.08872, 2025.",
          "Jonathan Haidt, <em>The Anxious Generation: How the Great Rewiring of Childhood Is Causing an Epidemic of Mental Illness</em>, Penguin Press, 2024.",
          "Candice L. Odgers, review of <em>The Anxious Generation</em>, <em>Nature</em>, March 2024.",
          "Johann Hari, <em>Stolen Focus: Why You Can't Pay Attention</em>, 2022.",
          "Jean Twenge, <em>iGen</em>, 2017, and \"Have Smartphones Destroyed a Generation?\", <em>The Atlantic</em>, 2017.",
          "Evan F. Risko and Sam J. Gilbert, \"Cognitive Offloading,\" <em>Trends in Cognitive Sciences</em>, 2016.",
          "Andrew Przybylski, commentary on reproducing screen-time/wellbeing correlations, reported in <em>Platformer</em>, 2024.",
          "Plato, <em>Phaedrus</em>.",
        ]} />
      </article>
    </Layout>
  )
}
