import Styled from 'styled-components'

export const LeftSideBar = Styled.div`
    display: flex;
    
    height: 100vh;
    width: 50vw;

    align-items: center;
    justify-content: center;
`;

export const InputContainer = Styled.div`
    display: flex;
    flex-direction: column;

    height: 300px;
    width: 200px;

    border-radius: 8px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);

`;

export const DataInput = Styled.input`
    margin: 8px;
`;