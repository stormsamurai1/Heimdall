import React, {useState} from 'react'

import { connect } from 'react-redux'

import { RightSideBar,
         InputContainer,
         ResponseVisualizationContainer,
         ResponseVisualizationText } from './Styles'

function RightBar({ responseInformation }){
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

const mapStateToProps = (state) => ({
    responseInformation: state.response.responseInformation,
})


export default connect(mapStateToProps)(RightBar);