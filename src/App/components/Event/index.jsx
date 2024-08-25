import { Row, Col } from 'antd'
import { useTranslation } from 'react-i18next'

import Container from 'src/components/Container'
import T from 'src/components/Typography'

import brideGroomPaint2 from 'src/assets/images/BrideGroomPaint2.png'
import eventTimeline1 from 'src/assets/images/EventTimeline1.png'
import eventTimeline2 from 'src/assets/images/EventTimeline2.png'
import eventTimeline3 from 'src/assets/images/EventTimeline3.png'

import * as S from './styled'

function Event() {
  const { t, i18n } = useTranslation()

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
            <S.EventTimeline
              mode="alternate"
              items={[
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
                        {t('event.event1.title')}
                      </S.TimelineName>
                      <T.Text font="cambria">{t('event.event1.location')}</T.Text>
                      <T.Text font="cambria" weight="bold" size="sm">
                        {t('event.event1.address')}
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
                        {t('event.event2.title')}
                      </S.TimelineName>
                      <T.Text font="cambria">{t('event.event2.location')}</T.Text>
                      <T.Text font="cambria" weight="bold" size="sm">
                        {t('event.event2.address')}
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
                        {t('event.event3.title')}
                      </S.TimelineName>
                      <T.Text font="cambria" style={{ display: 'flex', flexWrap: 'wrap', lineHeight: 1.3 }}>
                        {i18n.language === 'vi' && (
                          <span style={{ marginRight: 4 }}>{t('event.event3.subLocation')}</span>
                        )}
                        <span style={{ fontWeight: 700 }}>{t('event.event3.location')}</span>
                        {i18n.language === 'en' && (
                          <span style={{ marginLeft: 4 }}>{t('event.event3.subLocation')}</span>
                        )}
                      </T.Text>
                      <T.Text font="cambria" weight="bold" size="sm">
                        {t('event.event3.address')}
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
          </Col>
        </Row>
      </Container>
    </S.EventWrapper>
  )
}

export default Event
