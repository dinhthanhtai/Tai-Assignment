import React, { PureComponent } from 'react';
import styled from 'styled-components';

class SummaryLine extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Flex>
                <Box>
                    <Label> {this.props.title} </Label>
                </Box>
                <Box>
                    {this.props.children}
                </Box>
            </Flex>
        );
    }
}

const Flex = styled.div`
    display: flex;
`

const Box = styled.div`
    width: 100%;
    text-align: right;
`

const Label = styled.label`
    font-size: 1rem;
    display: block;
    padding: 0.25rem 0;
    font-weight: bold
`

export default SummaryLine;