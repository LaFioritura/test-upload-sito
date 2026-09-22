import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { NetworkIcon } from '../components/Icons.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Method() {
  const [lang] = useLanguage()

  return (
    <Layout>
      <PageHead
        tag={lang === 'it' ? 'Orientamento' : 'Orientation'}
        tagColor="blue"
        icon={NetworkIcon}
        title={lang === 'it' ? 'Come funziona questo quaderno' : 'How This Notebook Works'}
        lede={lang === 'it'
          ? 'Il metodo, le regole sulle fonti, e l\'unico nome attorno a cui gira tutto quanto.'
          : 'The method, the sourcing rules, and the one name this whole thing keeps circling back to.'}
      />
      <article>
        {lang === 'it' ? (
          <>
            <h2>Prima lo schema, poi il nome</h2>
            <p>
              Prima di tutto, questo quaderno riguarda un'abitudine di pensiero, non un uomo solo.
              L'abitudine è antica e salta fuori ovunque, appena la si cerca: assegnare un numero a una
              lettera, un demone a un pianeta, una virtù a un metallo, un secolo a un angelo — e poi
              trattare la griglia risultante come se spiegasse qualcosa invece di limitarsi a organizzarlo.
              La gematria cabalistica lo fa con il testo ebraico. La filosofia occulta rinascimentale — i
              tre libri di Cornelio Agrippa sono il riferimento più citato — lo fa con pianeti, piante e
              umori. La demonologia stellare, più antica di entrambe, assegna un'intelligenza luminosa e
              un demone oscuro a ogni corpo visibile nel cielo. Nessuno di questi sistemi concorda con gli
              altri sui dettagli. Tutti concordano sul metodo: la corrispondenza come forma di conoscenza.
            </p>
            <p>
              Ciò che rende un sistema degno di una voce in questo quaderno non è se le corrispondenze
              siano "vere" in un senso che un chimico o uno storico riconoscerebbe. È se il sistema sia
              elaborato con abbastanza cura, e documentato abbastanza bene, da poterne davvero seguire la
              logica interna — verificarlo contro le proprie fonti primarie, distinguere ciò che i lettori
              successivi vi hanno aggiunto, ed esporlo con chiarezza sufficiente perché un lettore
              scettico possa seguire l'argomento pur rifiutandosi di crederci.
            </p>
            <p>
              Il resoconto accademico classico di come funzionava questa abitudine mentale nella prima
              età moderna europea è <em>Giordano Bruno and the Hermetic Tradition</em> (1964) di Frances
              Yates, che fa risalire il pensiero per corrispondenze di figure come Marsilio Ficino e
              Giordano Bruno a un corpo di testi tardo-antichi che il Rinascimento credeva, erroneamente
              ma in modo produttivo, molto più antichi di quanto fossero davvero. Il punto più ampio di
              Yates vale la pena tenerlo presente in tutto questo quaderno: i sistemi di corrispondenza
              contano storicamente non perché fossero corretti, ma perché crederci ha motivato un lavoro
              intellettuale, a volte perfino scientifico, reale — la prima astronomia di Keplero è
              impensabile senza le corrispondenze planetarie da cui passò la vita a cercare di affrancarsi.
            </p>

            <h2>Due livelli, tenuti rigorosamente separati</h2>
            <p>
              Quasi ogni voce di questo quaderno appartiene a uno di due livelli, dichiarato in cima alla
              pagina. Il primo livello ricostruisce una dottrina dalle sue fonti dichiarate — trascrizioni
              di conferenze, libri pubblicati, lettere — citate per titolo e data, con la citazione diretta
              ridotta al minimo e la descrizione a fare il grosso del lavoro. Il secondo livello raccoglie
              quello che è venuto dopo: interpreti successivi, sincretismo popolare, letture dell'era
              internet che saldano un sistema a un altro perché il vocabolario, per caso, fa rima. Entrambi
              i livelli sono utili. Confonderli è l'unico errore che questo quaderno cerca disperatamente
              di evitare, perché è l'errore che trasforma un sistema di pensiero documentato in uno
              infalsificabile — ogni aggiunta successiva viene retrodatata come se il fondatore l'avesse
              detta lui stesso.
            </p>
            <p>
              Una regola che segue da questo: una voce non cita mai una fonte che potrebbe parafrasare, e
              quando cita, dice esattamente da dove vengono quelle parole e si ferma lì. Un'affermazione
              che non si può far risalire a una conferenza nominata, a una lettera nominata, o a una
              pagina nominata non entra come dottrina — al massimo entra, etichettata, come ricezione.
            </p>

            <h2>Perché un sistema, più degli altri</h2>
            <p>
              Fra i sistemi di corrispondenza che meritano questo tipo di attenzione, uno risulta
              insolitamente ben documentato: circa seimila conferenze trascritte, uno scaffale di libri
              pubblicati, e un secolo di letteratura secondaria tanto devota quanto ostile che discute su
              cosa dica realmente. Quel volume di materiale primario è raro nel pensiero esoterico, dove
              la morte di un fondatore lascia di solito una manciata di libri e una grande quantità di
              tradizione orale che nessuno ha mai scritto. Qui, quasi tutto è stato messo per iscritto —
              il che significa che quasi tutto può essere verificato.
            </p>
            <p>
              Il sistema fu costruito, per lo più fra il 1900 e il 1925, da un curatore scientifico e
              filosofo austriaco di nome <strong>Rudolf Steiner</strong>, che lo chiamò antroposofia. La
              maggior parte delle voci che seguono — il demone assegnato al sole, l'arcangelo assegnato al
              secolo presente, il numero 666 decifrato da lettere ebraiche invece che greche — vengono
              dall'interno di quel sistema, citate dalle sue stesse conferenze e dai suoi stessi libri. Un
              gruppo più piccolo di voci, chiaramente segnalate, segue quello che vi è stato costruito
              sopra da allora: i confronti gnostici, le letture dell'era internet che rivolgono lo stesso
              vocabolario verso l'intelligenza artificiale, la controversia accademica su cosa implichi
              davvero la sua storiografia razziale più speculativa. Se vuoi la biografia completa prima di
              proseguire, è la voce successiva. Se preferisci partire dalla dottrina stessa, il diagramma
              sull'indice non ha un punto di partenza obbligato.
            </p>

            <div className="callout">
              Una definizione di lavoro usata ovunque: una <strong>potenza ostacolante</strong>, in questo
              sistema, non è semplicemente una forza malvagia. È un essere il cui sviluppo è rimasto
              indietro rispetto al ritmo generale dell'evoluzione cosmica, e che ora opera dentro la
              natura umana come una resistenza contro cui il sé deve lavorare consapevolmente — non
              eliminarla, lavorarci contro. Questa distinzione conta più di quanto sembri, e diverse voci
              di questo quaderno esistono apposta per non farla perdere.
            </div>

            <SeeAlso links={[['/anthroposophy', 'una vita e un metodo'], ['/reception', 'ricezione critica'], ['/comparisons', 'confronti e teorie successive']]} />
          </>
        ) : (
          <>
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
          </>
        )}

        <Sources items={[
          "Frances Yates, <em>Giordano Bruno and the Hermetic Tradition</em>, 1964.",
          "Heinrich Cornelius Agrippa, <em>De Occulta Philosophia</em>, 1533.",
        ]} />
      </article>
    </Layout>
  )
}
