import React, { Component } from 'react'

export class Navbar extends Component {
   
  render() {
    return (
      <div className="container">
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" value={this.props.hussain} onChange={this.props.narayan} type="search" placeholder="Search" aria-label="Search" />
                    <button onClick={this.props.handleSubmit} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        
      </div>
    )
  }
}

export default Navbar
