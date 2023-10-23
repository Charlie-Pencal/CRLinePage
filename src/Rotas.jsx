import { GlobalStyle } from './style/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { tema } from './style/tema'
import Produto from './components/pages/Produto/Index';

const Rotas = () => {
    return (
        <ThemeProvider theme={tema} >
            <GlobalStyle/>
            <Produto/>
            
        </ThemeProvider>
    );
}

export default Rotas;
