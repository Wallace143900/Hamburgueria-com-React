import { ProductCard } from "./ProductCard";
import styles from "./styles.module.scss";

export const ProductList = ({ productList, add, setAdd }) => {
   return (
      <ul className={styles.ulBurguer}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} add={add} setAdd={setAdd} />
            
         ))}
      </ul>
   );
};
