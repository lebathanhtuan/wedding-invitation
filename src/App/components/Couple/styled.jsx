import styled from 'styled-components'
import { Row } from 'antd'

import T from 'src/components/Typography'

export const CoupleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 36px 0 72px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${({ $background }) => $background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 95%;
    background-attachment: fixed;
    filter: grayscale(100%);
    z-index: 0;

    @media screen and (max-width: 768px) {
      background-attachment: unset;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }

  & > div {
    z-index: 2;
  }
`

export const CoupleName = styled(T.Text)`
  margin: 24px 0 8px;
  font-size: ${({ theme }) => theme.fontSizes.xxxl} !important;

  @media screen and (max-width: 992px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl} !important;
  }

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xl} !important;
  }

  @media screen and (max-width: 576px) {
    font-size: ${({ theme }) => theme.fontSizes.lg} !important;
  }
`

export const ImageWrapper = styled.div`
  max-width: 300px;
  width: 100%;
  height: auto;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @media screen and (max-width: 576px) {
    width: 80%;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 150%;
`

export const ImageContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 16px;
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border: 2px solid white;

  @media screen and (max-width: 768px) {
    padding: 12px;
  }

  @media screen and (max-width: 576px) {
    padding: 8px;
  }
`

export const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border: 2px solid white;
  object-fit: cover;
  filter: grayscale(100%);
  transition: all 0.3s;

  &:hover {
    filter: none;
  }
`

export const MiddleImage = styled.img`
  max-width: 130px;
  width: 100%;
  height: auto;
  margin: 16px 0;
`

export const TextImage = styled.img`
  max-width: 200px;
  width: 100%;
  height: auto;
`

export const CoupleRow = styled(Row)`
  align-items: center;
  margin-bottom: 72px;

  @media screen and (max-width: 992px) {
    margin-bottom: 0;
  }
`
