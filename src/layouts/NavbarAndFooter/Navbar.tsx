import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { isLogged } from "../services/auth-service";
import './nav.css'; 

export const Navbar = () => {

    const handleLogout = () =>{
        if(isLogged()){
            localStorage.removeItem('user');
        }
        navigate('/');
      }

      const user = useContext(UserContext);
      const navigate = useNavigate();
      

    return(
        <nav>
            {user.email != '' ?(
                 <ul>
                 <li>
                     <a href="/">Home</a>
                 </li>

                 <li>
                     <a href="/questions">Questions</a>
                 </li>

                 <li>
                     <a href="/generator">Generator</a>
                 </li>

                 <li>
                     <a href="/profile">Profile</a>
                 </li>

                 <li>
                     <a href="" onClick={handleLogout}>Logout</a>
                 </li>

             </ul>
            ): (
                <ul>

                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="/register">Register</a>
                    </li>

                    <li>
                        <a href="/login">Login</a>
                    </li>

                    </ul>
            )}
                </nav>
    )
}