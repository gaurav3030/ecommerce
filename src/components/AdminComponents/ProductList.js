import React,{useEffect , useState, useContext} from 'react';
import './productlist.css';
import Axios from 'axios';
import AdminContext from '../../context/AdminContext';

export default function ProductList(props) {
    const [products , setProducts] = useState();
    const {adminData} = useContext(AdminContext);

    

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
        {
            adminData.admin ? <button className="newProductBtn" onClick={e=> props.setProductForm(props.productForm===0 ? 1 : 0)} >NEW PRODUCT</button> : ""
        }
            
        </div>
        <div className="productscontent">
            {products && products.map((product) =>
                <div className="product">
                    
                    
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
