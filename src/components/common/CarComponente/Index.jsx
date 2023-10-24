import React from "react";
import Button from "../Button/Index";



  const CarComponente = ({ data, handleRemoveItem }) => {
    const [quantidade, setQuantidade] = useState(0);

    useEffect(() => {
      const initialQuantidade = 10; // Exemplo de valor inicial
      setQuantidade(initialQuantidade);
    }, []);
  
  const handleInputChange = (event) => {
    setQuantidade(event.target.value);
  };
  return (
    <div>
      <tr>
        <td>
          <div className="carrinho-produto">
            <img className="imgtd-produto" src="/src/product.jpg" alt="" />
            <div className="carrinho-descricao">
              <div className="carrinho-nome">{data.nome}</div>
            </div>
          </div>
        </td>
        <td>R$ {data.preço}</td>
        <td>
          <div className="carrinho-quantidade">
            <div
              className="qtde-dois"
              value={data.quantidade}
              onChange={handleInputChange}
            ></div>
          </div>
        </td>
        <td>R${data.preço * data.quantidade}</td>
        <td>
        <Button variante={'segundo'} texto={'Lixeira'}/>
          
        </td>
      </tr>
    </div>
  );
};


export default CarComponente;
