import { GlobalStyle } from './style/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { tema } from './style/tema'
import Button from './components/common/Button';
import Input from './components/common/Input/Index';
import Cards from './components/common/Cards';
import { Header } from './components/shared/Header/Index';



const Rotas = () => {
    return (
        <ThemeProvider theme={tema} >
            <GlobalStyle/>
            
            
            <Header/>
        </ThemeProvider>

        
    );
}

export default Rotas;
