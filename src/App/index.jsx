import { FloatButton } from 'antd'
import { useTranslation } from 'react-i18next'

import Header from 'src/layouts/Header'

import Overview from './components/Overview'
import Invitation from './components/Invitation'
import Couple from './components/Couple'
import LoveStory from './components/LoveStory'
import Engagement from './components/Engagement'
import Event from './components/Event'
// import Quote from './components/Quote'
// import Gallery from './components/Gallery'
import Intention from './components/Intention'
import Confirm from './components/Confirm'
import Thanks from './components/Thanks'

import * as S from './styled'

function App() {
  const { t } = useTranslation()

  return (
    <S.AppContainer>
      <Header />
      <main>
        <Overview />
        <Couple />
        <Invitation />
        <LoveStory />
        <Engagement />
        <Event />
        {/* <Quote /> */}
        {/* <Gallery /> */}
        <Intention />
        <Confirm />
        <Thanks />
      </main>
      <FloatButton.BackTop type="primary" tooltip={<div>{t('common.backToTop')}</div>} />
    </S.AppContainer>
  )
}

export default App
