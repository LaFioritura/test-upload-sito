import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'

export default function FondazioneMeditazione() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />le tre potenze</p>
      <h1>La meditazione della Pietra di Fondazione</h1>
      <article>
        <p>Nella notte di San Silvestro del 1922 il primo Goetheanum, in legno, brucia fino alle fondamenta. Un anno dopo, fra il 24 dicembre 1923 e il 1° gennaio 1924, Steiner riunisce a Dornach circa ottocento persone per la Conferenza di Natale, e rifonda da zero la Società Antroposofica. In quei giorni recita, ripetendolo, un testo che pone una nuova pietra di fondazione — non più nella materia, questa volta, ma "nei cuori" di chi ascolta: la Pietra di Fondazione, oggi raccolta nel volume 260 della sua opera completa.</p>
        <h2>Un testo da praticare</h2>
        <p>Steiner è chiaro su un punto: questo testo non vuole informare, vuole essere praticato come meditazione. Descrive la costituzione dell'uomo — gli arti, il ritmo di cuore e polmoni, la testa — mettendola in relazione diretta con le gerarchie spirituali che agiscono in ciascuna zona, e nomina esplicitamente, al proprio interno, sia l'elemento luciferico sia quello arimanico: chi lo recita è invitato a sperimentarne l'equilibrio, non solo a capirlo. Il teologo Sergej Prokofieff l'ha definita la sintesi essenziale di tutta l'antroposofia. Proprio per il suo carattere di mantra esoterico — ed essendo un testo poetico, protetto da diritto d'autore nelle sue traduzioni moderne — questo portale ne descrive il contenuto senza riportarne i versi: le edizioni indicate nelle fonti permettono di leggerlo per intero.</p>
        <p>Il collegamento con il resto del portale è diretto: se la pagina sulla triplicità racconta l'equilibrio fra Lucifero e Arimane in termini dottrinali, la Pietra di Fondazione è il tentativo di renderlo un'esperienza reale, condivisa, proprio nell'anno in cui l'edificio chiamato a incarnarlo architettonicamente era appena andato in cenere.</p>
        <SeeAlso links={[['/triplicita', 'il mistero della triplicità'], ['/cristo-golgota', 'il Cristo e il Mistero del Golgota'], ['/cronologia', 'cronologia']]} />
        <Sources items={[
          "Rudolf Steiner, <em>La Pietra di Fondazione</em>, GA 260, Conferenza di Natale, Dornach, 1923–1924.",
          "Peter Selg, <em>Rudolf Steiner's Foundation Stone Meditation and the Destruction of the Twentieth Century</em>, Temple Lodge Publishing, 2013.",
        ]} />
      </article>
    </Layout>
  )
}
