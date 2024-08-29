import styled from 'styled-components'
import { mixins } from '../styles/mixins'

export const MediumButton = styled.button`
  margin-top: 24px;
  width: 132px;
  height: 46px;
  padding: 12px;
  text-transform: uppercase;

  border: 0;
  margin: opx;
  gap: 0.5rem;

  ${mixins.fonts.buttonG};
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.yellow};

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }

  border-radius: 6px;
`

