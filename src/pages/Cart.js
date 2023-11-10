import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { clearCart, removeCart } from '../redux/cartSlice';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Cart() {

    const dispatch = useDispatch()


    const cartArray = useSelector(state => state.cart)
    console.log((cartArray));
    if (cartArray.length != 0) {
        var total = cartArray.map(i => i.price).reduce((a, b) => a + b)
    }
    else {
        var total = 0
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlePay=()=>{
        dispatch(clearCart())
        setShow(false);
    }
    return (
        <div>
            <h1 className='text-center p-5'>Cart Products</h1>

            {cartArray.length > 0 ?
                <>
                    <Table className='container p-5' striped bordered hover>

                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Title</th>
                                <th>Price</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartArray.map((i, index) =>
                            (<tr>
                                <td>{index + 1}</td>
                                <td>{i.title}</td>
                                <td>{i.price}</td>
                                <td>
                                    <img src={i.image} alt="" style={{ height: '100px' }} />
                                </td>
                                <td className='text-center'>
                                    <Button onClick={() => dispatch(removeCart(i.id))} className='btn btn-light' >
                                        <i class="fa-solid fa-trash mt-2 fa-2x text-danger" ></i></Button>
                                </td>
                            </tr>)
                            )}
                        </tbody>
                    </Table>
                    <div className='text-end p-5'>
                        <h5>Cart Total {total}Rs</h5>
                    </div>
                    <div className='text-center p-5 fs-3'>
                        <Button className='btn btn-success p-2' onClick={handleShow}>CheckOUT</Button>
                    </div>
                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Pay To Continue</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Phone Number"
                                className="mb-3"
                            >
                                <Form.Control type="phone number" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Upi Id">
                                <Form.Control type="text" placeholder="Enter UPI" />
                            </FloatingLabel>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button className='px-3' variant="info" onClick={handlePay}>
                               Pay
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
                : <h1>Cart is Empty</h1>
            }


        </div>
    )
}

export default Cart