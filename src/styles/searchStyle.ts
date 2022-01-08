import styled from 'styled-components';

const searchStyle = styled.div`
height:84px;
display:flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
background-color: white;

section {
  width: 30%;
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
}

button {
  width: 56px;
  height: 56px;
  left: calc(50% - 56px/2 + 341.28px);
  top: calc(50% - 56px/2 - 0.12px);
  background: #FFFFFF;
  border: none !important;
}

a {
  text-decoration: none;
  color:black !important;
  font-size:22px
 }

input {
  border-radius: 15px;
  height:30px;
  border: none;
  box-shadow: inset 0 0 3px purple;
}

  div {
    display : flex;
    align-items: center;
    ustify-content: pace-between;
    align-content: pace-between;
  }

`;

export default searchStyle;
