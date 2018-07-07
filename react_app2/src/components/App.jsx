import React, {Component} from 'react'
import Navbar from '../components/Navbar'
import '../styles/style.styl'

class App extends Component {
  render() {
    return (
      <header className="header">
        <Navbar/>
      </header>
    )
  }
}


export default App