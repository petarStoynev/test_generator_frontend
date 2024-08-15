import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { login } from "../services/auth-service";
import './style/login-page.css'

export const LoginPage = () => {

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const user = useContext(UserContext);
    const navigate = useNavigate();


    

    function emailChange(e:any){
        e.preventDefault();
        setEmail(e.target.value);
    }

    function passwordChange(e:any){
        e.preventDefault();
        setPassword(e.target.value);
    }

    const handleLogin = (e:any) => {
        
        e.preventDefault();
        login(email,password);
        user.setEmail(email);
        navigate('/');
    
    }



    return(
        <section className="login-sec">

        <div className="login-div">
            <form onSubmit={handleLogin}>

                <label htmlFor="">Email:</label>
                <input type="text" id="login-input-email" onChange={emailChange}/>

                <br />

                <label htmlFor="">Password:</label>
                <input type="password" onChange={passwordChange} />

                <button className="button-30" role="button" type="submit">Login</button>
                

            </form>
        </div>
        </section>

    )


}