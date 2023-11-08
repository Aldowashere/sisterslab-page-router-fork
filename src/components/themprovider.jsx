import { useEffect, useState } from "react";

export default function useTheme (initalTheme = "dark"){
    const [theme, setTheme] = useState(initalTheme);
    useEffect(() => {    
        if (typeof window !== 'undefined') {
          const storedTheme = JSON.parse(localStorage.getItem('theme'));
          if (storedTheme) {
            setTheme(storedTheme);
          }
        }
       }, []);
       
      
    
      return [theme, setTheme];
}