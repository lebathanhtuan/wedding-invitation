import Container from 'src/components/Container'

import * as S from './styled'

import T from 'src/components/Typography'

function Event() {
  return (
    <S.EventWrapper>
      <Container>
          <T.Title>Sự kiện</T.Title>
          <S.EventInner>
            <S.EventLeft>
              <S.EventLeftImg src="https://placehold.co/1200x1500" alt=""/>
            </S.EventLeft>
            <S.EventList>
              <S.EventItem>
                <T.Title level={3}>LỄ VU QUY</T.Title>
                <S.EventInfo>
                  <S.EventInfoLeft>
                    <S.EventInfoImg src="https://placehold.co/1200x1500" alt=""/>
                  </S.EventInfoLeft>
                  <S.EventInfoRight>
                    <S.EventCalendar>
                      <S.EventCalendarTxt>08-09-2024</S.EventCalendarTxt>
                      <S.EventCalendarTxt>7:00</S.EventCalendarTxt>
                    </S.EventCalendar>
                    <S.EventAddress>47 DH1, thôn Châu Lâu, tx Điện Bàn, Quảng Nam</S.EventAddress>
                    <S.EventMap href="#">Xem bản đồ</S.EventMap>
                  </S.EventInfoRight>
                </S.EventInfo>
              </S.EventItem>
              <S.EventItem>
                <T.Title level={3}>LỄ THÀNH HÔN</T.Title>
                <S.EventInfo>
                  <S.EventInfoLeft>
                    <S.EventInfoImg src="https://placehold.co/1200x1500" alt=""/>
                  </S.EventInfoLeft>
                  <S.EventInfoRight>
                    <S.EventCalendar>
                      <S.EventCalendarTxt>08-09-2024</S.EventCalendarTxt>
                      <S.EventCalendarTxt>9:00</S.EventCalendarTxt>
                    </S.EventCalendar>
                    <S.EventAddress>34 Cao Xuân Dục, phường Thuận Phước, quận Hải Châu, Đà Nẵng</S.EventAddress>
                    <S.EventMap href="#">Xem bản đồ</S.EventMap>
                  </S.EventInfoRight>
                </S.EventInfo>
              </S.EventItem>
              <S.EventItem>
                <T.Title level={3}>TIỆC CƯỚI</T.Title>
                <S.EventInfo>
                  <S.EventInfoLeft>
                    <S.EventInfoImg src="https://placehold.co/1200x1500" alt=""/>
                  </S.EventInfoLeft>
                  <S.EventInfoRight>
                    <S.EventCalendar>
                      <S.EventCalendarTxt>08-09-2024</S.EventCalendarTxt>
                      <S.EventCalendarTxt>11:00</S.EventCalendarTxt>
                    </S.EventCalendar>
                    <S.EventAddress>306, đường 2/9, Đà Nẵng</S.EventAddress>
                    <S.EventMap href="#">Xem bản đồ</S.EventMap>
                  </S.EventInfoRight>
                </S.EventInfo>
              </S.EventItem>
            </S.EventList>
          </S.EventInner>
      </Container>
    </S.EventWrapper>

  )
}

export default Event
