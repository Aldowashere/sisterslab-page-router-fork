export default function Skeleton () {
 return (<div className={"relative border border-spacing-9 rounded-lg w-[20rem] h-[35rem]  flex flex-col items-start gap-3 px-2 py-2 bg-gray-500  text-white animate-pulse "  } >
                  <div  className="rounded-lg  w-full h-[15rem] bg-gray-400"/>    
                  <div className="font-bold text-[1.5rem] w-full max-w-[12rem] h-[2rem] rounded-lg bg-gray-400 "/>
                  <div className="font-bold text-[1.5rem] w-full max-w-[7rem] h-[1.4rem] rounded-lg bg-gray-400 "/>
                  <div className="font-bold text-[1.5rem] w-full max-w-[7rem] h-[1.4rem] rounded-lg bg-gray-400 "/>
                 <button className="absolute bottom-0 px-3 py-2 mb-2 w-[12rem] rounded-md bg-cyan-950 hover:w-[19rem] min-h-[2rem] transition-all duration-500 font-semibold"   > </button>
              </div>)
}