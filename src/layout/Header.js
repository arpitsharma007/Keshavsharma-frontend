import React, {useState, useContext} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText} from "reactstrap";

import {Link} from "react-router-dom";
import {UserContext, userContext} from "../context/UserContext";



const Header = () => {
    const context =  useContext(UserContext)

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)


    return ( 
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <Link to="/" className="text-white">Aum Keshav Sharma</Link>
            </NavbarBrand>
            {/* <NavbarText className="text-white">{
                context.user?.email ? context.user.email : ""
            }</NavbarText> */}
            <NavbarToggler onClick={toggle}/>
            
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {
                        context.user ? (
                            <NavItem>
                                <NavLink tag={Link} onClick={() => {context.setUser(null)}} to="/signin" className="text-white">Logout</NavLink>
                            </NavItem>
                        ) : (
                            <>
                                <NavItem>
                                    {/* <NavLink tag={Link} to="/signup" className="text-white">SignUp</NavLink> */}
                                    <a href="https://aumkeshavsharma.com" className="text-white" style={{padding: 20}}>Home</a>
                                </NavItem>
                                <NavItem>
                                    {/* <NavLink tag={Link} to="/signup" className="text-white">SignUp</NavLink> */}
                                    <a href="https://aumkeshavsharma.com/about-me" className="text-white" style={{padding: 20}}>About Me</a>
                                </NavItem>
                                <NavItem>
                                    {/* <NavLink tag={Link} to="/signup" className="text-white">SignUp</NavLink> */}
                                    <a href="https://aumkeshavsharma.com/blog" className="text-white" style={{padding: 20}}>Blog</a>
                                </NavItem>
                                <NavItem>
                                    {/* <NavLink tag={Link} to="/signup" className="text-white">SignUp</NavLink> */}
                                    <a href="https://aumkeshavsharma.com" className="text-white" style={{padding: 20}}>Social</a>
                                </NavItem>
                                <NavItem>
                                    {/* <NavLink tag={Link} to="/signup" className="text-white">SignUp</NavLink> */}
                                    {/* <a href="https://aumkeshavsharma.com">Home</a> */}
                                </NavItem>
                            </>
                        )
                    }
                    
                    
                </Nav>
            </Collapse>
        </Navbar>
        
     );
}
 
export default Header;