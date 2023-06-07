import styled from "styled-components";
import OverviewComponent from "./Overviewcomponent";
import TransactionComponent from "./TransactionComponent";

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
    return(
        <Container>
            <OverviewComponent/>
            <TransactionComponent/>
        </Container>
    )
}
export default HomeComponent 