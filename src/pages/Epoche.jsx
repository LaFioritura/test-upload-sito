import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'

export default function Epoche() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />cosmologia</p>
      <h1>Le epoche della coscienza</h1>
      <article>
        <p>Dopo la fine di Atlantide, Steiner scandisce l'evoluzione umana in epoche culturali successive, ciascuna retta da una diversa configurazione dell'anima: l'epoca indo-antica, la persiano-antica, l'egizio-caldaica, la greco-latina. Poi la nostra — iniziata, dice, nel 1413, che chiama epoca dell'anima cosciente, destinata a chiudersi solo verso il 3573.</p>
        <p>Le due potenze non pesano allo stesso modo in tutte queste fasi. Lucifero domina nelle epoche più antiche, quelle di mito, rito, sapienza percepita direttamente e non conquistata a fatica. Arimane cresce invece proprio a ridosso della nostra epoca, e accelera dal Cinquecento in poi, quando nasce la scienza sperimentale moderna.</p>
        <h2>Un'epoca senza guida diretta</h2>
        <p>Sorat, il compito attribuito ad Arimane, il doppio elettronico: tutti i temi trattati altrove in questo portale riguardano proprio questo tratto di storia, e non è un dettaglio marginale. Nello schema di Steiner, la nostra è l'epoca in cui l'uomo deve raggiungere piena coscienza di sé senza più la guida diretta e percepibile del mondo spirituale di cui disponevano le epoche precedenti. È il prezzo della libertà — e anche, per lo stesso motivo, il momento in cui si è più esposti.</p>
        <SeeAlso links={[['/sorat', 'Sorat'], ['/michele', 'Michele e l\'intelligenza cosmica'], ['/triarticolazione', 'la triarticolazione sociale']]} />
        <Sources items={["Rudolf Steiner, GA 26, lettera <em>The Historic Upheavals Attendant upon the Birth of the Consciousness Soul</em> (5 aprile 1925)."]} />
      </article>
    </Layout>
  )
}
