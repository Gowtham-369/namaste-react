import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        
        dispatch(clearCart());
    }
    return (
        <div className="p-4 w-6/12 m-auto text-center">
            <h1 className="font-bold ">Cart</h1>
            <div>
                <button className="bg-black text-white rounded-2xl p-2 m-2" onClick={() => handleClearCart()}>Clear Cart</button>
            </div>
            <div>
                {cartItems.length==0 && <h2>Cart is empty. Please Add Items</h2>}
                <ItemList items={cartItems}/>
            </div>
        </div>
        
    );
}

export default Cart;