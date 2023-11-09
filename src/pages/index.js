import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white" >
         <nav className="flex items-center mt-10 ">  
          <Link href="/caracters"> Rick-And-Morty </Link>
         </nav>
    </main>
  )
}
