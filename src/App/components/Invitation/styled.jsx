import styled from 'styled-components'
import T from 'src/components/Typography'

export const InvitationWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0 34%;
  background-image: url(${({ $background }) => $background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  background-color: #fff9f2;

  @media screen and (max-width: 1200px) {
    padding: 16px 0 34%;
  }

  @media screen and (max-width: 768px) {
    padding-top: 0;

    & > div {
      padding: 4px 4px 0;
    }
  }
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
  right: 2px;
  font-size: 200px;
  line-height: 200px;
  font-family: 'Poppins' !important;
  font-weight: 500;
  letter-spacing: -16px;
  color: #fff9f2;
  z-index: 2;

  @media screen and (max-width: 1200px) {
    font-size: 170px;
    bottom: -44px;
    right: 1px;
    letter-spacing: -13px;
  }

  @media screen and (max-width: 992px) {
    font-size: 140px;
    bottom: -54px;
    right: 1px;
    letter-spacing: -11px;
  }

  @media screen and (max-width: 768px) {
    font-size: 120px;
    bottom: -60px;
    right: 1px;
    letter-spacing: -9px;
  }

  @media screen and (max-width: 576px) {
    font-size: 90px;
    bottom: -70px;
    right: 1px;
    letter-spacing: -7px;
  }

  @media screen and (max-width: 460px) {
    font-size: 70px;
    bottom: -77px;
    right: 1px;
    letter-spacing: -5px;
  }

  @media screen and (max-width: 400px) {
    font-size: 52px;
    bottom: -83px;
    right: 1px;
    letter-spacing: -3px;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
    transition: background 0.3s;
  }

  &:hover {
    &::after {
      background: rgba(0, 0, 0, 0.1);
    }

    ${ImageContent} {
      transform: scale(1.05);
    }
  }
`

export const RestaurantName = styled(T.Title)`
  font-size: 60px;

  @media screen and (max-width: 992px) {
    font-size: 56px;
  }

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }

  @media screen and (max-width: 576px) {
    font-size: 42px;
  }
`

export const InvitationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 24px;

  & p {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serifl;
  }
`
