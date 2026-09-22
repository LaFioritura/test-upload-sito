import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Antroposofia from './pages/Antroposofia.jsx'
import MetodoGoethiano from './pages/MetodoGoethiano.jsx'
import TeosofiaScissione from './pages/TeosofiaScissione.jsx'
import Cronologia from './pages/Cronologia.jsx'
import Costituzione from './pages/Costituzione.jsx'
import Epoche from './pages/Epoche.jsx'
import Karma from './pages/Karma.jsx'
import Soglia from './pages/Soglia.jsx'
import CristoGolgota from './pages/CristoGolgota.jsx'
import Triplicita from './pages/Triplicita.jsx'
import Sorat from './pages/Sorat.jsx'
import Michele from './pages/Michele.jsx'
import Doppio from './pages/Doppio.jsx'
import FondazioneMeditazione from './pages/FondazioneMeditazione.jsx'
import PedagogiaWaldorf from './pages/PedagogiaWaldorf.jsx'
import AgricolturaBiodinamica from './pages/AgricolturaBiodinamica.jsx'
import MedicinaAntroposofica from './pages/MedicinaAntroposofica.jsx'
import ArtiArchitettura from './pages/ArtiArchitettura.jsx'
import Triarticolazione from './pages/Triarticolazione.jsx'
import RicezioneCritica from './pages/RicezioneCritica.jsx'
import Confronti from './pages/Confronti.jsx'
import TraiettorieCuriose from './pages/TraiettorieCuriose.jsx'
import Bibliografia from './pages/Bibliografia.jsx'
import Conclusione from './pages/Conclusione.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/antroposofia" element={<Antroposofia />} />
      <Route path="/metodo-goethiano" element={<MetodoGoethiano />} />
      <Route path="/teosofia-scissione" element={<TeosofiaScissione />} />
      <Route path="/cronologia" element={<Cronologia />} />
      <Route path="/costituzione" element={<Costituzione />} />
      <Route path="/epoche" element={<Epoche />} />
      <Route path="/karma" element={<Karma />} />
      <Route path="/soglia" element={<Soglia />} />
      <Route path="/cristo-golgota" element={<CristoGolgota />} />
      <Route path="/triplicita" element={<Triplicita />} />
      <Route path="/sorat" element={<Sorat />} />
      <Route path="/michele" element={<Michele />} />
      <Route path="/doppio" element={<Doppio />} />
      <Route path="/fondazione-meditazione" element={<FondazioneMeditazione />} />
      <Route path="/pedagogia-waldorf" element={<PedagogiaWaldorf />} />
      <Route path="/agricoltura-biodinamica" element={<AgricolturaBiodinamica />} />
      <Route path="/medicina-antroposofica" element={<MedicinaAntroposofica />} />
      <Route path="/arti-architettura" element={<ArtiArchitettura />} />
      <Route path="/triarticolazione" element={<Triarticolazione />} />
      <Route path="/ricezione-critica" element={<RicezioneCritica />} />
      <Route path="/confronti" element={<Confronti />} />
      <Route path="/traiettorie-curiose" element={<TraiettorieCuriose />} />
      <Route path="/bibliografia" element={<Bibliografia />} />
      <Route path="/conclusione" element={<Conclusione />} />
    </Routes>
  )
}
