import styled from 'styled-components'
import { Modal } from 'antd'
import T from 'src/components/Typography'

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

  @media screen and (max-width: 576px) {
    padding-top: 75%; /* 4:3 */
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
  padding: 10% 0;

  @media screen and (max-width: 992px) {
    padding: 6% 0;
  }

  @media screen and (max-width: 768px) {
    padding: 12% 0 10%;
  }

  @media screen and (max-width: 576px) {
    padding: 18% 0 16%;

    & h2 {
      font-size: 26px;
    }
  }

  @media screen and (max-width: 420px) {
    & h2 {
      font-size: 20px;
    }

    & p {
      font-size: 12px;
    }
  }
`

export const EngagementPlayFrame = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  height: 90%;
  transform: translate(-50%, -50%);
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

  @media screen and (max-width: 768px) {
    background-attachment: unset;
  }
`

export const VideoModal = styled(Modal)`
  max-width: 1600px !important;

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
    position: relative;
    overflow: hidden;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
  }
`

export const ModalContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 2;
`

export const VideoPlayButton = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  color: white;
  transition: all 0.3s;
  cursor: pointer;
  z-index: 2;

  &:hover {
    width: 140px;
    height: 140px;

    & ~ ${EngagementBackground} ${EngagementInner} {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;

    &:hover {
      width: 120px;
      height: 120px;
    }
  }

  @media screen and (max-width: 576px) {
    width: 80px;
    height: 80px;

    &:hover {
      width: 100px;
      height: 100px;
    }
  }

  @media screen and (max-width: 420px) {
    width: 60px;
    height: 60px;

    &:hover {
      width: 80px;
      height: 80px;
    }
  }
`
