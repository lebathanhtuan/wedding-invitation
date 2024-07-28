import Header from 'src/layouts/Header'
import Footer from 'src/layouts/Footer'

import Overview from './components/Overview'
import Invitation from './components/Invitation'
import Couple from './components/Couple'
import Term from './components/Term'
import LoveStory from './components/LoveStory'
import Engagement from './components/Engagement'
import Event from './components/Event'
import Quote from './components/Quote'
import Gallery from './components/Gallery'
import Intention from './components/Intention'
import Confirm from './components/Confirm'
import Map from './components/Map'

import * as S from './styled'

function App() {
  return (
    <S.AppContainer>
      <Header />
      <main>
        <Overview />
        <Invitation />
        <Couple />
        <Term />
        <LoveStory />
        <Engagement />
        <Event />
        <Quote />
        <Gallery />
        <Intention />
        <Confirm />
        <Map />
      </main>
      <Footer />
    </S.AppContainer>
  )
}

export default App
