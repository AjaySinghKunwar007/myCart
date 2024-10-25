import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import  {addToCart, calculatePrice}  from '../redux/cartSlice';
const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://images.pexels.com/photos/12891494/pexels-photo-12891494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";


const productList =[
    {
id: "djslajldsjldsjad",
name:"Mac Book",
price:12000,
imgsrc:img1,
},
{
    id: "djslajldsddssjldsja",
    name:"Red Shoes",
    price:2000,
    imgsrc:img2,
    },
]



const Home = () => {


  const dispatch = useDispatch();
  const addToCartHandler =(options)=>{
      console.log(options);
      dispatch(
        
        addToCart(options),
        // addToCart(payload:options),
      );
      dispatch(calculatePrice());

  
      toast.success("Added To Cart")
      
  }

  return (
    <div className='home'>
        {
        productList.map((i)=> 
        <ProductCart 
        key={i.id} 
        id={i.id}
        name={i.name} 
        price={i.price} 
        imgsrc={i.imgsrc}
        handler={addToCartHandler}
        />)
        }
    </div>
  )
}

const ProductCart=({name,id,price,handler,imgsrc})=>(
<div className='productCard'>
    <img src={imgsrc} alt='productImage'/>
    <p>{name}</p>
    <h4>{price}</h4>
    <button onClick={()=>handler({name,price,id,quantity:1,imgsrc})}>Add to Cart</button>


</div>
)


export default Home