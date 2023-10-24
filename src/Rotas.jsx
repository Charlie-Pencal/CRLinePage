import { GlobalStyle } from "./style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { tema } from "./style/tema";
import Shop from "./pages/Shop/Index";





const Rotas = () => {
    return (
       
            <ThemeProvider theme={tema}>
                <GlobalStyle />
            
                <Shop/>

                
            </ThemeProvider>
      
    );
};

export default Rotas;