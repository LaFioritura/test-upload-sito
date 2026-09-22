import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { NetworkIcon } from '../components/Icons.jsx'

export default function Method() {
  return (
    <Layout>
      <PageHead
        tag="Orientation"
        tagColor="blue"
        icon={NetworkIcon}
        title="How This Notebook Works"
        lede="The method, the sourcing rules, and the one name this whole thing keeps circling back to."
      />
      <article>
        <h2>The pattern first, the name later</h2>
        <p>
          Before anything else, this notebook is about a habit of thought, not about one man. The habit
          is old and shows up everywhere the moment you go looking for it: assign a number to a letter,
          a demon to a planet, a virtue to a metal, a century to an angel, and then treat the resulting
          grid as if it explained something rather than merely organized it. Kabbalistic gematria does
          this with Hebrew scripture. Renaissance occult philosophy — Cornelius Agrippa's three books
          on it are the usual reference point — does it with planets, plants, and humors. Stellar
          demonology, older than either, assigns a bright intelligence and a dark demon to every visible
          body in the sky. None of these systems agree with each other on the details. All of them agree
          on the method: correspondence as a way of knowing.
        </p>
        <p>
          What makes a system worth a notebook entry, for our purposes here, isn't whether the
          correspondences are "true" in any sense a chemist or a historian would recognize. It's whether
          the system is worked out carefully enough, and documented well enough, that its internal logic
          can actually be traced — checked against its own primary sources, distinguished from what later
          readers added to it, and laid out clearly enough that a skeptical reader can follow the argument
          even while declining to believe it.
        </p>

        <p>
          The classic academic account of how this habit of mind operated in early modern Europe is
          Frances Yates's <em>Giordano Bruno and the Hermetic Tradition</em> (1964), which traces the
          correspondence-thinking of figures like Marsilio Ficino and Giordano Bruno back to a body of
          late-antique texts the Renaissance believed, wrongly but productively, to be far older than they
          were. Yates's larger point is worth keeping in view throughout this notebook: correspondence
          systems tend to matter historically not because they were right, but because believing them
          motivated real intellectual and sometimes scientific work — Kepler's early astronomy is
          unthinkable without the planetary correspondences he spent his life trying to outgrow.
        </p>

        <h2>Two tiers, kept strictly apart</h2>
        <p>
          Almost every entry in this notebook sits in one of two tiers, and the tier is stated at the top
          of the page. The first tier reconstructs a doctrine from its own declared sources — lecture
          transcripts, published books, letters — cited by title and date, with direct quotation kept to
          a minimum and description doing most of the work. The second tier collects what came after:
          later interpreters, popular syncretism, internet-era readings that bolt one system onto another
          because the vocabulary happens to rhyme. Both tiers are useful. Confusing them is the single
          mistake this notebook tries hardest to avoid, because it's the mistake that turns a documented
          system of thought into an unfalsifiable one — every later addition gets grandfathered in as if
          the founder had said it himself.
        </p>
        <p>
          A rule that follows from this: an entry never quotes a source it can paraphrase instead, and
          when it does quote, it says exactly where the words came from and stops there. A claim that
          can't be traced to a named lecture, a named letter, or a named page doesn't go in as doctrine —
          at most it goes in, labeled, as reception.
        </p>

        <h2>Why one system, more than the others</h2>
        <p>
          Of the correspondence systems worth this kind of attention, one turns out to be unusually well
          documented: roughly six thousand transcribed lectures, a shelf of published books, and a
          century of both devoted and hostile secondary literature arguing over what it actually says.
          That volume of primary material is rare in esoteric thought, where a founder's death usually
          leaves behind a handful of books and a great deal of oral tradition nobody wrote down. Here,
          almost everything was written down — which means almost everything can be checked.
        </p>
        <p>
          The system was built, mostly between 1900 and 1925, by an Austrian scientific editor and
          philosopher named <strong>Rudolf Steiner</strong>, who called it anthroposophy. Most of the
          entries that follow — the demon assigned to the sun, the archangel assigned to the present
          century, the number 666 decoded from Hebrew letters rather than Greek ones — come from inside
          that system, cited from Steiner's own lectures and books. A smaller set of entries, clearly
          marked, tracks what has been built on top of it since: the gnostic comparisons, the internet-era
          readings that turn the same vocabulary toward artificial intelligence, the academic controversy
          over what Steiner's more speculative racial history actually implies. If you want the full
          biography before going further, it's the next entry. If you'd rather start with the doctrine
          itself, the field diagram on the index has no required starting point.
        </p>

        <div className="callout">
          A working definition used throughout: a <strong>hindering power</strong>, in this system, is not
          simply an evil force. It's a being whose development fell behind the general pace of cosmic
          evolution, and who now operates inside human nature as a resistance the self must consciously
          work against — not eliminate, work against. That distinction matters more than it looks like it
          should, and several entries in this notebook exist specifically to keep it from getting lost.
        </div>

        <SeeAlso links={[['/anthroposophy', 'a life and a method'], ['/reception', 'critical reception'], ['/comparisons', 'comparisons and later theories']]} />
        <Sources items={[
          "Frances Yates, <em>Giordano Bruno and the Hermetic Tradition</em>, 1964.",
          "Heinrich Cornelius Agrippa, <em>De Occulta Philosophia</em>, 1533.",
        ]} />
      </article>
    </Layout>
  )
}
