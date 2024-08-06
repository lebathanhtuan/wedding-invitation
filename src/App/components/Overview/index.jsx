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
  return (
    <S.OverviewWrapper $background={overviewBackgroundImage}>
      <Container>
        <S.CountdownContainer>
          <S.OverviewLeftContent>
            <T.Title level={1} weight="regular">
              Save the Date
            </T.Title>
            <T.Title level={2} weight="regular">
              Thanh Tuấn & Bích Ni
            </T.Title>
            <T.Title level={3} weight="regular">
              <Statistic.Countdown value={moment(WEDDING_DAY).valueOf()} format="DD:HH:mm:ss" />
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
        </S.CountdownContainer>
      </Container>
    </S.OverviewWrapper>
  )
}

export default Overview
