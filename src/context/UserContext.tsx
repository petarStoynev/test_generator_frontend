import { createContext } from "react";

type UserInfo = {
    email:string,
    setEmail : (e:string) => void;

}




export const UserContext = createContext<UserInfo>({
    email: '',
    setEmail: () =>{}
});