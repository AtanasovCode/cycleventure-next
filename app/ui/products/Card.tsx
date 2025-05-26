import { useRouter } from "next/navigation";
import clsx from "clsx";
import { ProductTypes } from "@/app/types/product-types";
import ProductPrice from "@/app/ui/ProductPrice";
import Image from "next/image";

type CardType = {
    product: ProductTypes;
}

export default function Card({ product }: CardType) {

    const router = useRouter();

    const handleClick = () => {
        const formattedName = product.name?.toLowerCase().replace(/ /g, '-');
        router.push(`/product-preview?name=${formattedName}&id=${product.id}`);
    }

    return (
        <div
            className="flex flex-col items-start justify-center cursor-pointer"
            onClick={() => handleClick()}
        >
            <Image
                src={product.photos[0]}
                alt={`Photo of bike: ${product.name}, bike brand: ${product.brand}`}
                width={1920}
                height={1440}
            />
            <div className="flex flex-col items-start justify-center gap-2">
                <div className="flex items-center justify-start gap-2">
                    <div className={clsx(
                        "text-[.64rem] p-1 bg-accent uppercase rounded-md text-black",
                        {
                            "hidden": !product.isOnSale,
                            "inline-block": product.isOnSale
                        }
                    )}>
                        SALE
                    </div>
                    <h1 className="font-bold text-xl text-center">{product.name}</h1>
                </div>
                <div className="text-sm">
                    <ProductPrice product={product} />
                </div>
            </div>
        </div>
    );
}