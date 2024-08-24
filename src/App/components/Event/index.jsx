import { Row, Col } from 'antd'
import { useTranslation } from 'react-i18next'

import Container from 'src/components/Container'
import T from 'src/components/Typography'

import { EVENT_LIST } from './constants'
import brideGroomPaint2 from 'src/assets/images/BrideGroomPaint2.png'

import * as S from './styled'

function Event() {
  const { t } = useTranslation()

  return (
    <S.EventWrapper id="event">
      <Container>
        <S.EventContainer align="center" justify="center" vertical>
          <T.Text size="lg">{t('event.title')}</T.Text>
          <T.Title level={2} align="center" color="primary" style={{ lineHeight: 1 }}>
            {t('event.subTitle')}
          </T.Title>
        </S.EventContainer>
        <Row gutter={[24, 24]} align="middle">
          <Col lg={{ span: 10 }} xs={{ span: 24 }}>
            <S.EventLeft>
              <img src={brideGroomPaint2} alt="" />
            </S.EventLeft>
          </Col>
          <Col lg={{ span: 14 }} xs={{ span: 24 }}>
            <S.EventTimeline mode="alternate" items={EVENT_LIST} />
          </Col>
        </Row>
      </Container>
    </S.EventWrapper>
  )
}

export default Event
