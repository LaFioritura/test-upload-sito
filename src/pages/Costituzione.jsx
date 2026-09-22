import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'

export default function Costituzione() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />cosmologia</p>
      <h1>La costituzione quadripartita dell'essere umano</h1>
      <article>
        <p>Per Steiner l'uomo è fatto di quattro arti, e ciascuno lo imparenta a un regno diverso della natura. Il corpo fisico condivide la propria sostanza con i minerali. Il corpo eterico — o vitale — governa crescita, nutrizione, riproduzione, ed è comune alle piante. Il corpo astrale ospita sensazione, istinto, desiderio: lo condividiamo con gli animali. Resta l'Io: il principio di autocoscienza e libertà morale, e questo sì, per Steiner, appartiene solo all'uomo.</p>
        <p>In <em>Scienza occulta. Un profilo</em> (1910) fa risalire la formazione di questi quattro arti a quattro grandi fasi cosmiche che chiama Saturno, Sole, Luna e Terra antichi — non pianeti, ma stadi di coscienza attraversati da gerarchie di esseri spirituali via via più elevate, che avrebbero dotato l'umanità, in successione, prima del corpo fisico, poi di quello eterico, poi dell'astrale, infine dell'Io.</p>
        <h2>Dove si annidano Lucifero e Arimane</h2>
        <p>È questo schema a rendere leggibili Lucifero e Arimane. Non sono metafore del vizio: per Steiner sono esseri reali, rimasti indietro rispetto al resto dell'evoluzione — dovevano completare il proprio sviluppo in una fase cosmica precedente, e invece si ritrovano a operare dentro l'uomo di oggi. Lucifero si insedia nel corpo astrale. Arimane, nella tensione fra corpo eterico e corpo fisico. Sono in ritardo, e proprio per questo diventano potenze ostacolanti: non nemici da abbattere, ma resistenze contro cui l'Io impara a esercitare la propria libertà.</p>
        <SeeAlso links={[['/epoche', 'le epoche della coscienza'], ['/triplicita', 'il mistero della triplicità'], ['/karma', 'karma e reincarnazione']]} />
        <Sources items={["Rudolf Steiner, <em>Scienza occulta. Un profilo</em>, 1910."]} />
      </article>
    </Layout>
  )
}
