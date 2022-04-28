import { Container,Navbar,Nav } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Link to="/" className="logo">
                        Job Portal
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/accepted-users" className="nav-btns">
                                Accepted List
                            </NavLink>
                            <NavLink to="/rejected-users" className="nav-btns">
                                Rejected List
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header