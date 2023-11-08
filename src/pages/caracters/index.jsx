import { useState, useEffect } from "react";
import { fetchCharacterWithSearch, fetchDataFilm } from "../api/rickandmorty";
import { useRouter } from "next/router";
import ClassNames from "classnames";
import useTheme from "@/components/themprovider";
import classNames from "classnames";
import Skeleton from "@/components/Skeleton";
import CardInfo from "@/components/CardInfo";

export default function Caracters() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [searchBy, setSearchBy] = useState("name");

  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useTheme();

  const fetchCharacterData = () => {
    setLoading(true);
    const fetchFunction = searchText ? fetchCharacterWithSearch : fetchDataFilm;

    fetchFunction(searchText, searchBy)
      .then((charactersList) => {
        setData(charactersList);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setTimeout(()=>{
        setLoading(false)
      },1500));
  };
  useEffect(() => {
    fetchCharacterData();
    const fetcdata = async () => {
      const responseData = await fetchDataFilm();
      setData(responseData);
    };
    fetcdata();
  }, []);

  const changeTheme = () => {
    if (typeof window !== "undefined") {
      const newTheme = theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", JSON.stringify(newTheme));
      setTheme(newTheme);
    }
  };

  const dataFilter = searchText
    ? data.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : data;
  return (
    <div
      className={classNames("w-full flex items-center  flex-col min-h-screen", {
        "bg-black/50 text-white": theme === "dark",
        "bg-white text-black": theme === "light",
      })}
    >
      <div className="flex w-full">
        <select
          className="bg-transparent outline-none border-2 px-4 py-2 my-[2rem] mx-3 w-[8rem] "
          value={searchBy}
          onChange={(e) => setSearchBy(e.target.value)}
        >
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
        <button
          onClick={fetchCharacterData}
          className="bg-transparent outline-none border-2 px-4 py-2 my-[2rem] mx-3 w-[8rem] "
        >
          Search{" "}
        </button>
        <button onClick={changeTheme}> setTheme</button>
      </div>

      <div className="w-full flex gap-2 flex-wrap items-center justify-center ">
        {dataFilter &&
          dataFilter.map((item) => (
            <CardInfo
              key={item.id}
              image={item.image}
              name={item.name}
              status={item.status}
              id={item.id}
              loading={loading}
              theme={theme}
            />
          ))}
      </div>
    </div>
  );
}
