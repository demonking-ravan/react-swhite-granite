import { useState } from "react";
import productsData from "../data/products.json";
import ProductCard from "../components/ProductCard";

type Product = {
    id: number,
    name: string,
    imgUrl: string,
    description?: string | null,
}


export default function Products() {
    const [products, setProducts] = useState<Product[]>(productsData);

    return (
        <>
            <section>
                <div data-v-56f59047="" className="animate-it animation-trigger">
                    <div className="grid-main sec_container">
                        <div className="col-span-12 lg:col-span-9 text-block">
                            <div className="richtext">
                                <h1 className="font-serif">Explore a Spectrum of Stunning Colors</h1>
                                <blockquote>Designed to withstand the test of time. Crafted from premium materials, durable, resilient, and low-maintenance, ideal for high-traffic areas and everyday use.</blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec_container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 items-baseline justify-start w-full">
                    {products.map((product) => (
                        <ProductCard key={product.id} id={product.id} name={product.name} imgUrl={product.imgUrl} description={product.description ? product.description : null} />
                    ))}
                </div>
            </section>
        </>
    )
}
