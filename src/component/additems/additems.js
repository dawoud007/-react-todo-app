import React, { Component } from "react"
import "./additems.css"
class Additems extends Component {
    state = {
        name: " ",
        age: " "
    }


    handle = (e) => {
        this.setState({
          [e.target.id]:e.target.value

        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if(e.target.name.value==="" || e.target.age.value==="" ){
          return false
        }else {
          this.props.additems(this.state)
          this.setState({
            name: " ",
            age: " "
          })
        }


    }


    render() {
        return (
            <div >

            <form onSubmit = { this.handleSubmit } >

            <input type = "text" placeholder = " enter name." id = 'name'onChange = { this.handle } value={this.state.name}  />
            <input type = "number" placeholder = "enter age..." id = 'age'onChange = { this.handle } value= {this.state.age} />

            <input id="gogo" type = "submit"value = "add items" / >

            </form>




            </div>

        )
    }
}
export default Additems
