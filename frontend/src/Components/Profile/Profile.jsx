import React from 'react'
import {useSelector} from "react-redux";
function Profile() {
    const user = useSelector((state)=>state.user.user);
  return (
    <div>
        <div></div>
    </div>
  )
}

export default Profile