import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { CrystalIcon } from '../components/Icons.jsx'

export default function CaseStudies() {
  return (
    <Layout translated={false}>
      <PageHead
        tag="Reading the Present"
        tagColor="red"
        icon={CrystalIcon}
        title="Three Case Studies"
        lede="Netflix, TikTok, and ChatGPT, read through the framework instead of around it."
      />
      <article>
        <p>
          The point of naming a mechanism is that it should let you look at a specific, named product and
          say something more precise than "technology is bad." These three are chosen because each one
          maps most cleanly onto a different one of the powers covered earlier in this notebook.
        </p>

        <div className="case">
          <span className="maps-to">maps to: Sorat — removing the choice, not just delaying it</span>
          <h2>Netflix</h2>
          <p>
            Autoplay — the countdown that starts the next episode automatically — was rolled out across
            Netflix in 2012 specifically to close the gap where a viewer might otherwise stop and decide
            whether to keep watching. Co-founder Reed Hastings said openly, discussing competition for
            viewers' time in 2017, that Netflix competes with sleep. That's not a metaphor about
            addictiveness; it's a stated design goal. The mechanism here isn't persuasion — nobody is
            arguing you into watching another episode. It's the structural removal of the moment where
            arguing would even happen, which is precisely the distinction the entry on Sorat draws between
            a power that deviates judgment and one that tries to erase the occasion for it.
          </p>
        </div>

        <div className="case">
          <span className="maps-to">maps to: the ahrimanic double — a model of you that knows your next move</span>
          <h2>TikTok</h2>
          <p>
            A 2021 Wall Street Journal investigation built dozens of automated accounts and tracked how
            quickly TikTok's For You algorithm converged on each one's specific vulnerabilities — sadness,
            body image, extreme content — sometimes within an hour of viewing history. The mechanism
            doesn't require understanding a user the way a person would; it requires a feedback loop tight
            enough that the system's model of what keeps you watching becomes, functionally, a more
            responsive predictor of your next move than your own stated intentions. That's the ahrimanic
            double in modern form: not a demon in your nervous system, but a model of you, running
            continuously, that you didn't build and can't fully inspect.
          </p>
        </div>

        <div className="case">
          <span className="maps-to">maps to: Ahriman — amplifying a process, or replacing it</span>
          <h2>ChatGPT</h2>
          <p>
            The honest version of this case study is a genuine open question, not a verdict. The Kosmyna
            EEG study, discussed in more detail in the entry on autonomy, found reduced brain connectivity
            and weaker recall among writers who used ChatGPT for an essay task — evidence for
            replacement. But offloading a task to an external system is also, on the cognitive-offloading
            research covered in that same entry, sometimes exactly how a person frees up attention to do
            better work at a harder problem one level up — evidence for amplification. Which one is
            happening seems to depend heavily on whether the tool is used to skip the thinking or to check
            it afterward, a distinction current products make almost no effort to encourage. That design
            choice, not the existence of the tool itself, is where this notebook thinks the real Ahrimanic
            risk actually sits.
          </p>
        </div>

        <SeeAlso links={[['/present-tense', 'Sorat as a lens'], ['/hypothesis', 'does automation reduce autonomy?'], ['/predictions', 'what would have to happen']]} />
        <Sources items={[
          "Reed Hastings, remarks on Netflix competing for attention with sleep, 2017.",
          "\"Inside TikTok's Algorithm,\" <em>The Wall Street Journal</em> investigation, 2021.",
          "Nataliya Kosmyna et al., \"Your Brain on ChatGPT,\" MIT Media Lab preprint, arXiv:2506.08872, 2025.",
          "Evan F. Risko and Sam J. Gilbert, \"Cognitive Offloading,\" <em>Trends in Cognitive Sciences</em>, 2016.",
        ]} />
      </article>
    </Layout>
  )
}
