import styled from "styled-components";

export const StyleHeader = styled.header`
  display: flex;
  background: #03273B;
  width: 100%;
  height: 100px;
  align-items: center;
  flex-shrink: 0;
 
  justify-content: space-between;
  padding: 0 20px;
 
.divAcc-cart{
  display: flex;
  gap: 30px;
}


.divLogo{
  display: flex;
  width: 95px;
  height: 92px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.logo{
  
  width: 95px;
  height: 92px;
  flex-shrink: 0;
}

.navBar{
  display: flex;
  align-items: center;
  width: fit-content;
  width: 70%;
}
 
  .lista_links {
  width: fit-content;
  display: flex;
  align-items: center;
  list-style-type: none;
  width: 100%;
  justify-content: space-between;
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