import { Row, Col, Flex } from 'antd'

import Container from 'src/components/Container'
import T from 'src/components/Typography'

import coupleLeftImage from 'src/assets/images/CoupleLeft.jpg'
import coupleRightImage from 'src/assets/images/CoupleRight.jpg'
import coupleMiddleImage from 'src/assets/images/CoupleMiddle.png'
import coupleBackgroundImage from 'src/assets/images/CoupleBackground.jpg'
import coupleTextImage from 'src/assets/images/CoupleText.png'

import * as S from './styled'

function Couple() {
  return (
    <S.CoupleWrapper $background={coupleBackgroundImage}>
      <Container>
        <Flex align="center" justify="center" style={{ marginBottom: 8 }}>
          <S.TextImage src={coupleTextImage} alt="" />
        </Flex>
        <Row gutter={[16, 16]} align="middle">
          <Col lg={{ span: 10, order: 1 }} xs={{ span: 12, order: 2 }}>
            <Flex align="center" justify="center" vertical>
              <S.ImageWrapper>
                <S.ImageContainer>
                  <S.ImageContent>
                    <S.ImageItem src={coupleLeftImage} alt="" />
                  </S.ImageContent>
                </S.ImageContainer>
              </S.ImageWrapper>
              <T.Text size="xxxl" color="light" style={{ margin: '24px 0 16px' }}>
                Thanh Tuấn
              </T.Text>
              <T.Text size="lg" color="light" align="center">
                Đối với chúng mình hôn nhân không phải là đích đến cuối của tình yêu mà là khởi đầu của hạnh phúc.
              </T.Text>
            </Flex>
          </Col>
          <Col lg={{ span: 4, order: 2 }} xs={{ span: 24, order: 1 }}>
            <S.CoupleRow>
              <Col lg={{ span: 24 }} xs={{ span: 10 }}>
                <Flex align="center" justify="center" vertical>
                  <T.Text size="xxl" color="light">
                    Nhà trai
                  </T.Text>
                  <T.Text size="lg" color="light" align="center">
                    Ông. Lê Bá Thanh
                    <br />
                    Bà. Châu Thị Xuân
                  </T.Text>
                </Flex>
              </Col>
              <Col lg={{ span: 24 }} xs={{ span: 4 }}>
                <Flex align="center" justify="center" vertical>
                  <S.MiddleImage src={coupleMiddleImage} alt="" />
                </Flex>
              </Col>
              <Col lg={{ span: 24 }} xs={{ span: 10 }}>
                <Flex align="center" justify="center" vertical>
                  <T.Text size="xxl" color="light">
                    Nhà Gái
                  </T.Text>
                  <T.Text size="lg" color="light" align="center">
                    Ông. Nguyễn Văn Hiệu
                    <br />
                    Bà. Phan Thị Bích Vân
                  </T.Text>
                </Flex>
              </Col>
            </S.CoupleRow>
          </Col>
          <Col lg={{ span: 10, order: 3 }} xs={{ span: 12, order: 3 }}>
            <Flex align="center" justify="center" vertical>
              <S.ImageWrapper>
                <S.ImageContainer>
                  <S.ImageContent>
                    <S.ImageItem src={coupleRightImage} alt="" />
                  </S.ImageContent>
                </S.ImageContainer>
              </S.ImageWrapper>
              <T.Text size="xxxl" color="light" style={{ margin: '24px 0 16px' }}>
                Bích Ni
              </T.Text>
              <T.Text size="lg" color="light" align="center">
                Ở thời điểm phù hợp nhất, khoác lên mình bộ váy cưới đẹp nhất, gả cho người đáng tin cậy nhất, là anh.
              </T.Text>
            </Flex>
          </Col>
        </Row>
        {/* <S.CoupleInner>
          <S.CoupleCol>
            <S.CoupleImgWrapper>
              <S.CoupleImg src="https://placehold.co/1200x1500" alt="" />
            </S.CoupleImgWrapper>
            <S.CoupleName>Thanh Tuấn</S.CoupleName>
            <S.CoupleDes>
              Đối với chúng mình hôn nhân không phải là đích đến cuối của tình yêu mà là khởi đầu của hạnh phúc.{' '}
            </S.CoupleDes>
          </S.CoupleCol>
          <S.FamilyCol>
            <S.FamilyTtl>NHÀ TRAI</S.FamilyTtl>
            <S.FamilyName>
              <em>
                <strong>Ông: Lê Bá Thanh</strong>
                <br />
                <strong>Bà: Châu Thị Xuân</strong>
                <br />
              </em>
            </S.FamilyName>
            <S.CoupleDraw>image</S.CoupleDraw>
            <S.FamilyTtl>NHÀ GÁI</S.FamilyTtl>
            <S.FamilyName>
              <em>
                <strong>Ông: Nguyễn Văn Hiệu</strong>
                <br />
                <strong>Bà: Phan Thị Bích Vân</strong>
                <br />
              </em>
            </S.FamilyName>
          </S.FamilyCol>
          <S.CoupleCol>
            <S.CoupleImgWrapper>
              <S.CoupleImg src="https://placehold.co/1200x1500" alt="" />
            </S.CoupleImgWrapper>
            <S.CoupleName>Bích Ni</S.CoupleName>
            <S.CoupleDes>
              Ở thời điểm phù hợp nhất, khoác lên mình bộ váy cưới đẹp nhất, gả cho người đáng tin cậy nhất, là anh.
            </S.CoupleDes>
          </S.CoupleCol>
        </S.CoupleInner> */}
      </Container>
    </S.CoupleWrapper>
  )
}

export default Couple
