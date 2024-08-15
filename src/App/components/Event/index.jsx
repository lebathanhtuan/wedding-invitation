import { Row, Col, Flex } from 'antd'

import Container from 'src/components/Container'

import * as S from './styled'

import T from 'src/components/Typography'

function Event() {
  return (
    <S.EventWrapper>
      <Container>
        <Flex align="center" justify="center" vertical style={{ marginBottom: 24 }}>
          <T.Title level={2}>Sự Kiện Cưới</T.Title>
        </Flex>
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <S.EventLeft>
              <img src="https://placehold.co/600x450" alt="" />
            </S.EventLeft>
          </Col>
          <Col span={12}>
            <S.EventCard>
              <S.EventImage src="https://placehold.co/1200x1200" alt="" />
              <S.EventContent>
                <T.Title level={3}>Lễ Vu Quy</T.Title>
                <T.Text>08/09/2024</T.Text>
                <T.Text>7h00 - 8h00</T.Text>
                <T.Text>Tư gia nhà gái</T.Text>
                <T.Text>Thôn Châu Lâu, Điện Bàn, Quảng Nam</T.Text>
              </S.EventContent>
            </S.EventCard>
            <S.EventCard>
              <S.EventImage src="https://placehold.co/1200x1200" alt="" />
              <S.EventContent>
                <T.Title level={3}>Lễ Thành Hôn</T.Title>
                <T.Text>08/09/2024</T.Text>
                <T.Text>9h00 - 10h00</T.Text>
                <T.Text>Tư gia nhà gái</T.Text>
                <T.Text>Thôn Châu Lâu, Điện Bàn, Quảng Nam</T.Text>
              </S.EventContent>
            </S.EventCard>
            <S.EventCard>
              <S.EventImage src="https://placehold.co/1200x1200" alt="" />
              <S.EventContent>
                <T.Title level={3}>Tiệc Cưới</T.Title>
                <T.Text>08/09/2024</T.Text>
                <T.Text>Đón khách: 11h00 - Khai tiệc: 14h00</T.Text>
                <T.Text>Minh Toàn Galaxy</T.Text>
                <T.Text align="center">
                  Tầng 3, sảnh Eros
                  <br />
                  306, Đường 2/9, Hải Châu, Đà Nẵng
                </T.Text>
              </S.EventContent>
            </S.EventCard>
          </Col>
        </Row>
      </Container>
    </S.EventWrapper>
  )
}

export default Event
