import { GlobalStyle } from './style/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { tema } from './style/tema'
import Footer from './components/shared/Footer/Index';


const Rotas = () => {
    return (
        <ThemeProvider theme={tema}>
            <GlobalStyle />
            
            <Footer />
        </ThemeProvider>
    );
}

export default Rotas;
