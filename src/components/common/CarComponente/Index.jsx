import Button from "../Button";
import { StyledCarComponente } from "./style";

const CarComponente = ({ data, handleRemoveItem }) => {
    return (
        <StyledCarComponente>
            <img className="imgtd-produto" src="/product.jpg"/>
            <h4>{data.nome}</h4>
            <p>R$ {data.preco}</p>
            <p>R$ {data.quantidade}</p>
            <Button variante={"segundo"} texto={"Lixeira"} on onClick={handleRemoveItem}/>
        </StyledCarComponente>
    );
};

export default CarComponente;
