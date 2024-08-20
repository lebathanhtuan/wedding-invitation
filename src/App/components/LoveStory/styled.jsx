import styled, { css } from 'styled-components'
import { Col } from 'antd'

export const LoveStoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
`

export const LoveStoryCol = styled(Col)`
  ${({ $right }) =>
    $right &&
    css`
      text-align: right;
    `}

  ${({ $line }) =>
    $line &&
    css`
      @media screen and (max-width: 768px) {
        display: none;
      }
    `}

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const LoveStoryLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`
