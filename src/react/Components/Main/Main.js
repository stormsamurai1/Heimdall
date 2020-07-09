import React from 'react'

import LeftSideBar from '../LeftSidebar/LeftSidebar'
import CenterBar from '../CenterBar/CenterBar'
import RightSideBar from '../RightSideBar/RightSideBar'

import { MainDiv } from './Styles'

export default function Main(){
    return(
        <MainDiv>
            <LeftSideBar/>
            <CenterBar/>
            <RightSideBar/>
        </MainDiv>
    )
}