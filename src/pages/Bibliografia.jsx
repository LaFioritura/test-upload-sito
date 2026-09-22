import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import { Link } from 'react-router-dom'

export default function Bibliografia() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />riferimenti</p>
      <h1>Bibliografia generale</h1>
      <p className="lede">Tutte le fonti citate nel portale, in un solo indice. Ogni pagina mantiene comunque la propria bibliografia in fondo.</p>
      <article>
        <h2>Opere di Rudolf Steiner</h2>
        <ul>
          <li>Rudolf Steiner, <em>Verità e scienza</em>, 1892. — <Link to="/metodo-goethiano">pagina</Link></li>
          <li>Rudolf Steiner, <em>La filosofia della libertà</em>, 1894. — <Link to="/metodo-goethiano">pagina</Link>, <Link to="/conclusione">pagina</Link></li>
          <li>Rudolf Steiner, <em>Il cristianesimo come fatto mistico</em>, 1902. — <Link to="/cristo-golgota">pagina</Link>, <Link to="/confronti">pagina</Link></li>
          <li>Rudolf Steiner, <em>L'iniziazione</em>, 1904–1905. — <Link to="/soglia">pagina</Link></li>
          <li>Rudolf Steiner, GA 104 e GA 104a, 1907–1908. — <Link to="/sorat">pagina</Link>, <Link to="/michele">pagina</Link></li>
          <li>Rudolf Steiner, <em>Scienza occulta. Un profilo</em>, 1910. — <Link to="/costituzione">pagina</Link></li>
          <li>Rudolf Steiner, <em>La missione di Michele</em>, 1919. — <Link to="/triplicita">pagina</Link>, <Link to="/cristo-golgota">pagina</Link></li>
          <li>Rudolf Steiner, <em>I punti essenziali della questione sociale</em>, 1919. — <Link to="/triarticolazione">pagina</Link></li>
          <li>Rudolf Steiner, <em>Understanding Society</em>, 1918–1919. — <Link to="/triarticolazione">pagina</Link>, <Link to="/karma">pagina</Link></li>
          <li>Rudolf Steiner, <em>The Influence of Lucifer and Ahriman</em>. — <Link to="/triplicita">pagina</Link></li>
          <li>Rudolf Steiner, <em>Eternal and Transient Elements in Human Life</em>. — <Link to="/sorat">pagina</Link></li>
          <li>Rudolf Steiner, GA 26, <em>The Michael Mystery</em>, 1924–1925. — <Link to="/michele">pagina</Link>, <Link to="/epoche">pagina</Link>, <Link to="/cristo-golgota">pagina</Link></li>
          <li>Rudolf Steiner, <em>Cosmic Christianity and the Impulse of Michael</em>, 1924. — <Link to="/michele">pagina</Link></li>
          <li>Rudolf Steiner, <em>Corso di agricoltura</em>, 1924. — <Link to="/agricoltura-biodinamica">pagina</Link></li>
          <li>Rudolf Steiner, <em>La Pietra di Fondazione</em>, GA 260, 1923–1924. — <Link to="/fondazione-meditazione">pagina</Link></li>
          <li>Rudolf Steiner e Ita Wegman, <em>Fondamenti per un ampliamento dell'arte medica</em>, 1925. — <Link to="/medicina-antroposofica">pagina</Link></li>
          <li>Rudolf Steiner, <em>Der Elektronische Doppelgänger</em>, 2013. — <Link to="/doppio">pagina</Link></li>
        </ul>

        <h2>Letteratura secondaria e antroposofica</h2>
        <ul>
          <li>Stefano Arcella, <em>Il mistero della triplicità e il "triplice Mithra"</em>. — <Link to="/triplicita">pagina</Link></li>
          <li>Peter Selg, <em>The Figure of Christ</em>. — <Link to="/triplicita">pagina</Link></li>
          <li>Peter Selg, <em>Rudolf Steiner's Foundation Stone Meditation and the Destruction of the Twentieth Century</em>, 2013. — <Link to="/fondazione-meditazione">pagina</Link></li>
          <li>Antonio Benfatto, <em>Triarticolazione sociale</em>, Università degli Studi di Padova, 2023–2024. — <Link to="/triarticolazione">pagina</Link>, <Link to="/traiettorie-curiose">pagina</Link></li>
        </ul>

        <h2>Fonti gnostiche (per confronto esterno)</h2>
        <ul>
          <li><em>Apocrifo di Giovanni</em>. — <Link to="/confronti">pagina</Link></li>
          <li><em>Ipostasi degli Arconti</em>. — <Link to="/confronti">pagina</Link></li>
        </ul>

        <h2>Ricezione critica indipendente</h2>
        <ul>
          <li>Michael Ruse, <em>Democracy and Pseudo-Science</em>. — <Link to="/ricezione-critica">pagina</Link></li>
          <li>Peter Staudenmaier, <em>Between Occultism and Fascism</em>, Brill, 2014. — <Link to="/ricezione-critica">pagina</Link></li>
          <li>Robert Rose, <em>Transforming Criticisms of Anthroposophy and Waldorf Education</em>. — <Link to="/ricezione-critica">pagina</Link></li>
          <li>Materiale critico raccolto su waldorfcritics.org. — <Link to="/ricezione-critica">pagina</Link></li>
        </ul>

        <SeeAlso links={[['/cronologia', 'cronologia'], ['/ricezione-critica', 'ricezione critica']]} />
      </article>
    </Layout>
  )
}
