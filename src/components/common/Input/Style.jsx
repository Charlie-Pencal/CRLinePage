import styled from "styled-components";

export const Input = styled.input`
  width:${(props)=>props.width};
  height: ${(props)=>props.height};
  flex-shrink: 0;
  border: ${(props)=>props.border};
  border-radius: ${(props)=>props.radius};
  background: ${(props)=>props.theme.branco};
  padding: ${(props)=>props.padding};
  color: ${(props)=>props.theme.azul};
 
`

/* LEMBRETE::::::: desestruturar as props igual no display dos cards */