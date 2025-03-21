import { JSX, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductInterface from "./interface/product";

const Products = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<ProductInterface[] | null>(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async (): Promise<void> => {
        const response = await fetch("http://localhost:8080/products", { method: "GET" });
        const productsData: ProductInterface[] = await response.json();

        setProducts(productsData);
    }

    const productToTSX = (product: ProductInterface): JSX.Element => {
        return (
            <div key={product["id"]} style={{ border: "1px solid black", padding: "5px" }}>
                <div style={{ backgroundImage: `url(${product["image"]})`, width: "100px", height: "100px", backgroundSize: "cover" }}></div>
                <h2>{product["title"]}</h2>
                <p>{product["price"]}</p>
                <p>{product["description"]}</p>
                <p>{product["category"]}</p>
                <button onClick={() => {
                    navigate(`/products/${product["id"]}`);
                }}>Detail</button>
            </div>
        );
    }

    return (
        <>
            <h1>Our Products</h1>
            <div>
                {products ? products.map((product) => {
                    return productToTSX(product);
                }) : <p>Loading...</p>}
            </div>
        </>
    );
}

export default Products;