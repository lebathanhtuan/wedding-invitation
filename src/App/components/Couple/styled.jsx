import styled from 'styled-components'

export const CoupleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 36px 0 72px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${({ $background }) => $background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 95%;
    filter: grayscale(100%);
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }

  & > div {
    z-index: 2;
  }
`

export const ImageWrapper = styled.div`
  max-width: 300px;
  width: 100%;
  height: auto;
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 150%;
`

export const ImageContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 16px;
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border: 2px solid white;
`

export const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  border: 2px solid white;
  object-fit: cover;
  filter: grayscale(100%);
`

export const MiddleImage = styled.img`
  max-width: 130px;
  width: 100%;
  height: auto;
  margin: 16px 0;
`

export const TextImage = styled.img`
  max-width: 200px;
  width: 100%;
  height: auto;
`

export const CoupleInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CoupleCol = styled.div`
  max-width: 33.3333333333%;
  position: relative;
  margin: 0;
  padding: 0 15px 30px;
  width: 100%;
`
export const FamilyCol = styled.div`
  max-width: 25%;
  position: relative;
  margin: 0;
  padding: 0 15px 30px;
  width: 100%;
`
export const ColInner = styled.div`
  text-align: center;
`
export const CoupleImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
`
export const CoupleImg = styled.img`
  max-width: 100%;
  height: auto;
`
export const CoupleName = styled.div`
  font-size: 32px;
`
export const CoupleDes = styled.div`
  font-size: 16px;
`
export const CoupleDraw = styled.div`
  width: 100px;
  height: 100px;
  background-color: aquamarine;
`
export const FamilyTtl = styled.p`
  font-size: 20px;
`
export const FamilyName = styled.p`
  font-size: 20px;
`
