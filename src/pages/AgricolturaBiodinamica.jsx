import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'

export default function AgricolturaBiodinamica() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />le arti e la pratica</p>
      <h1>L'agricoltura biodinamica</h1>
      <article>
        <p>Nel 1924, un anno prima di morire, Steiner tiene a Koberwitz, in Slesia, otto conferenze per un gruppo di agricoltori preoccupati dall'impoverimento dei terreni dopo l'introduzione dei fertilizzanti di sintesi. Ne nasce l'agricoltura biodinamica: la fattoria trattata come un organismo unico e autosufficiente, secondo gli stessi principi di equilibrio fra forze che attraversano il resto di questa cosmologia, con preparati specifici — il più noto è il "preparato 500", letame bovino maturato dentro corna di vacca interrate per l'inverno — pensati per veicolare non solo sostanze chimiche, ma forze cosmiche.</p>
        <h2>Dalle corna di vacca al vino naturale</h2>
        <p>Il marchio Demeter, nato negli anni Venti per certificare i prodotti biodinamici, esiste ancora, ed è oggi particolarmente diffuso in un ambito che Steiner non poteva immaginare: la produzione vinicola. Diverse aziende di rilievo internazionale — in Francia, in Italia, in California — seguono pratiche biodinamiche certificate Demeter, spesso senza menzionare in etichetta il legame con l'antroposofia da cui derivano.</p>
        <SeeAlso links={[['/costituzione', 'la costituzione quadripartita'], ['/triarticolazione', 'la triarticolazione sociale'], ['/traiettorie-curiose', 'traiettorie curiose']]} />
        <Sources items={[
          "Rudolf Steiner, <em>Corso di agricoltura</em>, conferenze di Koberwitz, 1924.",
          "Materiale storico e attuale sul marchio di certificazione Demeter.",
        ]} />
      </article>
    </Layout>
  )
}
