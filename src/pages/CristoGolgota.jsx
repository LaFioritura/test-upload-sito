import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'

export default function CristoGolgota() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />cosmologia</p>
      <h1>Il Cristo e il Mistero del Golgota</h1>
      <article>
        <p>Per Steiner il Cristo non è anzitutto una figura da venerare: è un'entità spirituale solare, la stessa intelligenza di cui Sorat sarebbe la controparte oscura. La sua discesa nel corpo di Gesù di Nazareth, e la morte sul Golgota, segnano quello che Steiner chiama il Mistero del Golgota — non un evento religioso fra tanti, ma la cesura centrale dell'intera evoluzione cosmica: la prima volta in cui una forza fin lì percepibile solo dal sole entra dentro la terra, e dentro la storia umana.</p>
        <p>È da questo momento, secondo le lettere su Michele, che l'intelligenza cosmica comincia a scendere dalle gerarchie spirituali nelle anime umane — rendendo possibile l'intelletto libero dell'uomo moderno, ma anche, come racconta la pagina su Arimane, esponendolo al rischio di essere catturato. Ed è sempre da qui che si misurano i ritmi di 666 e 333 anni legati rispettivamente a Sorat e alle forze di guarigione della coscienza.</p>
        <h2>Il centro, non un terzo polo</h2>
        <p>Nel mistero della triplicità, il Cristo non è un terzo peso accanto a Lucifero e Arimane: è la condizione stessa dell'equilibrio, il punto su cui la bilancia si regge. È per questo che isolare Sorat, o Lucifero, o Arimane, e provare a capirli da soli, lascia sempre fuori qualcosa: le tre potenze prendono senso solo in relazione a questo centro.</p>
        <SeeAlso links={[['/triplicita', 'il mistero della triplicità'], ['/sorat', 'Sorat'], ['/fondazione-meditazione', 'la Pietra di Fondazione']]} />
        <Sources items={[
          "Rudolf Steiner, <em>Il cristianesimo come fatto mistico</em>, 1902.",
          "Rudolf Steiner, ciclo di conferenze <em>La missione di Michele</em>, 1919.",
          "Rudolf Steiner, GA 26, <em>The Michael Mystery</em>, 1924–1925.",
        ]} />
      </article>
    </Layout>
  )
}
