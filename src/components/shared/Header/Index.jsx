import React, { useState } from "react";
import * as S from "./Style";
import Cart from "/cart.svg";
import Account from "/account.svg";
import CrlineIcon from "/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../common/Button";


export const Header = () => {
    const getUser = JSON.parse(localStorage.getItem('userId'));
    const [log, setLog] = useState(!!getUser);

    const navigate = useNavigate();

    const autenticUser = (e) => {
        e.preventDefault();

        if (getUser === null) {
            navigate("/login");
        } else {
            navigate('/perfil');
        }
    };

    const autenticCart = (e) => {
        e.preventDefault();
        if (getUser === null) {
            navigate("/login");
        } else {
            navigate('/carrinho');
        }
    };

    const logout = (e) => {
        e.preventDefault();
        localStorage.setItem('userId', JSON.stringify(null));
        navigate("/login");
        setLog(false);
    };

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

                    <div className="divAcc-cart">
                        <li>
                            <Link to="/carrinho" className={"link"}>
                                <img src={Cart} onClick={autenticCart} alt="carrinho" />
                            </Link>
                        </li>

                        <li>
                            <Link onClick={autenticUser} className={"link"}>
                                <img src={Account} alt="conta usuario" />
                            </Link>
                        </li>
                        {log ? <Button variante={"primeiro"} texto={"Logout"} onClick={logout} /> : null}
                    </div>
                </ul>
            </nav>
        </S.StyleHeader>
    );
};
