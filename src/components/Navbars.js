import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
class Navbars extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
      navCollapsed: true,
      showNavbar: false
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    const { navCollapsed } = this.state
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='/'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/cart'>Cart</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
export default Navbars
