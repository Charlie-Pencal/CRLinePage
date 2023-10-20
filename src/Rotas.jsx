import { GlobalStyle } from './style/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { tema } from './style/tema'
import Button from './components/common/Button';
import Input from './components/common/Input/Index';
import Cards from './components/common/Cards';


const Rotas = () => {
    return (
        <ThemeProvider theme={tema} >
            <GlobalStyle/>
            <Cards BookName={"Livro"} description={"livrinho"} price={"R$47,00"} discount={"65,00"} display={"none"}/>
            
        </ThemeProvider>
    );
}

export default Rotas;
