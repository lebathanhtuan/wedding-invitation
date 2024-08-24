import T from 'src/components/Typography'

import eventTimeline1 from 'src/assets/images/EventTimeline1.png'
import eventTimeline2 from 'src/assets/images/EventTimeline2.png'
import eventTimeline3 from 'src/assets/images/EventTimeline3.png'

import * as S from './styled'

export const EVENT_LIST = [
  {
    label: (
      <>
        <T.Text size="sm" font="poppins">
          08/09/2024
        </T.Text>
        <T.Text color="primary" font="cambria">
          7h00
        </T.Text>
      </>
    ),
    children: (
      <S.TimelineContent>
        <S.TimelineName level={2} color="primary">
          Lễ Vu Quy
        </S.TimelineName>
        <T.Text font="cambria">Nhà gái</T.Text>
        <T.Text font="cambria" weight="bold" size="sm">
          Điện Thọ, Điện Bàn, Quảng Nam
        </T.Text>
      </S.TimelineContent>
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
        <T.Text size="sm" font="poppins">
          08/09/2024
        </T.Text>
        <T.Text color="primary" font="cambria">
          8h15
        </T.Text>
      </>
    ),
    children: (
      <S.TimelineContent>
        <S.TimelineName level={2} color="primary">
          Rước Dâu
        </S.TimelineName>
        <T.Text font="cambria">Nhà gái</T.Text>
        <T.Text font="cambria" weight="bold" size="sm">
          Điện Thọ, Điện Bàn, Quảng Nam
        </T.Text>
      </S.TimelineContent>
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
        <T.Text size="sm" font="poppins">
          08/09/2024
        </T.Text>
        <T.Text color="primary" font="cambria">
          12h00
        </T.Text>
      </>
    ),
    children: (
      <>
        <S.TimelineName level={2} color="primary">
          Lễ Thành Hôn
        </S.TimelineName>
        <T.Text font="cambria" style={{ display: 'flex', flexWrap: 'wrap', lineHeight: 1.3 }}>
          <span style={{ marginRight: 4 }}>Nhà hàng tiệc cưới</span>
          <span style={{ fontWeight: 700 }}>Minh Toàn Galaxy</span>
        </T.Text>
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
]
