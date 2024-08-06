import styled from 'styled-components'

export const OverviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 500px;
  max-height: 700px;
  background-image: url(${({ $background }) => $background});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
`

export const OverviewLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
`

export const OverviewRightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 55%;
`

export const CardImage1 = styled.img`
  position: absolute;
  top: -7%;
  left: 42%;
  width: 43%;
  height: auto;
  transition: all 0.3s;
`

export const CardImage2 = styled.img`
  position: absolute;
  top: 48%;
  left: 23%;
  width: 31%;
  height: auto;
  transition: all 0.3s;
`

export const CardImage3 = styled.img`
  position: absolute;
  top: 65%;
  right: 13%;
  width: 28%;
  height: auto;
  transition: all 0.3s;
`

export const FlowerImage = styled.img`
  transition: all 0.3s;
`

export const HeartImage = styled.img`
  position: absolute;
  top: -11%;
  left: 35%;
  width: 12%;
  height: auto;
  transition: all 0.3s;
`

export const ImageContainer = styled.div`
  position: relative;
  padding: 0 16px;
  margin-top: 48px;

  &:hover {
    ${CardImage1} {
      top: -15%;
      left: 38%;
      width: 45%;
      transform: rotateZ(3deg);
    }

    ${CardImage2} {
      top: 45%;
      left: 20%;
      transform: rotateZ(-4deg);
    }

    ${CardImage3} {
      top: 62%;
      right: 10%;
      transform: rotateZ(6deg);
    }

    ${FlowerImage} {
      transform: scale(1.1);
    }

    ${HeartImage} {
      top: -21%;
      left: 30%;
      width: 16%;
      transform: rotateZ(-12deg);
    }
  }
`

export const OverviewImage = styled.img`
  max-width: 300px;
  height: auto;
  border-radius: 999px;
  border: 5px solid white;
`

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`

export const CountdownItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  border: 3px solid red;
`
