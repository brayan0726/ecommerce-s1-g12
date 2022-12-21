import React from 'react';
import { Card } from '../components/Card';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../features/products/thunks';

const Products = () => {
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      {products.length === 0 ? (
        <div></div>
      ) : (
        <div className="container-products mb-5">
          <div className="container">
            <h1 className="text-center my-5">PRODUCTOS</h1>
            <div className="row">
              {products.map((product, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 my-3 d-flex justify-content-center">
                  {/* Estas props deben ser modificadas una vez tengamos la API del backend y sepamos cuales son las propiedades de los productos.  */}
                  <Card product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
