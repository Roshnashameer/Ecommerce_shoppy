import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Heart, ShoppingCart } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addToWishlist } from '../redux/wishlistSlice'
import {fetchProducts} from '../redux/productsSlice';


function Home() {
  const dispatch=useDispatch()
  const {allProducts,loading,error}=useSelector((state)=>state.productSlice)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  // console.log(products);
  return (
    <div>

      <Row className='mt-4'>
        <Col lg={6}>

          <img
            alt=''
            className='w-90'
            style={{ height: '600px' }}
            src='https://i.postimg.cc/L84kvPHN/girls-shopping-png-hd-1133.png' />
        </Col>
        <Col lg={6}>
          <div className='p-5 mt-5'>
            <h1>Enjoy Your Shopping with Shoppy</h1>
            <p className='mt-5 pe-5 fs-3'>
Welcome to Shoppy, where your shopping experience is crafted with care and convenience. 
At Shoppy, we strive to create an enjoyable and seamless shopping journey for our customers. 
With a wide range of products to choose from, including the latest 
trends and high-quality items, Enjoy your shopping with Shoppy, where quality, style, and convenience 
come together to redefine the way you shop. Happy shopping!</p>

          </div>
        </Col>
      </Row>
      <Row className='mt-4'>
        {
          loading &&
          <div className='text-center'>
          <i class="fa-solid fa-spinner fa-spin fa-5x"></i>
      </div>
        }
        {
         allProducts.length>0 && allProducts.map(i=>(
          <Col lg={3} md={4} sm={6} className='p-5'>
          <Card className='text-center p-2' id='d' style={{ width: '18rem' }} >
            <Card.Img 
            style={{height:'300px'}}
            variant="top" src={i.image}/>
            <Card.Body>
              <Card.Title><h3>{i.title.length>50?i.title.slice(0,30)+"..":i.title}</h3></Card.Title>
              <Card.Text>
                <h2>Rs:{i.price}</h2>
                <span data-star={i.rating.rate}></span>
              
                <h4>Rating:{i.rating.rate} </h4>
              </Card.Text>
              <Button onClick={()=>dispatch(addToCart(i))} variant="dark" >
                <ShoppingCart size={34} /></Button>
              <Button onClick={() => dispatch(addToWishlist(i))} variant="dark" className='ms-5'>
                <Heart size={34} /></Button>

            </Card.Body>
          </Card>
        </Col>
         ) )
      
          
        }
      </Row>
    </div>
  )
}

export default Home