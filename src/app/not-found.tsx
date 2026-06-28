import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-black text-white">
            <div className="text-center">
                <h1 className="text-8xl font-black">404</h1>

                <p className="mt-6 text-zinc-400">
                    The page you're looking for doesn't exist.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3"
                >
                    Back Home
                </Link>
            </div>
        </main>
    );
}