import styled, { css } from 'styled-components'

export const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: transparent;
  z-index: 999;

  ${({ $isFixed }) =>
    $isFixed &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      background-color: white;
    `}
`

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  max-width: ${({ theme }) => theme.breakpoint.xl};
  width: 100%;
`

export const HeaderLogo = styled.div``

export const HeaderMenu = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  gap: 24px;
  transform: translate(-50%, -50%);
`

export const MenuItem = styled.a`
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  transition: color 0.2s;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    margin: 0 4px;
    width: calc(100% - 8px);
    height: 0.1rem;
    border-radius: 999px;
    background-color: ${({ theme }) => theme.colors.secondary};
    opacity 1;
    transform: scale(0);
    transform-origin: center;
    transition: opacity 300ms, transform 300ms;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &:hover::after,
  &:focus::after{
    transform: scale(1);
  }
`
