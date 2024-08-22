import styled from 'styled-components'

export const ThanksWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  height: 45vh;
  min-height: 400px;
  background-image: url(${({ $background }) => $background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`

export const ThanksSticker = styled.img`
  position: absolute;
  bottom: -25px;
  right: 0;
  width: 42%;
  z-index: 1;

  @media screen and (max-width: 992px) {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    width: 60%;
  }

  @media screen and (max-width: 568px) {
    width: 70%;
  }
`

export const ThanksContent = styled.div`
  margin-top: 16px;
  padding-bottom: 36px;
  max-width: 500px;
  width: 100%;
  z-index: 2;

  @media screen and (max-width: 568px) {
    max-width: 400px;
  }
`
