import React, {Component} from 'react';


export default class DogIndex extends Component {
    constructor(props){
        super(props)
        this.state = {
            imageUrl:"",
        }

        this.fetchDogImage  = this.fetchDogImage.bind(this)
    }

    fetchDogImage(){

        fetch(`https://dog.ceo/api/breeds/image/random`, {
            method: 'GET'
          }).then(res => res.json())
            .then(res => {
              this.setState({
                imageUrl: res.message,
              })
            })
            .catch((err) => console.log(err))
    }

    render(){
        return(
            <div>
                <img src={this.state.imageUrl}></img>
                <hr/>
                <button onClick={()=>this.fetchDogImage()}>Fetch Dog Image</button>
            </div>
        )
    }
}