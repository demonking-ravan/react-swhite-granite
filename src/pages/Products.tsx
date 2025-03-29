import { useState } from "react";
import productsData from "../data/products.json";
import ProductCard from "../components/ProductCard";

type collection = "colored" | "white";

type Product = {
    id: number,
    name: string,
    imgUrl: string,
    description?: string | null,
    collection: collection
}

export default function Products() {
    const [products] = useState<Product[]>(productsData as Product[]);
    const [selectedCollection, setSelectedCollection] = useState<collection | null>(null);

    const filteredProducts = selectedCollection 
        ? products.filter(product => product.collection === selectedCollection) 
        : products;

    return (
        <>
            <section>
                <div className="sec_container">
                    <div className="grid-main">
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
                <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6 mb-16">
                    <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6">
                        <button  className="px-5 block py-2 bg-[#eaeff2] hover:bg-[#d4dae0] rounded-sm sm:mr-7" onClick={() => setSelectedCollection("white")}>White</button>
                        <button  className="px-5 block py-2 bg-[#eaeff2] hover:bg-[#d4dae0] rounded-sm" onClick={() => setSelectedCollection("colored")}>Colored</button>
                    </div>
                    <button className="px-5 py-2 w-max bg-primary hover:bg-[#0e412b] rounded-sm text-white" onClick={() => setSelectedCollection(null)}>All Products</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 justify-start w-full">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} id={product.id} name={product.name} imgUrl={product.imgUrl} description={product.description ? product.description : null} />
                    ))}
                </div>
            </section>
        </>
    )
}
