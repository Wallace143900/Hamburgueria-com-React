import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { Footer } from "../../components/Footer";
import { api } from "../../components/services/api";


export const HomePage = () => {
   const localTodoList = localStorage.getItem("@MYALLLIST");
   
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(localTodoList ? JSON.parse(localTodoList) : []);
   const [add, setAdd] = useState([]);
   const [cartOpen, setCartOpen] = useState(false);

   useEffect(() => {
      const getProductList = async () => {
         try{
            const { data } = await api.get("/products");
            setProductList(data);
         } 
         catch (error) {
            console.error("Erro ao buscar produtos:",error);
         }
      }
      getProductList();
   }, [])

   useEffect(() => {
      localStorage.setItem("@MYALLLIST", JSON.stringify(productList));
   }, [productList]);

   const addToCart = (product) => {
      setCartList([...cartList, product]);
   }


   const clearCart = () => {
      setCartList([]);
   }

   const removeCart = (productId) => {
      const updatdCart = add.filter (({id}) => id !== productId);
      setAdd(updatdCart);
   }
   
   const closeCart = () => {
      setCloseCart(false);
   }

   return (
      <>
         <Header cartOpen={cartOpen} setCartOpen={setCartOpen}  cartItemCount={add.length}/>
         <main>
            <ProductList productList={productList} add={add} setAdd={setAdd} addToCart={addToCart} />
            { cartOpen ? <CartModal add={add} setAdd={setAdd} cartOpen={cartOpen} setCartOpen={setCartOpen}closeCart={closeCart} removeCart={removeCart} clearCart={clearCart} /> : null}
         </main>
         <Footer />
      </>
   );
};
