import { useEffect, useState } from "react";
import Product from "../components/Product";
import { useSearchParams, NavLink } from "react-router";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [total, setTotal] = useState(0);
  let [searchParams, setSearchParams] = useSearchParams();

  let skip = Number(searchParams.get("skip")) || 0;
  let limit = Number(searchParams.get("limit")) || 10;

  //   const [skip, setSkip] = useState(0);
  //   const [limit, setLimit] = useState(10);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?skip=${skip}&limit=${limit}`
      );
      const parsedData = await response.json();
      //   console.log(parsedData);
      setProducts(parsedData.products);
      setTotal(parsedData.total);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [skip, limit]);

  return (
    <div>
      <h1>Comment</h1>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {!loading && (
        <div>
          <div>
            {products.length > 0 &&
              products.map((item) => (
                <Product
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  price={item.price}
                />
              ))}
          </div>
          {skip > 0 && (
            <NavLink to={`/products?skip=${skip - limit}&limit=${limit}`}>
              Back
            </NavLink>
          )}
          {skip < total - limit && (
            <NavLink to={`/products?skip=${skip + limit}&limit=${limit}`}>
              Next
            </NavLink>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
