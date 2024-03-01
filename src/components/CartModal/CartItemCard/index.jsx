import { MdDelete } from "react-icons/md";
import styles from "./styles.module.scss"

export const CartItemCard = ({ product, add, setAdd }) => {
   const removeCart = (productId) => {
      const filtered = add.filter(({id}) => id !== productId);
      setAdd(filtered);
   }

   return (
      <li>
         <div className={styles.containerCart}>
            <div className={styles.divImage}>
            <img src={product.img} alt={product.name} />
            </div>
            <div className={styles.itemCart}>
            <h3 className="Heading2">{product.name}</h3>
            <h4 className="HeadingColorGreen">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</h4>
            </div>
         </div>
         <button aria-label="delete" title="Remover item" onClick={() => removeCart(product.id)}>
            <MdDelete size={27} />
         </button>
      </li>
   );
};
