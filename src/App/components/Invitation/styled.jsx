import styled, { css } from 'styled-components'
import T from 'src/components/Typography'

export const InvitationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
`

export const ImageContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s;
`

export const ImageLabel = styled(T.Text)`
  position: absolute;
  bottom: -32px;
  right: -10px;
  font-size: 200px;
  line-height: 200px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  z-index: 2;
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  &:hover ${ImageContent} {
    transform: scale(1.05);
  }
`

export const InvitationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`
