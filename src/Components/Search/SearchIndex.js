import React, {Component} from 'react';
import {Input} from 'reactstrap';

export default class SearchIndex extends Component{
  constructor(props){
    super(props);

    this.state = {term: '',
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 
     'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
    filteredThings: []}

    this.searchFunction=this.searchFunction.bind(this)
    this.handleSearchTerm=this.handleSearchTerm.bind(this)
  }

  searchFunction(){
    console.log(this.state.term)

    var thingslist = this.state.things
    thingslist = thingslist.filter(e => e.includes(this.state.term))
    this.setState({filteredThings: thingslist})
    console.log(this.state.filteredThings)
  }

  handleSearchTerm(e){

    this.setState({
      term : e.target.value
    })

}
  
  render() {
    return(
      <div>
          <Input placeholder='Search Here' name="text" onChange={(e) => { this.handleSearchTerm(e) }}/>
          <br/>
          <button type="submit" onClick={()=>this.searchFunction()}>Search</button>
        <br/>
        <hr/>
       <h3>Results:</h3> 
       <ul><center>
         <table style={{"borderWidth":"4px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
          {this.state.filteredThings.map((thing) => {
              return <tr><td><li>{ thing }</li></td></tr>
          })}
          </table>
          </center>
        </ul>
      

    </div>
    
    );
  }
}


