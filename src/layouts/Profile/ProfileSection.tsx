import ProfileModel from "../../models/ProfileModel"

export const ProfileBanner:React.FC<{profile: ProfileModel}> = (props) => {

    return(
        <div className="profile_banner">

            <label id="prof-info" >Profile Info</label>
            <label>{props.profile.firstname}</label>
            
            <label >{props.profile.lastname}</label>
            
            <label >{props.profile.email}</label>
        </div>
    )
}