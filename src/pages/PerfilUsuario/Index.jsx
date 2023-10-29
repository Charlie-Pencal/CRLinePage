import { useEffect, useState } from 'react'
import { Header } from "../../components/shared/Header/Index";
import Footer from "../../components/shared/Footer/Index";
import { StyledPerfilUsuario } from "./style";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import Input from '../../components/common/Input/Index';
import { set } from 'react-hook-form';
import { toast } from 'react-toastify';

const PerfilUsuario = () => {
    
    const params = useParams()
    
    const idCliente = JSON.parse(localStorage.getItem('userId'))
    
    const urlApi = `http://localhost:3000/clientes/${idCliente}`

    const [cliente, setCliente] = useState([])
    const [modalAberto, setModalAberto] = useState(false)
    

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
    

    const atualizarDados = async () => {
        try {
            const data = {
                nome: cliente.nome,
                sobrenome: cliente.sobrenome,
                email: cliente.email
            }
            await axios.patch(urlApi, data);
            
            setModalAberto(false);
            toast.success('Dados atualizados com sucesso');
        } catch (error) {
            console.error('Erro na requisição PATCH:', error);
            toast.error('Erro ao atualizar dados');
        }
            
    }

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
                        <Button variante={"quinto"} texto={"Editar Dados Pessoais"} onClick={() => setModalAberto(true)}/>
                    </div>
                </div>
            </StyledPerfilUsuario>
            <Footer />

            <Modal  open={modalAberto} fechar={() => setModalAberto(false)}>
                <h1>Alteração dos Dados Pessoais</h1>
                <label htmlFor="">Nome</label>
                <Input 
                type="text"
                width='50%'
                height='45px'
                radius='8px'
                padding='10px'
                value={cliente.nome}
                onChange={(event) => setCliente({...cliente, nome: event.target.value})}
                  />
                <label htmlFor="">Sobrenome</label>
                <Input
                type="text"
                width='50%'
                height='45px'
                radius='8px'
                padding='10px'
                value={cliente.sobrenome}
                onChange={(event) => setCliente({...cliente, sobrenome: event.target.value})}
                  />
                <label htmlFor="">Email</label>
                <Input
                type="text"
                width='100%'
                height='45px'
                radius='8px'
                padding='10px'
                value={cliente.email}
                onChange={(event) => setCliente({...cliente, email: event.target.value})}
                  />
                <Button variante={"primeiro"} texto={"Salvar"} onClick={() => atualizarDados()}/>
            </Modal>
        </>
    );
};

export default PerfilUsuario;

