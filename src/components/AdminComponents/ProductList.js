import React,{useEffect , useState} from 'react';
import './productlist.css';
import Axios from 'axios';

export default function ProductList(props) {
    const [products , setProducts] = useState();
    useEffect(() => {
        const fetchProducts = async () => {
            const allProducts = await Axios.post("http://localhost:5000/admin/products/allproducts/");
            setProducts(allProducts.data);
            
        }
        fetchProducts();
        
    });
  return (
    <div className="productscontainer">
        <div className="filteroptions">
            <div className="newProductBtn">NEW PRODUCT</div>
        </div>
        <div className="productscontent">
            {products && products.map((product) =>
                <div className="product">
                    {/* <div className="img" style={{ backgroundImage: `url('${img1}')` }}></div> */}
                    
                    <div className="img" style={{ backgroundImage: 'url(http://localhost:5000/'+product.productImageData+')' }}></div>
                    <div className="productinfo">
                        <h4>{product.productName}</h4>
                        <p>$ {product.productPrice}</p>
                        
                    </div>
                </div>                
            
                
            )}
            
            
        </div>
    </div>
  );
}
