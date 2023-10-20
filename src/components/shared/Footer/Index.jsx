import React from "react";
import { StyledFooter } from "./style";

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
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/comprar">Shop</a>
            </li>
            <li>
                <a href="/sobre">Sobre a CRLine</a>
            </li>
            <li>
                <a href="/contato">Fale Conosco</a>
            </li>
            </ul>
            <ul className="footer-list">
                <li>
                    <a href="/payment-options">Pagamentos</a>
                </li>
                <li>
                    <a href="/returns">Devolução</a>
                </li>
                <li>
                    <a href="/privacy-policies">Politica de privacidade</a>
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
