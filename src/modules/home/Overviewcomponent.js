import { useState } from "react";
import styled from "styled-components";


const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin: 10px;
font-family: 'EB Garamond', serif;
font-family: 'Ubuntu', sans-serif;
width:100%;
`;
const BalanceBox = styled.div`
font-size:18px;
width:100%;
font-weight:bold;
display:flex;
flex-direction: row;
justify-content: space-between;
`;
const AddTransaction = styled.button`
background : black;
color : white;
padding : 3px 8px;
border-radius : 3px;
cursor:pointer;
font-weight: bold;
font-size:15px
`;
const AddTransactionContainer= styled.div`
display:flex;
flex-direction:column;
border:1px solid #e6e8e9;
gap : 10px
padding : 15px 20px;
margin : 15px 20px;
`;
const AddTransactionView = () => {
    return(
        <AddTransactionContainer>
         <input placeholder="Amount"/>
         <input placeholder="Description"/>
        </AddTransactionContainer>
    )

};

const OverviewComponent = (props) => {
    const [isAddTxnVisible,toggleAddTxn] = useState(true);
    return(
        <Container>
            <BalanceBox>
                Balance:10000
                <AddTransaction>{isAddTxnVisible ? "Cancel" : "Add"}</AddTransaction>
            </BalanceBox>
            {isAddTxnVisible && <AddTransactionView/>}
           
        </Container>
    )
}
export default OverviewComponent 