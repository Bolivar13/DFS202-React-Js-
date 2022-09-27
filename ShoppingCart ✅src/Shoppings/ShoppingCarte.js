import ShopingCarteItem from "./ShopingCarteItem";

function ShoppingCarte({ productInCart, onProductRemove }) {

    return (
        <div className="shoppingContainer">
            <h1 className="h1">Shopping card :</h1>
            <hr/>
            {
                productInCart.map((p, index) => (
                    <ShopingCarteItem key={index}
                        product={p}
                        onProductRemove={onProductRemove} />
                )

                )
            }


        </div>
    );
}

export default ShoppingCarte;