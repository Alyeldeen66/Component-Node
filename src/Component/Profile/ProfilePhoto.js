import React from 'react';
import './ProfilePhoto.css';
import img from "./WhatsApp Image 2022-02-12 at 9.29.48 AM.jpeg"
const ProfilePhoto = () =>{
    return(
        <div className='photo'>
            <img style={{width:300,height:400}}src={img} alt=""></img>
        </div>
    );
};
export default ProfilePhoto;