import { createContext, useContext, useState } from 'react';
const CartContext = createContext();
export function CartProvider({children}){
  const [cart,setCart] = useState([]);
  const addToCart = (p, qty=1)=> setCart(prev=>{ const ex = prev.find(i=> i.id=== (p._id||p.id)); if(ex) return prev.map(i=> i.id=== (p._id||p.id) ? {...i, qty: i.qty+qty}: i); return [...prev, {id: p._id||p.id, name: p.name, price: p.price, image: p.image, qty}] });
  const removeFromCart = (id)=> setCart(prev=> prev.filter(i=> i.id!==id));
  const clearCart = ()=> setCart([]);
  return <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>{children}</CartContext.Provider>
}
export const useCart = ()=> useContext(CartContext);
