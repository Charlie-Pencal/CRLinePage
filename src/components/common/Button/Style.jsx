import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  transition: 0.4s;
`;

export const PrimeiroButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.areia};
  color: ${(props) => props.theme.branco};
  padding: 0.5rem 2rem;
  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(150, 50, 50, 0.3);
  }
`;

export const SegundoButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.branco};
  color: ${(props) => props.theme.preto};
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  &:hover {
    /* background-color: ${(props) => props.theme.areia}; */
    box-shadow: inset 0 0 100px 100px rgba(50, 50, 50, 0.1);
  }
`;

export const TerceiroButton = styled(StyledButton)`
  background-color: transparent;
  color: ${(props) => props.theme.branco};
  padding: 0.5rem 2rem;
  border: solid 1px ${(props) => props.theme.branco};
  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(50, 50, 50, 0.1);
    border: solid 1px ${(props) => props.theme.areia};
  }
`;

export const QuartoButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.areia};
  color: ${(props) => props.theme.branco};
  font-size: large;
  padding: 1rem 3rem;
  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(150, 50, 50, 0.3);
  }
`;
