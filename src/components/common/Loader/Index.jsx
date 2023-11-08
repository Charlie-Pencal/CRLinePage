import React from 'react'
import styled from "styled-components";

const Loader = ({texto}) => {
  return (
      <>
          <StyledLoader>
              <h2 className='animado'>{texto}</h2>
          </StyledLoader>
      </>
  )
}

export default Loader

const StyledLoader = styled.div`
@keyframes load {
    0%{
        opacity: 0.08;

				filter: blur(5px);
				letter-spacing: 3px;
        }

}

.animado {
	display:flex;
	justify-content: center;
	align-items: center;
	height:100%;
	margin: auto;
	animation: load 1.2s infinite 0s ease-in-out;
	animation-direction: alternate;
	text-shadow: 0 0 1px white;
}
`