import styled from "styled-components";

export const StyledCarComponente = styled.section`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    background-color: #043a55;
    border-radius: 8px;
    
    .img-lixeira {
        background-color: ${(props) => props.theme.azul};
    }
    
    .imgtd-produto {
        border-radius: 8px;
        width: 115px;
        height: 105px;
        top: 598px;
        left: 97px;
    }
`;
