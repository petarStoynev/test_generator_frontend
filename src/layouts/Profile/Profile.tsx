import axios from "axios";
import { profile } from "console";
import { useEffect, useState } from "react";
import ProfileModel from "../../models/ProfileModel";
import { getCurrentUser, parseJwt } from "../services/auth-service"
import { ProfileBanner } from "./ProfileSection";
import './styles/profile.css'

export const Profile = () =>{

    const[email,setEmail] = useState(getUserEmail);

    const[profile,setProfile] =useState ({
        firstname:'',
        lastname:'',
        email:''
    });


    let URL = `http://localhost:8080/auth/profile/email=${email}`;

    useEffect(()=>{

        
    function getProfileInfo(){

        axios.get(URL)
        .then((response) => {
            const responseData = response.data;
            
          const profileDTO : ProfileModel = new ProfileModel(responseData.firstname,responseData.lastname,responseData.email);

            setProfile(profileDTO);

            
        })
    }

        getProfileInfo();

    },[URL])
    

    function getUserEmail(){
        let user: any = getCurrentUser();

        let decodedJWT = parseJwt(user);

        return decodedJWT.sub;

    }


    
    return(
        <div className="profile-banner">

            <ProfileBanner profile={profile}/>

        </div>
    )
}