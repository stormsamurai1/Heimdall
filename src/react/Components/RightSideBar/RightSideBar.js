import React, {useState} from 'react'

import { RightSideBar,
         InputContainer,
         ResponseVisualizationContainer,
         ResponseVisualizationText } from './Styles'

export default function RightBar(){
    const [response, setResponse] = useState("")
    
    return(
        <RightSideBar>
             <InputContainer>
                
                <ResponseVisualizationContainer>
                    <ResponseVisualizationText>
                        {response}
                    </ResponseVisualizationText>
                </ResponseVisualizationContainer>
            </InputContainer>
        </RightSideBar>
    )
}