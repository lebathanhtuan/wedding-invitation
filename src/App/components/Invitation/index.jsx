import { useState } from 'react'
import { Row, Col, Flex } from 'antd'
import moment from 'moment'
import Lightbox from 'yet-another-react-lightbox'
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

  return (
    <S.InvitationWrapper $background={skylineImage}>
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
            TRÂN TRỌNG KÍNH MỜI QUÝ KHÁCH
            <br />
            ĐẾN DỰ BỮA TIỆC CHUNG VUI CÙNG GIA ĐÌNH CHÚNG TÔI TẠI
          </T.Text>
          <S.RestaurantName level={1} font="dancing" weight="light" color="primary">
            Minh Toàn Galaxy
          </S.RestaurantName>
          <T.Text>Tầng 3, Sảnh Eros, 306 Đ. 2 Tháng 9, Hải Châu, Đà Nẵng</T.Text>
          <T.Text style={{ margin: '8px 0' }}>VÀO LÚC 11H00</T.Text>
          <Flex align="center" justify="center">
            <T.Text size="lg" style={{ borderTop: '1px solid #2e2e2e', borderBottom: '1px solid #2e2e2e' }}>
              CHỦ NHẬT
            </T.Text>
            <Flex align="center" justify="center" vertical style={{ margin: '0 8px' }}>
              <T.Text size="xs">NGÀY</T.Text>
              <T.Text size="xxl" style={{ lineHeight: 1.1 }}>
                08
              </T.Text>
              <T.Text size="xs">2024</T.Text>
            </Flex>
            <T.Text size="lg" style={{ borderTop: '1px solid #2e2e2e', borderBottom: '1px solid #2e2e2e' }}>
              THÁNG 9
            </T.Text>
          </Flex>
          <T.Text style={{ marginTop: 4 }}>(Nhằm ngày 06 tháng 08 năm Giáp Thìn)</T.Text>
          <T.Text>Đón khách: 11h00 - Khai tiệc: 12h00</T.Text>
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
