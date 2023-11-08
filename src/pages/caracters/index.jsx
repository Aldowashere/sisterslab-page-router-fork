import { useState, useEffect } from "react";
import { fetchCharacterWithSearch, fetchDataFilm } from "../api/rickandmorty";
import { useRouter } from "next/router";

export default function Caracters () {
    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState([]);
    const [searchBy, setSearchBy] = useState('name');
    const router = useRouter()
  const [loading , setLoading ] = useState(false)
    useEffect(() => {
    
        const fetcdata = async () => {
          const responseData = await fetchDataFilm();
          setData(responseData);
        };
        fetcdata();
      }, []);
      const fetchCharacterData = () => {
        setLoading(true);
        const fetchFunction = searchText
          ? fetchCharacterWithSearch
          : fetchDataFilm;
    
        fetchFunction(searchText, searchBy)
          .then((charactersList) => {
            setData(charactersList);
          })
          .catch((error) => {
           console.log(error)
          })
          .finally(() => setLoading(false));
      };
      useEffect(() => {
        fetchCharacterData();
    
      }, []);
    
      const dataFilter = searchText ? data.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) ) : data;
    return(
        <div className="w-full flex items-center flex-col bg-slate-950 text-white min-h-screen">
      <div className="flex w-full">
      <select className="bg-transparent outline-none border-2 px-4 py-2 my-[2rem] mx-3 w-[8rem] " value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
        <option value="name"> Name</option>
        <option value="status">Status</option>
        <option value="species">Species</option>
       </select>
        <input
          className="bg-transparent outline-none border-2 px-4 py-2 my-[2rem] mx-3 w-[95%]"
          placeholder="Search Character"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={fetchCharacterData} className="bg-transparent outline-none border-2 px-4 py-2 my-[2rem] mx-3 w-[8rem] ">Search </button>
      </div>
        <div className="w-full flex gap-2 flex-wrap items-center justify-center ">
          {dataFilter &&
            dataFilter.map((item) => (
          <div className="relative border border-spacing-9 rounded-lg w-[20rem] h-[30rem] bg-gray-950 flex flex-col items-start gap-3 px-2 py-2" key={item.id}>
                <img
                  src={item.image}
                  alt="ssss"
                  className="rounded-lg"
                  width={350}
                  height={70}
                />    
              <div className="font-bold text-[1.5rem]">{item.name}</div>
              <div className="font-bold text-[1.5rem]">{item.status}</div>
            
              <button 
              onClick={()=> router.push(`/caracters/${item.id}`) } 
             
               className="absolute bottom-0 px-3 py-2 mb-2 w-[12rem] rounded-md bg-cyan-950 hover:w-[19rem] transition-all duration-500 font-semibold"
              
              > Get Details </button>
          </div>
            ))}
        </div>
      </div>
    )
}