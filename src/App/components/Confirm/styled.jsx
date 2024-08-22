import styled from 'styled-components'

export const ConfirmWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;

  @media screen and (max-width: 576px) {
    padding: 0;
  }
`

export const ConfirmContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  border-radius: 4px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media screen and (max-width: 576px) {
    border-radius: 0;
    box-shadow: unset;
  }
`

export const ConfirmLeft = styled.div`
  height: 100%;

  @media screen and (max-width: 1200px) {
    padding: 24px 0 24px 24px;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`

export const LeftWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ $background }) => $background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 75% 50%;
  color: white;
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  & img {
    width: 80%;
    height: auto;

    @media screen and (max-width: 1200px) {
      width: 100%;
    }

    @media screen and (max-width: 992px) {
      width: 50%;
    }
  }
`

export const FormLine = styled.div`
  margin: 16px 0;
  width: 80px;
  height: 2px;
  border-radius: 2px;
  background-color: white;
`

export const ConfirmRight = styled.div`
  padding: 24px;

  @media screen and (max-width: 576px) {
    padding: 16px;
  }
`

export const ConfirmForm = styled.div`
  border-radius: 4px;
  padding: 16px;
  background-color: #fff9f2;
`

export const MapWrapper = styled.div`
  min-height: 300px;
  height: 100%;
`

export const MapLocation = styled.img`
  position: relative;
  left: -30%;
  width: 130px;
`
