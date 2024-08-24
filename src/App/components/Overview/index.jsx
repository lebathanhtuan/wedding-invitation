import { useState, useMemo, useEffect } from 'react'
import { Statistic, Space } from 'antd'
import moment from 'moment'
import ReactPlayer from 'react-player'
import { useTranslation } from 'react-i18next'
import { RxPlay, RxPause, RxSpeakerLoud, RxSpeakerOff, RxCross2 } from 'react-icons/rx'

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
  const [isShowVideoModal, setIsShowVideoModal] = useState(true)

  const [videoPlay, setVideoPlay] = useState(true)
  const [videoMute, setVideoMute] = useState(true)

  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth)
  const [deviceHeight, setDeviceHeight] = useState(window.innerHeight)

  const [countdownTime, setCountdownTime] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  const { t } = useTranslation()

  const isResizeSP = useMemo(() => deviceWidth <= 768, [deviceWidth])

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth)
      setDeviceHeight(window.innerHeight)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    window.scrollTo(0, window.scrollHeight / 2)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleChangeCountdown = (value) => {
    const vietnamTimezoneOffset = 7 * 60 * 60 * 1000
    const oneHourTime = 60 * 60 * 1000
    const [days, hours, minutes, seconds] = moment(value - vietnamTimezoneOffset - oneHourTime)
      .format('D-H-m-s')
      .split('-')
    setCountdownTime({ days, hours, minutes, seconds })
  }

  const handleCloseVideoModal = () => {
    setIsShowVideoModal(false)
    setVideoMute(false)
  }

  const renderDays = useMemo(
    () => (
      <S.CountdownItem>
        <T.Title level={3} weight="regular" color="primary">
          {countdownTime.days}
        </T.Title>
        <T.Text weight="light" size="lg">
          {t('overview.countdown.days')}
        </T.Text>
      </S.CountdownItem>
    ),
    [countdownTime.days, t],
  )

  const renderHours = useMemo(
    () => (
      <S.CountdownItem>
        <T.Title level={3} weight="regular" color="primary">
          {countdownTime.hours}
        </T.Title>
        <T.Text weight="light" size="lg">
          {t('overview.countdown.hours')}
        </T.Text>
      </S.CountdownItem>
    ),
    [countdownTime.hours, t],
  )

  const renderMinutes = useMemo(
    () => (
      <S.CountdownItem>
        <T.Title level={3} weight="regular" color="primary">
          {countdownTime.minutes}
        </T.Title>
        <T.Text weight="light" size="lg">
          {t('overview.countdown.minutes')}
        </T.Text>
      </S.CountdownItem>
    ),
    [countdownTime.minutes, t],
  )

  const renderSeconds = useMemo(
    () => (
      <S.CountdownItem>
        <T.Title level={3} weight="regular" color="primary">
          {countdownTime.seconds}
        </T.Title>
        <T.Text weight="light" size="lg">
          {t('overview.countdown.seconds')}
        </T.Text>
      </S.CountdownItem>
    ),
    [countdownTime.seconds, t],
  )

  const renderVideoModal = useMemo(() => {
    if (!isShowVideoModal) return null
    let videoWidth = 0
    let videoHeight = 0
    if (isResizeSP) {
      videoWidth = (deviceHeight * 9) / 16 >= deviceWidth ? deviceWidth : (deviceHeight * 9) / 16 + 'px'
      videoHeight = (deviceWidth * 16) / 9 >= deviceHeight ? deviceHeight : (deviceWidth * 16) / 9 + 'px'
    } else {
      videoWidth = '100%'
      videoHeight = '100%'
    }
    return (
      <S.VideoModal
        open
        centered
        closeIcon={false}
        footer={null}
        width="100%"
        $isResizeSP={isResizeSP}
        onCancel={handleCloseVideoModal}
      >
        <S.ModalAction>
          <Space>
            <S.VideoButton
              type="primary"
              size="large"
              shape="circle"
              icon={
                videoPlay ? (
                  <RxPause style={{ fontSize: 20, marginTop: 3 }} />
                ) : (
                  <RxPlay style={{ fontSize: 20, marginTop: 3 }} />
                )
              }
              onClick={() => setVideoPlay(!videoPlay)}
            >
              <span className="btn-content">{videoPlay ? <span>Dừng</span> : <span>Phát</span>}</span>
            </S.VideoButton>
            <S.VideoButton
              type="primary"
              size="large"
              shape="circle"
              icon={
                videoMute ? (
                  <RxSpeakerLoud style={{ fontSize: 20, marginTop: 3 }} />
                ) : (
                  <RxSpeakerOff style={{ fontSize: 20, marginTop: 3 }} />
                )
              }
              onClick={() => setVideoMute(!videoMute)}
            >
              <span className="btn-content">{videoMute ? <span>Bật âm</span> : <span>Tắt âm</span>}</span>
            </S.VideoButton>
            <S.VideoButton
              type="primary"
              size="large"
              shape="circle"
              icon={<RxCross2 style={{ fontSize: 20, marginTop: 3 }} />}
              onClick={handleCloseVideoModal}
            >
              <span className="btn-content">Đóng</span>
            </S.VideoButton>
          </Space>
        </S.ModalAction>
        <S.ModalContent>
          <ReactPlayer
            id="video-modal"
            url={isResizeSP ? INVITATION_VIDEO_SP : INVITATION_VIDEO_PC}
            playing={videoPlay}
            playsinline
            width={videoWidth}
            height={videoHeight}
            muted={videoMute}
            onEnded={handleCloseVideoModal}
            onPlay={() => setVideoPlay(true)}
            onPause={() => setVideoPlay(false)}
          />
        </S.ModalContent>
      </S.VideoModal>
    )
  }, [deviceHeight, deviceWidth, isResizeSP, isShowVideoModal, videoMute, videoPlay])

  return (
    <S.OverviewWrapper id="overview" $background={overviewBackgroundImage}>
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
                onChange={handleChangeCountdown}
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
