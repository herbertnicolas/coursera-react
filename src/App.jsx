import { useState } from 'react'
import logo from './logo.svg'
import { Navbar, NavbarBrand } from 'reactstrap'
import './App.css'
import { Component } from 'react/cjs/react.development'

class App extends Component{
  render(){
    return (
      <div className="App">
        <Navbar dark color= "primary">
          <div className= "container">
            <NavbarBrand href="/"> Restaurante Cão Fusão </NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App
