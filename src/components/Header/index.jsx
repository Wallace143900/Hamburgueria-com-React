import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./styles.module.scss"
import { CartModal } from "../CartModal";

export const Header = ({cartOpen, setCartOpen, cartItemCount }) => {
   const [value, setValue] = useState("");

   return (
      <header className={styles.header}>
         <div className={styles.divHeader}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
            <button className={styles.buttonCar} onClick={() => setCartOpen(true)}>
                  <MdShoppingCart size={25} />
                  <span className={styles.spanCar} >{cartItemCount}</span>
               {cartOpen ? <CartModal setCartOpen={setCartOpen} />: null}
            </button>
            <form>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form>
         </div>
      </header>
   );
};
