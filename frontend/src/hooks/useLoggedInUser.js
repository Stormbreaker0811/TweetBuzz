import { useEffect,useState } from "react";
import { useUserAuth } from "./UserAuthContext"
import axios from "axios";


const useLoggedInUser = () => {
    const { user } = useUserAuth();

    axios.defaults.baseURL = "http://localhost:5000";

    const email = user?.email;

    const [loggedInUser, setLoggedInUser] = useState({});

    useEffect(() => {
        axios.get("/loggedInUser",{
            params: {email : email}
        }).then((res) => {
            if(res.status === 200){
                setLoggedInUser(res.data);
            }
        })
    },[email,loggedInUser])

    return [loggedInUser, setLoggedInUser]
}

export default useLoggedInUser;