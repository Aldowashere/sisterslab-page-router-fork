import classNames from "classnames";
import { useRouter } from "next/router";
import React from "react";
import Skeleton from "./skeleton";

function CardInfo({image , name ,status ,id ,loading , theme ,gender}) {
    const router = useRouter()
if(loading === true){
    return <Skeleton/>
}
  return ( 
  
  <div className={classNames("relative border border-spacing-9 rounded-lg w-[20rem] h-[35rem]  flex flex-col items-start gap-3 px-2 py-2",{
    "bg-slate-950 text-slate-300" : theme === "dark",
    "bg-gray-500 text-white": theme === "light",
  })} >
        <img
          src={image}
          alt="ssss"
          className="rounded-lg"
          width={350}
          height={70}
        />    
      <div className="font-bold text-[1.5rem]">{name}</div>
      <div className="font-bold text-[1.5rem]">{gender}</div>
      <div className="font-bold text-[1.5rem]">{status}</div>
      
      <button 
      onClick={()=> router.push(`/caracters/${id}`) } 
     
       className="absolute bottom-0 px-3 py-2 mb-2 w-[12rem] rounded-md bg-cyan-950 hover:w-[19rem] transition-all duration-500 font-semibold"
      
      > Get Details </button>
  </div>);
}

export default CardInfo;
