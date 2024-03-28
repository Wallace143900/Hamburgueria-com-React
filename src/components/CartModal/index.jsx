import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./styles.module.scss";
import React, {useEffect, useRef} from "react";

export const CartModal = ({ setCartOpen, add, setAdd }) => {
   const total = add?.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0) || 0;

   const clearCart = () => {
      setAdd([]);
   }

   const modalRef = useRef();

   useEffect(() => {
      const clickOutside = (event) => {
         if (modalRef.current && !modalRef.current.contains(event.target)) {
            setCartOpen(false);
         }
      }

      document.addEventListener("mousedown", clickOutside);
      return () => {
         document.removeEventListener("mousedown", clickOutside);
      };
   }, [setCartOpen]);

   //Tentei fazer o fechamento do modal pclicando fora, mas não consegui rs!!!

   return (
      <div  role="dialog" className={styles.dialog}>
         <div Ref={modalRef} className={styles.content}>
         <div className={styles.divHeader}>
            <h2 className="HeadingWhite">Carrinho de compras</h2>
            <span aria-label="close" title="Fechar" className={styles.spanRemove}  onClick={() => setCartOpen(false)}>
               <MdClose size={24} />
            </span>
         </div>
         <div>
            <ul>
               {add?.map((product) => (
                  <CartItemCard key={product.id} product={product} add={add} setAdd={setAdd} />
               ))}
            </ul>
         </div>
         <div className={styles.divFooter}>
            <div className={styles.divInformation}>
               <span className="Heading3">Total</span>
               <span className="body-600">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
            <span  className ="Heading" id={styles.spanRemove} onClick={clearCart}>Remover todos</span>
         </div>
         </div>
      </div>
   );
};
