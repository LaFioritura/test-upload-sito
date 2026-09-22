import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'

export default function Confronti() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />ricezione e confronti</p>
      <h1>Confronti e teorie successive</h1>
      <article>
        <p>Le pagine precedenti ricostruiscono la dottrina di Steiner nei suoi termini. Questa raccoglie invece, segnalati apertamente come esterni a quella dottrina, gli accostamenti che altre tradizioni e altri autori hanno costruito attorno alle stesse figure. Sono confronti utili — ma non conseguenze della cosmologia steineriana, e vanno letti come tali.</p>
        <h2>Gli Arconti gnostici</h2>
        <p>Il termine Arconti appartiene allo gnosticismo dei primi secoli — testi come l'Apocrifo di Giovanni e l'Ipostasi degli Arconti, ritrovati fra i manoscritti di Nag Hammadi — dove indicano i governatori delle sfere planetarie generati dal demiurgo Ialdabaoth, incaricati di tenere l'umanità imprigionata nella materia. Steiner conosce e discute lo gnosticismo, soprattutto ne <em>Il cristianesimo come fatto mistico</em>, ma non integra gli Arconti nella propria gerarchia di esseri spirituali, né li presenta come subordinati di Sorat. L'accostamento fra le due dottrine, diffuso in certi ambienti esoterici online, è sincretismo successivo: un confronto possibile fra due cosmologie del "mondo come prigione", non un'estensione di quanto scrive Steiner.</p>
        <h2>La narrativa cosmica del primo Novecento</h2>
        <p>Alcune correnti insistono su un punto specifico riguardo a Sorat: non sarebbe un alieno, non abiterebbe un pianeta, non sarebbe nemmeno uno spirito nel senso tradizionale — piuttosto un'intelligenza che opera su scale temporali e di coscienza estranee a quelle umane. È qui che il confine con la narrativa weird del primo Novecento — entità immense, indifferenti al destino umano, che agiscono su tempi lunghissimi — si fa sottile. La somiglianza è strutturale, non genealogica: due tradizioni molto diverse arrivano a un'immagine simile rispondendo alla stessa inquietudine, quella di un ordine più grande dell'uomo e indifferente alla sua scala di valori.</p>
        <h2>Le letture contemporanee sulla tecnologia</h2>
        <p>Alcuni autori estendono il nome di Sorat — non solo quello di Arimane — a fenomeni come la perdita dell'identità dentro flussi di dati, la fusione crescente fra uomo e macchina, il controllo algoritmico dei comportamenti di massa, la sostituzione dell'esperienza vissuta con simulazioni. Ma il punto di aggancio più solido nella dottrina originale riguarda Arimane, non Sorat, come racconta la pagina su Michele: chiamare "soratica" una tecnologia disumanizzante funziona bene come retorica, resta un'estensione — non una conseguenza diretta delle fonti.</p>
        <SeeAlso links={[['/sorat', 'Sorat'], ['/doppio', 'il doppio arimanico e le macchine'], ['/ricezione-critica', 'ricezione critica']]} />
        <Sources items={[
          "<em>Apocrifo di Giovanni</em> e <em>Ipostasi degli Arconti</em>, testi gnostici della biblioteca di Nag Hammadi.",
          "Rudolf Steiner, <em>Il cristianesimo come fatto mistico</em>, 1902.",
          "Letture divulgative ed esoteriche contemporanee che accostano Sorat, gli Arconti e la critica alla tecnologia, qui trattate come oggetto di ricognizione, non come fonte dottrinale.",
        ]} />
      </article>
    </Layout>
  )
}
