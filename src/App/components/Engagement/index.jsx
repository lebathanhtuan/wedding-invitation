import { useState, useMemo } from 'react'
import { Flex } from 'antd'
import ReactPlayer from 'react-player'
import { useTranslation } from 'react-i18next'

import Container from 'src/components/Container'
import T from 'src/components/Typography'
import { ENGAGEMENT_VIDEO } from 'src/constants/wedding'

import engagementBackgroundImage from 'src/assets/images/EngagementBackground.jpg'
import playBackgroundImage from 'src/assets/images/PlayBackground.gif'
import playButtonImage from 'src/assets/images/PlayButton.gif'
import * as S from './styled'

function Engagement() {
  const [isShowVideoModal, setIsShowVideoModal] = useState(false)

  const { t } = useTranslation()

  const renderVideoModal = useMemo(() => {
    if (!isShowVideoModal) return null
    return (
      <S.VideoModal open centered footer={null} width="100%" onCancel={() => setIsShowVideoModal(false)}>
        <S.ModalContent>
          <ReactPlayer
            id="video-modal"
            url={ENGAGEMENT_VIDEO}
            playing
            controls
            width="100%"
            height="100%"
            onEnded={() => setIsShowVideoModal(false)}
          />
        </S.ModalContent>
      </S.VideoModal>
    )
  }, [isShowVideoModal])

  return (
    <S.EngagementWrapper id="engagement">
      <S.VideoPlayButton src={playButtonImage} onClick={() => setIsShowVideoModal(true)} />
      <S.EngagementBackground $background={engagementBackgroundImage}>
        <S.EngagementInner>
          <Container>
            <S.EngagementContainer>
              <S.EngagementContent>
                <Flex justify="space-between" align="center" vertical style={{ height: '100%' }}>
                  <T.Title level={2} color="light" align="center">
                    {t('engagement.title')}
                  </T.Title>
                  <T.Text color="light" align="center">
                    {t('engagement.description')}
                    <br />
                    {t('engagement.subDescription')}
                  </T.Text>
                </Flex>
                <S.EngagementPlayFrame src={playBackgroundImage} alt="" />
              </S.EngagementContent>
            </S.EngagementContainer>
          </Container>
        </S.EngagementInner>
      </S.EngagementBackground>
      {renderVideoModal}
    </S.EngagementWrapper>
  )
}

export default Engagement
