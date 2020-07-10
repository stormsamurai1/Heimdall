import React, {useState} from 'react'

import { connect } from 'react-redux'

import { RightSideBar,
         InputContainer,
         ResponseVisualizationContainer,
         ResponseVisualizationText } from './Styles'

function RightBar({ responseInformation }){
    const [response, setResponse] = useState("")
    console.log(responseInformation)
    return(
        <RightSideBar>
             <InputContainer>
                <ResponseVisualizationContainer>
                    <ResponseVisualizationText>
                        {
                        JSON.stringify(responseInformation) === '{}' 
                        ? undefined 
                        : JSON.stringify(responseInformation)
                        }
                    </ResponseVisualizationText>
                </ResponseVisualizationContainer>
            </InputContainer>
        </RightSideBar>
    )
}


export default connect(state => ({ responseInformation: state.responseInformation }))(RightBar);