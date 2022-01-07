import React, { PureComponent } from 'react';
import { Select } from 'antd';

const { Option } = Select;

export default class TipSelect extends PureComponent {
    constructor(props) {
        super(props);
    }

  render() {
    const { tipPercentage ,updateTip = () => {}} = this.props;
    return (
        <Select
            value={tipPercentage}
            style={{ width: '100%' }}
            onChange={(value) => updateTip(value)}
        >
            <Option value="15">15%</Option>
            <Option value="20">20%</Option>
            <Option value="25">25%</Option>
        </Select>
    );
  }
}