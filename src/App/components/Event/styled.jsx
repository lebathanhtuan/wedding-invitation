import styled from 'styled-components'
import { Timeline } from 'antd'

export const EventWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  overflow: hidden;
`

export const EventLeft = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  margin-right: -25%;

  & img {
    max-width: 380px;
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 992px) {
    margin-right: unset;
  }
`

export const EventTimeline = styled(Timeline)`
  margin-left: -25%;

  .ant-timeline-item-tail {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .ant-timeline-item-head-custom {
    background-color: transparent;
  }

  .ant-timeline-item:nth-child(2n - 1) {
    .ant-timeline-item-content {
      margin-inline-start: 60px;
      width: calc(50% - 68px);
    }

    .ant-timeline-item-label {
      width: calc(50% - 48px);
    }
  }

  .ant-timeline-item:nth-child(2n) {
    .ant-timeline-item-content {
      width: calc(50% - 48px);
    }

    .ant-timeline-item-label {
      margin-inline-start: 42px;
      width: calc(50% - 68px);
    }
  }

  @media screen and (max-width: 992px) {
    margin-left: unset;
  }
`

export const EventIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  background-color: transparent;
`

export const EventIconContainer = styled.div`
  background-color: white;
  padding: 4px;
`

export const EventIconItem = styled.img`
  height: 84px;
  width: auto;
`
