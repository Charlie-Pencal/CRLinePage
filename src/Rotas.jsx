import { GlobalStyle } from './style/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { tema } from './style/tema'
import Button from './components/common/Button';
import Input from './components/common/Input/Index';
import Cards from './components/common/Cards';
import { Header } from './components/shared/Header/Index';
import Home from './components/pages/home';
import Footer from './components/shared/Footer/Index';



const Rotas = () => {
    return (
        <ThemeProvider theme={tema} >
            <GlobalStyle/>
            
            
            <Home/>
            
        </ThemeProvider>

        
    );
}

export default Rotas;
