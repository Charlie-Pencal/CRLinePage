import { GlobalStyle } from './style/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { tema } from './style/tema'


const Rotas = () => {
    return (
        <ThemeProvider theme={tema}>
            <GlobalStyle />
            <h1>Hello world!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, soluta suscipit quo pariatur eaque iste ipsa cumque eos repellat modi, quos qui at autem ad distinctio voluptas laudantium similique nesciunt.</p>
        </ThemeProvider>
    );
}

export default Rotas;
