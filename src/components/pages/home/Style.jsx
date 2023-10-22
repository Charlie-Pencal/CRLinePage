import styled from "styled-components";
import HomeBanner from "../../../assets/BannerHome.png"
export const SectionStyled = styled.section`
display: flex;
justify-content: right;
width: 100%;
height: 800px;
padding-right: 58px;
padding-top: 253px;
align-items: center;

background-image: url(${HomeBanner});
background-size: cover;





.divCardHome{
padding: 41px;
display: flex;
border-radius: 10px;
background: #250E11;
width: 643px;
height: 443px;
flex-shrink: 0;
flex-direction: column;
justify-content: left;

}

.release {

color: #FEFFFE;
font-family: Red Hat Display;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 3px;
}

.text1 {
    
width: 559px;
height: 127px;
flex-shrink: 0;
color: #FFB27D;
font-family: Red Hat Mono;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 65px; /* 135.417% */
}

.text2{
    
width: 546px;
height: 52px;
flex-shrink: 0; 
color: #FEFFFE;
font-family: Red Hat Mono;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 133.333% */
}

.btnDiv{
    display: flex;
  justify-content: left;
  
    
}
`

export const SectionProducts = styled.section`
    width: 100%;
    height: 850px;
    align-items: center;
    background: #0F283B;
    display: block;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    

.divText{
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
height: 100px;
}

.text3{
color: #FFB27D;
font-family: Red Hat Display;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: normal;
    }

.text4{

letter-spacing: 2px;
text-align: center;
font-family: Red Hat Display;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding:30px;
    }

.divBooks{
width: 100%;
flex-shrink: 0;
display: flex;
flex-direction: row;
gap: 20px;
justify-content: center;
padding: 40px;

img{
  
  border-radius: 20px;
  height: 500px;
  
&:hover{
  transform: scale(1.1);
  transition: 0.5s;}

}





p{
  
color: #FFB27D;
text-align: center;
font-family: Red Hat Display;
font-size: 32px;
font-style: normal;
font-weight: 800;
line-height: normal;}



}
`