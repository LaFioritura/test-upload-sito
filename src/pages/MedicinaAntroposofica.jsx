import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'

export default function MedicinaAntroposofica() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />le arti e la pratica</p>
      <h1>La medicina antroposofica</h1>
      <article>
        <p>Negli anni Venti Steiner sviluppa, insieme alla medica olandese Ita Wegman, un ampliamento della medicina convenzionale — e la definizione è precisa: non un'alternativa, ma un prolungamento verso la costituzione quadripartita dell'essere umano descritta altrove in questo portale. Lo squilibrio fra il polo luciferico e quello arimanico diventa uno dei quadri interpretativi usati per leggere la malattia.</p>
        <h2>Weleda e le terapie complementari</h2>
        <p>Dalla stessa collaborazione nasce, nel 1921, l'azienda farmaceutica e cosmetica Weleda, oggi diffusa internazionalmente, che produce preparati omeopatici e fitoterapici secondo principi antroposofici. La medicina antroposofica include anche terapie proprie non farmacologiche — euritmia curativa, pittura terapeutica — ed è riconosciuta in modi diversi da paese a paese: in Germania e in Svizzera alcune sue prestazioni sono rimborsabili dal sistema sanitario; la comunità medica e scientifica indipendente ne discute la fondatezza clinica con la stessa cautela riservata, più in generale, allo statuto epistemologico dell'antroposofia — trattato nella pagina sulla ricezione critica.</p>
        <SeeAlso links={[['/costituzione', 'la costituzione quadripartita'], ['/ricezione-critica', 'ricezione critica'], ['/pedagogia-waldorf', 'la pedagogia Waldorf']]} />
        <Sources items={[
          "Rudolf Steiner e Ita Wegman, <em>Fondamenti per un ampliamento dell'arte medica</em>, 1925.",
          "Materiale storico sulla fondazione di Weleda, 1921.",
        ]} />
      </article>
    </Layout>
  )
}
