function ShopingCarteItem({ product, onProductRemove }) {

    return (
        <div className="itemContainer">
            {product.title}
            <button onClick={() => onProductRemove(product)} className="btnDelete">Delete product</button>
        </div>
    );
}

export default ShopingCarteItem;