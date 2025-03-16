import { createContext, useState } from "react";
import { app, auth } from "../config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";


const UserContext = createContext();
 

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    onAuthStateChanged(auth, (UserConected) => {
        console.log(UserConected)
    })
    
    return (<UserContext value={{ user, setUser }}> {children} </UserContext>)
}

export { UserContext, UserProvider }