import styled from "styled-components";

export const StyledCarrinho = styled.section`
.carrinho-container{
top: 488px;
left: 97px;
padding: 50px ;

}

.carrinho-content{
    width: 100%;
    height: 100%;
    top: 488px;
    left: 97px;
    border: 1px;
    display: flex;
    color: white;

}

.section-carrinho{
flex: 1;


}

aside{
background-color:${(props) => props.theme.marron};
min-width: 250px;
}

table{
width: 100%;
border-collapse: collapse;

}


thead{
width: 846.89px;
height: 55px;
top: 488px;
left: 100.11px;

    
}

tr{
    border-bottom: 1px solid black;
    text-align: center;
    
}


th{
    padding-bottom: 10px;
    background-color:${(props) => props.theme.marron};
    

}




.carrinho-produto{
    display: flex;
    align-items: center;
    padding-left: 50px;
    margin-top: 30px;

}
.carrinho-descricao{
    margin-left: 50px;
    color:${(props) => props.theme.branco};
    padding:30px;
}

.carrinho-nome{
    
    top: 639px;
    left: 247.3px;
}


span{
    width: 62px;
    height: 21px;
    top: 612px;
    left: 1022px;

}

.carrinho-aside{
    display: block;
    text-align: center;
    width: 393px;
    height: 390px;
    top: 488px;
    left: 947px;
    border: 1px;

    
}

.titulo-aside{
    text-align: center;    
    font-family: Red Hat Display;
    font-size: 32px;
    font-weight: 800;
    line-height: 42px;
    letter-spacing: 0em;
        
}

.qtde-dois{
    width: 33.17px;
    height: 32px;
    top: 635px;
    left: 633.95px;
    border-radius: 5px;
    border: 1px solid white;
    background-color: ${(props) => props.theme.azul};
    align-items: center;
    color:${(props) => props.theme.branco};
        
    
}

.carrinho-quantidade{
    display: inline flex;
    padding: 5px 0;
    justify-content:space-around;
    min-width: 80px;
    border-radius: 5px;

}

.carrinho-remove{
    background:gold ;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 5px;
    
}


.subtotal{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px;
        
}

.total{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px;
    font-weight: bold;
    
    .span-total{
        font-weight: bold;
        color:${(props) => props.theme.areia}
    
    }

}
.img-lixeira{
    background-color: ${(props) => props.theme.azul};
}

.imgtd-produto{
    width: 115px;
    height: 105px;
    top:598px;
    left: 97px;

}
.btn-comprar{
    background-color: ${(props) => props.theme.marron};
    color: ${(props) => props.theme.branco};
    width: 222px;
    height: 58.95px;
    top: 739px;
    left: 1033px;
    border-radius: 15px ;
    border: 2px solid ${(props) => props.theme.branco};
    cursor: pointer;

}

`