import React from "react";
import { Header } from "../../components/shared/Header/Index";
import Footer from "../../components/shared/Footer/Index";
import { StyledPerfilUsuario } from "./style";

const PerfilUsuario = () => {
    return (
        <>
            <Header />
            <StyledPerfilUsuario>
                <div className="containerNav">
                    {/* Imagem em texto pra não ter q baixar */}
                    {/* Já serve de exemplo para consumir a API */}
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEW/v7////+8vLzDw8Po6Oj29vb6+vrMzMzz8/PU1NTAwMD8/PzIyMjX19fd3d309PTt7e3g4OAycvPjAAAFU0lEQVR4nO2d25arIAyG2wACClTf/2W3tNNVO2NbhQihO9/FzK3/AnMySU8nhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhiwQqf0QxxCVCWet99Zqd/o2nQC9ncaL6rphpuuUMjK47xEJfTDD+S+d1F8hUthxRd0Pw+T62g+YBzhvXuu7Iq1o9yBB2E/6rhp1s+eo5QZ98YWcXJPH2Hu1TeCMsbWfNgEh1+zn62Ns76ZueQOXjLUfeCdizwH+HGNTp+i2v4IPlKv92JsBfUkQONsb3YhJBfcminnL2IjXEBvd4ApS1H74TYRkgedzaMHc6P1m9MGgaz/+Z8ReR/iMIn9PIeeORiR1YyMyBZ7PxL0ipNvROyPtQ8wyMzdoGxuEIyR+iEnx6G86wocIE4JA0uZUpAakzxiyPhFsh6Kw81QPEemSns8TVYUZScUzI9VrqvNC0gcXotYUbL67v9FZmtcUPJLA85moqemxDM2cCNNUiGZoZmNaW8s6yQWoFYU0ixkOy5SSrUhpjLCbtkKcmO3/UDjSLGX8B7f06xV+vy39fn+IGNOE2lpekFvuXiikGZd+f26BVaahmx/i5fiGaI5/6rFMDVFngfBl7Q5RQ3NCi2oU4R4wHJ9PuD0KAka1bSDqK25gXNNLbRHvQLE1dO3MlfxDvNAWCDZbIdV45g7kxjWkv3FfyexVoN2ncCPP2FDNDJdkfeomG5EuSe2fjTTSQws21WUo6nb0Dvg0a0M28V0hSSLtePQ3KY6fcM60wv5v+kNDV/TGzmxYNeDpfwG7CsSyzSHEzcNrqikbswCc3FJBjfPAtR81GbAfNQ6yORPzBIj3Gjvp23wDF4DQ4VXOqIJuIdLegHDTH6MzmMkJmp8JU3E2yBtTsK5v/W6uAQtqPwvDMAzDMEwCtzhGOKdnnHPim9aaRSFzSDpJOZqZi7rMf8fxGp2K9lXe1pgZ1a1V3oZOmXHSp3ZVAuhpdY3Zs87BtLm6rRd6x5KhQerGckWhp71dfGpqKN/XPqnBbZCeZov+L+LLl6LvipnIFxbByczNH5L0Fh4QfytO+zVOZGs4kP7x95dGqkV+tBZhmk3CIPA69SMTtVJ4r/HGSW4YUhsx5wPEGuN+0AU6xzi7CHyB11COikREE/MMkaWfeIsG/kKifQFtBGGd+g3DiGsG1pGVTSriRN5LiVWTqgICZ4kVc6oiAmueYiGBFSUea0WX1NkEgjgy+pka+RToggJrTGEAwobEPQzFY1TE9QLbMIV9RjEz+qCwQU3sVc9hKDlsAohLPrajCr6KFe5opOA9LekJl/hSAh3eMqF9dIXsKcoq3TQK7W4tG8w8U6RSDNiV0T2YAoeIMOmbQ4n4tHS49ow5XB/O2oR0hsOLb5k/fZDP0Yuiax/h8eEp4sayVA7eOFiuNPOaYw/x+xX2BN7Dg8v8eCvLEgUeX3Wrk/3eKZIFQ/Ei1ANTqJ1o308bIlIuyRehxsvYTQWrbT1S99MelC37rbR4cFO6Inwq7fxrfH0q6TZKlkqXEsWmcft8uoobF9795jYaVfuGwIWjr2oXajcN62MbamT9TlPAb7x8YIj88PpR/r/zZCYw0Dq8l6hAalYIIFwww/HhEk6U9EWg9yPaPu8xkJxIiJN4GKmjmSxJfRGII095l7WTXpO7n0+8W0fzmdFrGu7hA8L5FBc5ekfGO3wGTlaqHROWcWithcNbAo8Z4NdKhzgLLINuduI5TqQL7YOU42guSnV3VJzoHkc5xfeuVXUPrqP3vdPaznjv4z+tf2byaz8cLrxEiWEYhmEYhmEYhmGO4x+XEEYrUwlCZQAAAABJRU5ErkJggg==" alt="Foto de perfil do usuário" className="containerImg"/>
                    <nav>
                        <a href="" className="itemNav">Dados Pessoais</a>
                        <a href="" className="itemNav">Endereços</a>
                        <a href="" className="itemNav">Pedidos</a>
                    </nav>
                </div>
                <div className="containerInfos">
                    <h2>Olá Gertrude <span>Se esse for seu nome</span></h2>
                    <form className="formularioDadosPessoais" onSubmit={""}>
                        <div>
                            <label>Nome</label>
                            <input type="text" placeholder="Gertrude Joaquina" readOnly/>
                        </div>
                        <div>
                            <label>CPF</label>
                            <input type="text" placeholder="000.000.000-00" readOnly/>
                        </div>
                        <div>
                            <label>Telefone</label>
                            <input type="text" placeholder="(00)0000-0000" readOnly/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" placeholder="email@provedor.com" readOnly/>
                        </div>
                        <button type="submit">Editar Dados</button>
                    </form>
                </div>
            </StyledPerfilUsuario>
            <Footer />
        </>
    );
};

export default PerfilUsuario;

