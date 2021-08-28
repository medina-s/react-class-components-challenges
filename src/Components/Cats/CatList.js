import React, { Component } from 'react';

export default class CatList extends Component {
  render(){
return (
  <div>
    {this.props.cats.map((cat) => {
      return <li>{ cat }</li>
    })}
    
  </div>
);
}
}


