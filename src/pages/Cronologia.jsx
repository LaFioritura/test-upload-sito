import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import { Link } from 'react-router-dom'

const EVENTS = [
  ['1861', <>Nasce a Kraljevec. <Link to="/antroposofia">antroposofia</Link></>],
  ['1879', <>Per Steiner comincia l'epoca di Michele. <Link to="/michele">Michele</Link></>],
  ['1883–97', <>Cura gli scritti scientifici di Goethe. <Link to="/metodo-goethiano">il metodo goethiano</Link></>],
  ['1891–94', <>Dottorato, poi <em>Verità e scienza</em> e <em>La filosofia della libertà</em>.</>],
  ['1902', <>Comincia a tenere conferenze per la Società Teosofica. <Link to="/teosofia-scissione">teosofia e la scissione</Link></>],
  ['1907–08', <>Le conferenze sull'Apocalisse di Giovanni: nasce la dottrina di Sorat. <Link to="/sorat">Sorat</Link></>],
  ['1912', <>Sviluppa l'euritmia. <Link to="/arti-architettura">euritmia e architettura</Link></>],
  ['1913', <>Rottura con i teosofi; fonda la Società Antroposofica.</>],
  ['1914–22', <>Con Edith Maryon realizza il <em>Rappresentante dell'Umanità</em>. <Link to="/triplicita">la triplicità</Link></>],
  ['1917', <>Primi memorandum sulla triarticolazione sociale. <Link to="/triarticolazione">triarticolazione</Link></>],
  ['1919', <>Prima scuola Waldorf a Stoccarda; ciclo <em>La missione di Michele</em>.</>],
  ['1920', <>Inaugurazione del primo Goetheanum.</>],
  ['1921', <>Nasce Weleda. <Link to="/medicina-antroposofica">medicina antroposofica</Link></>],
  ['1922', <>Il primo Goetheanum brucia, notte di San Silvestro.</>],
  ['1923–24', <>Conferenza di Natale, rifondazione della Società, Pietra di Fondazione. <Link to="/fondazione-meditazione">la Pietra di Fondazione</Link></>],
  ['1923–25', <>Lettere ai soci sulla missione di Michele.</>],
  ['1924', <>Conferenze di Koberwitz: nasce la biodinamica. <Link to="/agricoltura-biodinamica">agricoltura biodinamica</Link></>],
  ['1925', <>Con Ita Wegman getta le basi della medicina antroposofica. Muore il 30 marzo a Dornach.</>],
  ['1332 / 1998', <>Culmini successivi del ritmo dei 666 anni. <Link to="/sorat">Sorat</Link></>],
  ['1413–3573', <>L'epoca dell'anima cosciente — quella in cui siamo ancora. <Link to="/epoche">le epoche della coscienza</Link></>],
]

export default function Cronologia() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />vita e metodo</p>
      <h1>Cronologia</h1>
      <p className="lede">
        Date biografiche verificabili e date interne alla dottrina, tenute deliberatamente sulla stessa linea:
        è così che Steiner stesso le presentava, e separarle avrebbe tradito il modo in cui lui intendeva il rapporto fra la propria vita e la propria cosmologia.
      </p>
      <ul className="tl">
        {EVENTS.map(([y, e], i) => (
          <li key={i}><span className="y">{y}</span><span className="e">{e}</span></li>
        ))}
      </ul>
      <SeeAlso links={[['/antroposofia', 'che cos\'è l\'antroposofia'], ['/bibliografia', 'bibliografia generale']]} />
    </Layout>
  )
}
