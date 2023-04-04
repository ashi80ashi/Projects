import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl";

export const AppContext = createContext();

export function AppContextProvider({children}){
    
    const[loading,setloading]= useState(false);
    const[posts ,setposts] = useState([]);
    const [page,setpage] = useState(1);
    const [totalPages,settotalPages] = useState(null);

    async function fetchBLogPost(page=1){
        setloading(true);
        let url = `${baseUrl}?page=${page}`
        try {
        const result = await fetch(url);
        const data = await result.json();
        setpage(data.page);
        setposts(data.posts);
        settotalPages(data.totalPages);
        } catch (error) {
            console.error("unable to fetch data ");
            setpage(1);
            setposts([]);
            settotalPages(null);
        }
        setloading(false);
    }

    function handelpagechang(page) {
        setpage(page);
        fetchBLogPost(page);
    }


    const value ={
        loading,
        setloading,
        posts,
        setposts,
        page,
        setpage,
        totalPages,
        settotalPages,
        handelpagechang,
        fetchBLogPost
    };

    return <AppContext.Provider value={value}>
               {children}
           </AppContext.Provider>
}