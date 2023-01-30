import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductCreate() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onPriceChange = (e) => {
    setPrice(e.target.value);
  };
  
  const onFormSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/products", {
      method: "POST",
      body: JSON.stringify({ title, price }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/products");
      });
  };
  return (
    <>
      <h1>Nouveau Produit</h1>
      <form onSubmit={onFormSubmit}>
        <input value={title} onChange={onTitleChange} /> <br />
        <input value={price} onChange={onPriceChange} type="number" /> <br />
        <input type="submit" value="Créer" />
      </form>
    </>
  );
}

export default ProductCreate;
