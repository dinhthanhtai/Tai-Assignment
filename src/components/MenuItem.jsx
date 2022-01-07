import { DollarCircleOutlined } from '@ant-design/icons';
import { Button, Card, InputNumber } from 'antd';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { toCurrency } from '../ultilities'

class MenuItem extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { total, name, price, 
            quantity, remove = () => {},
            updatePrice = () => {},
            updateQuantity = () => {}
        } = this.props;

        return (
            <Card style={{ marginBottom: '1.5rem'}}> 
                <h2>
                    {name}
                </h2>
                <Flex>
                    <Box>
                        <SubBox>
                            <Label htmlFor="price-item">Price</Label>
                            <InputNumber 
                                onChange={(value) => updatePrice(value)}
                                id='price-item' 
                                size='large' 
                                prefix={<DollarCircleOutlined />} 
                                value={price}
                            />
                        </SubBox>
                        <SubBox>
                            <Label htmlFor="item-quantity">Quantity</Label>
                            <InputNumber 
                                onChange={(value) => updateQuantity(value)}
                                id='item-quantity' 
                                size='large' 
                                value={quantity}
                            />
                        </SubBox>
                    </Box>
                    <Box2> 
                        <Label> Total </Label>
                        {
                            toCurrency(total)
                        }
                    </Box2>
                </Flex>
                <Box3>
                    <Button onClick={remove} type="primary" danger ghost> Remove </Button>
                </Box3>
            </Card>
        );
    }
}

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`
const SubBox = styled.div`
    margin-right: 1rem;
`

const Box = styled.div`
    display: flex;
`
const Box2 = styled(Box)`
    flex-direction: column;
`
const Box3 = styled(Box)`
    justify-content: flex-end;
`

const Label = styled.label`
    font-size: 1rem;
    display: block;
    padding: 0.25rem 0;
    font-weight: bold
`


export default MenuItem;