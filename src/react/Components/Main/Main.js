import React from 'react'

import { Provider } from 'react-redux'

import store from '../../../store/store'

import LeftSideBar from '../LeftSidebar/LeftSidebar'
import CenterBar from '../CenterBar/CenterBar'
import RightSideBar from '../RightSideBar/RightSideBar'

import { MainDiv } from './Styles'

export default function Main(){
    return(
        <MainDiv>
            <Provider store={store}>
                <LeftSideBar/>
                <CenterBar/>
                <RightSideBar/>
            </Provider>
        </MainDiv>
    )
}