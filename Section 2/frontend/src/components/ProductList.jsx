import React, { useState } from 'react'
import productData from './dummyData'
import useCartContext from '../CartContext';

const ProductList = () => {

    const [productsArray, setproductsArray] = useState(productData);

    const {addItemToCart}= useCartContext();

    const brands = ['Asus' , 'Lenevo' , 'HP' , 'Dell' , 'Apple']

    const searchProduct = (e) => {

        const search = e.target.value;
        let filteredData = productData.filter( (product) => {return product.model.toLowerCase().includes(search.toLowerCase())});

        setproductsArray(filteredData);
    };

    const filterBrand = (e) => {
        const search = e.target.value;
        let filteredData = productData.filter( (product) => {return product.brand === search});

        setproductsArray(filteredData); 
    }
  return (
    <div>

        <header className='bg-dark'>
        <div className='container py-5'>
            <h1 className='text-center mb-5 text-white fw-bold'>Product Listing Page</h1>

            <input type='text' className='form-control w-75 m-auto' onChange={{searchProduct}}/>
            </div>
            </header>

            <div className='row mt-4'>
                <div className='col-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <h3>Filter Options</h3>
                            <hr/>
                            <select className='form-control' onChange={filterBrand}>
                                <option value="">Select Brand</option>
                                {
                                    brands.map((b) => (<option value= {b}>{b}</option>))
                                }
                            </select>
                        </div>
                    </div>
                </div>
            <div className='col-9'>
            <div className='container-fluid'>
            <div className='row'>
            {productsArray.map( (product) => (
                <div className='col-md-3 mb-4'>
                    <div className='card' style={{overflow: 'hidden'}}>
                        <img src= {product.image} alt="" className='my-card-img' />
                        <div className='card-body'>
                            <p className='text-muted'>{product.sponsored ? 'Sponsored' : ''}</p>
                        <h4>{product.brand}</h4>
                        <h3>{product.model}</h3>
                        <h2>₹{product.price}</h2>
                        <button className='btn btn-primary'>Add to Cart</button>
                    </div>
                    </div>
                </div>
            ) )}
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default ProductList