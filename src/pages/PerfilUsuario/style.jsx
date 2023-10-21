import styled from "styled-components";

export const StyledPerfilUsuario = styled.section`

    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .containerGeral{
        margin: 2rem 4rem;
        /* padding: 2rem 3rem; */
        display: flex;
        flex-grow: 1;
        background-color: ${(props) => props.theme.marrom};
        
        > .containerNav{
            /* border: solid blue; */
            display: flex;
            flex-direction: column;
            padding: 1rem 2rem;
            gap: 2rem;
            
            .containerImg{
                /* border: solid green; */
                width: 10rem;
                height: 10rem;
                border-radius: 50%;
                box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
            }
            nav{
                /* border: solid fuchsia; */
                display: flex;
                flex-direction: column;
            }
            .itemNav{
                border-left: solid transparent;
                padding: 1rem .5rem;
            }
            .itemNav:hover{
                border-left: solid ${(props) => props.theme.areia};
                box-shadow: inset 0 0 100px 100px rgba(100, 100, 100, 0.1);
            }
        }
        
        .containerInfos{
            /* border: solid fuchsia; */
            padding: 0 2rem;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            
            > h2{
                /* border: solid blue; */
                padding: 1rem;
                
                > span{
                    text-decoration-line: line-through;
                    font-weight: 300;
                    font-size: small;
                    padding-left: 1rem;
                }
            }

            .conteudoInfos{
                border: solid red;
                display: flex;
                flex-grow: 1;
            }
        }
    }

`;
