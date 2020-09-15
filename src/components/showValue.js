import React from 'react';
import { connect } from 'react-redux';

const Component = ({value}) => {
    return (
    <li>{value}</li>
    )
}



export default connect()(Component);