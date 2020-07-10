import React, { useState } from 'react'

import axios from 'axios'

import { connect } from 'react-redux'

import {
    CenterBarContainer,
    Header,
    HttpVerbSelectorContainer,
    UrlInputArea,
    SubmitRequestButton,
    VerbsSelector,
    VerbsPicker
} from './Styles'

function CenterBar({requestInformation, response, dispatch}) {

    const [baseurl, setBaseurl] = useState(requestInformation.baseurl)
    const [httpVerb, setHttpVerb] = useState(requestInformation.httpVerb)
    

    function setResponseData(response){
        return{
            type:'SET_RESPONSE_DATA',
            response
        }
    }

    async function handleSendRequest() {
        const api = axios.create()

        try{
            const res = await api({
                method: httpVerb,
                url: baseurl
            });
            dispatch(setResponseData(res))

        }catch(e){
            dispatch(setResponseData(e.message))
        }    
    }

    return (
        <CenterBarContainer>
            <Header>
                <HttpVerbSelectorContainer>
                    <VerbsSelector onChange={(e)=> setHttpVerb(e.currentTarget.value)}>
                        <VerbsPicker value="get" >GET</VerbsPicker>
                        <VerbsPicker value="put">PUT</VerbsPicker>
                        <VerbsPicker value="post">POST</VerbsPicker>
                        <VerbsPicker value="delete">DELETE</VerbsPicker>
                    </VerbsSelector>
                </HttpVerbSelectorContainer>
            
                <UrlInputArea value={baseurl} onChange={(e) => setBaseurl(e.target.value)}/>
                
                <SubmitRequestButton onClick={handleSendRequest}>
                    Enviar!
                </SubmitRequestButton>
            </Header> 
        </CenterBarContainer>    
              
    )
}

export default connect(state => ({ requestInformation: state.requestInformation, response:  state.responseInformation}))(CenterBar);