import { Row, Col, Flex } from 'antd'

import Container from 'src/components/Container'
import T from 'src/components/Typography'

import brideGroomPaint2 from 'src/assets/images/BrideGroomPaint2.png'
import eventTimeline1 from 'src/assets/images/EventTimeline1.png'
import eventTimeline2 from 'src/assets/images/EventTimeline2.png'
import eventTimeline3 from 'src/assets/images/EventTimeline3.png'

import * as S from './styled'

function Event() {
  return (
    <S.EventWrapper>
      <Container>
        <Flex align="center" justify="center" vertical style={{ marginBottom: 24 }}>
          <T.Title level={2} color="primary">
            Sự Kiện Quang Trọng
          </T.Title>
        </Flex>
        <Row gutter={[24, 24]} align="middle">
          <Col lg={{ span: 10 }} xs={{ span: 24 }}>
            <S.EventLeft>
              <img src={brideGroomPaint2} alt="" />
            </S.EventLeft>
          </Col>
          <Col lg={{ span: 14 }} xs={{ span: 24 }}>
            <S.EventTimeline
              mode="alternate"
              items={[
                {
                  label: (
                    <>
                      <T.Text size="sm" font="cambria">
                        08/09/2024
                      </T.Text>
                      <T.Text color="primary" font="cambria">
                        7h00
                      </T.Text>
                    </>
                  ),
                  children: (
                    <>
                      <T.Title level={2} color="primary">
                        Lễ Vu Quy
                      </T.Title>
                      <T.Text font="cambria">Nhà gái</T.Text>
                      <T.Text font="cambria" weight="bold" size="sm">
                        Điện Thọ, Điện Bàn, Quảng Nam
                      </T.Text>
                    </>
                  ),
                  dot: (
                    <S.EventIconWrapper>
                      <S.EventIconContainer>
                        <S.EventIconItem src={eventTimeline1} alt="" />
                      </S.EventIconContainer>
                    </S.EventIconWrapper>
                  ),
                },
                {
                  label: (
                    <>
                      <T.Text size="sm" font="cambria">
                        08/09/2024
                      </T.Text>
                      <T.Text color="primary" font="cambria">
                        8h15
                      </T.Text>
                    </>
                  ),
                  children: (
                    <>
                      <T.Title level={2} color="primary">
                        Rước Dâu
                      </T.Title>
                      <T.Text font="cambria">Nhà gái</T.Text>
                      <T.Text font="cambria" weight="bold" size="sm">
                        Điện Thọ, Điện Bàn, Quảng Nam
                      </T.Text>
                    </>
                  ),
                  dot: (
                    <S.EventIconWrapper>
                      <S.EventIconContainer>
                        <S.EventIconItem src={eventTimeline2} alt="" />
                      </S.EventIconContainer>
                    </S.EventIconWrapper>
                  ),
                },
                {
                  label: (
                    <>
                      <T.Text size="sm" font="cambria">
                        08/09/2024
                      </T.Text>
                      <T.Text color="primary" font="cambria">
                        12h00
                      </T.Text>
                    </>
                  ),
                  children: (
                    <>
                      <T.Title level={2} color="primary">
                        Lễ Thành Hôn
                      </T.Title>
                      <T.Text font="cambria">Nhà hàng tiệc cưới Minh Toàn Galaxy</T.Text>
                      <T.Text font="cambria" weight="bold" size="sm">
                        306 Đường 2/9, Hải Châu, Đà Nẵng
                      </T.Text>
                    </>
                  ),
                  dot: (
                    <S.EventIconWrapper>
                      <S.EventIconContainer>
                        <S.EventIconItem src={eventTimeline3} alt="" />
                      </S.EventIconContainer>
                    </S.EventIconWrapper>
                  ),
                },
              ]}
            />
            {/* <S.EventCard>
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
            </S.EventCard> */}
          </Col>
        </Row>
      </Container>
    </S.EventWrapper>
  )
}

export default Event
