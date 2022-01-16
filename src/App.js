import React, { Component } from 'react'
import Todoitems from './component/do/toitems'
import Additems from './component/additems/additems'
import './App.css'
class App extends Component {

    state = {
        items: [
            { id: 1, name: 'ali', age: 22 },
            { id: 2, name: 'kaled', age: 23 },
            { id: 3, name: 'walid', age: 24 }
        ]
    }

    delete = (id) => {
        let item = this.state.items
        let it = item.findIndex(item => item.id === id)
        item.splice(it, 1)
        this.setState({
            items: item
        })

    }
    additems = (item) => {
        item.id = Math.random()*10
        let items = this.state.items
        items.push(item)
        this.setState({
            items
        })
    }
    render() {
        return (
          <div className="container">
            <div className = "App" >

            <h1> to do list </h1>
            <Todoitems items = { this.state.items }delete = { this.delete }/>
             <Additems additems = { this.additems }/>
             </ div >
             </div>
        );
    }
}
export default App;
