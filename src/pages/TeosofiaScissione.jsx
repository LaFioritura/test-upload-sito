import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'

export default function TeosofiaScissione() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />vita e metodo</p>
      <h1>Teosofia e la scissione</h1>
      <article>
        <p>Fino al 1913 Steiner non guida un movimento proprio: dirige la sezione tedesca della Società Teosofica, fondata a New York nel 1875 da Helena Blavatsky, che aveva innestato karma e reincarnazione su una cosmologia occulta tutta sua. Dentro quel movimento, Steiner sviluppa una lettura sempre più centrata sul cristianesimo esoterico e sulla figura del Cristo come entità solare — una direzione che lo allontana progressivamente dal resto della Società.</p>
        <h2>Il punto di rottura</h2>
        <p>La rottura arriva fra il 1912 e il 1913, quando la presidente Annie Besant comincia a presentare il giovane Jiddu Krishnamurti come il veicolo atteso di un nuovo Maestro del Mondo. Per Steiner è un'aspettativa messianica che tradisce l'idea stessa di sviluppo interiore: non un maestro esterno da attendere, ma un lavoro da fare da soli. Fonda quindi, nel 1913, la Società Antroposofica come organizzazione indipendente. Krishnamurti, del resto, sciolse lui stesso anni dopo l'ordine costruito attorno alla propria figura, rifiutando pubblicamente il ruolo che gli era stato assegnato.</p>
        <p>È un episodio che di solito finisce in una nota a piè di pagina, ma dice qualcosa di strutturale su tutto il resto: dal mistero della triplicità al Guardiano della Soglia, la costante di Steiner è che nessuna autorità esterna — né una gerarchia spirituale, né un maestro incarnato — può sostituirsi al lavoro cosciente del singolo.</p>
        <SeeAlso links={[['/antroposofia', 'che cos\'è l\'antroposofia'], ['/metodo-goethiano', 'il metodo goethiano'], ['/cronologia', 'cronologia']]} />
        <Sources items={[
          "Cronologia biografica di Rudolf Steiner e della fondazione della Società Antroposofica, 1902–1913.",
          "Materiale storico sulla Società Teosofica, Annie Besant e Jiddu Krishnamurti, 1912–1929.",
        ]} />
      </article>
    </Layout>
  )
}
