import { Row, Col, Flex } from 'antd'

import Container from 'src/components/Container'
import T from 'src/components/Typography'

import heartPhotosImage from 'src/assets/images/HeartPhotos.png'
import justMarriedImage from 'src/assets/images/JustMarried.png'
import brideGroomPaintImage from 'src/assets/images/BrideGroomPaint.png'

import * as S from './styled'

function Intention() {
  return (
    <S.IntentionWrapper>
      <Container>
        <Row gutter={[16, 24]} align="middle">
          <Col md={12} xs={24}>
            <Flex align="center" justify="center" vertical>
              <T.Text size="lg" align="center" style={{ marginBottom: 16 }}>
                Thân mời bạn tham gia bữa tiệc, <br /> đánh dấu ngày chúng mình về chung một nhà!
              </T.Text>
              <img src={heartPhotosImage} alt="Heart Photos" />
              {/* <S.GridContainer>
                <S.GridItem></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem></S.GridItem>
                <S.GridItem></S.GridItem>
                <S.GridItem></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem></S.GridItem>
                <S.GridItem></S.GridItem>
                <S.GridItem></S.GridItem>
                <S.GridItem></S.GridItem>
                <S.GridItem></S.GridItem>
                <S.GridItem $image="https://placehold.co/60x60"></S.GridItem>
                <S.GridItem></S.GridItem>
                <S.GridItem></S.GridItem>
                <S.GridItem></S.GridItem>
              </S.GridContainer> */}
            </Flex>
          </Col>
          <Col md={12} xs={24}>
            <Flex align="center" justify="center" vertical>
              <img src={justMarriedImage} alt="Just Married" style={{ maxWidth: 180 }} />
              <S.PaintImage src={brideGroomPaintImage} />
            </Flex>
          </Col>
        </Row>
      </Container>
    </S.IntentionWrapper>
  )
}

export default Intention
