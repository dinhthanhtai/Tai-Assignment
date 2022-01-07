import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Calculator from './Calculator'

export default class App extends PureComponent {
    render() {
        return (
            <Main className='App'>
                <Calculator />
            </Main>
        )
    }
}

const Main = styled.main`
    margin: auto;
    width: 600px;
`

