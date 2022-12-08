import './App.css'
import React, {Component} from "react"

export default class App extends Component {

  state = {
    character: {}
  }

  componentDidMount(){
    console.log("componentDidMount")
    fetch("https://swapi.dev/api/people/1")
    .then(res => res.json())
    .then(data => this.setState(
      {character: data}
    ))
  }
  
  render(){
    console.log("render")
    let handleData = this.state.character
    return (  
      <h1>
        {handleData.name}
      </h1>
    )
  }
}