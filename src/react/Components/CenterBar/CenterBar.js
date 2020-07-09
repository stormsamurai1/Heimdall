import React, { useState } from 'react'

import axios from 'axios'

import {
    CenterBarContainer,
    Header,
    HttpVerbSelectorContainer,
    UrlInputArea,
    SubmitRequestButton,
    VerbsSelector,
    VerbsPicker
} from './Styles'

export default function CenterBar() {

    const [url, setUrl] = useState("http://localhost:3333")
    const [httpVerb, setHttpVerb] = useState("get")


    async function handleSendRequest() {
        const api = axios.create({
            baseURL: url
        })

        try{
            const res = await api({
                method: httpVerb,
                url: url
            });
            console.log(JSON.stringify(res.data))
        
        }catch(e){
            console.log(JSON.stringify(e.message))
        }    
    }

    return (
        <CenterBarContainer>
            <Header>
                <HttpVerbSelectorContainer>
                    <VerbsSelector onChange={(e)=>setHttpVerb(e.currentTarget.value)}>
                        <VerbsPicker value="get" >GET</VerbsPicker>
                        <VerbsPicker value="put">PUT</VerbsPicker>
                        <VerbsPicker value="post">POST</VerbsPicker>
                        <VerbsPicker value="delete">DELETE</VerbsPicker>
                    </VerbsSelector>
                </HttpVerbSelectorContainer>
            
                <UrlInputArea value={url} onchange={(e) => setUrl(e.target.value)}/>
                
                <SubmitRequestButton onClick={handleSendRequest}>
                    Enviar!
                </SubmitRequestButton>
            </Header> 
        </CenterBarContainer>    
              
    )
}