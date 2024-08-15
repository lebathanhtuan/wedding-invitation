import { useState, useEffect, useRef } from 'react'
import { Flex } from 'antd'
import ReactPlayer from 'react-player'

import Container from 'src/components/Container'
import T from 'src/components/Typography'

import engagementBackgroundImage from 'src/assets/images/EngagementBackground.jpg'
import * as S from './styled'

function Engagement() {
  const [isShowVideoModal, setIsShowVideoModal] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (!isShowVideoModal) {
      videoRef.current?.seekTo(0)
    }
  }, [isShowVideoModal])
  return (
    <S.EngagementWrapper>
      <S.VideoPlayButton onClick={() => setIsShowVideoModal(true)} />
      <S.EngagementBackground $background={engagementBackgroundImage}>
        <S.EngagementInner>
          <Container>
            <S.EngagementContainer>
              <S.EngagementContent>
                <Flex justify="center" align="center" vertical>
                  <T.Title level={2} color="light">
                    Cùng xem video Lễ Đính Hôn của chúng mình nhé!!!
                  </T.Title>
                  <T.Text color="light">
                    Tình yêu không phải là những lời thề non hẹn biển
                    <br />
                    chỉ đơn giản là cùng nhau bình yên qua ngày.,
                  </T.Text>
                </Flex>
              </S.EngagementContent>
            </S.EngagementContainer>
          </Container>
        </S.EngagementInner>
      </S.EngagementBackground>
      {/* <S.EngagementContainer>
        <Container>
          <Flex justify="center" align="center" vertical>
            <T.Title level={2} color="light">
              Xem video đính hôn của chúng mình nhé!!!
            </T.Title>
            <T.Text color="light">
              Tình yêu không phải là những lời thề non hẹn biển
              <br />
              chỉ đơn giản là cùng nhau bình yên qua ngày.,
            </T.Text>
            <Button type="primary" onClick={() => setIsShowVideoModal(true)}>
              Play
            </Button>
          </Flex>
        </Container>
      </S.EngagementContainer> */}
      {isShowVideoModal && (
        <S.VideoModal open centered footer={null} width={904} onCancel={() => setIsShowVideoModal(false)}>
          <ReactPlayer
            id="video-modal"
            url="https://www.youtube.com/watch?v=kalKWUHbLkc"
            playing
            controls
            width="904px"
            height="560px"
          />
        </S.VideoModal>
      )}
    </S.EngagementWrapper>
  )
}

export default Engagement
