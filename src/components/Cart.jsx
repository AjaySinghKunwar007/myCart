import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart , calculatePrice, decrementFromCart, deleteFromCart} from '../redux/cartSlice';




const Cart = () => {

  const {cartItems,subtotal,shipping,total,tax} = useSelector(state=>state.cart)
  const dispatch = useDispatch();
  const decrement=(id)=>{
    dispatch(
      decrementFromCart(id)

        );
        dispatch(calculatePrice());

  }
  const increment=(id)=>{
    dispatch(addToCart({id}),
       );
       dispatch(calculatePrice());

}
const deleteHandler=(id)=>{
  dispatch(
    deleteFromCart(id),
  );
  dispatch(calculatePrice());
  }

  return (
    <div className='cart'>
        <main>
        {cartItems.length>0 ? (
          cartItems.map(i=>(
            <CartItem 
        name ={i.name}
        imgsrc={i.imgsrc}
        price={i.price}
        qty={i.quantity}
        id={i.id}
        key={i.id}
        decrement={decrement}
        increment={increment}
        deleteHandler={deleteHandler}
        />
          ))
        ):<h1>No Items Yet</h1>
        
        }
        
        
        </main>
        <aside>
            <h2>Subtotal: ${subtotal}</h2>
            <h2>Shipping: ${shipping}</h2>
            <h2>Tax: ${tax}</h2>
            <h2>Total: ${total}</h2>
        </aside>
    </div>
  )
}

const CartItem=({name,imgsrc,price,qty,decrement,increment,deleteHandler,id})=>{
return <div className='cartItem'>
    <img src={imgsrc} alt="itemImage" />
    <article>
        <h3>{name}</h3>
        <p>${price}</p>
    </article>
    <div>
        <button onClick={()=>decrement(id)}>-</button>
        <p>{qty}</p>
        <button onClick={()=>increment(id)}>+</button>
    </div>
    <AiFillDelete onClick={()=> deleteHandler(id)}/>
</div>
}

export default Cart