import { styled } from "styled-components";

export const Button = styled.button`
    border-radius: 4px;
    border: 0;
    margin: opx;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};

    &:hover {
        background-color: ${(props) => props.theme['purple']};
    }
`