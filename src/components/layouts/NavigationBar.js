import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SearchBar from './SearchBar';

const NavigationBar = () => {
  return (
    <Fragment>
      <Navbar
        className="shadow bg-white rounded"
        collapseOnSelect
        bg=""
        variant=""
        expand="lg"
        sticky="top"
      >
        <Navbar.Brand href="#home" className="nav-link">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAJ1BMVEUAAAD////V1dWWlpZ0dHTPz89qamrh4eGQkJDk5OTR0dGtra3Y2NgWv+ptAAABL0lEQVR4nO3cMQ7CQAxFwQCBQOD+56Wms2RHxjDvAKs/vbXLqaR1qW+tmbbUPENISJiIMBghIWEiwmCEhISJCIMREhImIgxGSEiYiDAYISFhIsJghISEiQiDERISJiIMRkhImIgwGCEhYSLCYISEhIkIgxESEiYiDPb7wtsBwlvNtCLhdq5vq5lWJPziCOdHOD/C+RHOj3B+hPMjnB/h/AjnRzg/wvkRzo9wfoTzI5wf4fz+QHip6P44YNrjXrKt6KrgeoDwWrStJkJCwv4ICQn7IyQk7I+QkLA/QkLC/ggJCfsjJCTsj5CQsD9CQsL+CAkJ+yMkJOyPkJCwP0JCwv4ICQn7IyQk7G8/QLh3oz56vsq/oH09u1GSJEmSJEmSJEmSJEmSJEmSJEmSJP1rbwwaXQZE0kwUAAAAAElFTkSuQmCC"
            alt="Image_Store"
            className="d-inline-block align-middle mr-2 logo"
          />{' '}
          IMAGE STORE
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <i className="fas fa-bars"></i>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto nav-link">
            <SearchBar />
          </Nav>
          <Nav className="nav-link">
            <Nav.Link>
              <i className="fas fa-user-plus"></i> Register
            </Nav.Link>
            <Nav.Link>
              <i className="fas fa-sign-in-alt"></i> Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      ;
    </Fragment>
  );
};

export default NavigationBar;
