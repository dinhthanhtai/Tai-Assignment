import React, { PureComponent } from 'react'
import { Card } from 'antd'
import { MenuItemsContainer } from '../containers/MenuItemsContainer';
import { NewItemFormContainer } from '../containers/NewItemFormContainer';
import { TipSelectContainer } from '../containers/TipSelectContainer';
import { SummaryContainer } from '../containers/SummaryContainer';
  
export default class Calculator extends PureComponent {
    render() {
        return (
            <Card>
                <NewItemFormContainer />
                <MenuItemsContainer />
                <TipSelectContainer />
                <SummaryContainer />
            </Card>
        )
    }
}

