import React, { useContext, useEffect , useState } from 'react';
import '../Homepage/Homepage.css';
import Error from '../../components/misc/Error';
import Banner from '../../components/Banner/Banner';
import AdminContext from '../../context/AdminContext';
import Axios from 'axios';

 
function AdminHomepage(props) {
  const [productName , setProductName] = useState();
  const [productDescription , setProductDescription] = useState();
  const [productPrice , setProductPrice] = useState();
  const [productQuantity , setProductQuantity] = useState();
  // eslint-disable-next-line
  const [productImage , setProductImage] = useState();
  const [error , setError] = useState();
  const { adminData } = useContext(AdminContext);
  var productFormObj = new FormData();
  useEffect(() => {
    
    if (!adminData.admin) props.history.push("/admin/login");
  });
  const addproduct = async (e)=>{
    e.preventDefault();
    try{
      productFormObj.append("productName",productName);
      productFormObj.append("productDescription",productDescription);
      productFormObj.append("productPrice",productPrice);
      productFormObj.append("productQuantity",productQuantity);
      productFormObj.append("imageName","product-" +Date.now());
      productFormObj.append("imageData",document.getElementById('productiImage').files[0]);
      
      await Axios.post("http://localhost:5000/admin/products/add/",productFormObj);
    }catch(err){
      err.response.data.msg && setError(err. response.data.msg);
    }
  }
  


  return (
    <div>
      <Banner />
      <div className="formcontainer">
        <div className="auth-page">
            <h2>Login</h2>
            {error && <Error message = {error} clearError={()=> setError(undefined) }/>}
            <form onSubmit={addproduct}>
                <label htmlFor="productname">Product Name</label>
                <input id="productname" type="text" onChange={e=> setProductName(e.target.value)}/>
                <label htmlFor="productdescription">Product Description</label>
                <input id="productdescription" type="text" onChange={e=> setProductDescription(e.target.value)}/>
                <label htmlFor="productPrice">Price</label>
                <input id="productPrice" type="number" onChange={e=> setProductPrice(e.target.value)}/>
                <label htmlFor="productQuantity">Quantity</label>
                <input id="productQuantity" type="number" onChange={e=> setProductQuantity(e.target.value)}/>
                <label htmlFor="productiImage">Image</label>
                <input id="productiImage" type="file" onChange={e=> setProductImage(URL.createObjectURL(e.target.files[0]))}/>
                <input type="submit" value="Login"/>
            </form>
            
        </div>
        </div>
    </div>
  );
}

export default AdminHomepage;
