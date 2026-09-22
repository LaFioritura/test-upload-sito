import Layout from '../components/Layout.jsx'
import SeeAlso from '../components/SeeAlso.jsx'
import Sources from '../components/Sources.jsx'

export default function Michele() {
  return (
    <Layout>
      <p className="eyebrow"><span className="dot" />le tre potenze</p>
      <h1>Michele, l'intelligenza cosmica e il compito di Arimane</h1>
      <article>
        <p>Nelle lettere settimanali che scrive ai soci fra il Natale 1923 e la Pasqua 1925 — le ultime settimane della sua vita — Steiner dedica una lunga serie di testi a Michele, l'arcangelo che chiama "amministratore dell'intelligenza cosmica". Nelle epoche più antiche, spiega, l'uomo non sentiva i propri pensieri come propri: li viveva come una rivelazione che gli arrivava attraverso la potenza di Michele. Ancora al tempo di Aristotele e di Alessandro, dice in una conferenza tenuta a Vienna nell'agosto del 1924, chi pensava sentiva il contenuto del proprio pensiero come qualcosa rivelato, non come farina del proprio sacco.</p>
        <h2>Un'intelligenza che cade nelle anime</h2>
        <p>Dopo il Mistero del Golgota questa intelligenza comincia a scivolare fuori dal governo esclusivo di Michele, dentro le singole anime umane: diventa, poco alla volta, l'intelletto ordinario che oggi ciascuno vive come pensiero proprio. Ed è proprio questo passaggio, per Steiner, a rendere pericolosa l'epoca moderna: un'intelligenza cosmica non più amministrata da una gerarchia spirituale resta ora, per così dire, alla portata di mano dentro le anime — in una fase in cui può essere presa. È esattamente l'apertura che Arimane cerca: impadronirsi, per fini materiali e meccanici, di un'intelligenza che dovrebbe restare libera, guidata da Michele, e non finire dentro un apparato di puro calcolo.</p>
        <h2>1879, e Michele contro il drago</h2>
        <p>Steiner colloca l'inizio della guida di Michele — l'epoca di Michele — nel 1879, quando, secondo l'antica tradizione dei sette arcangeli reggenti a cui attinge, l'umanità avrebbe lasciato un lungo periodo oscuro per entrare in un'epoca di luce. Nello stesso ciclo di conferenze in cui tratta Sorat e il numero 666, Steiner affronta anche il tema di Michele che vince il drago: nell'indice originale i due temi sono uno accanto all'altro, quasi due facce dello stesso insegnamento. Se Sorat prova a interrompere l'evoluzione, Michele — l'arcangelo del sole — ne è il rovescio: il custode di un'epoca che deve imparare a distinguere fra essere deviata, che è cosa di Lucifero e Arimane, ed essere cancellata, che è cosa di Sorat soltanto.</p>
        <SeeAlso links={[['/sorat', 'Sorat'], ['/doppio', 'il doppio arimanico e le macchine'], ['/cristo-golgota', 'il Cristo e il Mistero del Golgota']]} />
        <Sources items={[
          "Rudolf Steiner, GA 26, lettere ai soci (1923–1925), raccolte come <em>The Michael Mystery</em>.",
          "Rudolf Steiner, <em>Cosmic Christianity and the Impulse of Michael</em>, Vienna, 21 agosto 1924.",
          "Rudolf Steiner, GA 104, undicesima conferenza: \"Die Zahl 666, Sorat, der Sonnendämon… Michael überwindet den Drachen\".",
        ]} />
      </article>
    </Layout>
  )
}
