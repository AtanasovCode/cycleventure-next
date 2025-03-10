import Link from "next/link";

export default function ViewCartButton() {
    return (
        <Link
            href="/my-cart"
            className="w-full text-center cursor-pointer bg-accent text-black p-2 rounded-md"
        >
            View Cart
        </Link>
    );
}