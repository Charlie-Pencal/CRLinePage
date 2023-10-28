import Button from "../Button";
import { StyledCarComponente } from "./style";

const CarComponente = ({ data, handleRemoveItem }) => {
    return (
        <StyledCarComponente>
            <img className="imgtd-produto" src={data.imagensProduto && data.imagensProduto[0]}/>
            <h4>{data.nome}</h4>
            <p>R$ {data.preco}</p>
            <p>R$ {data.quantidade}</p>
            <Button variante={"segundo"} texto={"Lixeira"} onClick={() => handleRemoveItem(data.key)} />
        </StyledCarComponente>
    );
};

export default CarComponente;
