import React, {Component} from 'react';
import {Input} from 'reactstrap';

export default class SearchIndex extends Component{
  constructor(props){
    super(props);
    
      // ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
    
    this.state = {term : ''}
    this.state = {things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']}
    this.state = {filteredThings: ""}
    this.searchFunction=this.searchFunction.bind(this)
    this.handleSearchTerm=this.handleSearchTerm.bind(this)
  }
  
  searchFunction(){
    console.log(this.state.term)
    console.log(this.state.things)
    const result = this.state.things.filter(thing=>thing.includes(this.state.term))
    this.setState({filteredThings:result})
  }

  handleSearchTerm(e){
    console.log(this.state.term)
    console.log(this.state.filteredThings)
    console.log(this.state.things)
    this.setState({term : e.target.value})
    this.setState({things : ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']})
  }
  
  render() {
    return(
      <div>
          <Input placeholder='Search Here' name="text" onChange={(e) => { this.handleSearchTerm(e) }}/>
          <button type="submit" onClick={()=>this.searchFunction()}>Search</button>
          
       {/* <h3>Results:
        {this.state.things.map(thing => (
          <li>
            {thing}
          </li>
        ))}
      </h3> */}
      

    </div>
    
    );
  }
}


