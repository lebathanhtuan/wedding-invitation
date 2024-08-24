import styled, { css } from 'styled-components'
import { Col, Flex } from 'antd'

export const LoveStoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
`

export const LoveStoryTitle = styled(Flex)`
  margin-bottom: 48px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`

export const LoveStoryCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & > img {
    max-width: 380px;
    width: 100%;
    margin: 0;
    transform: rotateZ(6deg);
  }

  & > p {
    max-width: 400px;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    align-items: center;

    & > img {
      padding-right: 32px;
      margin: 32px 0 -24px 0;
      transform: rotateZ(0);
    }

    & > p {
      max-width: 500px;
      width: 100%;
      text-align: center;
    }
  }

  ${({ $right }) =>
    $right &&
    css`
      align-items: flex-end;

      & > img {
        transform: rotateZ(-5deg);
      }

      & > p {
        text-align: right;
      }

      @media screen and (max-width: 768px) {
        & > img {
          margin: 32px 0 -24px 0;
          padding-left: 34px;
          padding-right: 0;
          transform: rotateZ(0);
        }

        & > p {
          text-align: center;
        }
      }
    `}
`

export const LoveStoryLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`
