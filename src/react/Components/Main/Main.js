import React from 'react'

import LeftSideBar from '../LeftSideBar/LeftSideBar'
import RightSideBar from '../RightSideBar/RightSideBar'

import { MainDiv } from './Styles'

export default function Main(){
    return(
        <MainDiv>
            <LeftSideBar/>
            <RightSideBar/>
        </MainDiv>
    )
}