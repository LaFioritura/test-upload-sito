import Layout from '../components/Layout.jsx'
import PageHead from '../components/PageHead.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Method() {
  const [lang] = useLanguage()

  return (
    <Layout>
      <PageHead
        tag={lang === 'it' ? 'orientamento — voce 1' : 'orientation — entry 1'}
        title={lang === 'it' ? 'Come funziona questo quaderno' : 'How This Notebook Works'}
      />
      <article>
        {lang === 'it' ? (
          <>
            <p>
              C'è un'abitudine che continua a ripresentarsi appena la cerchi, e una volta vista non
              riesci più a smettere di vederla: assegnare un numero a una lettera, un demone a un
              pianeta, una virtù a un metallo, un secolo a un angelo — e poi trattare la griglia che ne
              esce come se spiegasse qualcosa invece di limitarsi a organizzarlo. La gematria cabalistica
              lo fa con il testo ebraico. I tre libri di filosofia occulta di Cornelio Agrippa lo fanno con
              pianeti, piante e umori, nel 1533, con la faccia completamente seria. La demonologia
              stellare — più antica di entrambe — assegna a ogni corpo visibile nel cielo un'intelligenza
              luminosa e un demone oscuro, come se il cielo stesso avesse bisogno di essere sorvegliato.
              Nessuno di questi sistemi concorda sui dettagli. Tutti concordano sul fatto che la
              corrispondenza sia una forma di conoscenza — che è o il più vecchio errore nella storia del
              pensiero, o la cosa più vicina a una lingua nativa che l'uomo abbia mai avuto per riconoscere
              gli schemi. Ho oscillato a lungo fra le due letture, e non credo che la risposta cambi cosa
              valga la pena fare dopo.
            </p>
            <p>
              Quello che rende un sistema degno di una voce qui non è se le sue corrispondenze siano vere
              in un senso che un chimico approverebbe. È se la cosa sia costruita con abbastanza cura, e
              documentata abbastanza bene, da poterne davvero seguire la logica — verificarla contro le
              proprie fonti primarie, distinguere cosa ha detto il fondatore da cosa hanno aggiunto i
              lettori dopo di lui, e seguire l'argomento abbastanza da vicino da potervi dissentire sul
              serio invece di limitarsi ad alzare le spalle. Frances Yates ha passato una carriera a
              dimostrarlo proprio per il Rinascimento — <em>Giordano Bruno and the Hermetic Tradition</em>
              (1964) fa risalire il pensiero per corrispondenze di Ficino e Bruno a testi che il
              Rinascimento credeva, erroneamente ma in modo produttivo, sapienza egizia antichissima. Il
              suo punto vero, quello a cui torno sempre, è che questi sistemi hanno contato storicamente
              non perché fossero giusti, ma perché crederci ha prodotto lavoro reale — la prima astronomia
              di Keplero non esiste senza le corrispondenze planetarie da cui passò la seconda metà della
              vita a cercare di affrancarsi con il pensiero.
            </p>
            <p>
              Ecco allora la disciplina, detta chiaramente perché è l'unica regola di tutto questo
              progetto che faccio davvero rispettare: ogni voce appartiene a uno di due livelli, e lo
              dichiara. Il primo livello ricostruisce una dottrina da quello che il suo autore ha scritto
              davvero — trascrizioni di conferenze, libri pubblicati, lettere datate — con la citazione
              ridotta al minimo, perché la parafrasi è più onesta di una riga decontestualizzata, e anche
              perché preferisco non essere querelato. Il secondo livello è tutto quello che ci è stato
              costruito sopra dopo: interpreti successivi, sincretismo popolare, l'abitudine dell'era
              internet di saldare un sistema a un altro perché le parole, per caso, fanno rima. Mescolare i
              due livelli è il modo in cui fallisce ogni progetto esoterico che ho amato per un po' e poi
              smesso di trovare credibile — è così che un sistema documentato diventa, silenziosamente,
              infalsificabile: ogni aggiunta successiva viene retrodatata come se il fondatore l'avesse
              detta lui stesso.
            </p>
            <p>
              Il sistema a cui questo quaderno torna sempre, più di ogni altro sistema di corrispondenze
              che meriti il nome, è insolitamente ben documentato — qualcosa come seimila conferenze
              trascritte, uno scaffale di libri pubblicati, un secolo di letteratura secondaria tanto
              devota quanto apertamente ostile che discute su cosa dica davvero. La morte di un fondatore
              lascia di solito una manciata di libri e un oceano di tradizione orale che nessuno ha mai
              scritto. Qui è stato messo per iscritto quasi tutto, il che significa che quasi tutto può
              essere verificato — ed è l'unica ragione per cui mi fido abbastanza da spendere così tanto
              del mio tempo su questo.
            </p>
            <p>
              Fu costruito, per lo più fra il 1900 e il 1925, da un curatore scientifico e filosofo
              austriaco di nome <strong>Rudolf Steiner</strong>, che lo chiamò antroposofia. Gran parte di
              quello che segue — il demone assegnato al sole, l'arcangelo assegnato esattamente a questo
              secolo, il numero 666 tirato fuori da lettere ebraiche invece che greche — viene dritto
              dall'interno di quel sistema, citato dalle sue conferenze e dai suoi libri. Un gruppo più
              piccolo di voci, chiaramente segnalate, segue quello che vi è stato costruito sopra da
              allora: i confronti gnostici, le letture dell'era internet che puntano lo stesso vocabolario
              verso l'intelligenza artificiale, la vera controversia accademica su cosa implichi davvero la
              sua storiografia razziale più speculativa. Se vuoi la biografia completa prima di andare
              avanti, è la prossima voce. Se preferisci partire dalla dottrina stessa, non c'è un ordine
              obbligato — nessuna delle voci dà per scontato che tu abbia letto le altre.
            </p>
            <p>
              Una definizione che uso ovunque, e che vale la pena avere in tasca da subito: una
              <strong> potenza ostacolante</strong>, in questo sistema, non è semplicemente una forza
              malvagia. È un essere il cui sviluppo è rimasto indietro rispetto al ritmo dell'evoluzione
              cosmica, e che ora opera dentro la natura umana come una resistenza contro cui il sé deve
              lavorare consapevolmente — non eliminarla, lavorarci contro. La differenza conta più di
              quanto sembri, e più di una voce qui esiste apposta per non farla perdere.
            </p>
            <SeeAlso links={[['/anthroposophy', 'una vita e un metodo'], ['/reception', 'ricezione critica'], ['/comparisons', 'confronti e teorie successive']]} />
          </>
        ) : (
          <>
            <p>
              There's a habit that keeps resurfacing the moment you go looking for it, and once you've
              seen it you can't stop seeing it: assign a number to a letter, a demon to a planet, a virtue
              to a metal, a century to an angel — and then treat the resulting grid as though it explained
              something instead of merely organizing it. Kabbalistic gematria does this to Hebrew
              scripture. Cornelius Agrippa's three books of occult philosophy do it to planets, plants, and
              humors, in 1533, with a completely straight face. Stellar demonology — older than either —
              gives every visible body in the sky a bright intelligence and a dark demon, as if the sky
              itself needed policing. None of these systems agree on the details. All of them agree that
              correspondence is a way of knowing, which is either the oldest mistake in the history of
              thought or the closest thing humans have to a native language for pattern. I've gone back and
              forth on which for longer than I'd like to admit, and I don't think the answer changes what's
              worth doing next.
            </p>
            <p>
              What earns a system a place here isn't whether its correspondences are true in any sense a
              chemist would sign off on. It's whether the thing was built carefully enough, and documented
              well enough, that you can actually trace the logic — check it against its own primary
              sources, tell what the founder said from what later readers bolted on, and follow the
              argument closely enough to disagree with it properly instead of just shrugging. Frances Yates
              spent a career making exactly this case about the Renaissance — <em>Giordano Bruno and the
              Hermetic Tradition</em> (1964) traces the correspondence-thinking of Ficino and Bruno back to
              texts the Renaissance believed, wrongly but productively, to be ancient Egyptian wisdom. Her
              real point, the one I keep circling back to, is that these systems mattered historically not
              because they were right but because believing them got real work done — Kepler's early
              astronomy doesn't exist without the planetary correspondences he spent the second half of his
              life trying to think his way out of.
            </p>
            <p>
              Here's the discipline, then, stated plainly, because it's the one rule in this whole project
              I actually enforce: every entry sits in one of two tiers, and says so. The first tier
              reconstructs a doctrine from what its author actually wrote — lecture transcripts, published
              books, dated letters — with quotation kept to a minimum, because paraphrase is more honest
              than a decontextualized line, and also because I'd rather not get sued. The second tier is
              everything built on top afterward: later interpreters, popular syncretism, the internet-era
              habit of welding one system onto another because the vocabulary happens to rhyme. Mixing the
              two tiers is the failure mode of every esoteric project I've ever liked and then stopped
              trusting — it's how a documented system quietly turns unfalsifiable, because every later
              addition gets grandfathered in as though the founder had said it himself.
            </p>
            <p>
              The system this notebook keeps coming back to, more than any other correspondence system
              worth the name, is unusually well documented — something like six thousand transcribed
              lectures, a shelf of published books, a century of secondary literature both devoted and
              openly hostile arguing about what it actually says. A founder's death usually leaves a
              handful of books and an ocean of oral tradition nobody wrote down. Here almost everything got
              written down, which means almost everything can be checked — which is the only reason I
              trust it enough to spend this much of my own time on it.
            </p>
            <p>
              It was built, mostly between 1900 and 1925, by an Austrian scientific editor and philosopher
              named <strong>Rudolf Steiner</strong>, who called it anthroposophy. Most of what follows —
              the demon assigned to the sun, the archangel assigned to this exact century, the number 666
              pulled out of Hebrew letters instead of Greek ones — comes straight from inside that system,
              cited from his own lectures and books. A smaller, clearly marked set of entries tracks what
              got built on top of it since: the gnostic comparisons, the internet-era readings that point
              the same vocabulary at artificial intelligence, the real academic argument over what his more
              speculative racial history actually implies. If you want the full biography before going
              further, it's next. If you'd rather start with the doctrine itself, there's no required order
              — none of the entries assume you've read the others.
            </p>
            <p>
              One definition I use everywhere, worth having in your pocket from the start: a
              <strong> hindering power</strong>, in this system, is not simply an evil force. It's a being
              whose development fell behind the pace of cosmic evolution, and who now operates inside human
              nature as a resistance the self has to consciously work against — not eliminate, work
              against. That distinction matters more than it looks like it should, and more than one entry
              here exists specifically to keep it from getting lost.
            </p>
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
