import styled from 'styled-components';

const StylesDiv = styled.div`
width:256px;
height: 400px;
margin:30px;

background-color: #FFFFFF;
box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
display: flex;
flex-direction: column;
justify-content: space-between;
flex-wrap: nowrap;

  a {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: stretch;
    justify-content: space-evenly;
    align-items: center;
    text-decoration: none;
    color:black !important;
  }

  img {
    widith: 200px;
    height: 300px;
  }

  h3 {
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: -0.22248774766921997px;
    text-align: center;
    color: #1D1D1B;
    left: 9.73px;
    right: 13.63px;
    top: 50.3%;
    bottom: 38.63%;

  }

    h4 {
      font-family: Lato;
      font-size: 11px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0px;
      text-align: center;
    }

    p {
      font-family: Lato;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 14px;
      letter-spacing: 0px;
      text-align: center;
      width: 256px;
      left: 0px;
      top: 76.21%;
      bottom: 19.76%;
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      text-transform: uppercase;
      color: #888888;
    }


  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 11px 23px;
    width: 256px;
    height: 39px;
    left: 0px;
    top: 348px;
    background: red;
    box-shadow: 0px 0.973384px 1px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    color: #FFFFFF;
    border:none;
  }
`;

export default StylesDiv;
