import styled, { css } from 'styled-components'
import { Modal, Button } from 'antd'

export const OverviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 84px 0 72px;
  background-image: url(${({ $background }) => $background});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  overflow: hidden;
`

export const OverviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`

export const OverviewLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  order: 1;

  & > img {
    max-width: 300px;
    height: auto;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 992px) {
    margin-top: 24px;
    width: 100%;
    order: 2;

    & > img {
      max-width: 250px;
    }
  }

  @media screen and (max-width: 768px) {
    & > img {
      max-width: 200px;
    }
  }
`

export const OverviewRightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65%;
  order: 2;

  @media screen and (max-width: 992px) {
    width: 100%;
    max-width: 500px;
    order: 1;
  }
`

export const CardImage1 = styled.img`
  position: absolute;
  top: -7%;
  left: 42%;
  width: 43%;
  height: auto;
  transition: all 0.3s;
`

export const CardImage2 = styled.img`
  position: absolute;
  top: 48%;
  left: 23%;
  width: 31%;
  height: auto;
  transition: all 0.3s;
`

export const CardImage3 = styled.img`
  position: absolute;
  top: 65%;
  right: 13%;
  width: 28%;
  height: auto;
  transition: all 0.3s;
`

export const FlowerImage = styled.img`
  transition: all 0.3s;
`

export const HeartImage = styled.img`
  position: absolute;
  top: -11%;
  left: 35%;
  width: 12%;
  height: auto;
  transition: all 0.3s;
`

export const ImageContainer = styled.div`
  position: relative;
  padding: 0 16px;
  margin-top: 48px;

  &:hover {
    ${CardImage1} {
      top: -15%;
      left: 38%;
      width: 45%;
      transform: rotateZ(3deg);
    }

    ${CardImage2} {
      top: 45%;
      left: 20%;
      transform: rotateZ(-4deg);
    }

    ${CardImage3} {
      top: 62%;
      right: 10%;
      transform: rotateZ(6deg);
    }

    ${FlowerImage} {
      transform: scale(1.1);
    }

    ${HeartImage} {
      top: -21%;
      left: 30%;
      width: 16%;
      transform: rotateZ(-12deg);
    }
  }
`

export const OverviewImage = styled.img`
  max-width: 300px;
  height: auto;
  border-radius: 999px;
  border: 5px solid white;
`

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const CountdownItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h3 {
    font-size: 60px;
  }

  & > p {
    position: relative;
    top: -20px;
  }

  @media screen and (max-width: 768px) {
    & > h3 {
      font-size: 40px;
    }

    & > p {
      position: relative;
      top: -10px;
    }
  }
`

export const PlayNote = styled.div`
  position: absolute;
  bottom: -26px;
  left: 50%;
  transform: translate(-44%, 0);
  padding: 2px 5px;
  border-radius: 999px;
  background-color: #b23e1a;
  color: white;
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.3s;
  font-family: 'Shantell Sans';
`

export const PlayButton = styled.div`
  position: relative;
  margin-top: 24px;
  width: 120px;
  height: auto;
  animation: zoom 2s infinite;
  transition: all 0.3s;
  cursor: pointer;

  & > .letter {
    width: 100%;
    height: auto;
  }

  & > .movie {
    position: absolute;
    top: 15%;
    left: 37%;
    width: 35%;
    animation: sway 3.5s infinite;
  }

  &:hover {
    animation: none;
    transform: scale(1.15);

    & ${PlayNote} {
      opacity: 1;
    }
  }

  @keyframes sway {
    0% {
      transform: rotate(0deg);
    }
    8% {
      transform: rotate(0deg);
    }
    12% {
      transform: rotate(28deg);
    }
    16% {
      transform: rotate(-23deg);
    }
    20% {
      transform: rotate(0deg);
    }
    23% {
      transform: rotate(19deg);
    }
    26% {
      transform: rotate(-14deg);
    }
    29% {
      transform: rotate(0deg);
    }
    31% {
      transform: rotate(11deg);
    }
    33% {
      transform: rotate(-8deg);
    }
    35% {
      transform: rotate(0deg);
    }
    37% {
      transform: rotate(-4deg);
    }
    39% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(4deg);
    }
    44% {
      transform: rotate(-2deg);
    }
    49% {
      transform: rotate(1.3deg);
    }
    55% {
      transform: rotate(0deg);
    }
    62% {
      transform: rotate(0.7deg);
    }
    70% {
      transform: rotate(0deg);
    }
  }

  @keyframes zoom {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #000000;
  z-index: 2;
`

export const ModalAction = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`

export const VideoButton = styled(Button)`
  border-radius: 999px !important;
  gap: 0;

  & .btn-content {
    width: 0;
    overflow: hidden;
    transition: width 0.3s;
  }

  &:hover {
    padding: 0 8px !important;
    gap: 8px;

    & .btn-content {
      width: 60px;
      overflow: hidden;
    }
  }
`

export const VideoModal = styled(Modal)`
  max-width: 1400px !important;

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
    padding: 0;
  }

  .ant-modal-body {
    position: relative;
    overflow: hidden;
  }

  ${({ $isResizeSP }) =>
    !$isResizeSP &&
    css`
      .ant-modal-body {
        padding-top: 56.25%; /* 16:9 Aspect Ratio */

        @media screen and (max-width: 768px) {
          padding-top: 177.77%; /* 9:16 Aspect Ratio */
        }
      }

      ${ModalContent} {
        position: absolute;
        top: 0;
        left: 0;
      }
    `}

  @media screen and (max-width: 768px) {
    .ant-modal {
      margin: 0 auto !important;
    }
  }
`
