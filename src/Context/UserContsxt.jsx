import { createContext ,useEffect,useState } from "react";


export let UserContext =createContext();

export default function UserConteextProvider({children}){

    const [userLogin, setuserLogin] = useState(null)

    useEffect(() => {
      if (localStorage.getItem('userToken')!== null) {
        setuserLogin(localStorage.getItem('userToken'))
      }
    
      return () => {
        
      }
    }, [])
    

    return  <UserContext.Provider value={{userLogin , setuserLogin}}>

{children}

    </UserContext.Provider> 

}