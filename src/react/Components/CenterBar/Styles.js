import Styled from 'styled-components'

export const CenterBarContainer = Styled.div`
    display: flex;
    
    height: 100vh;
    width: 45vw;

    background: #555555;
`;

export const Header = Styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 10%;

    background: #777777;
`;

export const HttpVerbSelectorContainer = Styled.div`
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 18%;
`;

export const VerbsSelector = Styled.select`
    width: 100%;
    height: 100%;

    background: #777777;
    color: #ffffff;

    text-align-last: center;

    box-sizing: border-box;
    outline: none;
`;

export const VerbsPicker = Styled.option`

`;

export const UrlInputArea = Styled.input`
    height: 100%;
    width: 64%;
    box-sizing: border-box;
    outline: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 17px;

    line-height: 21px;

    color: #555555;
`;

export const SubmitRequestButton = Styled.button`
    height: 100%;
    width: 18%;

    padding: 0;
    border: none;
    outline: none;
    color: inherit;
    background: #777777;

    :hover{
        background: #666666;
    }  
`;
