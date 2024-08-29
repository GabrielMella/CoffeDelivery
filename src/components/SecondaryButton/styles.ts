import { styled } from "styled-components";

export const ButtonS = styled.button`
  width: 91px;
  height: 32px;
  border-radius: 4px;
  border: 0;
  margin: opx;
  gap: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  line-height: 160%;
  font-weight: 700;

  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`
