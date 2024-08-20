import { Row, Col, Flex } from 'antd'

import Container from 'src/components/Container'
import T from 'src/components/Typography'

import brideGroomPaintImage from 'src/assets/images/BrideGroomPaint.png'

import * as S from './styled'

function Intention() {
  return (
    <S.IntentionWrapper>
      <Container>
        <Row gutter={[16, 16]} align="middle">
          <Col md={12} xs={24}>
            <Flex align="center" justify="center" vertical>
              <T.Text align="center">
                Thân mời bạn tham gia bữa tiệc <br /> đánh dấu ngày chúng mình về chung một nhà!
              </T.Text>
              <S.GridContainer>
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
              </S.GridContainer>
            </Flex>
          </Col>
          <Col md={12} xs={24}>
            <Flex align="center" justify="center" vertical>
              <T.Title>Just Married</T.Title>
              <S.PaintImage src={brideGroomPaintImage} />
            </Flex>
          </Col>
        </Row>
      </Container>
    </S.IntentionWrapper>
  )
}

export default Intention
