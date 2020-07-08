import Styled from 'styled-components'

export const LeftSideBar = Styled.div`
    display: flex;
    
    height: 100vh;
    width: 50vw;

    align-items: center;
    justify-content: center;

    border-radius: 8px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
    background: #555555;
`;

export const InputContainer = Styled.div`
    display: flex;
    flex-direction: column;


    align-items: center;

    height: 300px;
    width: 200px;

    border-radius: 8px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);

    background: #e6e6f0;
`;

export const DataTitle = Styled.a`
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 15px;

    line-height: 21px;

    color: #000000;
`;

export const DataInput = Styled.input`
    margin: 4px;
`;

export const SendRequestButton = Styled.button`
    background: #7a98F5;
    align-items: center;
    justify-content: center;
    
    border-radius: 8px;
`;

export const VerbsSelector = Styled.select`

`;

export const VerbsPicker = Styled.option`
`;

export const ResponseVisualizationContainer = Styled.div`
    display: flex;

    margin: 10px;
    width: 70%;
    height: 80%;

    overflow: auto;

    border-radius: 8px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);  
`;

export const ResponseVisualizationText = Styled.p`

    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 15px;

    line-height: 21px;

    color: #000000;

`;