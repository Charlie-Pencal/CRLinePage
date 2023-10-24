import React from "react";
import * as S from "./Style";
import Search from "/search.svg";
import Cart from "/cart.svg";
import Account from "/account.svg";
import CrlineIcon from "/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {

    return (
        <S.StyleHeader className="content">
            <div className="divLogo">
                <h1>
                    <img className="logo" src={CrlineIcon} alt="logo" />
                </h1>
            </div>

            <nav className="navBar">
                <ul className={"lista_links"}>
                    <li>
                        <Link to="/" className={"link"}>Home</Link>
                    </li>

                    <li>
                        <Link to="/shop" className={"link"}>Shop</Link>
                    </li>

                    <li>
                        <Link to="/contato" className={"link"}>Contato</Link>
                    </li>
                    <div className="divSerach">
                        <li>
                            <a className={"link"}>
                                <img src={Search} alt="lupa pesquisa" />
                            </a>
                        </li>
                    </div>

                    <div className="divAcc-cart">
                        <li>
                            <Link to="/carrinho" className={"link"}>
                                <img src={Cart} alt="carrinho" />
                            </Link>
                        </li>

                        <li>
                            <Link to="/login" className={"link"}>
                                <img src={Account} alt="conta usuario" />
                            </Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </S.StyleHeader>
    );
};
