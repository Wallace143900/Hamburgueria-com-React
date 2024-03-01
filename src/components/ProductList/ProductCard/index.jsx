import styles from "./styles.module.scss"

export const ProductCard = ({ product, add, setAdd }) => {

    const addToCart = (product) => {
        const item = add.find(el => el.id === product.id)

        if(!item){
            setAdd([...add, product]);
        }
     }

    return(
        <li className={styles.productList}>
            <img src={product.img} alt={product.name} />
            <div>
                <h3 className="Heading2">{product.name}</h3>
                <span className="Heading">{product.category}</span>
                <span className="HeadingColorGreen">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="buttonMedium1" onClick={() => addToCart(product)}>Adicionar</button>
            </div>
        </li>
    )
}