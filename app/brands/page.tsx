
import React from 'react'
import Header from '../_components/Header';
import { fetchBrand, fetchBrands } from '@/api/brands.api';
import Link from 'next/link';
import { fetchProducts } from '@/api/product.api';

async function BrandsPage(props) {
  const brands = await fetchBrands();
  const brandId = props.searchParams.brandId;

  let products = [];
  if(!!brandId){
    const brand = await fetchBrand(brandId);
    products = brand.products;
  }else{
    products = await fetchProducts();
  }
  console.log(123,props);
  return (
    <div>
      <Header/>

      <main>
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Brands</h2>
          <Link href={"/brands"}>
            <h3 className="text-xl mb-6 text-center">ALL</h3>
          </Link>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
            {brands.map((brand) => (
              <Link href={`/brands?brandId=${brand.id}`} key={brand.id}>
              <div  className="p-2 hover:shadow-lg transition-shadow">
                <p className="text-center">{brand.nameKr}</p>
              </div>
              </Link>
            ))}
          </div>
        </div>

        <ul className="flex flex-wrap justify-center">
          {products.map((product) => (
            <li key={product.id} className="w-1/2 xl:w-1/6 lg:w-1/4 md:w-1/3 sm:w-1/2 p-2">
            <Link href={`/products/${product.id}`}>
                <img src={product.imgSrc} alt={product.name} className="w-full h-auto transition-transform  hover:scale-110" />
              </Link>
            <h3 className="font-bold pt-4 text-black">{product.brand.nameEn}</h3>
            <h4>{product.name}</h4>
            <p>
              <strong className="line-through text-red-500">
                {product.originalPrice.toLocaleString()}원
              </strong> {" "}
              {product.price.toLocaleString()}원
            </p>
          </li>
          ))}
        </ul>

      </main>
    </div>
  )
}

export default BrandsPage