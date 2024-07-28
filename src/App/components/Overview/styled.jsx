import styled from 'styled-components'
import Container from 'src/components/Container'

export const OverviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 900px;
  background-color: yellow;
`

export const OverviewContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const OverviewContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`

export const OverviewImage = styled.img`
  max-width: 400px;
  height: auto;
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
