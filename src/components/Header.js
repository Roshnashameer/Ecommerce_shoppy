import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Heart, ShoppingCart } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from '../redux/productsSlice';



function Header() {
    const cartArray = useSelector(state => state.cart)
    var cartCount = cartArray.length
    const dispatch = useDispatch()

    return (
        <div>
            <Navbar expand="lg" className="bg-dark">
                <Container>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <Navbar.Brand className='text-white' href="#home">
                            <img
                                alt=""
                                src="https://i.postimg.cc/VkxJQNZt/e-commerce-shopping-cart-software-digital-marketing-woocommerce-png-favpng-uq-A3krvv2s6m-ESYKUAntiws.png"
                                width="50"
                                height="60"
                                className="d-inline-block align-top"
                            />{' '}
                            <b className='fs-1'>Shoppy</b>
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <InputGroup className="mb-3">

                                <Form.Control className='form-control me-sm-2'
                                    type="search" 
                                    onChange={(e) => dispatch(searchProduct(e.target.value))}
                                />
                                <InputGroup.Text id="basic-addon2">
                                <i class="fa  fa-search"></i>
                                </InputGroup.Text>
      </InputGroup>
                               {/* <Form>
                                    <div class="input-box">
                                        <input type="text" class="form-control">
                                            <i class="fa fa-search"></i>
                                    </div>
                               </Form> */}

                        </Nav>
                        <Nav className="mr-auto">

                            <Link style={{ textDecoration: 'none' }} to={'/wishList'}>
                                <Nav.Link className='text-white ' href="#link">
                                    <Heart size={34}></Heart></Nav.Link>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to={'/cart'}>
                                <Nav.Link className='text-white ms-5 ' href="#home">
                                    <p><ShoppingCart size={34}></ShoppingCart>
                                        <span className='ms-2'>{cartCount}</span> </p>
                                </Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header