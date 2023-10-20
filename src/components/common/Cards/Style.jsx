import styled from "styled-components";

export const Card = styled.div`
background-color: red;
width: 285px;
height: 446px;
display: grid;
align-items: center;
justify-content: center;
text-align: center;



img{
width: 285px;
height: 301px;
}

.divDetails{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    background: white;
    width: 285px;
    height: 145px;
    gap: 8px;
}

h1 {
display: flex;
align-items: left;
margin-left: 16px;
color: var(--color-gray-1, #3A3A3A);
font-family: Red Hat Display;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 120%;
}

h2 {
display: flex;
align-items: left;
margin-left: 16px;
color: var(--color-gray-3, #898989);
font-family: Red Hat Mono;
font-size: 13px;
font-style: normal;
font-weight: 600;
line-height: 150%;
}

.divPrice {
    
margin-left:16px ;
display: inline-flex;
align-items: center;
gap: 8px;

}

.principalPrice{
color: var(--color-gray-1, #3A3A3A);
font-family: Red Hat Display;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 30px */
}

.discount{

display: ${({display}) => display};
color: var(--color-gray-4, #B0B0B0);
font-family: Red Hat Mono;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; 
text-decoration-line: line-through;
}

`