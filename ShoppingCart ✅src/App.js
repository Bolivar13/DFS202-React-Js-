import { useState } from 'react';
import './App.css';
import ProduitList from './Shoppings/ProduitList';
import ShoppingCarte from './Shoppings/ShoppingCarte'
//import Counter from './couter';
//import LanguageList from './LanguageList';


function App() {

  const [products, setProducts] = useState([
    { id: 1, title: "product1", isInCart: false },
    { id: 2, title: "product2", isInCart: false },
    { id: 3, title: "product3", isInCart: false },
    { id: 4, title: "product4", isInCart: false },
    { id: 5, title: "product5", isInCart: false },
    { id: 6, title: "product6", isInCart: false },]
  )


  const [productInCart, setProductInCart] = useState([])

  const onAdd = (e) => {
    setProductInCart([...productInCart, e])
    const newArray = products.map(p => {
      if (p.id === e.id) {
        p.isInCart = e.isInCart
      }
      return p
    })
    setProducts(newArray)
  }

  const onRemove = (productToDelete) => {
    const newProductInCart = productInCart.filter(p => p.id !== productToDelete.id)
    setProductInCart(newProductInCart)
    products.forEach(p => {
      if (p.id === productToDelete.id)
        p.isInCart = false
    });
  }



  return (
    <div className='container'>
      <ProduitList products={products} onProductAdd={onAdd} onProductRemove={onRemove} />
      <ShoppingCarte productInCart={productInCart} onProductRemove={onRemove} />

    </div>
  );
}

export default App;
