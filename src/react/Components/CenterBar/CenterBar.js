import React, { useState } from 'react'

import axios from 'axios'

import { connect } from 'react-redux'

import * as responseHandlers from '../../../store/actions/response'

import {
    CenterBarContainer,
    Header,
    HttpVerbSelectorContainer,
    UrlInputArea,
    SubmitRequestButton,
    VerbsSelector,
    VerbsPicker
} from './Styles'

function CenterBar({requestInformation, dispatchResponseData}) {

    const [baseurl, setBaseurl] = useState(requestInformation.baseurl)
    const [httpVerb, setHttpVerb] = useState(requestInformation.httpVerb)
    

    async function handleSendRequest() {
        const api = axios.create()

        try{
            const res = await api({
                method: httpVerb,
                url: baseurl
            });
            dispatchResponseData(res)

        }catch(e){
            dispatchResponseData(e.message)
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

const mapStateToProps = (state) => ({
    requestInformation: state.response.requestInformation
})

const mapDispatchToProps = (dispatch) => ({
    dispatchResponseData : (data) => dispatch(responseHandlers.setResponseData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CenterBar);