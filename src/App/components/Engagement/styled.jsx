import styled from 'styled-components'
import { Modal } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'

export const EngagementWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const EngagementInner = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.3s;
`

export const EngagementContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 42.86%; /* 21:9 */

  @media screen and (max-width: 768px) {
    padding-top: 56.25%; /* 16:9 */
  }
`

export const EngagementContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`

export const EngagementBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ $background }) => $background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  /* filter: grayscale(25%); */
  transition: all 0.3s;
`

export const VideoModal = styled(Modal)`
  .ant-modal-close {
    top: -36px;
    right: 0;
    color: white;

    &:hover {
      color: white;
    }
  }

  .ant-modal-content {
    border-radius: 0;
    padding: 1px;
  }

  .ant-modal-body {
    overflow: hidden;
  }
`

export const VideoPlayButton = styled(PlayCircleOutlined)`
  position: absolute;
  top: calc(50% + 40px);
  left: 50%;
  transform: scale(1) translate(-50%, -50%);
  font-size: 56px;
  color: white;
  transition: all 0.3s;
  cursor: pointer;
  z-index: 2;

  &:hover {
    transform: scale(1.1) translate(-50%, -50%);

    & ~ ${EngagementBackground} ${EngagementBackground} {
      /* transform: scale(1.025); */
      /* filter: grayscale(0%); */
    }

    & ~ ${EngagementBackground} ${EngagementInner} {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
`
