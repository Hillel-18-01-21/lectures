import React, { Component } from 'react';

class ListItem extends Component {
    componentDidMount() {} // - 1

    shouldComponentUpdate(nextProps) {
        if (this.props.title === nextProps.title) {
            return false;
        }
        return true;
    } // - 2 

    componentDidUpdate() {} // - 3

    componentWillUnmount() {} // - 4

    render() {
        console.count('ListItem');
        return (
            <li>
                <span>{this.props.title}</span>
            </li>
        );
    }
}

export default ListItem;