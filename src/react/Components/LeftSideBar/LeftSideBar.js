import React, { useState } from 'react'

import axios from 'axios'

import {
    LeftSideBar,
    InputContainer,
    DataInput,
    DataTitle,
    SendRequestButton,
    ResponseVisualizationContainer,
    ResponseVisualizationText,
    VerbsSelector,
    VerbsPicker
} from './Styles'

export default function LeftBar() {

    const [url, setUrl] = useState("")
    const [httpVerb, setHttpVerb] = useState("get")
    const [response, setResponse] = useState("")


    async function handleSendRequest() {
        const api = axios.create({
            baseURL: url
        })

        try{
            const res = await api({
                method: httpVerb,
                url: url
            });
            setResponse(JSON.stringify(res.data))
        
        }catch(e){
            setResponse(JSON.stringify(e.message))
        }    
    }

    return (
        <LeftSideBar>
            <InputContainer>
                <DataTitle>URL</DataTitle>
                <DataInput value={url} onChange={(e) => setUrl(e.target.value)} />
                <VerbsSelector onChange={(e)=>setHttpVerb(e.currentTarget.value)}>
                    <VerbsPicker value="get" >GET</VerbsPicker>
                    <VerbsPicker value="put">PUT</VerbsPicker>
                    <VerbsPicker value="post">POST</VerbsPicker>
                    <VerbsPicker value="delete">DELETE</VerbsPicker>
                </VerbsSelector>
                
                <SendRequestButton onClick={handleSendRequest}>Enviar!</SendRequestButton>
                
                
                <ResponseVisualizationContainer>
                    <ResponseVisualizationText>
                        {response}
                    </ResponseVisualizationText>
                </ResponseVisualizationContainer>
            </InputContainer>
        </LeftSideBar>
    )
}