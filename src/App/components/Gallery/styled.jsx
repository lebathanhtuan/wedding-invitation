import styled from 'styled-components'

export const GalleryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;

  & .ant-tabs-nav::before {
    border: none;
  }

  & .ant-tabs-tab {
    padding: 0 0 4px 0;
  }

  & .ant-tabs-tab-btn {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`
