import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'

export default function RicezioneCritica() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />ricezione e confronti</p>
      <h1>Ricezione critica</h1>
      <article>
        <p>Ricostruire una dottrina esoterica dalle sue fonti dichiarate non significa tacerne le obiezioni. Storici e filosofi della scienza indipendenti dal movimento antroposofico ne hanno sollevate di serie, e questa pagina le riassume senza schierarsi: chi vuole farsi un'opinione può seguire le fonti indicate in fondo.</p>
        <h2>Scienza o pseudoscienza</h2>
        <p>Filosofi della scienza come Michael Ruse classificano l'antroposofia come pseudoscienza: un sistema che parla il linguaggio del metodo scientifico — osservazione, verifica, sistematicità — pur riguardando entità che restano, per definizione, fuori da ogni controllo empirico indipendente. Gli antroposofi rispondono che questa obiezione applica alla ricerca spirituale un metro, quello della scienza naturale quantitativa, che lo stesso Steiner considerava valido solo entro i propri confini — la sua "scienza dello spirito" rivendicava un metodo diverso, non una scienza naturale travestita.</p>
        <h2>Razza e antisemitismo</h2>
        <p>Uno storico americano, Peter Staudenmaier, ha condotto la ricerca più citata su un terreno più scomodo: sostiene che le opere esoteriche più mature di Steiner — in particolare la ricostruzione della preistoria umana nota come Cronaca dell'Akasha — contengano una gerarchia razziale delle epoche e delle stirpi, e che alcune sue affermazioni su ebrei ed ebraismo vadano oltre la polemica ordinaria del proprio tempo. Su questa base documenta anche come frange dell'antroposofia si siano intrecciate, in modo tutt'altro che lineare, con ambienti del nazionalsocialismo negli anni Trenta.</p>
        <p>Studiosi vicini al movimento — fra cui Robert Rose, in una replica punto per punto — obiettano che le citazioni usate a sostegno di questa lettura sono spesso estratte dal contesto, che alcune traduzioni ne avrebbero alterato il senso, e che va distinto fra le affermazioni storicamente situate di un autore a cavallo fra Otto e Novecento e i principi universalisti — fratellanza fra i popoli, libertà di ogni essere umano — che Steiner enuncia altrove, comprese le stesse conferenze sulla triarticolazione sociale.</p>
        <p>Questo portale non arbitra la disputa. La riporta perché chi si avvicina a questa cosmologia — compresa la narrazione di Sorat, che assegna un ruolo storico specifico a civiltà e religioni diverse — ha diritto a conoscerne anche questo lato.</p>
        <SeeAlso links={[['/antroposofia', 'che cos\'è l\'antroposofia'], ['/triarticolazione', 'la triarticolazione sociale'], ['/confronti', 'confronti e teorie successive']]} />
        <Sources items={[
          "Michael Ruse, <em>Democracy and Pseudo-Science: Rudolf Steiner and Anthroposophy</em>, Logos Journal.",
          "Peter Staudenmaier, <em>Between Occultism and Fascism: Anthroposophy and the Politics of Race in the Fascist Era</em>, Brill, 2014.",
          "Robert Rose, <em>Transforming Criticisms of Anthroposophy and Waldorf Education</em>.",
          "Peter Zegers e Peter Staudenmaier, materiali critici raccolti su waldorfcritics.org.",
        ]} />
      </article>
    </Layout>
  )
}
