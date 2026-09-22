import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'

export default function MetodoGoethiano() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />vita e metodo</p>
      <h1>Il metodo goethiano</h1>
      <article>
        <p>Per quasi quindici anni, prima di diventare un esoterista pubblico, Steiner passa le giornate dentro l'archivio di Goethe. Cura, fra il 1883 e il 1897, due edizioni diverse dei suoi scritti scientifici — botanica, teoria dei colori — in un'epoca in cui la scienza di Goethe veniva liquidata come il passatempo di un poeta. Goethe non scomponeva i fenomeni in leggi matematiche staccate da ciò che si osserva: seguiva la trasformazione di una pianta dal seme al fiore al frutto, cercando la forma dentro il processo stesso.</p>
        <h2>Un pensiero che percepisce</h2>
        <p>Da questo modo di guardare, Steiner porta via un'idea che userà per tutta la vita: se il pensiero è disciplinato abbastanza, diventa un organo di percezione a pieno titolo, non un semplice specchio dei dati dei sensi. È il cuore di <em>Verità e scienza</em> (1892) e de <em>La filosofia della libertà</em> (1894): il pensiero puro, per Steiner, non riflette la realtà da fuori — la tocca.</p>
        <p>È anche il punto su cui l'antroposofia prova a distinguersi da altre correnti esoteriche coeve: non chiede fede in una rivelazione, ma esercizio di un metodo. Quanto questa distinzione regga alla prova dei fatti è un'altra questione, ed è discussa più a fondo nella pagina sulla ricezione critica.</p>
        <SeeAlso links={[['/antroposofia', 'che cos\'è l\'antroposofia'], ['/teosofia-scissione', 'teosofia e la scissione'], ['/ricezione-critica', 'ricezione critica']]} />
        <Sources items={[
          "Rudolf Steiner, <em>Verità e scienza</em>, 1892.",
          "Rudolf Steiner, <em>La filosofia della libertà</em>, 1894.",
          "Rudolf Steiner, curatela degli scritti scientifici di Goethe, 1883–1897.",
        ]} />
      </article>
    </Layout>
  )
}
