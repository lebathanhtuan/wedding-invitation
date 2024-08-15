import { useState, useMemo } from 'react'
import { Statistic } from 'antd'
import moment from 'moment'

import Container from 'src/components/Container'
import T from 'src/components/Typography'
import { WEDDING_DAY } from 'src/constants/wedding'

import overviewBackgroundImage from 'src/assets/images/OverviewBackground.png'
import overviewCard1Image from 'src/assets/images/OverviewCard1.png'
import overviewCard2Image from 'src/assets/images/OverviewCard2.png'
import overviewCard3Image from 'src/assets/images/OverviewCard3.png'
import heartImage from 'src/assets/images/Heart.png'
import flowerBackgroundImage from 'src/assets/images/FlowerBackground.png'

import * as S from './styled'

function Overview() {
  const [countdownTime, setCountdownTime] = useState(0)

  const renderCountdown = useMemo(() => {
    const vietnamTimezoneOffset = 7 * 60 * 60 * 1000
    const oneHourTime = 60 * 60 * 1000
    const [days, hours, minutes, seconds] = moment(countdownTime - vietnamTimezoneOffset - oneHourTime)
      .format('D-H-m-s')
      .split('-')
    return (
      <S.CountdownContainer>
        <S.CountdownItem>
          <T.Title level={3} weight="regular">
            {days}
          </T.Title>
          <T.Text weight="light" size="lg">
            Ngày
          </T.Text>
        </S.CountdownItem>
        <S.CountdownItem>
          <T.Title level={3} weight="regular">
            {hours}
          </T.Title>
          <T.Text weight="light" size="lg">
            Giờ
          </T.Text>
        </S.CountdownItem>
        <S.CountdownItem>
          <T.Title level={3} weight="regular">
            {minutes}
          </T.Title>
          <T.Text weight="light" size="lg">
            Phút
          </T.Text>
        </S.CountdownItem>
        <S.CountdownItem>
          <T.Title level={3} weight="regular">
            {seconds}
          </T.Title>
          <T.Text weight="light" size="lg">
            Giây
          </T.Text>
        </S.CountdownItem>
      </S.CountdownContainer>
    )
  }, [countdownTime])

  return (
    <S.OverviewWrapper $background={overviewBackgroundImage}>
      <Container>
        <S.OverviewContainer>
          <S.OverviewLeftContent>
            <T.Title level={1} weight="regular">
              Save the Date
            </T.Title>
            <T.Title level={2} weight="regular">
              Thanh Tuấn & Bích Ni
            </T.Title>
            <T.Title level={3} weight="regular">
              {renderCountdown}
              <Statistic.Countdown
                value={moment(WEDDING_DAY).valueOf()}
                onChange={(value) => setCountdownTime(value)}
                style={{ display: 'none' }}
              />
            </T.Title>
          </S.OverviewLeftContent>
          <S.OverviewRightContent>
            <S.ImageContainer>
              <S.FlowerImage src={flowerBackgroundImage} alt="" />
              <S.CardImage1 src={overviewCard1Image} alt="" />
              <S.CardImage2 src={overviewCard2Image} alt="" />
              <S.CardImage3 src={overviewCard3Image} alt="" />
              <S.HeartImage src={heartImage} alt="" />
            </S.ImageContainer>
          </S.OverviewRightContent>
        </S.OverviewContainer>
      </Container>
    </S.OverviewWrapper>
  )
}

export default Overview
