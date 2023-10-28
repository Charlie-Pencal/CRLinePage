import { useEffect, useState } from 'react'
import { Header } from "../../components/shared/Header/Index";
import Footer from "../../components/shared/Footer/Index";
import { StyledPerfilUsuario } from "./style";
import { Link } from "react-router-dom";
import axios from 'axios';

const PerfilUsuario = () => {
    
    // depois alterar idCliente para consumir o local storage
    const idCliente = JSON.parse(localStorage.getItem('userId'))
    const urlApi = `http://localhost:3000/clientes/${idCliente}`

    const [cliente, setCliente] = useState([])

    const getCliente = async() => {
        try {
            const resposta = await axios.get(urlApi)
            const data = resposta.data
            setCliente(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCliente()
    }, [])

    return (
        <>
            <Header />
            <StyledPerfilUsuario>
                <div className="containerGeral">
                    <div className="containerNav">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTip18a5vyLJJXYZgGE44WTFaislpkAcvQURSqLik0tsv8DuPggkyib-NrlShXqM2mO9k&usqp=CAU" alt="Foto de perfil do usuário" className="containerImg"/>
                        <nav>
                            <Link to="/perfil" className="itemNav">Dados Pessoais</Link>
                            <Link to="/pedidos" className="itemNav">Pedidos</Link>
                        </nav>
                    </div>
                    <div className="containerInfos">
                        <h2>Dados Pessoais</h2>
                        <div className="containerDadosPessoais">
                            <div>
                                <h4>Nome: </h4>
                                <p>{cliente.nome}</p>
                            </div>
                            <div>
                                <h4>Sobrenome: </h4>
                                <p>{cliente.sobrenome}</p>
                            </div>
                            <div>
                                <h4>Email: </h4>
                                <p>{cliente.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </StyledPerfilUsuario>
            <Footer />
        </>
    );
};

export default PerfilUsuario;

