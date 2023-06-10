import styled from "styled-components";
import OverviewComponent from "./Overviewcomponent";
import TransactionComponent from "./TransactionComponent";
import { useState } from "react";

const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin: 30px 0 10px;
font-family: 'EB Garamond', serif;
font-family: 'Ubuntu', sans-serif;
width:360px;
`;


const HomeComponent = (props) => {
    const [transactions , updateTransaction]=useState([]);

    const addTransaction = (payload) => {
        const transactionArray=[...transactions];
        transactionArray.push(payload);
        updateTransaction(transactionArray);
    }
    return(
        <Container>
            <OverviewComponent addTransaction={addTransaction}/>
            <TransactionComponent transactions={transactions}/>
        </Container>
    )
}
export default HomeComponent 