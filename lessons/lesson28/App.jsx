import React from 'react';

import List from './List.jsx';

class MainComponent extends React.Component {
    render() {
        return <div className="container">
            <span>Hello, </span>
            <p>{this.props.name}</p>
            <span>{'{  }'}</span>
            <List list={[]}/>
        </div>;
    }
}

export default MainComponent;