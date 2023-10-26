import styled from "styled-components";

export const StyledFooter = styled.footer`

.footer-container{
    height: 150px;    
    background-color:${(props) => props.theme.azul};
    padding-top: 20px;
    
    }
    
    .footer-content{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color:${(props) => props.theme.azul};
        color: ${(props) => props.theme.branco};
    
    }
        
    p{
        margin-top: 20px;
        border:1px;
        color: ${(props) => props.theme.branco};
    }
    
    img{
        width: 261px;
        height: 250px;
        
    }    
    
    .footer-list{
    font-family: Poppins;
    font-size: 16px;
    line-height: 48px;
    list-style: none;
    color: ${(props) => props.theme.branco};
        
    }
    
    .footer-direitos{
    padding-left: 40px;
    background-color:${(props) => props.theme.azul};
    width: 100%;
    height: 55px;
    border-top: 1px solid ${(props) => props.theme.branco};
        
    }`