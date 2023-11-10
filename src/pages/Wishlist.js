import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

import { ShoppingCart } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';

function Wishlist() {
    const dispatch = useDispatch()
    const WishListArray=useSelector(state=>state.wishList)
    console.log(WishListArray);
    const handleAddCart=(product)=>{
        // add to cart
        dispatch(addToCart(product))
        // remove from wishlist
        dispatch(removeWishlist(product.id))
    }
    return (
        <div>
            {
                WishListArray.length>0?
                <div className='text-center w-75 container my-5'>
                <h1 className='mb-5'>List of Products in Wishlist</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Title</th>
                            <th>Price</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {WishListArray.map((i, index) =>
                            (<tr>
                                <td>{index + 1}</td>
                                <td>{i.title}</td>
                                <td>{i.price}</td>
                                <td>
                                    <img src={i.image} alt="" style={{ height: '100px' }} />
                                </td>
                          

                            <Button onClick={() => dispatch(removeWishlist(i.id))} className='btn btn-light mt-3' >
                                <i class="fa-solid fa-trash mt-2 fa-2x text-danger" ></i></Button>
                            <Button onClick={() => handleAddCart(i)}  className='btn btn-light ms-4 mt-3' >
                                <ShoppingCart size={34} /></Button>
                                
                        </tr>)
)}
                    </tbody>
                </Table>

            </div>:<h1>WishList is Empty, continue shopping!!!</h1>
            }
        </div>
    )
}

export default Wishlist