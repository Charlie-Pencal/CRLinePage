import React from 'react'
import styled from 'styled-components'
import Button from '../Button'


const Modal = ({open,title,fechar,children}) => {
    const handleFechar = (event) =>{
        event.target.id = "modal" && fechar()

    }
  return (
    <>
    {open &&
        <StyledModal>
            <div className="StyledConteudoModal">
                <h1 className="tituloModal">{title}</h1>
                {children}
                <Button variante={"primeiro"} texto={"Fechar"} onClick={handleFechar}/>
            </div>
        </StyledModal>
    }
    </>
  )
}

export default Modal

const StyledModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);

        .StyledConteudoModal{
            width: 700px;
            height: 600px;
            background-color: ${(props) => props.theme.azulClaro};
            padding: 50px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
        .tituloModal{
            font-family: 'Red Hat Display', sans-serif;
            font-weight: bold;
            color: ${(props) => props.theme.branco};
            font-size: 36px;
        }
`
