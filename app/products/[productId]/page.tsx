'use client';

import { fetchProductById } from "@/api/product.api";
import Header from "@/app/_components/Header";
import { Product } from "@/schema/product.schema";
import { useEffect, useState } from "react";

interface Props {
    params: {
        productId: string;
    };
}

function ProductDetail({ params }: Props) {
    const { productId } = params;
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const data = await fetchProductById(Number(productId));
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        if (productId) {
        getProduct();
        }
    }, [productId]);

    if (!product) {
        return <p>Loading...</p>;
    }

return (
    <div>
        <Header />
        <div className="flex flex-col md:flex-row items-center justify-center p-4">
            <div className="md:w-1/2 w-full flex justify-center mb-4 md:mb-0">
                <img
                    src={product.imgSrc}
                    alt={product.name}
                    className="w-full h-auto object-cover max-w-md"
                />
            </div>
            <div className="md:w-1/2 w-full md:pl-8">
                <h2 className="text-xl font-bold mb-3  border-b border-gray-500  ">
                    <span className="font-semibold">{product.brand.nameKr}</span>{" / "}
                    <span className="font-semibold">{product.brand.nameEn}</span>
                </h2>
                <p className="text-lg mb-4">{product.name}</p>
                <p className="text-red-500 line-through mb-2">
                        정가: ￦{product.originalPrice.toLocaleString()}원
                </p>
                <p className="text-lg font-bold mb-4">
                        판매가: ￦{product.price.toLocaleString()}원
                </p>
                <p className="text-lg mb-4">
                    배송: {product.deliveryType}
                </p>
                <p className="text-lg mb-4">
                    잔여재고: {product.onlineStock}
                </p>
                <button className="bg-black text-white font-semibold py-2 px-8 rounded hover:scale-110 ">
                    장바구니 담기
                </button>
            </div>
        </div>
    </div>

);
}

export default ProductDetail;
