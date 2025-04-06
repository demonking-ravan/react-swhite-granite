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
                <button className="group relative">
                    <span className="flex items-center border-[0.8px] w-max px-2">
                        <svg className="mr-4.5" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px">
                            <path d="M16 120h480v48H16zm80 112h320v48H96zm96 112h128v48H192z"></path>
                        </svg>
                        <span>
                            Filter
                        </span>
                        <svg className="ml-1.5" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px">
                            <path fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="m112 184 144 144 144-144"></path>
                        </svg>
                    </span>
                    <div className="hidden absolute group-hover:block top-full w-fit py-6 filter-dropdown">
                        <div className="px-4 flex flex-col gap-3 z-30 relative">
                            <button  className="px-5 block py-2 bg-[#eaeff2] hover:bg-[#d4dae0] rounded-sm" onClick={() => setSelectedCollection("white")}>White</button>
                            <button  className="px-5 block py-2 bg-[#eaeff2] hover:bg-[#d4dae0] rounded-sm" onClick={() => setSelectedCollection("colored")}>Colored</button>
                            <button className="px-5 py-2 w-max bg-primary hover:bg-[#0e412b] rounded-sm text-white" onClick={() => setSelectedCollection(null)}>All Products</button>
                        </div>
                    </div>
                </button>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 justify-start w-full mt-16">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} id={product.id} name={product.name} imgUrl={product.imgUrl} description={product.description ? product.description : null} />
                    ))}
                </div>
            </section>
        </>
    )
}
