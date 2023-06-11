import React from 'react';
import styled from "styled-components";
import HomeComponent from "./modules/home";



const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin: 30px 0 10px;
font-family: 'EB Garamond', serif;
font-family: 'Ubuntu', sans-serif;


`;

const Header = styled.span`
 color: rgb(39, 55, 77);
 font-size: 30px;
 font-weight:bold;
`;

function App() {
  return (
    <Container>
           <Header>EXPENSE TRACKER</Header>
           <HomeComponent/>
    </Container>
  );
}

export default App;
