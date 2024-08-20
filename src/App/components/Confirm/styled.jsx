import styled from 'styled-components'

export const ConfirmWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
`

export const ConfirmContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  border-radius: 4px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

export const ConfirmLeft = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ $background }) => $background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 50%;
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
    width: 70%;
    height: auto;

    @media screen and (max-width: 768px) {
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
`

export const ConfirmForm = styled.div`
  border-radius: 4px;
  padding: 16px;
  background-color: #fff9f2;
`
