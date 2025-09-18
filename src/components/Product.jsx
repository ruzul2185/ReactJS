const Product = ({ title, description, category, price }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{category}</p>
      <p>{price}</p>
    </div>
  );
};

export default Product;
