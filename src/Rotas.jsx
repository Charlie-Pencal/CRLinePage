import { GlobalStyle } from './style/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { tema } from './style/tema'
import Home from './pages/Home'




const Rotas = () => {
    return (
        <ThemeProvider theme={tema} >
            <GlobalStyle/>
            
            
            <Home/>
            
        </ThemeProvider>

        
    );
}

export default Rotas;
