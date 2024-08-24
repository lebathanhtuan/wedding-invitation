import { Row } from 'antd'
import { useTranslation } from 'react-i18next'

import Container from 'src/components/Container'
import T from 'src/components/Typography'

import loveStory1Image from 'src/assets/images/LoveStory1.png'
import loveStory2Image from 'src/assets/images/LoveStory2.png'
import loveStory3Image from 'src/assets/images/LoveStory3.png'
import loveStory4Image from 'src/assets/images/LoveStory4.png'
import loveStory5Image from 'src/assets/images/LoveStory5.png'
import loveStory6Image from 'src/assets/images/LoveStory6.png'

import * as S from './styled'

function LoveStory() {
  const { t } = useTranslation()
  return (
    <S.LoveStoryWrapper>
      <Container>
        <S.LoveStoryTitle align="center" justify="center" vertical>
          <T.Text size="lg">{t('loveStory.title')}</T.Text>
          <T.Title level={2} align="center" color="primary" style={{ lineHeight: 1 }}>
            {t('loveStory.subTitle')}
          </T.Title>
        </S.LoveStoryTitle>
        <Row gutter={[32, -16]}>
          <S.LoveStoryCol md={{ span: 12, order: 1 }} xs={{ span: 24, order: 1 }} $right>
            <img src={loveStory1Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 2 }} xs={{ span: 24, order: 2 }}>
            <T.Title size="xxl" color="primary">
              {t('loveStory.theFirstDay.title')}
            </T.Title>
            <T.Text font="cormorant">{t('loveStory.theFirstDay.description')}</T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 3 }} xs={{ span: 24, order: 4 }} $right>
            <T.Title size="xxl" color="primary">
              {t('loveStory.firstLoveDay.title')}
            </T.Title>
            <T.Text font="cormorant">{t('loveStory.firstLoveDay.description')}</T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 4 }} xs={{ span: 24, order: 3 }}>
            <img src={loveStory2Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 5 }} xs={{ span: 24, order: 5 }} $right>
            <img src={loveStory3Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 6 }} xs={{ span: 24, order: 6 }}>
            <T.Title size="xxl" color="primary">
              {t('loveStory.theLoveJourney.title')}
            </T.Title>
            <T.Text font="cormorant">{t('loveStory.theLoveJourney.description')}</T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 7 }} xs={{ span: 24, order: 8 }} $right>
            <T.Title size="xxl" color="primary">
              {t('loveStory.sheSayYes.title')}
            </T.Title>
            <T.Text font="cormorant">{t('loveStory.sheSayYes.description')}</T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 8 }} xs={{ span: 24, order: 7 }}>
            <img src={loveStory4Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 9 }} xs={{ span: 24, order: 9 }} $right>
            <img src={loveStory5Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 10 }} xs={{ span: 24, order: 10 }}>
            <T.Title size="xxl" color="primary">
              {t('loveStory.engagementDay.title')}
            </T.Title>
            <T.Text font="cormorant">{t('loveStory.engagementDay.description')}</T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 11 }} xs={{ span: 24, order: 12 }} $right>
            <T.Title size="xxl" color="primary">
              {t('loveStory.theWedding.title')}
            </T.Title>
            <T.Text font="cormorant">{t('loveStory.theWedding.description')}</T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol md={{ span: 12, order: 12 }} xs={{ span: 24, order: 11 }}>
            <img src={loveStory6Image} alt="" />
          </S.LoveStoryCol>
        </Row>
      </Container>
    </S.LoveStoryWrapper>
  )
}

export default LoveStory
