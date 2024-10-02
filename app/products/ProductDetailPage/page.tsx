'use client';

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchProductById } from "@/api/product.api";
import { Product } from "@/schema/product.schema";


const ProductDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {

        if (typeof id === 'string') {
        fetchProductById(Number(id)).then((data) => {
            if (data) setProduct(data);
        });
        }
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <h2>{product.brand.nameEn}</h2>
            <img src={product.imgSrc} alt={product.name} className="w-full h-auto" />
            <p>Original Price: {product.originalPrice.toLocaleString()}원</p>
            <p>Price: {product.price.toLocaleString()}원</p>
        </div>
    );
};

export default ProductDetail;
