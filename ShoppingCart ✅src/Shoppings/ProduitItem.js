function ProduitItem({ product, onProductAdd, onProductRemove }) {

    const newProduct = {
        id: product.id,
        title: product.title,
        isInCart: true,
    }

    return (
        <div className="itemContainer">
            {product.title}
            {product.isInCart === false
                ? <button onClick={() => onProductAdd(newProduct)} className="btnAdd">Add to card</button>
                : <button onClick={() => onProductRemove(product)} className="btnDelete">Delete </button>
            }
        </div>
    );
}

export default ProduitItem;
