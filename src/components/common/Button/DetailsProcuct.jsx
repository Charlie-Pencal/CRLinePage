import {Container} from "./Style"

const ButtonCompDetails = ({title, onClick}) => {

    return (
        <Container>
            <button
                onClick={onClick}
                >
                {title}
            </button>
            </Container>
    )

}

export default ButtonCompDetails