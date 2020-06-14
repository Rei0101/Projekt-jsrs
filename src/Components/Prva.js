import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Slika from '../keanujaketa.jpg';

export class Prva extends Component{
  state={
    ime: '',
    prezime: ''
  }

  render()
  {
    return(
    <div>
      <h1 className="promjenjivo">Danas će {this.state.ime} {this.state.prezime} saznati više o Keanu Reevesu.</h1>
      <form>
      <input placeholder='ime' value={this.state.ime} onChange={e=>this.setState({ime:e.target.value})}/><br></br><br></br>
      <input placeholder='prezime' value={this.state.prezime} onChange={e=>this.setState({prezime:e.target.value})}/><br></br><br></br>
      <input type="password" placeholder="lozinka" name="Password "></input><br></br><br></br>
      Potvrdi da nisi robot:<input type="checkbox"></input><br></br><br></br>
      <Link className="link" to='/druga'><button>Nastavi</button></Link><br></br><br></br>
    </form><br></br>
    <img className="vintage" src={Slika}></img>
    </div>);
  }
}

  export default Prva;