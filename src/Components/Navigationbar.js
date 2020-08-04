import React, {Component} from 'react'
import {Navbar, NavItem, NavbarBrand, NavbarToggler,
        Nav, Collapse, NavLink, NavbarText} from 'reactstrap'
import {withRouter} from 'react-router-dom'

class NavigationBar extends Component{
  state = {
    isOpen : false,
  }

  toggle = () => {
    this.setState((prevState) => {
      return{
        isOpen : !prevState.isOpen
      }
    })
  }

  render(){
    return(
      <>
      <Navbar style={{backgroundColor : 'rgb(12, 38, 40)', color : 'white'}} expand="md">
        <NavbarBrand href="/" onClick={() => this.props.history.push("./")}>reactstrap</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink onClick={() => this.props.history.push("./createorder")}>Create Order</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => this.props.history.push("./quickquotes")}>Quick Quotes</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
    </Navbar>
      </>
    )
  }
}

export default withRouter(NavigationBar)
