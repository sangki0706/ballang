
import Link from "next/link";
import Header from "./_components/Header";
import { fetchProducts } from "@/api/product.api";



async function HomePage() {
  const products = await fetchProducts()

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="font-bold text-3xl pt-2">Trending</h2>

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
  );
}
export default HomePage;
