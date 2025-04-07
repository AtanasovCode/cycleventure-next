import Link from "next/link";

export default function MyCart() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-12">
            <h1 className="text-3xl font-bold">
                Page coming soon
            </h1>
            <Link href="/products" className="min-w-64 max-w-64 bg-accent p-2 text-black text-center">
                Back to products
            </Link>
        </div>
    );
}