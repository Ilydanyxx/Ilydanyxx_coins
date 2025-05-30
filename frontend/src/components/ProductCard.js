function ProductCard({ product }) {
    return (
      <div className="product-card">
        <img src={product.imageUrl} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <strong>${product.price}</strong>
      </div>
    );
  }
  
  export default ProductCard;
  