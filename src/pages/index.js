import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white flex flex-col items-center justify-center h-screen" >
         <nav className="flex flex-col items-center mt-10 ">  
          <Link href="/characters"> Click Me </Link>
         </nav>
    </main>
  )
}
