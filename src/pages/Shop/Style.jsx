import styled from "styled-components";
import Banner from "/BannerShopECart.png"

export const SectionShop = styled.section`
display: flex;
width: 100%;
height: 316px;
flex-shrink: 0;
background: url(${Banner});
background-size: cover;
align-items: center;
justify-content: center;

h1{
color: #FFB27D;
font-family: Red Hat Display;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;   
}
`

export const DivSeparate = styled.div`
display : flex ;
align-items: center;
flex-direction: row;
justify-content: center;
width: 100%;
height: 100px;
flex-shrink: 0;
background: #043A55;
gap: 5px;

.filterIcon{
    img{
      width:30px ;
    }
}


p{

color: #FFB27D;
font-size: 26px;
font-style: normal;
font-weight: 400;
line-height: normal;

}


`

export const  ProductSection = styled.section`
display: grid;
justify-content: center;
align-items: center;
justify-content: center;
height: 1350px;
padding: 100px;



.firstColumn {
    display: flex;
    flex-direction: row;
    gap: 32px;
    
    

}

.seccondColumn{
    display: flex;
    flex-direction: row;
    gap: 32px;
    
    
}

.btns{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 38px;
    justify-content: center;
}


`
