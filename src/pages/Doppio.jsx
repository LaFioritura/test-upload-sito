import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'

export default function Doppio() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />le tre potenze</p>
      <h1>Il doppio arimanico e le macchine</h1>
      <article>
        <p>C'è, nell'opera autentica di Steiner, un aggancio reale fra Arimane e la tecnologia — molto più preciso di qualunque accostamento a Sorat. In un ciclo di conferenze che lui stesso avrebbe poi evitato di riprendere, oggi raccolto come <em>Il doppio elettronico</em>, descrive un essere di natura arimanica che si insedierebbe nel sistema nervoso umano poco prima della nascita, lasciandolo alla morte: fornirebbe la base fisica delle correnti elettriche che rendono possibili la percezione sensoriale e la reazione agli stimoli — un "doppio", nelle sue parole, di natura geografica, non solo individuale.</p>
        <p>È, su scala corporea, la stessa operazione che si vede su scala storica nel rapporto fra Michele e Arimane: un'intelligenza che dovrebbe restare viva e cosciente finisce occupata da un principio che la irrigidisce in puro meccanismo. Un secondo tipo di doppio, questa volta individuale e legato al percorso interiore di ciascuno, è quello del Guardiano della Soglia.</p>
        <h2>Un'estensione, non un insegnamento diretto</h2>
        <p>Steiner muore nel 1925, prima dell'informatica: dell'intelligenza artificiale, ovviamente, non parla mai. Sono autori antroposofi successivi ad aver esteso la dottrina del doppio arimanico alla tecnologia elettronica e computazionale, leggendo nella profilazione algoritmica, nella mediazione elettronica costante, nell'automazione, un'intensificazione contemporanea dello stesso principio. È un'estensione legittima dentro il linguaggio antroposofico — resta Arimane, non Sorat, il nome corretto secondo la dottrina originale — ma resta appunto un'estensione, non qualcosa che Steiner abbia mai insegnato direttamente.</p>
        <SeeAlso links={[['/michele', 'Michele e l\'intelligenza cosmica'], ['/soglia', 'il Guardiano della Soglia'], ['/confronti', 'confronti e teorie successive']]} />
        <Sources items={[
          "Rudolf Steiner, ciclo di conferenze raccolto come <em>Der Elektronische Doppelgänger</em>, a cura di Andreas Neider, Rudolf Steiner Verlag, 2013.",
          "Letture antroposofiche successive che estendono la dottrina alla tecnologia contemporanea.",
        ]} />
      </article>
    </Layout>
  )
}
