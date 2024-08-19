import styled, { css } from 'styled-components'
import { Row, Col, Flex } from 'antd'

export const LoveStoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
`

export const LoveStoryCol = styled(Col)`
  ${({ $right }) => $right && css`
    text-align: right;

    @media screen and (max-width: 992px) {
      text-align: center;
    }
  `}

  ${({ $line }) => $line && css`
    @media screen and (max-width: 992px) {
      display: none;
    }
  `}
`
