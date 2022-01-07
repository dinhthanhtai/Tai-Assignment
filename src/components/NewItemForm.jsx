import React, { Component, createRef } from 'react';
import { Button, Input } from 'antd';
import { DollarCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

class NewItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            price: 0 
        };
        this.inputNameRef = createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.isValid = this.isValid.bind(this);
    }

    isValid() {
        if (!this.state.name) return false;
        if (!this.state.price.length) return false;
        return true
    }

    handleSubmit(event) {
        event.preventDefault();

        if (typeof this.props.onSubmit === 'function') {
            this.props.onSubmit(this.state.name, this.state.price);
        }

        this.setState({
            name: '',
            price: 0, 
        })

        this.inputNameRef.current.focus()   
    }

    render() {
        const { handleSubmit = () => {}, isValid = () => {}, state, inputNameRef } = this;
        const { name, price } = state;
      
        return (
            <form onSubmit={handleSubmit}>
                <Label htmlFor="item-name">Item Name</Label>
                <Input 
                    ref={inputNameRef}
                    value={name} 
                    id='item-name' 
                    size='large' 
                    onChange={(event) => this.setState(state => ({
                        ...state, 
                        name: event.target.value
                    }))}
                />
                <Label htmlFor="item-price">Price</Label>
                <Input 
                    id='item-price' 
                    size='large' 
                    prefix={<DollarCircleOutlined />} 
                    value={price}
                    onChange={(event) => this.setState((state) => ({
                        ...state, 
                        price: event.target.value
                    }))}
                />
                <Button
                    style={{ margin: '1.5rem 0'}}
                    disabled={!isValid()} 
                    size='middle' 
                    block 
                    type="primary"
                    htmlType='submit'
                >
                    Primary Button
                </Button>
            </form>
        );
    }
}


const Label = styled.label`
    font-size: 1rem;
    display: block;
    padding: 0.25rem 0;
    font-weight: bold
`

export default NewItemForm;