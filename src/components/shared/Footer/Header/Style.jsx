import styled from "styled-components";

export const StyleHeader = styled.header`
 display: flex;
 background: #03273B;
 width: 100%;
 height: 100px;
 align-items: center;
 flex-shrink: 0;
 gap: 300px;
 
 
.divAcc-cart{
  display: flex;
  gap: 30px;
}

.divSerach{
  display: contents;
  align-items: center;
  justify-content: center;
 
  
}

.navBar{
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  gap:75px
}
 
  .lista_links {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 180px;
    list-style-type: none;
  }
  
  .link {
    color: #FEFEFE;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }
  
  .link:hover {
    opacity: 0.7;
  }
  
  .btn_login {
    width: 100%;
    border: none;
  }
  `;