import axios from "axios";

const URL = 'http://localhost:8080/auth';

export const register = (firstname: string,lastname:string ,email:string, password:string) =>{
    return axios.post(URL + '/register',{
        firstname,
        lastname,
        email,
        password
    });
};

export const login = (email:string, password:string) =>{
    return axios
    .post(URL + '/authenticate',{
        email,
        password
    })
    .then((response) =>{


        

        if(response.data.token){
            
            localStorage.setItem('user', JSON.stringify(response.data.token));
        }

        

        return response.data;
    });
};

export const logout = () =>{
    localStorage.removeItem('user');
};

export const getCurrentUser = () => {
    const userStr = localStorage.getItem('user');
    if(userStr) return JSON.parse(userStr);

    return null;
}


export const parseJwt = (token:any) => {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}

export const isLogged = () => {
    const user = localStorage.getItem('user');

    if(user){
        return true;
    }else{
        return false;
    }

}