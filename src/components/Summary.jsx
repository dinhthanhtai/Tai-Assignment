import React, { Component } from 'react';
import styled from 'styled-components';
import { toCurrency } from '../ultilities';
import SummaryLine from './SummaryLine';

class Summary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {subTotal, tipAmount, total} = this.props;
        return (
            <Stack>
                <SummaryLine title='Subtotal'> {toCurrency(subTotal)} </SummaryLine>
                <SummaryLine title='Tip Amount'> {toCurrency(tipAmount)} </SummaryLine>
                <SummaryLine title='Total'> {toCurrency(total)} </SummaryLine>
            </Stack>
        );
    }
}

const Stack = styled.div`
    margin-top: 1.5rem;
`

export default Summary;