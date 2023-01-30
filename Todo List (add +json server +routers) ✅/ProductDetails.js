import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    product && (
      <>
        <h1>{product.title}</h1>
        <p>Prix : {product.price} DH</p>
      </>
    )
  );
}

export default ProductDetails;
