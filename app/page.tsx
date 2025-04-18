import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-8 pt-32">
        <p className="text-xl text-center max-w-md">
          Im Yahinniel and this is my first project with{" "}
          <strong className="text-blue-500">Next.js</strong> deployed
        </p>

        <h1 className="text-4xl font-bold text-center text-white">
          Welcome to the First Steps App!!!
        </h1>

        <Link href="/about">
          <button className="mt-4 px-6 py-2 text-lg bg-amber-300 text-black font-semibold rounded-lg hover:bg-amber-400 transition">
            About Page
          </button>
        </Link>
      </main>
    </div>
  );
}
