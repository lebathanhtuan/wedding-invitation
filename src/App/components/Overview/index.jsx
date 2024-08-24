import { useState, useMemo, useEffect } from 'react'
import { Statistic } from 'antd'
import moment from 'moment'
import ReactPlayer from 'react-player'

import Container from 'src/components/Container'
import T from 'src/components/Typography'
import { WEDDING_DAY, INVITATION_VIDEO_PC, INVITATION_VIDEO_SP } from 'src/constants/wedding'

import primarySaveTheDateImage from 'src/assets/images/PrimarySaveTheDate.png'
import overviewBackgroundImage from 'src/assets/images/OverviewBackground.png'
import overviewCard1Image from 'src/assets/images/OverviewCard1.png'
import overviewCard2Image from 'src/assets/images/OverviewCard2.png'
import overviewCard3Image from 'src/assets/images/OverviewCard3.png'
import heartImage from 'src/assets/images/Heart.png'
import flowerBackgroundImage from 'src/assets/images/FlowerBackground.png'
import letterPlayImage from 'src/assets/images/LetterPlay.png'
import moviePlayImage from 'src/assets/images/MoviePlay.png'

import * as S from './styled'

function Overview() {
  const [firstVideoLoaded, setFirstVideoLoaded] = useState(true)
  const [isShowVideoModal, setIsShowVideoModal] = useState(true)
  const [isResizeSP, setIsResizeSP] = useState(false)
  const [countdownTime, setCountdownTime] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsResizeSP(true)
      } else {
        setIsResizeSP(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const onChangeCountdown = (value) => {
    const vietnamTimezoneOffset = 7 * 60 * 60 * 1000
    const oneHourTime = 60 * 60 * 1000
    const [days, hours, minutes, seconds] = moment(value - vietnamTimezoneOffset - oneHourTime)
      .format('D-H-m-s')
      .split('-')
    setCountdownTime({ days, hours, minutes, seconds })
  }

  const renderDays = useMemo(
    () => (
      <S.CountdownItem>
        <T.Title level={3} weight="regular" color="primary">
          {countdownTime.days}
        </T.Title>
        <T.Text weight="light" size="lg">
          Ngày
        </T.Text>
      </S.CountdownItem>
    ),
    [countdownTime.days],
  )

  const renderHours = useMemo(
    () => (
      <S.CountdownItem>
        <T.Title level={3} weight="regular" color="primary">
          {countdownTime.hours}
        </T.Title>
        <T.Text weight="light" size="lg">
          Giờ
        </T.Text>
      </S.CountdownItem>
    ),
    [countdownTime.hours],
  )

  const renderMinutes = useMemo(
    () => (
      <S.CountdownItem>
        <T.Title level={3} weight="regular" color="primary">
          {countdownTime.minutes}
        </T.Title>
        <T.Text weight="light" size="lg">
          Phút
        </T.Text>
      </S.CountdownItem>
    ),
    [countdownTime.minutes],
  )

  const renderSeconds = useMemo(
    () => (
      <S.CountdownItem>
        <T.Title level={3} weight="regular" color="primary">
          {countdownTime.seconds}
        </T.Title>
        <T.Text weight="light" size="lg">
          Giây
        </T.Text>
      </S.CountdownItem>
    ),
    [countdownTime.seconds],
  )

  const renderVideoModal = useMemo(() => {
    if (!isShowVideoModal) return null
    return (
      <S.VideoModal
        open
        centered
        footer={null}
        width="100%"
        onCancel={() => {
          setIsShowVideoModal(false)
          setFirstVideoLoaded(false)
        }}
      >
        <S.ModalContent>
          <ReactPlayer
            id="video-modal"
            url={isResizeSP ? INVITATION_VIDEO_SP : INVITATION_VIDEO_PC}
            playing
            playsinline
            controls
            width="100%"
            height="100%"
            muted={firstVideoLoaded}
            onEnded={() => {
              setIsShowVideoModal(false)
              setFirstVideoLoaded(false)
            }}
          />
        </S.ModalContent>
      </S.VideoModal>
    )
  }, [firstVideoLoaded, isResizeSP, isShowVideoModal])

  return (
    <S.OverviewWrapper $background={overviewBackgroundImage}>
      <Container>
        <S.OverviewContainer>
          <S.OverviewLeftContent>
            <img src={primarySaveTheDateImage} alt="" />
            <div>
              <S.CountdownContainer>
                {renderDays}
                {renderHours}
                {renderMinutes}
                {renderSeconds}
              </S.CountdownContainer>
              <Statistic.Countdown
                value={moment(WEDDING_DAY).valueOf()}
                onChange={onChangeCountdown}
                style={{ display: 'none' }}
              />
            </div>
            <S.PlayButton onClick={() => setIsShowVideoModal(true)}>
              <img src={letterPlayImage} className="letter" alt="" />
              <img src={moviePlayImage} className="movie" alt="" />
              <S.PlayNote>Click me</S.PlayNote>
            </S.PlayButton>
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
      {renderVideoModal}
    </S.OverviewWrapper>
  )
}

export default Overview
