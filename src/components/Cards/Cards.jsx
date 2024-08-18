import styles from "./Cards.module.css";

export default function Cards({ products }) {
   return (
      <div className={styles.container}>
         {products.map((product) => {
            return (
               <div key={product.id} className={styles.card}>
                  <h2>{product.name}</h2>
                  <p>{product.category}</p>
                  <img src={product.thumbnail} alt={product.name} />

                  {/* IF inStock === true show price */}
                  {product.inStock && (
                     <div className={styles.price}>${product.price}</div>
                  )}

                  {/* IF inStock === false show this div instead */}
                  {!product.inStock && (
                     <div className={styles.price}>OUT OF STOCK</div>
                  )}
               </div>
            );
         })}
      </div>
   );
}
