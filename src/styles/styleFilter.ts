import styled from 'styled-components';

const StyleFilter = styled.div`
margin-top: 100px;
width:200px;
height: 300px;
display: flex;
flex-direction: column;
justify-content: pace-between;

section {
  display: flex;
  flex-direction: column;
  justify-content: pace-between;
  height:100%;
}

div {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-end;
}

 label {
  display: flex;
  position: relative;
  flex-direction: column;
  widith: 400px !important;
  justify-content: pace-between;
 }

 input {
   width: 30px;
   heigth:30px;
 }
`;

export default StyleFilter;
