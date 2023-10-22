import React from "react";
import * as S from "./Style"
import Search from "/search.svg"
import Cart from "/cart.svg"
import Account from "/account.svg"
import CrlineIcon from "/logo.svg"

export const Header = () => {
  return (
    <S.StyleHeader className="content">

      <div className="divLogo">
        <h1><img className="logo" src={CrlineIcon} alt="" /></h1>
        </div>


      <nav className="navBar">



        <ul className={"lista_links"}>
          <li>
            <a className={"link"}>
              Home
            </a>
          </li>

          <li>
            <a className={"link"}>
              Shop
            </a>
          </li>

          <li>
            <a className={"link"}>
              Sobre
            </a>
          </li>

          <li>
            <a to='/login' className={"link"}>
              Contato
            </a>
          </li>
          <div className="divSerach">
            <li>
              <a className={"link"}>
                <img src={Search} alt="" />
              </a>
            </li>
          </div>

          <div className="divAcc-cart">
            <li><a href=""><img src={Cart} alt="" /></a></li>

            <li><a href=""><img src={Account} alt="" /> </a></li>
          </div>

        </ul>
      </nav>
    </S.StyleHeader>
  );
};
