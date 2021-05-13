import React from 'react';
import ReactDOM from 'react-dom';

import MainComponent from './App.jsx';

// class MainComponent extends React.Component {
//     render() {
//         return React.createElement('div', { className: 'container' }, [
//             React.createElement('span', null, 'Hello'),
//             React.createElement('b', null, `, ${this.props.name}!`)
//         ]);
//     }
// }

ReactDOM.render(
    React.createElement(MainComponent, { name: 'Alex' }),
    document.getElementById('app')
);