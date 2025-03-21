import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductInterface from "./interface/product";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductInterface | null>(null);

    useEffect(() => {
        fetchProduct();
    }, [id]);

    const fetchProduct = async (): Promise<void> => {
        const response = await fetch(`http://localhost:8080/products/${id}`, { method: "GET" });
        const productData: ProductInterface = await response.json();

        setProduct(productData);
    }

    return (
        <>
            <h1>Show Individual Product</h1>
            <p>{product === null ? "loading..." : product?.title}</p>
        </>
    );
}

export default Product;