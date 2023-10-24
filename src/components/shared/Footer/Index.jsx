import React from "react";
import { StyledFooter } from "./style";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <StyledFooter>
            <div className="footer-container">
                <div className="footer-content">
                    <p>
                        Av. Sete de Setembro, 2775 - Rebouças, Curitiba - PR,
                        <br /> 80230-010
                    </p>
                    <ul className="footer-list">
                        <li>
                            <Link to="/" className={"link"}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/shop" className={"link"}>
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className={"link"}>
                                Sobre a CRLine
                            </Link>
                        </li>
                        <li>
                            <Link to="/contato" className={"link"}>
                                Fale Conosco
                            </Link>
                        </li>
                    </ul>
                    <ul className="footer-list">
                        <li>
                            <Link to="/" className={"link"}>
                                Pagamentos
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className={"link"}>
                                Devolução
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className={"link"}>
                                Politica de privacidade
                            </Link>
                            <a href="/privacy-policies">
                                Politica de privacidade
                            </a>
                        </li>
                    </ul>
                    <div className="footer-logo">
                        <img src="/logo.svg" alt="Logo" />
                    </div>
                </div>

                <div className="footer-direitos">
                    <p>2023 CRLine. Todos os direitos Reservados.</p>
                </div>
            </div>
        </StyledFooter>
    );
};

export default Footer;
