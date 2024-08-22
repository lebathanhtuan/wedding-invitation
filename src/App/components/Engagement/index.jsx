import { useState } from 'react'
import { Flex } from 'antd'
import ReactPlayer from 'react-player'

import Container from 'src/components/Container'
import T from 'src/components/Typography'

import engagementBackgroundImage from 'src/assets/images/EngagementBackground.jpg'
import playBackgroundImage from 'src/assets/images/PlayBackground.gif'
import playButtonImage from 'src/assets/images/PlayButton.gif'
import * as S from './styled'

function Engagement() {
  const [isShowVideoModal, setIsShowVideoModal] = useState(false)

  return (
    <S.EngagementWrapper>
      <S.VideoPlayButton src={playButtonImage} onClick={() => setIsShowVideoModal(true)} />
      <S.EngagementBackground $background={engagementBackgroundImage}>
        <S.EngagementInner>
          <Container>
            <S.EngagementContainer>
              <S.EngagementContent>
                <Flex justify="space-between" align="center" vertical style={{ height: '100%' }}>
                  <T.Title level={2} color="light" align="center">
                    Lễ Đính Hôn của chúng mình!
                  </T.Title>
                  <T.Text color="light" align="center">
                    Tình yêu không phải là những lời thề non hẹn biển,
                    <br />
                    chỉ đơn giản là cùng nhau bình yên qua ngày.
                  </T.Text>
                </Flex>
                <S.EngagementPlayFrame src={playBackgroundImage} alt="" />
              </S.EngagementContent>
            </S.EngagementContainer>
          </Container>
        </S.EngagementInner>
      </S.EngagementBackground>
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
