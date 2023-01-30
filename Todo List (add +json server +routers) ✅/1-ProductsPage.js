import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
function ProductsPage() {
 const [products, setProducts] = useState([]);
  useEffect(() => {fetch(" http://localhost:5000/products")
    .then((res) => res.json()).then((data) => {setProducts(data);});
},[]);

const onClickDelete = (e) => {
  onDelete(todo.id);
};
  
  return (
    <>
      <h1>Products Page</h1>
      <Link to="/products/create">Nouveau Produit</Link>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Titre</th>
            <th>Prix</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>
                <Link to={`/products/${p.id}`}>{p.title}</Link>
              </td>
              <td>{p.price}</td>
              
              <td>
                <button onClick={onClickDelete} >x</button>
              </td>

             </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductsPage;
