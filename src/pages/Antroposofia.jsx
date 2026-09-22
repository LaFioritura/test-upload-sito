import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'

export default function Antroposofia() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />vita e metodo</p>
      <h1>Che cos'è l'antroposofia</h1>
      <article>
        <p>Rudolf Steiner nasce nel 1861 a Kraljevec, un villaggio dell'impero austro-ungarico oggi in Croazia. A Vienna studia matematica e scienze naturali, e per un lungo tratto della sua vita non è affatto un mistico: è un editore, incaricato di curare gli scritti scientifici di Goethe, in particolare quelli sulla botanica e sui colori. Nel 1891 si laurea con una tesi di teoria della conoscenza, pubblicata l'anno dopo come <em>Verità e scienza</em>. Nel 1894 arriva <em>La filosofia della libertà</em>, il libro a cui tornerà sempre, in cui sostiene che un atto davvero libero non obbedisce a un comando né a un istinto, ma a un pensiero intuitivo che ciascuno può conquistare da sé.</p>
        <p>Dal 1902 tiene conferenze per la Società Teosofica; se ne separa nel 1913 per fondare la propria — l'antroposofica — e costruisce a Dornach, in Svizzera, il Goetheanum, sede della sua ricerca e delle arti che ne derivano. Muore nel 1925. Lascia dietro di sé qualcosa come seimila conferenze stenografate, su medicina, agricoltura, pedagogia, architettura, economia.</p>
        <h2>Un metodo, non un catalogo di credenze</h2>
        <p>Antroposofia significa, dal greco, "sapienza dell'essere umano". Steiner preferiva chiamarla scienza dello spirito, ed è un'etichetta che va presa sul serio: la sua pretesa non è di rivelare verità da accettare per fede, ma di applicare al mondo sovrasensibile lo stesso rigore — osservazione paziente, verifica, esposizione controllabile — che a suo avviso caratterizza il miglior pensiero scientifico occidentale. Da lì nascono la pedagogia Waldorf, l'agricoltura biodinamica, la medicina antroposofica, l'euritmia. E da lì nasce anche la dottrina di cui si occupa il resto di questo portale: non un'appendice curiosa, ma parte della stessa cosmologia dell'evoluzione umana.</p>
        <SeeAlso links={[['/costituzione', 'la costituzione quadripartita'], ['/ricezione-critica', 'ricezione critica']]} />
        <Sources items={[
          "Rudolf Steiner, <em>La filosofia della libertà</em>, 1894.",
          "Rudolf Steiner, <em>Verità e scienza</em>, 1892.",
        ]} />
      </article>
    </Layout>
  )
}
