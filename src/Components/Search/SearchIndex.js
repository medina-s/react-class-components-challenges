import React, {Component} from 'react';
import {Input} from 'reactstrap';

class SearchIndex extends Component{
  constructor(props){
    super(props);
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
    }
    this.state = {term : ''}
    this.searchFunction=this.searchFunction.bind(this)
  }
  
  searchFunction(e){

    console.log(this.state.term)
  }

  handleSearchTerm(e){
    this.setState({term : e.target.value})
  }
  
  render() {
    return(
      <div>
        
          <Input placeholder='Search Here' name="text" onChange={(e) => { this.handleSearchTerm(e) }}/>
          <button type="submit" onClick={(e)=>this.searchFunction(e)}>Search</button>
      <h3>Results:</h3>
    </div>
    );
  }
}


export default SearchIndex;
