import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <Navbar variant="dark">
            <Container fluid className='px-5'>
                <Link to='/' className='navbar-brand'>
                    <h3>
                        Event Manager
                    </h3>
                </Link>
                <Nav className="ms-auto">
                    <Link to='/' className='nav-link me-5'>
                        <h5>
                            Add Event
                        </h5>
                    </Link>
                    <Link to='/event-lists' className='nav-link'>
                        <h5>
                            Events List
                        </h5>
                    </Link>

                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar