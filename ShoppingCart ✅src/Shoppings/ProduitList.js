import ProduitItem from "./ProduitItem";
function ProduitList({ products, onProductAdd, onProductRemove }) {

    return (
        <div className="productContainer">
            <h1 className="h1">List of Products :</h1>
            <hr/>
            {
                products ? products.map(p => (
                    <ProduitItem key={p.id}
                        product={p}
                        onProductAdd={onProductAdd}
                        onProductRemove={onProductRemove} />
                )

                ) : "no post"
            }


        </div>
    );
}

export default ProduitList;