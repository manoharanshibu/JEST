import React, { Component } from 'react';

export default class Items extends Component {
    render(){
        const { items = [] } = this.props;
        return (
            <ul>
              {items.map(item => <li key={item}>{item}</li>)}
            </ul>
          );
    }
}