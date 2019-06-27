

import './App.css';

import React, { Component } from 'react'
import { Navbar } from './Componants/Navbar';
import Giphy from 'giphy-js-sdk-core'
var client = Giphy("tbewSaUfChwTg52SdP2dArdEZhlP9KVE")

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data: [],
       search: '',
       loading: true
    }
  }
  handleChange = (e)=>{
    let search = e.target.value;
    this.setState({
      search: search
    })
  }
  componentDidMount(){
    client.trending("gifs", {})
  .then((response) => {
    this.setState({
      data: response.data,
      loading: false
    })
  })
  .catch((err) => {

  })



  }
  handleSubmit =(e)=>{
    e.preventDefault();
    this.setState({
      loading:true
    })
    let search = this.state.search;
    client.search('gifs',{q: search}).then(res=>{
      this.setState({
        data: res.data,
        loading: false
      })
    }).catch(err=>console.log(err))
    
  }
  render() {
    // console.log(this.state.data)
    
    
    return (
      <div>
        


        <Navbar handleSubmit={this.handleSubmit} hussain={this.state.search} narayan={this.handleChange} />
        <div class="main-div">
          {
            this.state.loading ? <h1>Loading....</h1> : this.state.data.map(item=>{
                        return  <div className="child" key={this.state.data.index} >
                                  <img src={item.images.downsized.url} className="child1" />
                                </div>
                                })
          }
          </div>
          
          {/* <div class="main-div" >
          {
            this.state.data.map(item=>{
              return <div className="child" key={this.state.data.index} >
                <img src={item.images.downsized.url} className="child1" />
              </div>
            })
          }
          
        </div> */}
        
        <footer className="footer"><p> &copy; &bull; Om Developer </p></footer>
          
        
      </div>
    )
  }
}

export default App



