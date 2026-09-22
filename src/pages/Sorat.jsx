import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'

export default function Sorat() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />le tre potenze</p>
      <h1>Sorat: la potenza che non tenta, nega</h1>
      <article>
        <p>Sorat appartiene a un ciclo diverso da quello della triplicità: le conferenze sull'Apocalisse di Giovanni, tenute fra Monaco e Norimberga nel 1907-08, oggi raccolte nei volumi 104 e 104a. Lì Steiner ricostruisce, con la gematria, come l'Apocalittico avrebbe cifrato il nome della bestia: trascrivendo correttamente le lettere ebraiche nei loro valori numerici — al posto della lettura tradizionale, filologicamente scorretta, che dà "Nerone" — si ottiene la parola "Sorat", il cui valore è appunto 666. Nell'antica demonologia stellare, dove ogni astro ha un'intelligenza e un demone, Sorat è il demone del sole: la controparte oscura di quella stessa intelligenza di cui, in questa lettura, il Cristo è la rivelazione.</p>
        <h2>Un ritmo di secoli</h2>
        <p>Steiner lega Sorat a un ritmo storico di 666 anni, in cui la sua influenza tornerebbe a farsi sentire con più forza: un primo culmine attorno al 666, un secondo al 1332, un terzo atteso verso il 1998. Il primo coinciderebbe con l'Accademia di Gondishapur — un centro di sapere che preservò i testi di Aristotele, ma che secondo Steiner diffuse anche una conoscenza spirituale prematura, sbilanciata, un eccesso poi compensato dalla nascita dell'Islam. A questo ritmo se ne oppone uno di segno opposto, quello dei 333 anni, legato al Mistero del Golgota e alle forze di guarigione della coscienza.</p>
        <h2>Cosa lo rende diverso</h2>
        <p>Lucifero e Arimane sono esseri in ritardo rispetto a un'evoluzione di cui restano comunque parte — la loro resistenza serve a qualcosa, come si è visto parlando della triplicità. Sorat non funziona così. Non è un'eredità arretrata di una fase cosmica precedente: è una potenza che non vuole deviare lo sviluppo umano, vuole interromperlo. La sua opposizione punta dritta all'impulso del Cristo — e, come racconta la pagina successiva, contro la missione dell'essere che quell'impulso rappresenta nella nostra epoca.</p>
        <SeeAlso links={[['/triplicita', 'il mistero della triplicità'], ['/michele', 'Michele e l\'intelligenza cosmica'], ['/confronti', 'confronti e teorie successive']]} />
        <Sources items={[
          "Rudolf Steiner, <em>Die Apokalypse des Johannes</em> (GA 104, Norimberga 1908) e <em>Aus der Bilderschrift der Apokalypse des Johannes</em> (GA 104a, Monaco 1907).",
          "Rudolf Steiner, <em>Eternal and Transient Elements in Human Life</em>, sul ritmo dei 666 anni e l'episodio di Gondishapur.",
        ]} />
      </article>
    </Layout>
  )
}
