import {createContext} from "react"

const UserContext = createContext(
    //holds global data- Objects...
    {
        loggedInUser: "Default User"
    }
);

export default UserContext;