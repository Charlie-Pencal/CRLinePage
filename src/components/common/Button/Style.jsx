import styled from "styled-components";

export const Buttonzin = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props)=>props.height};
  width: ${(props)=>props.width};
  background: ${(props) => props.background};
  border-radius: ${(props)=> props.radius};
  padding: ${(props)=>props.padding};
  font-family: ${(font)=>font};
  font-weight: ${(fontWeight)=>fontWeight};
  text-transform: ${(textTransform)=>textTransform};
  font-style: ${(fontStyle)=>fontStyle};
  font-size: ${(fontSize)=>fontSize};
  
  
  border: none;
 &:hover{
   
  transform: scale(1.1);
  transition: 0.4s;
 }



`