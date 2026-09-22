import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'

export default function PedagogiaWaldorf() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />le arti e la pratica</p>
      <h1>La pedagogia Waldorf</h1>
      <article>
        <p>Nel 1919 Emil Molt, che dirige la fabbrica di sigarette Waldorf-Astoria a Stoccarda, chiede a Steiner una scuola per i figli dei propri operai. Nasce così la prima scuola Waldorf, organizzata attorno alla stessa costituzione quadripartita descritta altrove in questo portale: l'insegnamento è scandito per fasi di sette anni, pensate per accompagnare lo sviluppo — prima del corpo fisico, poi di quello eterico, poi dell'astrale — invece di anticipare a forza l'intelletto astratto.</p>
        <h2>Diffusione, e obiezioni</h2>
        <p>Oggi esistono scuole e asili Waldorf in decine di paesi, dal Messico alla Tanzania alla Cina: probabilmente l'esperimento pedagogico indipendente più diffuso al mondo. Ha anche attirato critiche puntuali — sull'insegnamento tardivo della lettura, su pratiche come l'euritmia o le "forze formative" presentate come se descrivessero scientificamente lo sviluppo del bambino, e sulla presenza, in alcuni materiali storici, di elementi legati alle teorie razziali discusse nella pagina sulla ricezione critica.</p>
        <SeeAlso links={[['/costituzione', 'la costituzione quadripartita'], ['/arti-architettura', 'euritmia e architettura'], ['/ricezione-critica', 'ricezione critica']]} />
        <Sources items={[
          "Cronologia della prima scuola Waldorf, Stoccarda, 1919.",
          "Materiale storico e critico su diffusione e controversie della pedagogia Waldorf, raccolto anche su waldorfcritics.org.",
        ]} />
      </article>
    </Layout>
  )
}
