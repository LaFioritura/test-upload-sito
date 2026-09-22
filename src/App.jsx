import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'

import Home from './pages/Home.jsx'
import Method from './pages/Method.jsx'
import Anthroposophy from './pages/Anthroposophy.jsx'
import GoetheanMethod from './pages/GoetheanMethod.jsx'
import TheosophySplit from './pages/TheosophySplit.jsx'
import Timeline from './pages/Timeline.jsx'
import Constitution from './pages/Constitution.jsx'
import Epochs from './pages/Epochs.jsx'
import Karma from './pages/Karma.jsx'
import Threshold from './pages/Threshold.jsx'
import ChristGolgotha from './pages/ChristGolgotha.jsx'
import Triplicity from './pages/Triplicity.jsx'
import Sorat from './pages/Sorat.jsx'
import Michael from './pages/Michael.jsx'
import Double from './pages/Double.jsx'
import FoundationStone from './pages/FoundationStone.jsx'
import Waldorf from './pages/Waldorf.jsx'
import Biodynamics from './pages/Biodynamics.jsx'
import Medicine from './pages/Medicine.jsx'
import ArtsArchitecture from './pages/ArtsArchitecture.jsx'
import Threefolding from './pages/Threefolding.jsx'
import Reception from './pages/Reception.jsx'
import Comparisons from './pages/Comparisons.jsx'
import Trajectories from './pages/Trajectories.jsx'
import PresentTense from './pages/PresentTense.jsx'
import Hypothesis from './pages/Hypothesis.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import Predictions from './pages/Predictions.jsx'
import Bibliography from './pages/Bibliography.jsx'
import Conclusion from './pages/Conclusion.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/method" element={<Method />} />
      <Route path="/anthroposophy" element={<Anthroposophy />} />
      <Route path="/goethean-method" element={<GoetheanMethod />} />
      <Route path="/theosophy-split" element={<TheosophySplit />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/constitution" element={<Constitution />} />
      <Route path="/epochs" element={<Epochs />} />
      <Route path="/karma" element={<Karma />} />
      <Route path="/threshold" element={<Threshold />} />
      <Route path="/christ-golgotha" element={<ChristGolgotha />} />
      <Route path="/triplicity" element={<Triplicity />} />
      <Route path="/sorat" element={<Sorat />} />
      <Route path="/michael" element={<Michael />} />
      <Route path="/double" element={<Double />} />
      <Route path="/foundation-stone" element={<FoundationStone />} />
      <Route path="/waldorf" element={<Waldorf />} />
      <Route path="/biodynamics" element={<Biodynamics />} />
      <Route path="/medicine" element={<Medicine />} />
      <Route path="/arts-architecture" element={<ArtsArchitecture />} />
      <Route path="/threefolding" element={<Threefolding />} />
      <Route path="/reception" element={<Reception />} />
      <Route path="/comparisons" element={<Comparisons />} />
      <Route path="/trajectories" element={<Trajectories />} />
      <Route path="/present-tense" element={<PresentTense />} />
      <Route path="/hypothesis" element={<Hypothesis />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/predictions" element={<Predictions />} />
      <Route path="/bibliography" element={<Bibliography />} />
      <Route path="/conclusion" element={<Conclusion />} />
      </Routes>
    </>
  )
}
