import styled from 'styled-components'

const StylesUl = styled.div`
display:flex;
flex-direction:column;
list-style:none;
margin-bottom:10px;

  li {
   margin-left: 1rem;

   __item--active {
    backgroud:none;
    font-weight: bold;
  }
 }


`;

export default StylesUl;
