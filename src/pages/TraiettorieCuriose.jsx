import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'

export default function TraiettorieCuriose() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />ricezione e confronti</p>
      <h1>Traiettorie curiose</h1>
      <article>
        <p>Collegamenti minori ma verificabili fra la cosmologia ricostruita in questo portale e ambiti che, a prima vista, sembrerebbero del tutto estranei. Ogni voce ha la propria fonte, indicata in fondo.</p>
        <h2>Kandinsky e la nascita dell'astrattismo</h2>
        <p>Mentre è ancora membro della Società Teosofica a Monaco, Kandinsky frequenta le conferenze che Steiner tiene in città attorno al 1908, e ne cura editorialmente alcuni testi nel 1909. Il suo trattato del 1912, <em>Lo spirituale nell'arte</em> — spesso considerato il manifesto della pittura astratta — sviluppa idee sulla risonanza interiore del colore molto vicine al linguaggio steineriano. Kandinsky resta un artista dalle fonti multiple, non un antroposofo in senso stretto, ma il debito è documentato.</p>
        <h2>Hilma af Klint, l'astrattista dimenticata</h2>
        <p>La pittrice svedese Hilma af Klint — riconosciuta solo dopo la morte come una delle prime autrici di pittura astratta pura — incontra personalmente Steiner nel 1908, e in seguito segue lo sviluppo dell'antroposofia. Steiner la incoraggia a proseguire il proprio lavoro interiore, ma la mette in guardia sui rischi di una produzione ottenuta in stato medianico non pienamente cosciente — un'osservazione che dialoga da vicino con quanto racconta la pagina sul Guardiano della Soglia.</p>
        <h2>Adriano Olivetti e la fabbrica come organismo sociale</h2>
        <p>Come racconta la pagina sulla triarticolazione, Olivetti applicò concretamente, nella gestione della propria azienda e nell'urbanistica del canavese, principi di separazione fra sfera economica, giuridica e culturale ripresi direttamente dalle conferenze sociali di Steiner — un caso raro di dottrina esoterica tradotta in politica industriale reale, oggetto di ricerca accademica italiana recente.</p>
        <h2>Il vino biodinamico</h2>
        <p>Come racconta la pagina sull'agricoltura biodinamica, il metodo che Steiner elabora nel 1924 per un gruppo di agricoltori preoccupati è oggi, tramite la certificazione Demeter, uno standard ricercato in una parte significativa della produzione vinicola di pregio internazionale — spesso senza che chi stappa la bottiglia sappia nulla della sua origine antroposofica.</p>
        <SeeAlso links={[['/arti-architettura', 'euritmia e architettura'], ['/agricoltura-biodinamica', 'l\'agricoltura biodinamica'], ['/triarticolazione', 'la triarticolazione sociale']]} />
        <Sources items={[
          "Materiale storico su Kandinsky, la Società Teosofica a Monaco e <em>Concerning the Spiritual in Art</em>, 1912.",
          "Materiale biografico su Hilma af Klint e il suo incontro con Steiner, 1908.",
          "Antonio Benfatto, <em>Triarticolazione sociale</em>, Università degli Studi di Padova, 2023–2024.",
          "Materiale storico e attuale sulla certificazione biodinamica Demeter nel settore vinicolo.",
        ]} />
      </article>
    </Layout>
  )
}
