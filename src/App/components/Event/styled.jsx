import styled, { css } from 'styled-components'

export const EventWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
`

export const EventImage = styled.img`
  margin-right: 12px;
  width: 196px;
  height: 196px;
  border-radius: 999px;
  object-fit: cover;
`

export const EventContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 24px;
  width: calc(100% - 228px);
`

export const EventCard = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  padding: 12px;
  min-height: 220px;
  border-radius: 120px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.1);
  background-color: white;

  &:first-child {
    margin-top: 0;
  }
`

export const EventLeft = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;

  & img {
    display: block;
    position: sticky;
    top: 100px;
    max-width: 400px;
    height: auto;
  }
`
