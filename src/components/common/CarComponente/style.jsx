import styled from "styled-components";

export const StyledCarComponente = styled.section`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    box-shadow: 5px 6px 4px 3px rgba(0, 0, 0, 0.25);

    .img-lixeira {
        background-color: ${(props) => props.theme.azul};
    }

    .imgtd-produto {
        width: 115px;
        height: 105px;
        top: 598px;
        left: 97px;
    }
`;
