import { useState } from 'react'
import { Row, Col, Flex } from 'antd'
import moment from 'moment'
import Lightbox from 'yet-another-react-lightbox'
import { useTranslation } from 'react-i18next'
// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

import Container from 'src/components/Container'
import T from 'src/components/Typography'
import { WEDDING_DAY } from 'src/constants/wedding'

import leftImage from 'src/assets/images/InvitationLeft.jpg'
import middleImage from 'src/assets/images/InvitationMiddle.jpg'
import rightImage from 'src/assets/images/InvitationRight.jpg'
import skylineImage from 'src/assets/images/SkylineDaNang.png'
import fullLeftImage from 'src/assets/photos/QUYS9789-min.jpg'
import fullMiddleImage from 'src/assets/photos/QUYS9603-min.jpg'
import fullRightImage from 'src/assets/photos/QUYS9514-min.jpg'

import * as S from './styled'

function Invitation() {
  const [lightboxActiveIndex, setLightboxActiveIndex] = useState(-1)
  const { t } = useTranslation()

  return (
    <S.InvitationWrapper id="invitation" $background={skylineImage}>
      <Container>
        <Row gutter={4}>
          <Col span={8}>
            <S.ImageWrapper onClick={() => setLightboxActiveIndex(0)}>
              <S.ImageContent src={leftImage} />
              <S.ImageLabel>{moment(WEDDING_DAY).format('DD')}</S.ImageLabel>
            </S.ImageWrapper>
          </Col>
          <Col span={8}>
            <S.ImageWrapper onClick={() => setLightboxActiveIndex(1)}>
              <S.ImageContent src={middleImage} />
              <S.ImageLabel>{moment(WEDDING_DAY).format('MM')}</S.ImageLabel>
            </S.ImageWrapper>
          </Col>
          <Col span={8}>
            <S.ImageWrapper onClick={() => setLightboxActiveIndex(2)}>
              <S.ImageContent src={rightImage} />
              <S.ImageLabel>{moment(WEDDING_DAY).format('YY')}</S.ImageLabel>
            </S.ImageWrapper>
          </Col>
        </Row>
        <S.InvitationContainer>
          <T.Text size="sm" align="center">
            {t('invitation.title')}
            <br />
            {t('invitation.subTitle')}
          </T.Text>
          <S.RestaurantName level={1} font="dancing" weight="light" color="primary">
            {t('invitation.restaurant')}
          </S.RestaurantName>
          <T.Text align="center">{t('invitation.address')}</T.Text>
          <T.Text style={{ margin: '8px 0' }}>{t('invitation.time')}</T.Text>
          <Flex align="center" justify="center">
            <T.Text size="lg" style={{ borderTop: '1px solid #2e2e2e', borderBottom: '1px solid #2e2e2e' }}>
              {t('invitation.dddd')}
            </T.Text>
            <Flex align="center" justify="center" vertical style={{ margin: '0 8px' }}>
              <T.Text size="xs">{t('invitation.date')}</T.Text>
              <T.Text size="xxl" style={{ lineHeight: 1.1 }}>
                {t('invitation.DD')}
              </T.Text>
              <T.Text size="xs">{t('invitation.YYYY')}</T.Text>
            </Flex>
            <T.Text size="lg" style={{ borderTop: '1px solid #2e2e2e', borderBottom: '1px solid #2e2e2e' }}>
              {t('invitation.MMMM')}
            </T.Text>
          </Flex>
          <T.Text style={{ marginTop: 4 }}>{t('invitation.viDate')}</T.Text>
          <T.Text>{t('invitation.schedule')}</T.Text>
        </S.InvitationContainer>
      </Container>
      <Lightbox
        slides={[fullLeftImage, fullMiddleImage, fullRightImage].map((src, index) => ({ src }))}
        open={lightboxActiveIndex >= 0}
        index={lightboxActiveIndex}
        close={() => setLightboxActiveIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </S.InvitationWrapper>
  )
}

export default Invitation
