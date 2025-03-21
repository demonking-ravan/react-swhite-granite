type Product = {
    id: number,
    name: string,
    imgUrl: string,
    description?: string | null,
}

export default function ProductCard({id, name, imgUrl, description}: Product) {
    return (
        <div data-productId={`${id}`} className="text-main-dark font-semibold text-sm flex flex-col gap-2 cursor-pointer">
            <img 
                alt="Color Image" loading="lazy" width="400" height="400" decoding="async" data-nimg="1" 
                className="max-w-[295px] w-full max-h-[295px] vsm:max-w-none vsm:max-h-none h-full shadow-[0px_4px_8px_0px_rgba(10,10,10,0.16)] object-cover" 
                src={imgUrl} />
            <p className="border-b pb-[10px]">
                {name}
            </p>
            {description && <p className="text-[#0a0a0ab3] font-se italic font-light">{description}</p>}
        </div>
    )
}
