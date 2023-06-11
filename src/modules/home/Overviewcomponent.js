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
const AddTransaction = styled.div`
background : black;
color : white;
padding : 3px 8px;
border-radius : 3px;
text-align:center;
cursor:pointer;
font-weight: bold;
font-size:15px

`;
const AddTransactionContainer= styled.div`
display:flex;
flex-direction:column;
border:1px solid #e6e8e9;
gap : 10px;
width:100%;
padding : 15px 20px;
margin :  20px;
& input{
    outline: none;
    padding: 10px 12px;
    border-radius:4px;
    border:1px solid #e6e8e9;

}
`;
const RadioBox = styled.div`
display: flex;
flex-direction: row;
width: 100%;
align-items: center;
`;
const AddTransactionView = (props) => {
    const [amount,setAmount]=useState();
    const[desc,setDesc]=useState();
    const[type,setType]=useState("EXPENSE");
    const addTransaction = ()=>{
        props.addTransaction({amount:Number(amount),desc,type,id: Date.now(),});
        props.toggleAddTxn();
    }

    return(
        <AddTransactionContainer>
         <input placeholder="Amount" value={amount} type="number" onChange={(e) => setAmount(e.target.value)}/>
         <input placeholder="Description" value={desc} onChange={(e) => setDesc (e.target.value)}/>
         <RadioBox>
            <input type="radio" id="expense" name="type" value="EXPENSE"  checked={type==="EXPENSE"}/>
           <label htmlFor="expense">Expense</label>
           <input type="radio" id="income" name="type" value="INCOME" checked={type==="INCOME"}  onChange={(e)=>setType(e.target.value)}></input>
           <label htmlFor="income">Income</label>
         </RadioBox>
         <AddTransaction onClick={addTransaction}>Add Transaction</AddTransaction>
        </AddTransactionContainer>
    );

};
const ExpenseContainer = styled.div`
display:flex;
flex-direction : row;
gap:12px;
margin: 20px;
`;
const ExpenseBox = styled.div`
display:flex;
flex-direction :column;
border-radius: 4px;
border: 1px solid #e6e8e9;
padding: 15px 20px;
width:135px;
font-size:14px;
& span{
    font-weight:bold;
    font-size:20px;
    color: ${(props) => (props.isIncome ? "green" : "red")};
}


`;

const OverviewComponent = (props) => {
    const [isAddTxnVisible,toggleAddTxn] = useState(false);
    return(
        <Container>
            <BalanceBox>
                Balance : Rs {props.income - props.expense}
                <AddTransaction onClick={() => toggleAddTxn(!isAddTxnVisible)}>{isAddTxnVisible ? "Cancel" : "Add"}</AddTransaction>
            </BalanceBox>
            {isAddTxnVisible && (<AddTransactionView toggleAddTxn ={toggleAddTxn} addTransaction={props.addTransaction}/>
            )}

            <ExpenseContainer>
                <ExpenseBox isIncome={false}>
                    Expense<span>
                      Rs {props.expense}
                    </span>
                </ExpenseBox>
                <ExpenseBox isIncome={true}>
                   Income<span>
                   Rs {props.income}
                    </span>
                </ExpenseBox>

            </ExpenseContainer>
           
        </Container>
    );
};
export default OverviewComponent 