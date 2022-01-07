import React, { Component } from 'react';
import { MenuItemContainer } from '../containers/MenuItemContainer';

class MenuItems extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { items } = this.props;
        return ( 
            (items || []).map((item, index) => (
                <MenuItemContainer {...item} key={index} />
            ))   
        );
    }
}

export default MenuItems;