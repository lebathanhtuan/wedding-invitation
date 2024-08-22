import styled from 'styled-components'

export const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
`

export const MapLocation = styled.img`
  position: relative;
  left: -30%;
  width: 150px;
`
