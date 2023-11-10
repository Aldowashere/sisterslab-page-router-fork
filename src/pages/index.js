import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white" >
         <nav className="flex items-center mt-10 ">  
          <Link href="/characters"> Rick-And-Morty </Link>
          <Link href={"/example"}> Example api  </Link>
         </nav>
    </main>
  )
}
